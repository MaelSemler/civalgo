import * as express from 'express';
import UserController from "../controllers/user.controller";
import * as checkAuth from "../middlewares/check-auth";
export const UserRouter = express.Router();

UserRouter.get("/checkIn", checkAuth.default.checkAuthentication ,UserController.checkIn);

