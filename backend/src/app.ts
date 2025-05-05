import express from 'express';
import sequelize from "./config/database";
import {UserRouter} from "./routers/user.router";
import {CheckInOutHistoryRouter} from "./routers/check_in_out_history.router";
import {OnSiteWorkersRouter} from "./routers/on_site_workers.routers";
import cors from 'cors';

const app = express();

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
app.use(OnSiteWorkersRouter);



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
        await sequelize.sync({ alter: true });
        console.log("All models were synchronized successfully.");

        app.listen(process.env.SERVER_PORT, () => {
            console.log(`Server is in : ${process.env.NODE_ENV}`)
            console.log(`⚡️[server]: Server is running at ${process.env.API_URL}`);
        });
    } catch (error) {
        console.error("❌ Failed to start:", error);
    }
}

start();



