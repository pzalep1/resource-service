import { ExpressDriver } from './drivers/drivers';
// ----------------------------------------------------------------------------------
// Initializations
// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------
ExpressDriver.start();

import express from "express";
import * as http from "http";
const port = 3000; // default port to listen

async function startApp() {
    const app = express();
    startHttpServer(app);
}
/**
 * Serves Express app via HTTP
 *
 * @param {Express} app [The express app to use as servers request listener]
 */
function startHttpServer(app: express.Express): void {
    const server = http.createServer(app);
    server.keepAliveTimeout = parseInt(process.env.KEEP_ALIVE_TIMEOUT, 10);
    server.listen(port, () =>
    // tslint:disable-next-line:no-console
      console.log(`Resource service running on http://localhost:${port}`),
    );
}

startApp();
