const mongoose = require('mongoose');

const pokegemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  cardImg: {
    type: String,
    required:true,
  },
  price: {
    type: String,
    required: false,
  },
  series: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Pokegem', pokegemSchema);

