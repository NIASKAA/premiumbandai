const {GFrame} = require('../models')

const GFrameSeeds = [
    {
        gunplaName: 'Gundam Unicorn Perfectibility',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994839/01_1_xa81of.jpg',
        series: 'Gundam Unicorn',
        releaseDate: '03-2022',
        price: 3900
    },
    {
        gunplaName: 'Hi-Nu Gundam',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994833/01_2_r31wdh.jpg',
        series: "Char's CounterAttack",
        releaseDate: '07-2021',
        price: 3500
    },
    {
        gunplaName: 'Gelgoog Weltex Testarossa',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994833/01_3_hnqgn2.jpg',
        series: 'Gundam MSV-R',
        releaseDate: '06-2021',
        price: 2700
    },
    {
        gunplaName: 'High Mobility Type Gelgoog Kai (Johnny Ridden)',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994833/11_xzxfzb.jpg',
        series: 'Gundam MSV-R',
        releaseDate: '06-2021',
        price: 2700
    },
    {
        gunplaName: 'GP01 % GPO2 Option Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994833/01_4_phhxzl.jpg',
        series: 'Stardust Memory',
        releaseDate: '01-2021',
        price: 2970
    },
    {
        gunplaName: 'Gundam Unit 7 FA Set ',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994833/01_5_fmlcqj.jpg',
        series: 'Gundam Battlefield Record U.C. 0081',
        releaseDate: '12-2020',
        price: 7200
    },
    {
        gunplaName: 'Hazel Kai (Deployment Color) & Optional Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994834/10_1_c4blhn.jpg',
        series: 'Advance of Zeta',
        releaseDate: '09-2020',
        price: 5400
    },
    {
        gunplaName: 'Hazel Kai Optional Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994834/09_vn7ysn.jpg',
        series: 'Advance of Zeta',
        releaseDate: '04-2020',
        price: 3500
    },
    {
        gunplaName: 'G3 Gundam & Rick Dom (Char Ver.)',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994833/01_6_wyzc7a.jpg',
        series: 'Mobile Suit Gundam',
        releaseDate: '01-2020',
        price: 4000
    },
    {
        gunplaName: 'ZZ Gundam/Enhanced ZZ Gundam',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994834/01_7_wedait.jpg',
        series: 'ZZ Gundam',
        releaseDate: '10-2019',
        price: 4600
    },
    {
        gunplaName: 'Gundam Sisquiede (Titan Color)',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994832/10_2_jlliuc.jpg',
        series: 'SD Generations G Generations Monoeye Gundam',
        releaseDate: '03-2019',
        price: 3520
    },
    {
        gunplaName: 'Gundam Sisquiede (AEUG Color)',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994839/00_gdbjl0.jpg',
        series: 'SD Generations G Generation Monoeye Gundam',
        releaseDate: '08-2019',
        price: 3200
    },
    {
        gunplaName: 'Hyaku Shiki Kai/Mass Production Type',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994839/00_1_umr2me.jpg',
        series: 'Gundam MSV-R',
        releaseDate: '03-2019',
        price: 5000
    },
    {
        gunplaName: 'Gundam Unicorn Phenex Narrative Ver',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994839/00_2_mrasbj.jpg',
        series: 'Gundam Narrative',
        releaseDate: '01-2019',
        price: 3500
    },
    {
        gunplaName: 'EXS Gundam',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994839/00_3_zdzmaq.jpg',
        series: 'Gundam Sentinel',
        releaseDate: '10-2018',
        price: 4500
    },
];

const GFrameSeed = async () => {
    try {
        await GFrame.deleteMany({});
        const gFrame = await GFrame.insertMany(GFrameSeeds)
        console.log(gFrame)
        return;
    } catch (error) {
        console.log(error)
        return;
    }
}

module.exports = {GFrameSeed};