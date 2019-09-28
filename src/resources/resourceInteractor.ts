import { ResourceStore } from "./resourceStore";
export async function setResource(obj: any) {
    return await getDataStore().setResource(obj);
}

export async function getResourceCount() {
    return await getDataStore().getResourceCount();
}

function getDataStore() {
    return ResourceStore.getInstance();
}
