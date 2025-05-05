import express from 'express';
import sequelize from "./config/database";
import {UserRouter} from "./routers/user.router";
import {CheckInOutHistoryRouter} from "./routers/check_in_out_history.router";
import {OnSiteWorkersRouter} from "./routers/on_site_workers.routers";

const app = express();

app.use(UserRouter);
app.use(CheckInOutHistoryRouter);
app.use(OnSiteWorkersRouter);

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is in : ${process.env.NODE_ENV}`)
    console.log(`⚡️[server]: Server is running at ${process.env.API_URL}`);
});
