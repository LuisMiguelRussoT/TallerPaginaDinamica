/**
 * Request the id and name of the game winner 
 */

const path = require('path');

const modelGame = require('./../models/thing');
const winner = async (req, res) => {
    try {
         let result = await modelGame.findOne({id:'fffff-ggg-jjjjj'});
         const response = {
            id: `${result._id}`,
            name: `${result.gamers[0]}`
         }
         res.send(JSON.stringify(response));
    }catch(error){
        console.log(error);
        res.status(500).send(error);
        
    }

};


module.exports = {
    winner,
}