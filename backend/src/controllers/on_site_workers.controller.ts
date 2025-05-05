import {Request, Response} from "express";


class OnSiteWorkersController {
    onSiteWorkers = async (req: Request, res: Response): Promise<Response> => {
        try {
            // TODO fetch current workers


            return res.status(200).json({message: 'User has checked in'});
        } catch (error) {
            return res.status(500).json({message: 'An unexpected error happened'});
        }
    }
}

export default new OnSiteWorkersController();
