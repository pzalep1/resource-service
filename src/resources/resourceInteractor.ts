import { ResourceStore } from "./resourceStore";
export async function setResource(obj: any) {
    return await getDataStore().setResource(obj);
}

export async function getResourceCount() {
    return await getDataStore().getResourceCount();
}

export async function getResources() {
    return await getDataStore().getResources();
}

function getDataStore() {
    return ResourceStore.getInstance();
}
