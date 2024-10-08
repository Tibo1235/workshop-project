require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
const MySQL = require("mysql");

const connection = MySQL.createConnection({
    host: process.env.DB_HOST,
    method: "mysql",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//database connection
connection.connect((err) => {
    if (err) {
        console.log("Error connecting to database: ", err);
    } else {
        console.log("Database connected");
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});