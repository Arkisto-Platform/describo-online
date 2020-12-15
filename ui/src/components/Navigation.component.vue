<template>
    <div class="flex flex-row p-2 bg-indigo-100 py-4 px-10 text-xl text-gray-800">
        <div
            @click="navTo('/')"
            class="mr-4 cursor-pointer"
            :class="{ 'text-blue-500': currentRoute === 'root' }"
        >
            <i class="fas fa-home"></i>
        </div>
        <div class="mr-20">{{ siteName }}</div>
        <div
            @click="navTo({ path: '/templates' })"
            class="text-base pt-1 cursor-pointer"
            :class="{ 'text-blue-500': currentRoute === 'templates' }"
        >
            <i class="fas fa-list"></i>
            Manage My Templates
        </div>
        <div class="flex flex-grow"></div>
        <div @click="navTo({ name: 'logout' })" class="text-base pt-1 cursor-pointer">
            <i class="fas fa-sign-out-alt"></i>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            siteName: this.$store.state.configuration.siteName,
        };
    },
    computed: {
        currentRoute: function() {
            return this.$route.name;
        },
    },
    methods: {
        navTo(path) {
            this.$router.push(path).catch((err) => {});
        },
    },
};
</script>
