/**
 * all the routes in requiere
 */

const createController = require('../controllers/start.js');
const gameController = require('../controllers/game.js');
const winnerController = require ('../controllers/winner.js');
const startController = require ('../controllers/startGame.js');

const path = require('path');

const createRouter = (app) =>{
    app.post('/createGame',createController.create);
    app.get('/game',gameController.consult);
    app.get('/game/fffff-ggg-jjjjj/winner',winnerController.winner);
    app.post('/startGame',startController.start);

    };


module.exports = createRouter;