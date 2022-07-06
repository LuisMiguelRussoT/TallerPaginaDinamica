/**
 * main de la app
 */

/**
 * imports
 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./routes/path');
const mongoose = require('mongoose');
const dataBase = require('./controllers/db.js');
const thing = require('./models/thing');
const { generatePrimeSync } = require('crypto');

/**
 * Conecte to DB mongoose 
 */

dataBase.connectDb();

const port = 8080;
const app = express();

/**
 * set view engine .pug
 */

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * call routes
 */
api(app);

app.get("/createGame", (req, res) => {
    res.render(path.join(__dirname + "/views/index.pug"),
        { titulo: "mi primera app", name: "miguel russo" });

})

app.get("/startGame", (req, res) => {
    res.render(path.join(__dirname + "/views/gameBet.pug"),
        { user1: "miguel", name: "miguel russo" });

})

app.use((req, res) => {
    res.status(404).send("NOT FOUND");
});

app.listen(port, () => {
    console.log("On Line on " + port);
});