const mongoose = require('mongoose');

const sdGrade = new mongoose.Schema({
    gunplaName: {type: String},
    image: {type: String},
    series: {type: String},
    releaseDate: {type: Number},
    price: {type: Number}
});

const model = mongoose.model("SDGrade", sdGrade);
module.exports = {model, sdGrade};