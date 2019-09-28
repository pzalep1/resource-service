import * as bodyParser from "body-parser";
import express from "express";
import * as http from "http";
import ExpressRouteDriver from "./ExpressRouteDriver";

export class ExpressDriver {
    // tslint:disable-next-line: member-access
    static app = express();

    // tslint:disable-next-line: member-access
    static start() {
        this.app.use(
            bodyParser.urlencoded({
              extended: true,
            }),
          );
        this.app.use(bodyParser.json());
        // Set our api routes
        this.app.use("/", ExpressRouteDriver.buildRouter());

        const port = "3000";
        this.app.set("port", port);

        const server = http.createServer(this.app);
        server.keepAliveTimeout = parseInt(process.env.KEEP_ALIVE_TIMEOUT, 10);
        server.listen(port, () =>
            // tslint:disable-next-line: no-console
            console.log(`Resource service is running on http://localhost:${port}`),
        );

        return this.app;
    }

}
