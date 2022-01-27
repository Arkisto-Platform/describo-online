<template>
    <div>{{ labelDisplay }}</div>
</template>

<script>
import { startCase } from "lodash";
export default {
    props: {
        label: { type: String, required: true },
    },
    data() {
        return {};
    },
    computed: {
        labelDisplay() {
            return startCase(this.label);
        },
    },
};
</script>
