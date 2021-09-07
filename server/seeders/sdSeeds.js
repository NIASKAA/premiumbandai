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
        gunplaName: "Victory Daishogun",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995581/sd-legend-bb-victory-daishogun_1_nty760.jpg",
        series: "SD Legend",
        releaseDate: 09-2018,
        price: 4860
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
        gunplaName: "Musha Victory Gundam (Super Steel Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995581/sd-legend-bb-musha-victory-gundam-super-steel-ver_1_rbqn7m.jpg",
        series: "SD Legend",
        releaseDate: 12-2016,
        price: 2700
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
    {
        gunplaName: "Zakuto Yamishogun (Metallic Finish)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957125/gundamkitscollectionSS028_e8u4zx.jpg",
        series: "SD Legend",
        releaseDate: 09-2014,
        price: 2700
    },
    {
        gunplaName: "Gundam Next Sengoku (Illusion of the Great General)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960140/s-l400_hgf2l2.jpg",
        series: "SD Legend",
        releaseDate: 06-2014,
        price: 2200
    },
    {
        gunplaName: "Unicorn Gundam Knight (Ultimate Battle Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960140/gundamkitscollectionSS029_1_ablpaz.jpg",
        series: "SD Legend",
        releaseDate: 06-2014,
        price: 2700
    },
    {
        gunplaName: "Musha Godmaru Final Battle Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995581/sd-legend-bb-musha-godmaru-final-battle-ver_1_kdktoq.jpg",
        series: "SD Legend",
        releaseDate: 01-2014,
        price: 1500
    },
    {
        gunplaName: "Strike Liu Bei (Deactive Mode)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962218/N2217996001001_001_r1kg6i.jpg",
        series: "SD Legend",
        releaseDate: 07-2013,
        price: 4200
    },
    {
        gunplaName: "Musha Gundam (Ultra Steel Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962218/pDOGLuzq5_rVJk3VdoKmWw_ljir8v.jpg",
        series: "SD Legend",
        releaseDate: 07-2013,
        price: 2635
    },
    {
        gunplaName: "",
        image: "",
        series: "",
        releaseDate: 11-2021,
        price: 4500
    },
    {
        gunplaName: "",
        image: "",
        series: "",
        releaseDate: 11-2021,
        price: 4500
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