const {MasterGrade} = require("../models")

const mgSeeds = [
    {
        gunplaName: "Rx-78-2 Gundam Supreme Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630183025/SUPREME-GUNDAM_ybt3re.jpg",
        series: "Mobile Suit Gundam ",
        releaseDate: 08-2021,
        price: 0000
    },
    {
        gunplaName: 'Manuever Strike Pack',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630183419/mg-maneuver-eclipse-gundam_1_lmxqld.jpg',
        series: "Gundam Seed Eclipse",
        releaseDate: 11-2021,
        price: 3300
    }
];

const mgSeed = async () => {
    try {
        await MasterGrade.deleteMany({});
        const masterGrade = await MasterGrade.insertMany(mgSeeds)
        console.log(masterGrade);
        return;
    } catch (error) {
        console.log(error);
        return;
    }
}

module.exports = {mgSeed};