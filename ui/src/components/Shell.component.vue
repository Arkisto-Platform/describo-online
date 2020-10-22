<template>
    <div class="flex flex-col">
        <navigation-component />
        <onedrive-authenticator-component
            v-if="onedrive"
            :client-id="onedrive.clientID"
            :redirect-uri="onedrive.redirectURI"
            @rclone-configuration="postRcloneConfiguration"
        />
        <pre>{{ configuration }}</pre>
    </div>
</template>

<script>
import HTTPService from "./http.service";
import NavigationComponent from "@/components/Navigation.component.vue";

export default {
    components: {
        NavigationComponent,
    },
    data() {
        return {
            configuration: {},
        };
    },
    computed: {
        onedrive: function() {
            return this.$store.state?.configuration?.services?.onedrive;
        },
    },
    mounted() {
        this.$store.dispatch("loadConfiguration");
    },
    methods: {
        async postRcloneConfiguration(configuration) {
            this.configuration = configuration;
            const httpService = new HTTPService({ $auth: this.$auth });
            await httpService.post({
                route: "/onedrive/configuration",
                body: this.configuration,
            });
        },
    },
};
</script>
