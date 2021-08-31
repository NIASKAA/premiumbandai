const mongoose = require('mongoose');

const realGrade = new mongoose.Schema({
    gunplaName: {type: String},
    image: {type: String},
    series: {type: String},
    releaseDate: {type: Number},
    price: {type: Number}
});

const RealGrade = mongoose.model("RealGrade", realGrade);
module.exports = {RealGrade, realGrade};