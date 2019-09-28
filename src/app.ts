import "dotenv/config";
import { ExpressDriver } from "./drivers/ExpressDriver";
import { MongoDriver } from "./drivers/MongoDriver";
// ----------------------------------------------------------------------------------
// Initializations
// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------
const dburi = process.env.DB_CONNECTION;
MongoDriver.build(dburi).then(() => {
    ExpressDriver.start();
});
