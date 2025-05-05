import express from 'express';
import sequelize from "./config/database";

const app = express();

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
