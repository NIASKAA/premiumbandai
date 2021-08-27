const {SDGrade} = require("../models")

const sdSeeds = [
    {
        gunplaName: "",
        image: "",
        series: "",
        releaseDate: 11-2021,
        price: 4500
    },
];

const sdSeeds = async () => {
    try {
        await SDGrade.deleteMany({});
        const sdGrade = await SDGrade.insertMany(sdSeeds)
        console.log(sdGrade);
        return;
    } catch (error) {
        console.log(error);
        return;
    }
}