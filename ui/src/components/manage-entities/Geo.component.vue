<template>
    <div class="flex flex-row text-gray-600">
        <div class="w-2/3 flex flex-col p-4">
            <div>Define a location by selection on the map</div>
            <div class="flex flex-row flex-wrap space-x-4 py-1">
                <div>
                    <el-radio v-model="data.mode" label="box" @change="updateHandlers">
                        select region
                    </el-radio>
                </div>
                <div>
                    <el-radio v-model="data.mode" label="point" @change="updateHandlers">
                        select point
                    </el-radio>
                </div>
                <div>
                    <el-button @click="centerMap">
                        <i class="fa-solid fa-crosshairs"></i>&nbsp; center map
                    </el-button>
                </div>
                <div class="flex-grow"></div>
                <div v-if="data.mode === 'box'" class="pt-1 text-gray-700 text-sm">
                    Press the shift key and drag the mouse to select an area
                </div>
                <div v-if="data.mode === 'point'" class="pt-1 text-gray-700 text-sm">
                    Click on the map to select a point
                </div>
            </div>
            <div class="flex flex-col">
                <el-form
                    :model="data.form"
                    label-width="120px"
                    @submit.prevent.native="emitFeature"
                >
                    <el-form-item label="Location Name">
                        <el-input
                            v-model="data.locationName"
                            placeholder="Please provide a name for this location"
                        ></el-input>
                    </el-form-item>
                </el-form>
                <div id="map" class="map-style"></div>
            </div>
        </div>
        <div class="w-1/3 p-4">
            <div class="flex flex-col p-2">
                <div>Select existing location defined in the crate</div>
                <el-select
                    v-model="data.selectValue"
                    class="m-2"
                    placeholder="Select"
                    size="large"
                    @change="emitSelection"
                >
                    <el-option
                        v-for="entity in data.existingEntities"
                        :key="entity.id"
                        :label="entity.name"
                        :value="entity.id"
                    />
                </el-select>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
// import placesGeoJSON from "@/components/data/places.geojson";
// import countriesGeoJSON from "@/components/data/countries.geojson";
import SelectArea from "leaflet-area-select";
import Leaflet from "leaflet";
import { reactive, onMounted } from "vue";
import DataService from "./data.service.js";
const dataService = new DataService();

const emit = defineEmits(["create:object", "link:entity"]);

const data = reactive({
    mode: "box",
    form: undefined,
    locationName: undefined,
    map: undefined,
    showLocationSearchBox: false,
    selection: undefined,
    locations: [],
    layers: [],
    feature: undefined,
    existingEntities: [],
    selectValue: undefined,
});

onMounted(() => {
    init();
});

async function init() {
    await loadGeoDataInCrate();
    data.map = new Leaflet.map("map");
    centerMap();
    Leaflet.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}", {
        attribution:
            'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: "abcd",
        minZoom: 1,
        maxZoom: 16,
        ext: "jpg",
        noWrap: true,
    }).addTo(data.map);

    updateHandlers();
}

async function loadGeoDataInCrate() {
    let geoShape = await dataService.findEntity({
        limit: 5,
        etype: "GeoShape",
    });
    let geoCoordinates = await dataService.findEntity({
        limit: 5,
        etype: "GeoCoordinates",
    });
    data.existingEntities = [...geoShape.entities, ...geoCoordinates.entities];
}

function centerMap() {
    data.map.setView([0, 0], 0);
}

function querySearch(queryString, cb) {
    if (queryString.length < 4) return [];
    const re = new RegExp(queryString, "i");
    const matches = data.locations.filter((l) => l.properties.name.match(re));
    return cb(matches);
}

function removeExistingLayers() {
    data.layers.forEach((layer) => data.map.removeLayer(layer));
}

function addFeatureGroup(geoJSON) {
    const fg = Leaflet.featureGroup([Leaflet.geoJSON(geoJSON)]);
    fg.addTo(data.map);
    data.layers.push(fg);
    return fg;
}

function updateHandlers() {
    if (data.mode === "box") {
        data.map.off("click");
        data.map.selectArea.enable();
        data.map.selectArea.setShiftKey(true);
        data.map.on("areaselected", handleAreaSelect);
    } else {
        data.map.off("areaselected");
        data.map.on("click", handlePointSelect);
    }
}

function handleAreaSelect(e) {
    const bounds = e.bounds;
    const geoJSON = {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [bounds.getNorthEast().lng, bounds.getNorthEast().lat],
                    [bounds.getSouthEast().lng, bounds.getSouthEast().lat],
                    [bounds.getSouthWest().lng, bounds.getSouthWest().lat],
                    [bounds.getNorthWest().lng, bounds.getNorthWest().lat],
                ],
            ],
        },
    };
    removeExistingLayers();
    // addFeatureGroup(geoJSON);

    // const box = geoJSON.geometry.coordinates[0].map((p) => `${p[0]},${p[1]}`).join(" ");
    const entity = {
        "@type": "GeoShape",
        geojson: geoJSON,
    };
    data.feature = entity;
    emitFeature();
}

function handlePointSelect(e) {
    const latlng = data.map.mouseEventToLatLng(e.originalEvent);
    const geoJSON = {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [latlng.lng, latlng.lat],
        },
    };
    removeExistingLayers();
    // addFeatureGroup(geoJSON);

    const entity = {
        "@type": "GeoCoordinates",
        geojson: geoJSON,
    };
    data.feature = entity;
    emitFeature();
}

function emitFeature() {
    if (data.locationName && data.feature?.geojson) {
        data.feature["@id"] = `#${data.locationName.replace(/ /g, "_")}`;
        data.feature.name = data.locationName;
        data.feature.geojson = JSON.stringify(data.feature.geojson);
        emit("create:object", data.feature);
    } else {
        ElMessage({
            message: "You need to provide a name for this location",
            type: "warning",
        });
    }
}

function emitSelection(selection) {
    const entity = data.existingEntities.filter((e) => e.id === selection)[0];
    entity["@type"] = entity.etype;
    entity["@id"] = entity.id;
    emit("link:entity", { entity });
}
</script>

<style scoped>
.map-style {
    width: 100%;
    height: 500px;
}
</style>
