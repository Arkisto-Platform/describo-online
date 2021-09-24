<template>
    <div>
        <div
            class="flex flex-row space-x-4 bg-indigo-100 p-4 text-xl text-gray-800"
            v-if="!embeddedSession"
        >
            <!-- <div
                @click="navTo('/')"
                class="cursor-pointer"
                :class="{ 'text-blue-500': currentRoute === 'root' }"
            >
                <i class="fas fa-home"></i>
            </div> -->
            <div>{{ siteName }}</div>
            <!-- <div
                @click="navTo({ path: '/templates' })"
                class="text-base pt-1 cursor-pointer"
                :class="{ 'text-blue-500': currentRoute === 'templates' }"
            >
                <i class="fas fa-list"></i>
                Manage My Templates
            </div> -->
            <div class="flex flex-grow"></div>
            <div @click="navTo({ name: 'logout' })" class="text-base pt-1 cursor-pointer">
                <i class="fas fa-sign-out-alt"></i>
            </div>
        </div>
        <!-- <div v-else class="flex p-2 bg-indigo-100 py-1 text-lg text-gray-800">
            <div>{{ siteName }}</div>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
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
