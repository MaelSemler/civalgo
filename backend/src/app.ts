import express from 'express';
import sequelize from "./config/database";
import {UserRouter} from "./routers/user.router";
import {CheckInOutHistoryRouter} from "./routers/check_in_out_history.router";
import cors from 'cors';
import * as http from "node:http";
import {WebSocket, WebSocketServer} from "ws";
import checkAuth from "./middlewares/check-auth";
import {IncomingMessage} from 'http';
import OnSiteWorkersController from "./controllers/on_site_workers.controller";

const app = express();

const server = http.createServer(app);

// Create a WebSocket server
const webSocketServer = new WebSocketServer({server, path: '/onSiteWorkers'});
export const clients = new Set<WebSocket>();

webSocketServer.on('connection', (ws: WebSocket, req: IncomingMessage) => {
    if (!checkAuth.checkSupervisorWebsocketAuth(ws, req)) return;
    clients.add(ws);
    OnSiteWorkersController.onSiteWorkers(ws, req);
});

app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    })
);
app.use(express.json());

app.use(UserRouter);
app.use(CheckInOutHistoryRouter);


async function start() {
    try {
        // We check if the connection with the db works
        sequelize.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });

        // We create the tables based on the sequelize models
        await sequelize.sync({alter: true});
        console.log("All models were synchronized successfully.");

        server.listen(process.env.SERVER_PORT, () => {
            console.log(`Server is in : ${process.env.NODE_ENV}`)
            console.log(`⚡️[server]: Server is running at ${process.env.API_URL}`);
        });
    } catch (error) {
        console.error("Failed to start:", error);
    }
}

start();

