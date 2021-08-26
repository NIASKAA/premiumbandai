const mongoose = require('mongoose');

const perfectGrade = new mongoose.Schema({
    gunplaName: {type: String},
    image: {type: String},
    series: {type: String},
    releaseDate: {type: Number},
    price: {type: Number}
});

const model = mongoose.model("PerfectGrade", perfectGrade);
module.exports = model;