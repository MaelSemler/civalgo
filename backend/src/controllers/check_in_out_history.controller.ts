import {Request, Response} from "express";
import CheckInOutHistory from "../models/check_in_out_history.model";

class CheckInOutHistoryController {
    checkInOutEvents = async (req: Request, res: Response): Promise<Response> => {
        try {
            const checkInOutHistory = await CheckInOutHistory.findAll();

            return res.status(200).json({checkInOutHistory: checkInOutHistory});
        } catch (error) {
            return res.status(500).json({message: 'An unexpected error happened'});
        }
    }
}

export default new CheckInOutHistoryController();
