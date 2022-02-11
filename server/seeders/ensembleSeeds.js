const {Ensemble} = require('../models')

const ensembleSeeds = [
    {
        gunplaName: 'Crossbone Gundam Full Cloth',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1644596403/1000170765_2_large_bujvkb.jpg',
        series: 'Crossbone Gundam',
        releaseDate: '07-2022',
        price: 5500
    },
    {
        gunplaName: 'Full Armor ZZ Gundam',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1644326182/mobile-suit-gundam-mobile-suit-ensemble-ex37-full-armor-zz-gundam-limited-edition-bandai-_zkptvw.jpg',
        series: 'ZZ Gundam',
        releaseDate: '06-2022',
        price: 5500
    },
    {
        gunplaName: 'Quebeley Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1644326184/mobile-suit-gundam-mobile-suit-ensemble-ex38-qubeley-set-limited-edition-bandai-_uwht9c.jpg',
        series: 'ZZ Gundam',
        releaseDate: '06-2022',
        price: 7150
    },
    {
        gunplaName: 'Destiny Gundam',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994838/N2598263001001_001_oe8n5u.jpg',
        series: 'Gundam Seed Destiny',
        releaseDate: '02-2022',
        price: 5100
    },
    {
        gunplaName: 'Strike Freendom & Destiny Gundam Wings of Light Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994838/N2598264001001_006_mpm9pv.jpg',
        series: 'Gundam Seed Destiny',
        releaseDate: '02-2022',
        price: 1750
    },
    {
        gunplaName: 'Gundam Age-1 FA',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994838/N2598265001001_001_tnh7fs.jpg',
        series: 'Gundam Age',
        releaseDate: '02-2022',
        price: 5690
    },
    {
        gunplaName: 'Power Loader Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994838/N2593093001001_001_wba4v5.jpg',
        series: 'Gundam Seed Astray',
        releaseDate: '12-2021',
        price: 8175
    },
    {
        gunplaName: 'Strike Freedom Gundam',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994838/N2580817001001_015_ywxznh.jpg',
        series: 'Gundam Seed Destiny',
        releaseDate: '09-2021',
        price: 5200
    },
    {
        gunplaName: 'Freedom Gundam',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994833/ensemble-freedom-gundam-ex-14_1_mbf4mj.jpg',
        series: 'Gundam Seed',
        releaseDate: '01-2020',
        price: 5200
    },
    {
        gunplaName: 'Gundam Virtue',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994837/N2578150001001_001_brzvnk.jpg',
        series: 'Gundam 00',
        releaseDate: '09-2021',
        price: 5400
    },
    {
        gunplaName: 'Earth Alliance Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994837/N2578151001001_001_sfhmo0.jpg',
        series: 'Gundam Seed',
        releaseDate: '09-2021',
        price: 10200
    },
    {
        gunplaName: 'Justice Gundam',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994838/N2578149001001_001_j64ati.jpg',
        series: 'Gundam Seed',
        releaseDate: '07-2021',
        price: 4520
    },
    {
        gunplaName: 'Meteor Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994835/N2500692001002_009_nn47xt.jpg',
        series: 'Gundam Seed',
        releaseDate: '01-2020',
        price: 4520
    },
    {
        gunplaName: 'Nightingale',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994837/N2559533001001_001_qb6lok.jpg',
        series: "Char's Counterattack",
        releaseDate: '04-2021',
        price: 7150
    },
    {
        gunplaName: 'Hi-Nu Gundam',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994837/N2559534001001_001_t00wlw.jpg',
        series: "Char's Counterattack",
        releaseDate: '04-2021',
        price: 4670
    },
    {
        gunplaName: 'Gundam F90 A Type',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994837/N2551139001001_001_zjsiwr.jpg',
        series: 'Gundam F90',
        releaseDate: '03-2021',
        price: 4080
    },
    {
        gunplaName: 'Gundam F90 V Type',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994839/N2551140001001_001_dgpyqe.jpg',
        series: 'Gundam F90',
        releaseDate: '03-2021',
        price: 4080
    },
    {
        gunplaName: 'Kshatriya',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994838/p-bandai-kshatriya-mobile-suit-ensemble-ex-02_1_btwndl.jpg',
        series: 'Gundam Unicorn',
        releaseDate: '07-2017',
        price: 4080
    },
    {
        gunplaName: 'Hazel Custom (Titans Set)',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994834/gundam-tr-1-hazel-custom-titans-color-set_3_zzew6v.jpg',
        series: 'Advance of Zeta',
        releaseDate: '09-2017',
        price: 4820
    },
    {
        gunplaName: 'TR-6 Inle (Titans Color)',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994836/N2543341001001_001_rwh8t2.jpg',
        series: 'Advance of Zeta',
        releaseDate: '12-2020',
        price: 17380
    },
    {
        gunplaName: 'Gigantic Arm Unit Hazel Custom',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994836/N2543342001001_009_udwzq3.jpg',
        series: 'Advance of Zeta',
        releaseDate: '10-2020',
        price: 7000
    },
    {
        gunplaName: 'Gundam F90 II',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994836/N2537431001001_001_sb17vy.jpg',
        series: 'Gundam F90',
        releaseDate: '',
        price: 4820
    },
    {
        gunplaName: 'EXS Gundam',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994836/N2537430001001_001_akjgvi.jpg',
        series: 'Gundam Sentinel',
        releaseDate: '10-2020',
        price: 4820
    },
    {
        gunplaName: 'Gundam Leopard & Airmaster Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994835/N2526702001001_001_jcunbh.jpg',
        series: 'Gundam X',
        releaseDate: '07-2020',
        price: 5700
    },
    {
        gunplaName: 'Double X Gundam & G-Falcon Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994835/N2526703001001_004_cxm1hk.jpg',
        series: 'Gundam X',
        releaseDate: '09-2018',
        price: 5100
    },
    {
        gunplaName: 'Gundam Unit 7 FA',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994835/N2516096001001_006_vgkrxj.jpg',
        series: 'Gundam Battlefield Record of U.C 0081',
        releaseDate: '05-2020',
        price: 5700
    },
    {
        gunplaName: 'Gundam G-Self Perfect Pack',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994832/ensemble-g-self-perfect-pack_1_ngvl1p.jpg',
        series: 'Reconguista of G',
        releaseDate: '04-2020',
        price: 5200
    },
    {
        gunplaName: 'V2 Assault Buster Gundam',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994835/N2500693001001_007_q6zvvi.jpg',
        series: 'Victory Gundam',
        releaseDate: '03-2020',
        price: 4670
    },
    {
        gunplaName: 'Gundam Virsago & Gundam Ashtaron',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994839/Virsago_Chest_Break_Gundam_Ashtaron_Hermit_Crab_set_1_jwgbdk.jpg',
        series: 'Gundam X',
        releaseDate: '10-2019',
        price: 6100
    },
    {
        gunplaName: 'Apsaras II',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994835/N2480509001001_002_sovkf1.jpg',
        series: 'Gundam 08th Team',
        releaseDate: '08-2019',
        price: 4520
    },
    {
        gunplaName: 'TR-6 Inre',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994834/ms-ensemble-gundam-inle_4_sa4krd.jpg',
        series: 'Advance of Zeta',
        releaseDate: '02-2019',
        price: 15700
    },
    {
        gunplaName: 'Gundam Unicorn FA Destroy Mode',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994835/N2497089001001_001_qq9sa1.jpg',
        series: 'Gundam Unicorn',
        releaseDate: '',
        price: 3060
    },
    {
        gunplaName: 'Gundam F90',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994835/N2454523001001_001_mhvcyd.jpg',
        series: 'Gundam F90',
        releaseDate: '03-2019',
        price: 3640
    },
    {
        gunplaName: 'Gundam F91 Expansion Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994835/N2468572001001_009_w7k2tj.jpg',
        series: 'Gundam F91',
        releaseDate: '03-2019',
        price: 2620
    },
    {
        gunplaName: 'Sazabi',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994835/N2441492001001_001_i2od8s.jpg',
        series: "Char's CounterAttack",
        releaseDate: '12-2018',
        price: 4080
    },
    {
        gunplaName: 'Zanneck',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994834/N2426386001001_001_yqfdtq.jpg',
        series: 'Victory Gundam',
        releaseDate: '08-2018',
        price: 3790
    },
    {
        gunplaName: 'Gundam Qant Full Saber',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994834/mobile-suit-ensemble-00-quanta-full-saber_2_vepxzw.jpg',
        series: 'Gundam 00',
        releaseDate: '08-2018',
        price: 2770
    },
    {
        gunplaName: 'Gundam 00 XN Raiser',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994834/mobile-suit-ensemble-00-xn-raiser_2_tcl1yc.jpg',
        series: 'Gundam 00',
        releaseDate: '08-2018',
        price: 3060
    },
    {
        gunplaName: 'Nu Gundam Fin Funnel Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994838/nu-gundam-mobile-suit-ensemble_1_fby6ys.jpg',
        series: "Char's Counterattack",
        releaseDate: '02-2018',
        price: 2040
    },
    {
        gunplaName: 'Woundwart & Dandelion Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994834/N2397146001001_001_gkgj27.jpg',
        series: 'Advance of Zeta',
        releaseDate: '01-2018',
        price: 7440
    },
    {
        gunplaName: 'Gundam Unicorn FA Awaken Ver.',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994834/N2363295001001_001_etf6ad.jpg',
        series: 'Gundam Unicorn',
        releaseDate: '03-2017',
        price: 2920
    },
];

const ensembleSeed = async () => {
    try {
        await Ensemble.deleteMany({});
        const ensemble = await Ensemble.insertMany(ensembleSeeds)
        console.log(ensemble)
        return;
    } catch (error) {
        console.log(error);
        return;
    }
}

module.exports = {ensembleSeed};