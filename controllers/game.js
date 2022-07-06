/**
 * Request body and save tje response on result
 */

const path = require('path');
const modelGame = require('./../models/thing');
const consult = async (req, res) => {
    try {
         let result = await modelGame.find({id:'fffff-ggg-jjjjj'});
        res.send(result);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
     }
}
module.exports = {
    consult,
}
