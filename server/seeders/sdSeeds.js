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
    {
        gunplaName: "Nidaime Gundam Daishogun (White Steel Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850842/nidaime_gundam_white_steel_ver_2_cfyy2v.jpg",
        series: "SD Legend",
        releaseDate: 08-2015,
        price: 2700
    },
    {
        gunplaName: "Armor Knight Gundam (Giant Ed)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630865181/ba040_ejokej.jpg",
        series: "SD Legend",
        releaseDate: 05-2015,
        price: 2700
    },
    {
        gunplaName: "Neo Zeong (Metallic Finish)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850842/sd_neo_zeong_metallic_3_jlwqjo.jpg",
        series: "Gundam Unicorn",
        releaseDate: 04-2015,
        price: 4104
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