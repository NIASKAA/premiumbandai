const mongoose = require('mongoose');

const converge = new mongoose.Schema({
    gunplaName: {type: String},
    image: {type: String},
    series: {type: String},
    releaseDate: {type: Number},
    price: {type: Number}
});

const Converge = mongoose.model("Converge", converge);
module.exports = {Converge, converge};