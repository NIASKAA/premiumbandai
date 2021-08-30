const {SDGrade} = require("../models")

const sdSeeds = [
    {
        gunplaName: "Freedom Gundam Ver. GCP",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333024/sd-ex-freedom-gundam-ver-gcp_1_qebw26.jpg",
        series: "Gundam Seed",
        releaseDate: 08-2021,
        price: 770
    },
];

const sdSeed = async () => {
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

module.exports = {sdSeed};