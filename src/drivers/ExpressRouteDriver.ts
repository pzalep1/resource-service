import * as express from "express";
import { Router } from "express";
import { getResourceCount, getResources, setResource } from "../resources/resourceInteractor";

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
        // retrieves the total number of resources in the uris collection
        router.get("/resources/count", async (req, res) => {
            const response = await getResourceCount();
            res.send(response.toString());
        });
        // retrieves all resources from mongo
        router.get("/resources", async (req, res) => {
          const resources = await getResources();
          res.send(resources);
        });
        // posts resources to mongo
        router.post("/resources", async (req, res) => {
          const resource = req.body.resource;
          await setResource(resource);
          res.sendStatus(200);
        });

    }
}
