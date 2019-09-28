import { ResourceStore } from "./resourceStore";
export async function setResource(obj: any) {
    return await getDataStore().setResource(obj);
}

export async function getAllResources() {
    return await getDataStore().getAllResources();
}

function getDataStore() {
    return ResourceStore.getInstance();
}
