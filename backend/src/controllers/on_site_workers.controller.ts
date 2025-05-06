import {IncomingMessage} from "http";
import {WebSocket} from "ws";
import OnSiteWorkers from "../models/on_site_workers.model";
import {clients} from "../app";


class OnSiteWorkersController {

    // Is called when a new connection is made in the websocket
    onSiteWorkers = async (ws: WebSocket, req: IncomingMessage)=> {
        ws.send('Connected to onSiteWorkers');

        broadcastOnSiteWorkers();

        ws.on('close', () => {
            clients.delete(ws);
        });
    }
}

 // Send the data to all the connections to the websocket, find all OnSiteWorkers
 export async function broadcastOnSiteWorkers() {
    const onSiteWorkers = await OnSiteWorkers.findAll();
    const message = JSON.stringify({ onSiteWorkers });

    for (const client of clients) {
        if (client.readyState === client.OPEN) {
            client.send(message);
        }
    }
}

export default new OnSiteWorkersController();
