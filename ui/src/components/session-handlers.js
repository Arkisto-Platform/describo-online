import router from "@/routes";
import store from "@/store";
import { $http } from "@/main";

export async function getSession() {
    let response = await $http.get({ route: "/session" });
    if (response.status === 200) {
        let { session, embeddedSession } = await response.json();
        return { session, embeddedSession };
    }
    return {};
}

export async function restoreSessionTarget() {
    const currentEntity = router.currentRoute?.query?.eid;
    const { session, embeddedSession: embedded } = await getSession();

    if (session) {
        session.embedded = embedded;
        store.commit("setSessionInformation", session);
        let resource = Object.keys(session?.service).pop();
        if (resource) {
            let folder = session.service[resource]?.folder;
            store.commit("setTargetResource", { resource });
            if (folder) {
                store.commit("setTargetResource", {
                    resource,
                    folder,
                });

                store.commit("setSelectedEntity", {
                    id: currentEntity ? currentEntity : "RootDataset",
                });
                router
                    .push({
                        path: "/collection/build",
                        query: { eid: currentEntity ? currentEntity : "RootDataset" },
                    })
                    .catch(() => {});
            }
        }
    }
}

export async function restoreSessionProfile() {
    const { session } = await getSession();

    if (session) {
        if (session.profile) {
            store.commit("setProfile", session.profile);
        }
    }
}

export async function setFolderAndSaveToSession({ folder }) {
    const resource = store.state.target.resource;

    store.commit("setTargetResource", {
        resource,
        folder,
    });
    await $http.put({
        route: `/session/configuration/${resource}/update-folder`,
        body: { folder },
    });
    if (folder) {
        router.push({ path: "/collection/build", query: { eid: "RootDataset" } }).catch(() => {});
    } else {
        router.push({ path: "/select-target" }).catch(() => {});
    }
}

export async function selectNewTarget() {
    const resource = store.state.target.resource;

    await $http.delete({ route: `/session/configuration/${resource}` });
    await setProfile({ profile: {} });
    resetInternalState();
    router.push({ path: "/select-target" }).catch(() => {});
}

export async function setLocalTarget() {
    await $http.post({ route: "/session/configuration/local", body: {} });

    store.commit("setTargetResource", {
        resource: "local",
        folder: undefined,
    });
}

export async function loadCollection() {
    const resource = store.state.target.resource;

    let response = await $http.get({
        route: `/load/${resource}`,
    });
    if (response.status !== 200) {
        resetInternalState();

        return;
    }
    let { collection } = await response.json();
    store.commit("setActiveCollection", collection);
}

function resetInternalState() {
    store.commit("setTargetResource", {
        resource: undefined,
        folder: undefined,
    });
    store.commit("setProfile", {});
    store.commit("setActiveCollection", {});
    store.commit("setSelectedEntity", { id: "RootDataset" });
}

export async function getProfiles() {
    let response = await $http.get({ route: "/profile" });
    if (response.status !== 200) {
        // set selected profile to schema.org
        return;
    }
    return (await response.json()).profiles;
}

export async function setProfile({ profile }) {
    store.commit("setProfile", profile);
    await $http.post({ route: "/profile", body: { profile } });
}
