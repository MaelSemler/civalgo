import {Request, Response} from "express";
import User from "../models/user.model";
import {broadcastOnSiteWorkers} from "./on_site_workers.controller";
import OnSiteWorkers from "../models/on_site_workers.model";
import CheckInOutHistory from "../models/check_in_out_history.model";


class UserController {
    checkIn = async (req: Request, res: Response): Promise<Response> => {
        try {
            const {name, siteId} = req.body;

            if (!name || !siteId) {
                return res.status(400).json({message: 'Both name and siteId are required.'});
            }

            const user = await User.create({
                name: name,
                siteId: siteId,
            }) as any; // Je sais que c'est pas bon mais je manque de temps pour aller type l'interface dans sequelize, et jai besoin du id

            // Dhabitude je regarderais a chaque étape si le create a marcher

            const onSiteWorker = await OnSiteWorkers.create({
                user_id: user.id,
            });

            const checkInOutHistory = await CheckInOutHistory.create({
                user_id: user.id,
                event: 'check_in',
            });

            await broadcastOnSiteWorkers();
            return res.status(201).json({message: 'User has checked in', user: user});
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'An unexpected error happened'});
        }
    }

    checkOut = async (req: Request, res: Response): Promise<Response> => {
        try {
            const onSiteWorker = await OnSiteWorkers.destroy({
                where: {
                    user_id: req.body.user_id,
                }
            });

            const checkInOutHistory = await CheckInOutHistory.create({
                user_id: req.body.user_id,
                event: 'check_out',
            });

            await broadcastOnSiteWorkers();

            return res.status(200).json({message: 'User has checked out'});
        } catch (error) {
            return res.status(500).json({message: 'An unexpected error happened'});
        }
    }

}

export default new UserController();
