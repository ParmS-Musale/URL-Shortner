require("dotenv").config();
const express = require("express");
const expressApp = require("./express-app");
const database = require("./dataBase");

const PORT = process.env.DB_PORT || 3000; // Added fallback

const startServer = async () => {
    const app = express();
    await expressApp(app, database);

    app.listen(PORT, () => { // Fixed syntax
        console.log(`The current Project Running on ${PORT}`);
    });
};

startServer().catch(err => {
    console.error('Failed to start server:', err);
});