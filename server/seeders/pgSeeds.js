const {PerfectGrade} = require("../models")

const pgSeeds = [
    {
        gunplaName: "",
        image: "",
        series: "",
        releaseDate: 11-2021,
        price: 4500
    },
];

const pgSeeds = async () => {
    try {
        await PerfectGrade.deleteMany({});
        const perfectGrade = await PerfectGrade.insertMany(pgSeeds)
        console.log(perfectGrade);
        return;
    } catch (error) {
        console.log(error);
        return;
    }
}