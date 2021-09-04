const {SDGrade} = require("../models")

const sdSeeds = [
    {
        gunplaName: "Freedom Gundam Ver. GCP",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333024/sd-ex-freedom-gundam-ver-gcp_1_qebw26.jpg",
        series: "Gundam Seed",
        releaseDate: 08-2021,
        price: 770
    },
    {
        gunplaName: "MK-III Daishogun (Super Steel Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762479/sd-legend-bb-mk-iii-daishogun-super-steel-ver_1_s2hesp.jpg",
        series: "SD Legend",
        releaseDate: 12-2017,
        price: 4968
    },
    {
        gunplaName: "BB Versal Knight (Metallic)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762479/sd-legend-bb-versal-knight-gundam-metallic_1_h9hmfy.jpg",
        series: "SD Legend",
        releaseDate: 09-2017,
        price: 3240
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