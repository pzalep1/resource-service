import { Db, ObjectId } from "mongodb";
import { MongoDriver } from "../drivers/MongoDriver";

// tslint:disable-next-line: interface-name
export interface Resource {
     name: string;
     resource: string;
}

export class ResourceStore {
    private static instance: ResourceStore;
    private db: Db;

    private constructor() {
        this.db = MongoDriver.getConnection();
    }

    // tslint:disable-next-line: member-ordering
    public static getInstance(): ResourceStore {
        if (!this.instance) {
            this.instance = new ResourceStore();
        }
        return this.instance;
    }

    // tslint:disable-next-line: member-access
    async setResource(obj: any) {
        const object = {
            _id: new ObjectId().toHexString(),
            name: "name",
            resource: "towson.edu",
        };
        await this.db.collection("uris")
        .insertOne(object);
    }

    // tslint:disable-next-lin: member access
    public async getResourceCount() {
        const count = await this.db.collection("uris")
        .countDocuments();
        return count;
    }
}
