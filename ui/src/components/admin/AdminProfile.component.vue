<template>
    <div class="flex flex-col space-y-2">
        <div>Test your profile</div>
        <div class="flex flex-row">
            <div><el-button @click="validateProfile">Validate Profile</el-button></div>
        </div>
        <div class="flex flex-row">
            <div class="w-1/2"><textarea ref="textarea" class="w-full h-full"></textarea></div>
            <div class="w-1/2 px-2">
                <div v-if="data.formattingError">{{ formattingError }}</div>
                <div v-if="!data.validation.valid" class="text-sm overflow-scroll">
                    <div v-for="(error, idx) of data.validation.errors" :key="idx">
                        <pre>{{ error }}</pre>
                    </div>
                </div>
                <div v-if="data.validation.valid" class="flex flex-row space-x-2">
                    <div class="text-4xl text-green-500"><i class="fas fa-check"></i></div>
                    <div class="pt-2">the profile is valid</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/blackboard.css";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/fold/foldgutter";
import { debounce } from "lodash";
import { onMounted, ref, reactive, inject } from "vue";

const $http = inject("$http");
const debouncedValidateProfile = debounce(validateProfile, 500);
let data = reactive({ cm: undefined, validation: [], formattingError: false });
const textarea = ref(null);

onMounted(() => {
    init();
});
function init() {
    let cm = CodeMirror.fromTextArea(textarea.value, {
        mode: "application/json",
        theme: "blackboard",
        lineNumbers: true,
        gutter: true,
        lineWrapping: true,
        autoCloseBrackets: true,
        autoCloseTags: true,
        fold: true,
    });
    cm.setSize("100%", "700px");
    cm.on("change", debouncedValidateProfile);
    data.cm = cm;
}
async function validateProfile() {
    data.formattingError = false;
    data.validation = {};
    let profile = data.cm.getValue();
    if (!profile) {
        return;
    }

    try {
        profile = JSON.parse(profile);
    } catch (error) {
        data.formattingError = error.message;
        return;
    }
    let response = await $http.post({
        route: "/admin/profile/validate",
        body: { profile },
    });
    if (response.status === 200) {
        data.validation = await response.json();
    } else {
        data.profileValidation = {
            errors: [{ message: "profile validation failed with an unknown error" }],
        };
    }
}
</script>
