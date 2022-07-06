/**
 * Basic schema fot the object user
 */

const mongoose = require('mongoose');

const validateid = (id) => {
  const regex = /^([a-z]+-{0,1})+([a-z]+)+$/;
  return regex.test(id);
};

const userSchema = new mongoose.Schema({

  id: {
    type: String,
    trim: true,
    required: [true, "El id es requerido"],
    lowercase: true,
    unique: true,
    validate: {
      validator: validateid,
      message: "Por favor digite un id válido",
    },
  },
  type: {
    type: String,
    trim: true,
  },
  gamers: [

    {
      type: String,
      trim: true,
      required: [true, "El nombre del jugador es requerido"],
    },
  ],
  gamerBet: [
    {
      type: String,
      trim: true,
    },
  ],
 });

var User = mongoose.model('games', userSchema);

module.exports = User;
 


