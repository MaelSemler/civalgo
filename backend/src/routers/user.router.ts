import * as express from 'express';
import UserController from "../controllers/user.controller";

export const UserRouter = express.Router();

UserRouter.post("/checkIn", UserController.checkIn);
UserRouter.post("/checkOut", UserController.checkOut);
