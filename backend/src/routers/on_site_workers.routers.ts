import * as express from 'express';
import * as checkAuth from "../middlewares/check-auth";
import OnSiteWorkersController from "../controllers/on_site_workers.controller";

export const OnSiteWorkersRouter = express.Router();

OnSiteWorkersRouter.get("/onSiteWorkers", checkAuth.default.checkAuthentication, OnSiteWorkersController.onSiteWorkers);
