<template>
    <div class="flex flex-col space-y-2">
        <div>Test your profile</div>
        <div class="flex flex-row">
            <div><el-button @click="validateProfile">Validate Profile</el-button></div>
        </div>
        <div class="flex flex-row">
            <div class="w-1/2"><textarea ref="textarea" class="w-full h-full"></textarea></div>
            <div class="w-1/2 px-2">
                <div v-if="formattingError">{{ formattingError }}</div>
                <div v-if="!profileValidation.valid" class="text-sm overflow-scroll">
                    <div v-for="(error, idx) of profileValidation.errors" :key="idx">
                        <pre>{{ error }}</pre>
                    </div>
                </div>
                <div v-if="profileValidation.valid" class="flex flex-row space-x-2">
                    <div class="text-4xl text-green-500"><i class="fas fa-check"></i></div>
                    <div class="pt-2">
                        the profile is valid
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/blackboard.css";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/fold/foldgutter";
import { debounce } from "lodash";
export default {
    data() {
        return {
            debouncedValidateProfile: debounce(this.validateProfile, 500),
            formattingError: undefined,
            profileValidation: {},
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.codemirror = CodeMirror.fromTextArea(this.$refs.textarea, {
                mode: "application/json",
                theme: "blackboard",
                lineNumbers: true,
                gutter: true,
                lineWrapping: true,
                autoCloseBrackets: true,
                autoCloseTags: true,
                fold: true,
            });
            this.codemirror.setSize("100%", "700px");
            this.codemirror.on("change", this.debouncedValidateProfile);
        },
        async validateProfile() {
            this.formattingError = undefined;
            this.profileValidation = {};
            let profile = this.codemirror.getValue();
            if (!profile) {
                return;
            }

            try {
                profile = JSON.parse(profile);
            } catch (error) {
                this.formattingError = error.message;
                return;
            }
            let response = await this.$http.post({
                route: "/admin/profile/validate",
                body: { profile },
            });
            if (response.status === 200) {
                this.profileValidation = await response.json();
            } else {
                this.profileValidation = {
                    errors: [{ message: "profile validation failed with an unknown error" }],
                };
            }
        },
    },
};
</script>
