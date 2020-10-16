<template>
    <div class="">
        <onedrive-authenticator-component
            v-if="onedrive"
            :client-id="onedrive.clientID"
            :redirect-uri="onedrive.redirectURI"
            @rclone-configuration="postRcloneConfiguration"
        />
    </div>
</template>
<script>
export default {
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
            await fetch("/api/user/onedrive/configuration", {
                method: "POST",
                body: JSON.stringify(this.configuration),
                headers: { "content-type": "application/json" },
            });
        },
    },
};
</script>
