import * as express from 'express';
import * as checkAuth from "../middlewares/check-auth";
import CheckInOutHistoryController from "../controllers/check_in_out_history.controller";

export const CheckInOutHistoryRouter = express.Router();

CheckInOutHistoryRouter.get("/checkInOutEvents", checkAuth.default.checkAuthentication, CheckInOutHistoryController.checkInOutEvents);

