const {RE100} = require('../models')

const re100Seeds = [
    {
        gunplaName: "Vigna-Ghina II (Jupiter Battle Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333023/re-100-vigna-ghina-ii-jupiter-battle-ver_1_uhm7xj.jpg",
        series: "Crossbone Gundam",
        releaseDate: "04-2021",
        price: 4620
    },
    {
        gunplaName: "Bawaoo (Mass Production Type)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631022705/re-100-bawoo-mass-production-type_1_ixt0md.jpg",
        series: "ZZ Gundam",
        releaseDate: "09-2017",
        price: 3780
    },
    {
        gunplaName: "Gunblaster",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631034377/re-100-gunblaster_aiqcxb.jpg",
        series: "Victory Gundam",
        releaseDate: "03-2019",
        price: 3780
    },
    {
        gunplaName: "Nightingale Effect Parts",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850842/mg_sazabi_effect_parts_4_sais94.jpg",
        series: "Char's Counterattack",
        releaseDate: "07-2015",
        price: 1836
    },
    {
        gunplaName: "Shokew",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675360/re-100-shokew_1_svbvnr.jpg",
        series: "Victory Gundam",
        releaseDate: "05-2020",
        price: 4180
    },
    {
        gunplaName: "Gun-EZ Ground Type",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717564/re-100-gun-ez-ground-type1_hhwkvc.jpg",
        series: "Victory Gundam",
        releaseDate: '06-2019',
        price: 3780
    },
    {
        gunplaName: "Vigna Ghina (Extra Finish)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333023/re-100-vigna-ghina-extra-finish_1_tyust6.jpg",
        series: "Gundam F91",
        releaseDate: '07-2021',
        price: 7040
    },
    {
        gunplaName: "Gun-EZ Ground Type (Bluebird Team Colors)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631034823/re-100-gunez-ground-type_1_qp2dpm.jpg",
        series: "Victory Gundam",
        releaseDate: '07-2020',
        price: 3850
    },
    {
        gunplaName: "Gun-EZ Prototype (Roll Out Colors)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717564/re-100-prototype-gun-ez-rollout-colors_1_ygsf2r.jpg",
        series: "Victory Gundam",
        releaseDate: '01-2020',
        price: 3850
    },
    {
        gunplaName: "Vigna-Zirah",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630723172/re-100-vigna-zirah_1_qks4wv.jpg",
        series: "Gundam F91",
        releaseDate: '11-2019',
        price: 4400
    },
    {
        gunplaName: "Guncannon DT (Z-MSV Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995581/re-100-guncannon-DT-z-msv_1_sfqsks.jpg",
        series: "Zeta Gundam MSV",
        releaseDate: '04-2018',
        price: 4104
    },
    {
        gunplaName: "Vigna Ghina II",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631035258/32032_76163-2_frltvn.jpg",
        series: "Crossbone Gundam",
        releaseDate: '09-2019',
        price: 3996
    },
    {
        gunplaName: "Efreet Schneid",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020889/banm160910_o6pawi.jpg",
        series: "Missing Link",
        releaseDate: '09-2016',
        price: 3500
    },
    {
        gunplaName: "Jagd Doga (Quess Paraya)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762479/re-100-quess-paraya-jagd-doga_1_vjz3di.jpg",
        series: "Char's Counterattack",
        releaseDate: '01-2019',
        price: 4860
    },
    {
        gunplaName: "Vigna Ghina (Berah Ronah Special)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725876/vigna-ghina-berah-ronah-special_1_pizwrr.jpg",
        series: "Crossbone Gundam",
        releaseDate: '11-2018',
        price: 4000
    },
    {
        gunplaName: "Gundam MK III Unit-8",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762478/re-100-gundam-mk-III-unit-8_1_fbsssw.jpg",
        series: "MSV",
        releaseDate: '06-2018',
        price: 3780
    },
    {
        gunplaName: "Rebawoo",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812852/p-bandai-re-100-rebawoo_1_knsrjt.jpg",
        series: "Gundam Unicorn MSV",
        releaseDate: '02-2017',
        price: 4536
    },
    {
        gunplaName: "Wing Gundam EW",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725877/hirm-wing-gundam-EW_1_vhdhon.jpg",
        series: "Gundam Wing Endless Waltz",
        releaseDate: '02-2019',
        price: 13500
    },
];

const re100Seed = async () => {
    try {
        await RE100.deleteMany({});
        const re100 = await RE100.insertMany(re100Seeds)
        console.log(re100)
    } catch (error) {
        console.log(error);
        return;
    }
}

module.exports = {re100Seed}