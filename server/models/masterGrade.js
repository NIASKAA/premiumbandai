const mongoose = require('mongoose');

const masterGrade = new mongoose.Schema({
    gunplaName: {type: String},
    image: {type: String},
    series: {type: String},
    releaseDate: {type: Number},
    price: {type: Number}
});

const model = mongoose.model("MasterGrade", masterGrade);
module.exports = {model, masterGrade};