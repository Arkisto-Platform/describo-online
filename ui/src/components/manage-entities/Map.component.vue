<template>
    <div id="map" class="map-style"></div>
</template>

<script setup>
import Leaflet from "leaflet";
import DataService from "./data.service.js";
const dataService = new DataService();
import { reactive, onMounted, nextTick } from "vue";

const props = defineProps({
    id: { type: String },
});

const data = reactive({
    map: undefined,
    properties: {},
    layers: [],
});

onMounted(() => {
    init();
});

async function init() {
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
    data.entity = await dataService.getEntity({ id: props.id });
    data.properties = (
	await dataService.getEntityProperties({ id: props.id })
    ).properties.forwardProperties;

    let fg;
    if (data.properties.box) {
	const boxes = data.properties.box.map((box) => {
	    box = box.value.split(" ");
	    return {
		type: "Polygon",
		coordinates: [box.map((b) => b.split(","))],
	    };
	});
	removeExistingLayers();
	fg = addFeatureGroup({ geoJSON: boxes, type: "box" });
    } else {
	let geojson = {
	    type: "Point",
	    coordinates: [data.properties.longitude[0].value, data.properties.latitude[0].value],
	};
	removeExistingLayers();
	fg = addFeatureGroup({ geoJSON: geojson, type: "point" });
    }
    // await new Promise((resolve) => setTimeout(resolve, 200));
    // data.map.fitBounds(fg.getBounds());
}

function centerMap() {
    data.map.setView([0, 0], 0);
}

function removeExistingLayers() {
    data.layers.forEach((layer) => data.map.removeLayer(layer));
}

function addFeatureGroup({ geoJSON, type }) {
    let fg;
    if (type === "box") {
	fg = Leaflet.featureGroup([Leaflet.geoJSON(geoJSON, { style: { color: "black" } })]);
    } else {
	fg = Leaflet.featureGroup([
	    Leaflet.geoJSON(geoJSON, {
		pointToLayer: function (feature, latlng) {
		    return L.circleMarker(latlng, { color: "black", fillColor: "black" });
		},
	    }),
	]);
    }
    fg.addTo(data.map);
    data.layers.push(fg);
    return fg;
}
</script>

<style scoped>
.map-style {
    width: 600px;
    height: 400px;
}
</style>