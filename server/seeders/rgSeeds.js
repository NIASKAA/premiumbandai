const {RealGrade} = require("../models")

const rgSeeds = [
    {
        gunplaName: "",
        image: "",
        series: "",
        releaseDate: 11-2021,
        price: 4500
    },
];

const rgSeeds = async () => {
    try {
        await RealGrade.deleteMany({});
        const realGrade = await RealGrade.insertMany(rgSeeds)
        console.log(realGrade);
        return;
    } catch (error) {
        console.log(error);
        return;
    }
}