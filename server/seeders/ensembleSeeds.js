const {Ensemble} = require('../models')

const ensembleSeeds = [
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
        releaseDate: '',
        price: 5690
    },
    {
        gunplaName: 'Power Loader Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994838/N2593093001001_001_wba4v5.jpg',
        series: 'Gundam Seed Astray',
        releaseDate: '',
        price: 8175
    },
    {
        gunplaName: 'Strike Freedom Gundam',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994838/N2580817001001_015_ywxznh.jpg',
        series: 'Gundam Seed Destiny',
        releaseDate: '',
        price: 5200
    },
    {
        gunplaName: 'Freedom Gundam',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994833/ensemble-freedom-gundam-ex-14_1_mbf4mj.jpg',
        series: 'Gundam Seed',
        releaseDate: '',
        price: 5200
    },
    {
        gunplaName: 'Gundam Virtue',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994837/N2578150001001_001_brzvnk.jpg',
        series: 'Gundam 00',
        releaseDate: '',
        price: 5400
    },
    {
        gunplaName: 'Earth Alliance Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994837/N2578151001001_001_sfhmo0.jpg',
        series: 'Gundam Seed',
        releaseDate: '',
        price: 10200
    },
    {
        gunplaName: 'Justice Gundam',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994838/N2578149001001_001_j64ati.jpg',
        series: 'Gundam Seed',
        releaseDate: '',
        price: 4520
    },
    {
        gunplaName: 'Meteor Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994835/N2500692001002_009_nn47xt.jpg',
        series: 'Gundam Seed',
        releaseDate: '',
        price: 4520
    },
    {
        gunplaName: 'Nightingale',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994837/N2559533001001_001_qb6lok.jpg',
        series: "Char's Counterattack",
        releaseDate: '',
        price: 7150
    },
    {
        gunplaName: 'Hi-Nu Gundam',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994837/N2559534001001_001_t00wlw.jpg',
        series: "Char's Counterattack",
        releaseDate: '',
        price: 4670
    },
    {
        gunplaName: 'Gundam F90 A Type',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994837/N2551139001001_001_zjsiwr.jpg',
        series: 'Gundam F90',
        releaseDate: '',
        price: 4080
    },
    {
        gunplaName: 'Gundam F90 V Type',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994839/N2551140001001_001_dgpyqe.jpg',
        series: 'Gundam F90',
        releaseDate: '',
        price: 4080
    },
    {
        gunplaName: 'Kshatriya',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994838/p-bandai-kshatriya-mobile-suit-ensemble-ex-02_1_btwndl.jpg',
        series: 'Gundam Unicorn',
        releaseDate: '',
        price: 4080
    },
    {
        gunplaName: 'Hazel Custom (Titans Set)',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994834/gundam-tr-1-hazel-custom-titans-color-set_3_zzew6v.jpg',
        series: 'Advance of Zeta',
        releaseDate: '',
        price: 4820
    },
    {
        gunplaName: 'TR-6 Inle (Titans Color)',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994836/N2543341001001_001_rwh8t2.jpg',
        series: 'Advance of Zeta',
        releaseDate: '',
        price: 17380
    },
    {
        gunplaName: 'Gigantic Arm Unit Hazel Custom',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994836/N2543342001001_009_udwzq3.jpg',
        series: 'Advance of Zeta',
        releaseDate: '',
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
        releaseDate: '',
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
        releaseDate: '',
        price: 5100
    },
    {
        gunplaName: 'Gundam Unit 7 FA',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994835/N2516096001001_006_vgkrxj.jpg',
        series: 'Gundam Battlefield Record of U.C 0081',
        releaseDate: '',
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
        releaseDate: '',
        price: 4670
    },
    {
        gunplaName: '',
        image: '',
        series: '',
        releaseDate: '',
        price: 5200
    },
    {
        gunplaName: '',
        image: '',
        series: '',
        releaseDate: '',
        price: 5200
    },
    {
        gunplaName: '',
        image: '',
        series: '',
        releaseDate: '',
        price: 5200
    },
    {
        gunplaName: '',
        image: '',
        series: '',
        releaseDate: '',
        price: 5200
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