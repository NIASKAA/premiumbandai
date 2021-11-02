  const {Converge} = require('../models')

const convergeSeeds = [
    {
        gunplaName: "Solomon's Nightmare 302 Patrol Squadron Set",
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1635876472/01_tpzvyi.jpg',
        series: 'Mobile Suit Gundam',
        releaseDate: '05-2022',
        price: 5100
    },
    {
        gunplaName: 'Unicorn Gundam Perfectibility (Destroy Mode)',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1634994834/01_spaxs9.jpg',
        series: 'Gundam Unicorn',
        releaseDate: '03-2022',
        price: 3500
    },
    {
        gunplaName: "Gundam Converge Plus03 Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1634751685/01_zextxh.jpg",
        series: "All",
        releaseDate: "03-2022",
        price: 4950
    },
    {
        gunplaName: "Gundam Anchor and Phantom Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1629989235/01_bzq8x1.jpg",
        series: "Gundam Dust",
        releaseDate: "11-2021",
        price: 4500
    },
    {
        gunplaName: "Freedom Gundam CORE Ver.GCP",
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630175544/freedom_tnfb8e.jpg',
        series: 'Gundam Seed',
        releaseDate: "10-2021",
        price: 2100
    },
    {
        gunplaName: "Pegasus-Class Ship White Base",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630246466/dffd_zyhuzi.jpg",
        series: 'Mobile Suit Gundam',
        releaseDate: "08-2021",
        price: 4500
    },
    {
        gunplaName: "U.C. Set 10th Anniversary",
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630246671/fdffd_jcvt02.jpg',
        series: 'All',
        releaseDate: "05-2021",
        price: 5400
    },
    {
        gunplaName: 'Black Teritary Star Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630278898/gg_czmtho.jpg',
        series: 'Mobile Suit Gundam',
        releaseDate: "04-2021",
        price: 5100
    },
    {
        gunplaName: 'α/Azir Optional Parts',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630246864/vd_pd0i4a.jpg',
        series: 'Char CounterAttack',
        releaseDate: "02-2021",
        price: 2300
    },
    {
        gunplaName: 'Shulack Corps Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630278918/dd_kzb12e.jpg',
        series: 'Victory Gundam',
        releaseDate: "11-2020",
        price: 6300
    },
    {
        gunplaName: 'Casval exclusive Gundam',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630278833/hh_yegrqi.jpg',
        series: 'Mobile Suit Gundam',
        releaseDate: "08-2020",
        price: 1500
    },
    {
        gunplaName: 'Red Comet Trail Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630278834/xf_cjtwuv.jpg',
        series: 'All',
        releaseDate: "08-2020",
        price: 3900
    },
    {
        gunplaName: 'Core Neue Ziel',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630279843/df_sxzjyv.jpg',
        series: 'Stardust Memory',
        releaseDate: "07-2020",
        price: 3700
    },
    {
        gunplaName: 'Ghost Gundam Light Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630279844/dfd_y53xi7.jpg',
        series: 'Crossbone Gundam',
        releaseDate: "06-2020",
        price: 3200
    },
    {
        gunplaName: "Endless Waltz Operation Meteor Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631058435/01_abo8di.jpg",
        series: "Gundam Wing Endless",
        releaseDate: "01-2020",
        price: 5600
    },
    {
        gunplaName: 'Hi-v Gundam & Nightingale Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630279845/01_uyfzt9.jpg',
        series: "Char's CounterAttack",
        releaseDate: "04-2020",
        price: 4800
    },
    {
        gunplaName: "Gundam Real Type Set Core Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630723172/fw-gundam-converge-real-type_1_doiccy.jpg",
        series: "MSV",
        releaseDate: "11-2019",
        price: 5280
    },
    {
        gunplaName: "Narrative Gundam A Pack",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717562/FW-GUNDAM-CONVERGE-NARRATIVE-A-PACKS_1_us85mg.jpg",
        series: "Gundam Unicorn NT",
        releaseDate: "10-2019",
        price: 6600
    },
    {
        gunplaName: "Neo Zeong Option Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717561/fw-gundam-converge-ii-neo-zeong-extension-parts_1_gopcwe.jpg",
        series: "Gundam Unicorn NT",
        releaseDate: "09-2019",
        price: 3024
    },
    {
        gunplaName: "Neo Zeong",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717561/fw-converge-ii-neo-zeong_1_r919fw.jpg",
        series: "Gundam Unicorn NT",
        releaseDate: "09-2019",
        price: 4536
    },
    {
        gunplaName: "Pale Rider (Hades System Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725878/p-bandai-pale-rider-hade_3_wjc15t.jpg",
        series: "Missing Link",
        releaseDate: "03-2019",
        price: 2808
    },
    {
        gunplaName: "Gundam Unicorn Phenex NT",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725875/fw-converge-phenex-n_q6mcxj.jpg",
        series: "Gundam Narrative",
        releaseDate: "02-2019",
        price: 2484
    },
    {
        gunplaName: "Crossbone Gundam X3",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725875/fw-gundam-converge-core-xbone-gundam-x3_1_jj24fw.jpg",
        series: "Crossbone Gundam",
        releaseDate: "01-2019",
        price: 2376
    },
    {
        gunplaName: "Neo Zeong (Metallic Coating)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725875/fw-gundam-converge-core-neo-neo-zeong_1_nbureg.jpg",
        series: "Gundam Unicorn",
        releaseDate: "01-2019",
        price: 7560
    },
    {
        gunplaName: "Rafflesia + Heavygun Option",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725878/rafflesia_heavygun-option-set_1_xresh1.jpg",
        series: "Gundam F91",
        releaseDate: "11-2018",
        price: 2592
    },
    {
        gunplaName: "FA Unicorn Gundam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631058211/00_7_wlf3mq.jpg",
        series: "Gundam Unicorn",
        releaseDate: "08-2018",
        price: 2700
    },
    {
        gunplaName: "Psycho Gundam MK II Expansion Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631058211/00_6_szbgbd.jpg",
        series: "ZZ Gundam",
        releaseDate: "06-2018",
        price: 2100
    },
    {
        gunplaName: "Fazz Core",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631058212/00_5_egbagv.jpg",
        series: "Gundam Sentinel",
        releaseDate: "05-2018",
        price: 2300
    },
    {
        gunplaName: "White Base",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762479/fw-gundam-converge-white-base_1_l3oamp.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: "03-2018",
        price: 24840
    },
    {
        gunplaName: "Gundam 00 10th Anniversary Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631058212/00_4_gaicjm.jpg",
        series: "Gundam 00",
        releaseDate: "02-2018",
        price: 5500
    },
    {
        gunplaName: "Gundam Virtue Core",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631058211/10_2_vgvol2.jpg",
        series: "Gundam 00",
        releaseDate: "02-2018",
        price: 2200
    },
    {
        gunplaName: "God Gundam Hyper Mode Core",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631058212/00_3_rqvnjw.jpg",
        series: "Mobile Fighter God Gundam",
        releaseDate: "12-2017",
        price: 2000
    },
    {
        gunplaName: "Gundam MK II Full Weapon Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631058210/05_1_mrgg14.jpg",
        series: "Zeta Gundam",
        releaseDate: "09-2017",
        price: 2000
    },
    {
        gunplaName: "Shamblo",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812855/p-bandai-converge-shamblo_1_ecoozy.jpg",
        series: "Gundam Unicorn",
        releaseDate: "06-2017",
        price: 3456
    },
    {
        gunplaName: "Deep Striker Core",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631058212/00_2_q6vbwv.jpg",
        series: "Gundam Sentinel",
        releaseDate: "05-2017",
        price: 2800
    },
    {
        gunplaName: "Nu Gundam & Sazabi (Metallic Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631058211/00_1_qn5fbm.jpg",
        series: "Char's Counterattack",
        releaseDate: "04-2017",
        price: 3200
    },
    {
        gunplaName: "Neo Zeong & Unicorn Final Battle Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631058211/05_br4ijp.jpg",
        series: "Gundam Unicorn",
        releaseDate: "03-2017",
        price: 7100
    },
    {
        gunplaName: "Neo Zeong Optional Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631058211/10_1_ba5b2l.jpg",
        series: "Gundam Unicorn",
        releaseDate: "03-2017",
        price: 2000
    },
    {
        gunplaName: "Gundam Unicorn (Awaken Color) Core",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631058211/20_t6ozk0.jpg",
        series: "Gundam Unicorn",
        releaseDate: "03-2017",
        price: 2000
    },
    {
        gunplaName: "Wings of Light Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631058211/10_titohk.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: "11-2016",
        price: 2000
    },
    {
        gunplaName: "Perfect Strike Gundam Core",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812853/1000103776_1_xbvhqt.jpg",
        series: "Gundam Seed",
        releaseDate: "08-2016",
        price: 2160
    },
    {
        gunplaName: "Strike Rouge Gundam Core",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812852/1000_4_xvw9yv.jpg",
        series: "Gundam Seed",
        releaseDate: "08-2016",
        price: 2356
    },
    {
        gunplaName: "Gundam Converge Vol. 3",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812852/converge_3_p-bandai_1_uh6dp0.jpg",
        series: "All",
        releaseDate: "06-2016",
        price: 5400
    },
    {
        gunplaName: "Neue Ziel",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812851/BANC160601_yprnnd.jpg",
        series: "Stardust Memory",
        releaseDate: "06-2016",
        price: 5076
    },
    {
        gunplaName: "Nu Gundam HWS",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850841/BANC160112_bv8npe.jpg",
        series: "Char's Counterattack",
        releaseDate: "06-2016",
        price: 2000
    },
    {
        gunplaName: "Qan[T] Full Saber Core",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850840/banc150812_vk7uwp.jpg",
        series: "Gundam 00",
        releaseDate: "01-2016",
        price: 1800
    },
    {
        gunplaName: "Core Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631058211/00_exoxdi.jpg",
        series: "All",
        releaseDate: "01-2016",
        price: 4400
    },
    {
        gunplaName: "Gundam GP03D Dendrobium",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850841/banc151041_a0rkhf.jpg",
        series: "Stardust Memory",
        releaseDate: "11-2015",
        price: 3200
    },
    {
        gunplaName: "Gundam 00 Raiser Core Special Color Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850840/banc150812_vk7uwp.jpg",
        series: "Gundam 00",
        releaseDate: "08-2015",
        price: 2160
    },
    {
        gunplaName: "S Gundam Core Special Color Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850841/banc150818_qjr7p2.jpg",
        series: "Sentinel Gundam",
        releaseDate: "08-2015",
        price: 1512
    },
    {
        gunplaName: "Stardust Memory SP05",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630958217/71LQLRzovWL._AC_SX425__hw7fza.jpg",
        series: "Stardust Memory",
        releaseDate: "11-2014",
        price: 1876
    },
    {
        gunplaName: "Operation Revive Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960140/s-l1600_1_ymgouh.jpg",
        series: "All",
        releaseDate: "02-2014",
        price: 3150
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