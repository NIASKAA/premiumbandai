const {PerfectGrade} = require("../models")

const pgSeeds = [
    {
        gunplaName: "Unicorn Gundam Perfectibility",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1636552431/pg-unicorn-gundam-perfectibility_9_okbfec.jpg",
        series: "Gundam Unicorn",
        releaseDate: "02-2022",
        price: 33000
    },
    {
        gunplaName: "RX-78-2 Gundam Unleashed (Clear)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333022/pg-unleashed-clear-color-body-rx-78-2-gundam_1_imfkmx.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: "03-2021",
        price: 4950
    },
    {
        gunplaName: "Armed De Tail Stabilizers",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333023/PG-NARRATIVE-EXPANSION_xp9lzi.jpg",
        series: "Gundam Unicorn NT",
        releaseDate: "01-2021",
        price: 8800
    },
    {
        gunplaName: "Gundam Unicorn Phenex NT",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333023/pg-phenex-narrative-ver_1_ecvb8w.jpg",
        series: "Gundam Unicorn NT",
        releaseDate: "01-2021",
        price: 52800
    },
    {
        gunplaName: "Gundam 00 Seven Sword Inspection Color",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675360/pg-00-seven-sword-g-inspection_1_ip4f9l.jpg",
        series: "Gundam 00V",
        releaseDate: "03-2020",
        price: 25300
    },
    {
        gunplaName: "Perfect Strike Equipment Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675361/pg-perfect-strike-gundam_1_mscg7k.jpg",
        series: "Gundam Seed",
        releaseDate: "02-2020",
        price: 8800
    },
    {
        gunplaName: "Unicorn Bande Dessinee (China Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717564/pg-unicorn-bande-dessinee-china-red-ver-p-bandai_4_mciwhy.jpg",
        series: "Gundam Unicorn",
        releaseDate: "02-2020",
        price: 1599
    },
    {
        gunplaName: "Gundam Exia (Clear Parts)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725878/pg-gundam-exia-clear-parts_1_hmwfy7.jpg",
        series: "Gundam 00",
        releaseDate: "12-2018",
        price: 3780
    },
    {
        gunplaName: "Gundam Astray Red Frame Kai",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725878/pg-gundam-astray-red-frame-kai_1_n6f6ad.jpg",
        series: "Gundam Seed Astray",
        releaseDate: "06-2018",
        price: 24480
    },
    {
        gunplaName: "PG Exia Repair Parts",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995581/pg-160-gundam-exia-repair_1_rn2k24.jpg",
        series: "Gundam 00",
        releaseDate: "03-2018",
        price: 4320
    },
    {
        gunplaName: "Banshee Norn (Final Battle Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762478/pg-banshee-norn-final-battle-ver_1_uzfw2l.jpg",
        series: "Gundam Unicorn",
        releaseDate: "02-2018",
        price: 23760
    },
    {
        gunplaName: "Gundam 00 Raiser Trans-Am Mode",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020889/pg-00-raiser-trans-am-release_u7dtcn.jpg",
        series: "Gundam 00",
        releaseDate: "06-2017",
        price: 29700
    },
    {
        gunplaName: "Gundam 00 Raiser Trans-Am Clear Conversion",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812852/pg-trans-am-raiser-clear-ver_1_hpkopk.jpg",
        series: "Gundam 00",
        releaseDate: "06-2017",
        price: 4104
    },
    {
        gunplaName: "Gundam Unicorn Phenex",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995581/pg-phenex_dhpmlu.jpg",
        series: "Gundam Unicorn",
        releaseDate: "02-2017",
        price: 43000
    },
    {
        gunplaName: "Gundam Unicorn Final Battle Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988346/BANML160401_izfelr.jpg",
        series: "Gundam Unicorn",
        releaseDate: "04-2016",
        price: 24000
    },
    {
        gunplaName: "Unicorn Gundam Full Armor Equipment Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957120/N2266772001007_012_drvhot.jpg",
        series: "Gundam Unicorn",
        releaseDate: "01-2015",
        price: 7029
    },
    {
        gunplaName: "Banshee Expansion Pack",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988350/pg_banshee_expansion_vn_bs_2_gcl24m.jpg",
        series: "Gundam Unicorn",
        releaseDate: "12-2015",
        price: 4320
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