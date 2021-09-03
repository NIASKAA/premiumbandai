const {PerfectGrade} = require("../models")

const pgSeeds = [
    {
        gunplaName: "RX-78-2 Gundam Unleashed (Clear)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333022/pg-unleashed-clear-color-body-rx-78-2-gundam_1_imfkmx.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: 03-2021,
        price: 4950
    },
    {
        gunplaName: "Armed De Tail Stabilizers",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333023/PG-NARRATIVE-EXPANSION_xp9lzi.jpg",
        series: "Gundam Unicorn NT",
        releaseDate: 01-2021,
        price: 8800
    },
    {
        gunplaName: "Gundam Unicorn Phenex NT",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333023/pg-phenex-narrative-ver_1_ecvb8w.jpg",
        series: "Gundam Unicorn NT",
        releaseDate: 01-2021,
        price: 52800
    },
    {
        gunplaName: "Gundam 00 Seven Sword Inspection Color",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675360/pg-00-seven-sword-g-inspection_1_ip4f9l.jpg",
        series: "Gundam 00V",
        releaseDate: 03-2020,
        price: 25300
    },
    {
        gunplaName: "Perfect Strike Equipment Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675361/pg-perfect-strike-gundam_1_mscg7k.jpg",
        series: "Gundam Seed",
        releaseDate: 02-2020,
        price: 8800
    },
];

const pgSeed = async () => {
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

module.exports = {pgSeed};