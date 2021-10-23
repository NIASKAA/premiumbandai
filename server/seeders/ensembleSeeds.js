const {Ensemble} = require('../models')

const ensembleSeeds = [
    {
        gunplaName: '',
        image: '',
        series: '',
        releaseDate: '',
        price: 0000
    },
    {
        gunplaName: '',
        image: '',
        series: '',
        releaseDate: '',
        price: 0000
    },
    {
        gunplaName: '',
        image: '',
        series: '',
        releaseDate: '',
        price: 0000
    },
    {
        gunplaName: '',
        image: '',
        series: '',
        releaseDate: '',
        price: 0000
    },
    {
        gunplaName: '',
        image: '',
        series: '',
        releaseDate: '',
        price: 0000
    },
    {
        gunplaName: '',
        image: '',
        series: '',
        releaseDate: '',
        price: 0000
    },
    {
        gunplaName: '',
        image: '',
        series: '',
        releaseDate: '',
        price: 0000
    },
];

const ensembleSeed = async () => {
    try {
        await Ensemble.deleteMany({});
        const ensemble = await Ensemble.insertMany(ensembleSeeds)
        console.log(ensemble)
        return;
    } catch (error) {
        console.log(error);
        return;
    }
}

module.exports = {ensembleSeed};