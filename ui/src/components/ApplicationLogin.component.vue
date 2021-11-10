<template>
    <div></div>
</template>

<script>
import { setSessionSID } from "./http.service";

export default {
    data() {
        return {
            widget: undefined,
        };
    },
    async mounted() {
        setSessionSID({ sid: this.$route.query.sid });
        this.$router.replace({ path: "/" });
    },
};
</script>
