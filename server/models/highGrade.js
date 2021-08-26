const mongoose = require('mongoose');

const highGrade = new mongoose.Schema({
    gunplaName: {type: String},
    image: {type: String},
    series: {type: String},
    releaseDate: {type: Number},
    price: {type: Number}
});

const model = mongoose.model("HighGrade", highGrade);
module.exports = model;