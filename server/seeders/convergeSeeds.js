const {Converge} = require('../models')

const convergeSeeds = [
    {
        gunplaName: "Gundam Anchor and Phantom Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1629989235/01_bzq8x1.jpg",
        series: "Gundam Dust",
        releaseDate: 11-2021,
        price: 4500
    },
    {
        gunplaName: "Freedom Gundam CORE Ver.GCP",
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630175544/freedom_tnfb8e.jpg',
        series: 'Gundam Seed',
        releaseDate: 10-2021,
        price: 2100
    },
    {
        gunplaName: "Pegasus-Class Ship White Base",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630246466/dffd_zyhuzi.jpg",
        series: 'Mobile Suit Gundam',
        releaseDate: 08-2021,
        price: 4500
    },
    {
        gunplaName: "U.C. Set 10th Anniversary",
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630246671/fdffd_jcvt02.jpg',
        series: 'All',
        releaseDate: 05-2021,
        price: 5400
    },
    {
        gunplaName: 'Black Teritary Star Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630278898/gg_czmtho.jpg',
        series: 'Mobile Suit Gundam',
        releaseDate: 04-2021,
        price: 5100
    },
    {
        gunplaName: 'α/Azir Optional Parts',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630246864/vd_pd0i4a.jpg',
        series: 'Char CounterAttack',
        releaseDate: 02-2021,
        price: 2300
    },
    {
        gunplaName: 'Shulack Corps Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630278918/dd_kzb12e.jpg',
        series: 'Victory Gundam',
        releaseDate: 11-2020,
        price: 6300
    },
    {
        gunplaName: 'Casval exclusive Gundam',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630278833/hh_yegrqi.jpg',
        series: 'Mobile Suit Gundam',
        releaseDate: 08-2020,
        price: 1500
    },
    {
        gunplaName: 'Red Comet Trail Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630278834/xf_cjtwuv.jpg',
        series: 'All',
        releaseDate: 08-2020,
        price: 3900
    },
    {
        gunplaName: 'Core Neue Ziel',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630279843/df_sxzjyv.jpg',
        series: 'Stardust Memory',
        releaseDate: 07-2020,
        price: 3700
    },
    {
        gunplaName: 'Ghost Gundam Light Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630279844/dfd_y53xi7.jpg',
        series: 'Crossbone Gundam',
        releaseDate: 06-2020,
        price: 3200
    },
    {
        gunplaName: 'Hi-v Gundam & Nightingale Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630279845/01_uyfzt9.jpg',
        series: "Char's CounterAttack",
        releaseDate: 04-2020,
        price: 4800
    },
    {
        gunplaName: "Gundam Real Type Set Core Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630723172/fw-gundam-converge-real-type_1_doiccy.jpg",
        series: "MSV",
        releaseDate: 11-2019,
        price: 5280
    },
    {
        gunplaName: "Narrative Gundam A Pack",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717562/FW-GUNDAM-CONVERGE-NARRATIVE-A-PACKS_1_us85mg.jpg",
        series: "Gundam Unicorn NT",
        releaseDate: 10-2019,
        price: 6600
    },
    {
        gunplaName: "Neo Zeong Option Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717561/fw-gundam-converge-ii-neo-zeong-extension-parts_1_gopcwe.jpg",
        series: "Gundam Unicorn NT",
        releaseDate: 09-2019,
        price: 3024
    },
    {
        gunplaName: "Neo Zeong",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717561/fw-converge-ii-neo-zeong_1_r919fw.jpg",
        series: "Gundam Unicorn NT",
        releaseDate: 09-2019,
        price: 4536
    },
    {
        gunplaName: "Pale Rider (Hades System Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725878/p-bandai-pale-rider-hade_3_wjc15t.jpg",
        series: "Missing Link",
        releaseDate: 03-2019,
        price: 2808
    },
    {
        gunplaName: "Gundam Unicorn Phenex NT",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725875/fw-converge-phenex-n_q6mcxj.jpg",
        series: "Gundam Narrative",
        releaseDate: 02-2019,
        price: 2484
    },
    {
        gunplaName: "Crossbone Gundam X3",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725875/fw-gundam-converge-core-xbone-gundam-x3_1_jj24fw.jpg",
        series: "Crossbone Gundam",
        releaseDate: 01-2019,
        price: 2376
    },
    {
        gunplaName: "Neo Zeong (Metallic Coating)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725875/fw-gundam-converge-core-neo-neo-zeong_1_nbureg.jpg",
        series: "Gundam Unicorn",
        releaseDate: 01-2019,
        price: 7560
    },
    {
        gunplaName: "Rafflesia + Heavygun Option",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725878/rafflesia_heavygun-option-set_1_xresh1.jpg",
        series: "Gundam F91",
        releaseDate: 11-2018,
        price: 2592
    },
    {
        gunplaName: "White Base",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762479/fw-gundam-converge-white-base_1_l3oamp.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: 03-2018,
        price: 24840
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

const convergeSeed = async () => {
    try {
        await Converge.deleteMany({});
        const converge = await Converge.insertMany(convergeSeeds);
        console.log(converge);
        return;
    } catch (error) {
        console.log(error);
        return;
    }
}

module.exports = {convergeSeed};