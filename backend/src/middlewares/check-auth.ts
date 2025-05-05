import {NextFunction, Request, Response} from 'express';

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
        next();
        // Habituellement ici je validerais le token pour voir s'il est bon
        // Pour le peu de temps alloue on va seulement regarder si n'importe quoi est envoyé avec la requête

        // Si le token n'est pas valide on aurait renvoyé un 401 comme suit:
        // return res.sendStatus(401);
    } else {
        // Unauthorized
        return res.sendStatus(401);
    }
};

export default {checkAuthFirebase: checkAuth,};
