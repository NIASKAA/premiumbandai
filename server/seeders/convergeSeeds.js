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
    }
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