<template>
    <div class="flex flex-col justify-center h-screen">
        <div class="flex flex-col text-center p-20 m-64">
            <div>
                setting up your session
            </div>
            <div>
                <el-progress
                    class="my-2"
                    :stroke-width="10"
                    :show-text="false"
                    :percentage="percentage"
                ></el-progress>
            </div>
        </div>
    </div>
</template>
<script>
import HTTPService from "./http.service";
export default {
    data() {
        return {
            percentage: 0,
        };
    },
    async beforeMount() {
        await this.$auth.handleAuthentication();
        this.percentage = 50;

        const httpService = new HTTPService({ $auth: this.$auth });
        const user = await this.$auth.getUser();
        await httpService.post({
            route: "/session/okta",
            body: {
                name: user.name,
                email: user.email,
            },
        });
        this.percentage = 100;
        await new Promise((resolve) => setTimeout(resolve, 500));
        this.$router.replace({
            path: this.$auth.getFromUri(),
        });
    },
    render() {},
};
</script>
