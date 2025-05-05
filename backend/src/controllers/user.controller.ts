import {Request, Response} from "express";
import User from "../models/user.model";


class UserController {
    checkIn = async (req: Request, res: Response): Promise<Response> => {
        try {
            // TODO add the user to on site workers table with current timestamp
            // TODO add the user to historic table that he checked in

            console.log(req.body)
            const {name, siteId} = req.body;

            if (!name || !siteId) {
                return res.status(400).json({message: 'Both name and siteId are required.'});
            }

            const user = await User.create({
                name: name,
                siteId: siteId,
            });
            return res.status(201).json({message: 'User has checked in', user: user});
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'An unexpected error happened'});
        }
    }

    checkOut = async (req: Request, res: Response): Promise<Response> => {
        try {
            // TODO remove the user from on site workers table
            // TODO add the user to historic table that he checked out

            return res.status(200).json({message: 'User has checked out'});
        } catch (error) {
            return res.status(500).json({message: 'An unexpected error happened'});
        }
    }

}

export default new UserController();
