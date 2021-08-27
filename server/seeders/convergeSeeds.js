const {Converge} = require('../models')

const convergeSeeds = [
    {
        gunplaName: "Gundam Dust Anchor and Gundam Phantom V2 Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1629989235/01_bzq8x1.jpg",
        series: "Gundam Dust",
        releaseDate: 11-2021,
        price: 4500
    },
];

const convergeSeed = async () => {
    try {
        await Converge.deleteMany({});
        const converge = await Converge.insertMany(convergeSeeds);
        console.log(converge);
        return;
    } catch (error) {
        console.log(error);
        return;
    }
}

module.exports = {convergeSeed};