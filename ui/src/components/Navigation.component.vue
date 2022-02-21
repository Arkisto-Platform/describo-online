<template>
    <div>
        <div
            class="flex flex-row space-x-4 bg-indigo-100 p-4 text-xl text-gray-800"
            v-if="!embeddedSession"
        >
            <div>{{ siteName }}</div>
            <div class="flex flex-grow"></div>
            <div
                @click="navTo({ name: 'logout' })"
                class="text-base pt-1 cursor-pointer"
                v-if="login !== 'localhost'"
            >
                <i class="fas fa-sign-out-alt"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            login: this.$store.state.configuration.login,
            siteName: this.$store.state.configuration.siteName,
            embeddedSession: false,
        };
    },
    computed: {
        currentRoute: function() {
            return this.$route.name;
        },
    },
    mounted() {
        this.setup();
    },
    methods: {
        setup() {
            const session = this.$store.state.session;
            if (session.embedded) {
                this.embeddedSession = true;
            }
        },
        navTo(path) {
            this.$router.push(path).catch((err) => {});
        },
    },
};
</script>
