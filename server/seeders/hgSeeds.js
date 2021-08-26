const {HighGrade} = require("../models")

const hgSeeds = [
    {
        gunplaName: "",
        image: "",
        series: "",
        releaseDate: 11-2021,
        price: 4500
    },
];

const hgSeeds = async () => {
    try {
        await HighGrade.deleteMany({});
        const highGrade = await HighGrade.insertMany(hgSeeds)
        console.log(highGrade);
        return;
    } catch (error) {
        console.log(error);
        return;
    }
}