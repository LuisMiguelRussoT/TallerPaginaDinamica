/**
 * Request body and save the constant user on db 
 */

const express = require("express");
const modelGame = require("./../models/thing");

const create = (req, res) => {
      
   try {
        console.log(req.body);
        const user = new modelGame(req.body);
        user.save();
        res.send("try to start");
    }catch(error){
        console.log(error);

        res.status(500).send(error);
}
}
    

module.exports = {
    create
}
