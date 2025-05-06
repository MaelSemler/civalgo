import {NextFunction, Request, Response} from 'express';
import {IncomingMessage} from 'http';
import {WebSocket} from "ws";
import * as url from "node:url";

const checkAuthentication = (req: Request, res: Response, next: NextFunction) => {
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

function checkSupervisorWebsocketAuth(ws: WebSocket, req: IncomingMessage): boolean {
    const parsedUrl = url.parse(req.url || '', true);
    const auth = parsedUrl.query['authorization'];
    if (auth === 'supervisor') {
        return true;
    } else {
        ws.send('Unauthorized');
        ws.close(1008, 'Unauthorized');
        return false;
    }
}

export default {checkAuthentication, checkSupervisorWebsocketAuth};
