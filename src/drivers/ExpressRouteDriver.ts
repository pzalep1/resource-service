import * as express from "express";
import { Router } from "express";
import { getResourceCount, setResource } from "../resources/resourceInteractor";
import { Resource } from "../resources/resourceStore";

export default class ExpressRouteDriver {

    public static buildRouter() {
        const e = new ExpressRouteDriver();
        const router: Router = express.Router();
        e.setRoutes(router);
        return router;
      }

    private constructor() { }

    public setRoutes(router: Router) {
        // base route for service
        router.get("/", (req, res) => {
          res.json({
            message: "Welcome to the Resource API",
          });
        });
        // retrieves all resources from mongo
        router.get("/resources/count", async (req, res) => {
            const response = await getResourceCount();
            // tslint:disable-next-line: no-console
            console.log("response", response);
            res.send(response.toString());
        });
        // posts resources to mongo
        router.post("/resources", async (req, res) => {
          const resource = req.body;
          await setResource(resource);
          res.sendStatus(200);
        });
    }
}
