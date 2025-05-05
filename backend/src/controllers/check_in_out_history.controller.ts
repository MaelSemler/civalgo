import {Request, Response} from "express";

class CheckInOutHistoryController {
    checkInOutEvents = async (req: Request, res: Response): Promise<Response> => {
        try {
            // TODO add the user to on site workers table with current timestamp
            // TODO add the user to historic table that he checked in


            return res.status(200).json({message: 'User has checked in'});
        } catch (error) {
            return res.status(500).json({message: 'An unexpected error happened'});
        }
    }
}

export default new CheckInOutHistoryController();
