const {RealGrade} = require("../models")

const rgSeeds = [
    {
        gunplaName: "Hi-Nu Gundam Hyper Mega Bazooka Launcher",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630183023/rg-hyper-mega-launcher-beltorchika-children_3_txyran.jpg",
        series: "Char's CounterAttack",
        releaseDate: "09-2021",
        price: 2750
    },
    {
        gunplaName: 'High Mobility Zaku II (Team Monster Custom)',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630183184/RG-high-mobility-zaku-ii-team-monstor-custom_6_usdwdy.jpg',
        series: "Gundam Build Real Project",
        releaseDate: "11-2021",
        price: 3850
    },
    {
        gunplaName: 'RX-78-2 Gundam (Bright Custom)',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333023/rg-rx-78-2-gundam-team-bright-colors_6_vvzy9q.jpg',
        series: 'Gundam Build Real Project',
        releaseDate: "11-2021",
        price: 3300
    },
    {
        gunplaName: "Nu Gundam (Titanium Finish)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333023/rg-nu-gundam-titanium-finish_1_yjo13x.jpg",
        series: "Char's Counterattack",
        releaseDate: "10-2021",
        price: 9350
    },
    {
        gunplaName: "Tallgeese III (Titanium Finish)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333024/rg-tallgeese-III-titanium_1_dspzs4.jpg",
        series: "Gundam WIng",
        releaseDate: "06-2021",
        price: 7700
    },
    {
        gunplaName: "Strike Freedom Gundam (Titanium Finish)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333023/rg-strike-freedom-gundam-titanium-finish_1_bzomso.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: "01-2021",
        price: 8250
    },
    {
        gunplaName: "Sword Impulse Gundam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333024/rg-sword-impulse-gundam_1_cv5abx.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: "11-2020",
        price: 3850
    },
    {
        gunplaName: "Nu Gundam HWS",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630683221/RG-nu-gundam-HWS_1_ytjgfc.jpg",
        series: "Char's Counterattack",
        releaseDate: "09-2020",
        price: 6600
    },
    {
        gunplaName: "HWS Expansion Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630683221/rg-nu-gundam-hws-expansion-parts_1_f0hest.jpg",
        series: "Char's Counterattack",
        releaseDate: "09-2020",
        price: 1980
    },
    {
        gunplaName: "Destiny Gundam (Titanium Finish)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675361/rg-destiny-gundam-titanium-finish_1_cdyeyt.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: "07-2020",
        price: 7150
    },
    {
        gunplaName: "Sinanju (Special Coating)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675361/rg-sinanju-special-coating_1_fwlmut.jpg",
        series: "Gundam Unicorn",
        releaseDate: "07-2020",
        price: 11000
    },
    {
        gunplaName: "Banshee Norn Destroy Mode (lighting)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675361/RG-banshee-norn-destroy-mode-lightning-model_1_ebvbgb.jpg",
        series: "Gundam Unicorn",
        releaseDate: "04-2020",
        price: 11550
    },
    {
        gunplaName: "Tallgeese (TV Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675361/rg-tallgeese-TV-ver_1_s0c9dq.jpg",
        series: "Gundam Wing",
        releaseDate: "06-2020",
        price: 2750
    },
    {
        gunplaName: "Gundam Phenex NT Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988350/rg-phenex-gundam-ver-nt_1_uqd36v.jpg",
        series: "Gundam Narrative",
        releaseDate: "02-2020",
        price: 12760
    },
    {
        gunplaName: "Crossbone Gundam X2",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675361/rg-crossbone-gundam-x2_1_ncejl8.jpg",
        series: "Crossbone Gundam",
        releaseDate: "12-2019",
        price: 3190
    },
    {
        gunplaName: "Uma Lightning Zaku II",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675361/rg-uma-lightning-zaku-II_3_on3iaj.jpg",
        series: "MSV",
        releaseDate: "01-2020",
        price: 3600
    },
    {
        gunplaName: "Double Fin Funnel Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717565/rg-nu-gundam-double-fin-funnel_1_aqhbde.jpg",
        series: "Char's Counterattack",
        releaseDate: "09-2019",
        price: 1836
    },
    {
        gunplaName: "Perfect Strike Gundam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988493/rg-perfect-strike-gundam_1_aiuyh9.jpg",
        series: "Gundam Seed",
        releaseDate: "09-2019",
        price: 4320
    },
    {
        gunplaName: "Tallgeese III",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717565/rg-tallgeese-III_1_berdgz.jpg",
        series: "Gundam Wing Endless Waltz",
        releaseDate: "07-2019",
        price: 3024
    },
    {
        gunplaName: "Sazabi (Special Coating)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717565/rg-sazabi-special-coating_1_g8x0aw.jpg",
        series: "Char's Counterattack",
        releaseDate: "08-2019",
        price: 10800
    },
    {
        gunplaName: "Gundam Exia Repair III",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717565/rg-gundam-exia-repair-III1_r4k5kf.jpg",
        series: "Gundam 00",
        releaseDate: "06-2019",
        price: 3024
    },
    {
        gunplaName: "Banshee's Armed Armor",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725875/1000133044_1_nk5zms.jpg",
        series: "Gundam Unicorn",
        releaseDate: "04-2019",
        price: 1620
    },
    {
        gunplaName: "Gundam Astray Gold Frame Amatsu Hana",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988350/rg-gundam-astray-gold-frame-amatsu-hana1_pj3rri.jpg",
        series: "Gundam Seed Astray MSV",
        releaseDate: "06-2019",
        price: 3240
    },
    {
        gunplaName: "Zaku II (Eric Mansfield)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725878/P-Bandai_RG_1144_MS-06R-1A_Zaku_II_Eric_Mansfield_Custom_fwfd59.jpg",
        series: "MSV",
        releaseDate: "05-2019",
        price: 3240
    },
    {
        gunplaName: "Gundam Banshee Norn Final Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725878/rg-banshee-norn-final-battle_1_dt3kst.jpg",
        series: "Gundam Unicorn",
        releaseDate: "02-2019",
        price: 4320
    },
    {
        gunplaName: "Tallgeese II",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988350/rg-tallgeese_II_1_tu8ash.jpg",
        series: "Gundam Wing",
        releaseDate: "12-2018",
        price: 2700
    },
    {
        gunplaName: "High Mobility Zaku II (Gabby Hazard)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725878/rg-gabby-hazzard-high-mobility-zaku-II_1_uui0is.jpg",
        series: "MSV",
        releaseDate: "10-2018",
        price: 2800
    },
    {
        gunplaName: "Tallgeese EW (Titanium Finish)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725878/rg-tallgeese-ew-titanium-finish_1_evrdtl.jpg",
        series: "Gundam Wing",
        releaseDate: "10-2018",
        price: 6696
    },
    {
        gunplaName: "Zaku Mine Layer",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020889/rg-zaku_mine-layer_1_irlyql.jpg",
        series: "MSV",
        releaseDate: "05-2018",
        price: 3240
    },
    {
        gunplaName: "Black Tri-Stars Zaku II (Triple Action Set)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762479/rg-zaku-II-black-tristar-color-with-action-base-set_1_cwwwhk.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: "03-2018",
        price: 9720
    },
    {
        gunplaName: "Zaku II Black Tri-Star",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020889/rg-black-tristar-zaku-ii_1_tuff9j.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: "03-2018",
        price: 3440
    },
    {
        gunplaName: "Zeta Gundam (Biosensor Image)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762479/rg-zeta-gundam-biosensor-image-color_1_kfcnb3.jpg",
        series: "Zeta Gundam",
        releaseDate: "02-2018",
        price: 3240
    },
    {
        gunplaName: "Zaku II (Shin Matsunaga)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762479/rg-shin-matsunaga-zaku-r1a_1_vei7we.jpg",
        series: "MSV",
        releaseDate: "01-2018",
        price: 3240
    },
    {
        gunplaName: "Wing Gundam Zero Custom EW + Drei Zwerg (Special Coating)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762478/mg-wing-gundam-zero-custom-ew-drei-zwerg-special-coating_1_qnvihk.jpg",
        series: "Gundam Wing Endless Waltz",
        releaseDate: "01-2018",
        price: 10800
    },
    {
        gunplaName: "Gundam 00 Seven Sword Inspection Color",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020889/rg-00-gundam-seven-sword-g_1_ww1lt6.jpg",
        series: "Gundam 00",
        releaseDate: "12-2017",
        price: 3780
    },
    {
        gunplaName: "Qan[T] Trans-AM Injection",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762478/rg-00-quanta-trans-am-gloss-injection_1_p11d5j.jpg",
        series: "Gundam 00",
        releaseDate: "12-2017",
        price: 2700
    },
    {
        gunplaName: "Build Strike Gundam Full Package (RG Color)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762479/rg-build-strike-gundam-full-package-rg-system-image-colors_1_lldyol.jpg",
        series: "Gundam Build Fighters",
        releaseDate: "11-2017",
        price: 2700
    },
    {
        gunplaName: "Gundam Astray Gold Frame Amatsu",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020889/rg-gundam-astray-gold-frame-amatsu_1_ux4ft6.jpg",
        series: "Gundam Seed Astray",
        releaseDate: "09-2017",
        price: 3465
    },
    {
        gunplaName: "Gundam MK II (Amuro Ray Color)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812852/RG-GUNDAM-MK-II-AMURO-RAY_1_ej0kna.jpg",
        series: "Zeta Gundam",
        releaseDate: "08-2017",
        price: 2700
    },
    {
        gunplaName: "Zeta Gundam (Amuro Ray Color)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812852/rg-zeta-gundam-rg-limited-color-ver_1_gcx5uo.jpg",
        series: "Zeta Gundam",
        releaseDate: "08-2017",
        price: 3456
    },
    {
        gunplaName: "Qant[T] Full Saber",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812851/1000113021_1_dnfuz5.jpg",
        series: "Gundam 00",
        releaseDate: "04-2017",
        price: 3456 
    },
    {
        gunplaName: "Gundam Flauros (Calamity War Type)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812853/1000112649_2_rxnhrz.jpg",
        series: "Iron Blood Orphan",
        releaseDate: "04-2017",
        price: 1836
    },
    {
        gunplaName: "CM Cannon (North American Colors)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812854/mg-gm-cannon-north-american-campaign-colors_1_ybuf3v.jpg",
        series: "MSV",
        releaseDate: "04-2017",
        price: 4320
    },
    {
        gunplaName: "Zeta Gundam 3",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631026015/rg-zeta-gundam-3-karaba-assault-ver_1_irge2k.jpg",
        series: "Gundam Evolve",
        releaseDate: "03-2017",
        price: 3000
    },
    {
        gunplaName: "Strike Gundam (Deactive Mode)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631026015/p-bandai-rg-strike-gundam-deactive-mode_1_wtusnt.jpg",
        series: "Gundam Seed",
        releaseDate: "02-2017",
        price: 2160
    },
    {
        gunplaName: "Gundam 00 Seven Sword",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631024017/rg-00-gundam-seven-sword_1_smoy1b.jpg",
        series: "Gundam 00",
        releaseDate: "12-2016",
        price: 3240
    },
    {
        gunplaName: "Sinanju Special Effect Expansion Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631024501/rg_sinanju_2_p4bp7m.jpg",
        series: "Gundam Unicorn",
        releaseDate: "09-2016",
        price: 1944
    },
    {
        gunplaName: "Gundam Astray Gold Frame",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988346/A01_pwtxxu.jpg",
        series: "Gundam Seed Astray",
        releaseDate: "08-2016",
        price: 3024
    },
    {
        gunplaName: "Gundam Astray Blue Frame",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850842/RG_Gundam_Astray_Blue_Frame_2_ysu6t9.jpg",
        series: "Gundam Seed",
        releaseDate: "12-2015",
        price: 3000
    },
    {
        gunplaName: "Z'Gok",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850840/1000098265_1_qadirk.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: "08-2015",
        price: 2700
    },
    {
        gunplaName: "Gundam 00 Raiser Trans-Am Injection",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850842/ui01_t6arls.jpg",
        series: "Gundam 00",
        releaseDate: "06-2015",
        price: 3240
    },
    {
        gunplaName: "RX-78-2 Gundam Clear Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850843/6df77980gw1eqgytu4qjaj20el0eldhz_q7pzsy.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: "04-2015",
        price: 4500
    },
    {
        gunplaName: "G-3 Gundam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850842/gundamkitscollectionSS013_jxqh83.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: "04-2015",
        price: 2500
    },
    {
        gunplaName: "Wing Zero Custom EW Feather Effect Parts",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957121/N2279764001009_011_gzhjvb.jpg",
        series: "Gundam Wing Endless Waltz",
        releaseDate: "02-2015",
        price: 1620
    },
    {
        gunplaName: "Gundam Astraea Parts",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957120/rg-1-144-gundam-exia-for-gundam-astraea-parts-set-p-bandai-hobby-online-shop-exclusive-pre-order-5_800x_gwecne.gif",
        series: "Gundam 00F",
        releaseDate: "10-2014",
        price: 1994
    },
    {
        gunplaName: "Gundam Astraea Type F",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957125/gundamkitscollectionSS019_900x900_fcc137.jpg",
        series: "Gundam 00F",
        releaseDate: "10-2014",
        price: 4320
    },
    {
        gunplaName: "Gundam Exia Trans-Am Injection",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957130/51K5jlcqucL._AC_SX425__aues8k.jpg",
        series: "Gundam 00",
        releaseDate: "06-2014",
        price: 2500
    },
    {
        gunplaName: "Casval's Gundam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957120/N2273903001001_001_p8j47k.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: "09-2014",
        price: 2500
    },
    {
        gunplaName: "Exia Repair Add-On",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957125/N2255387001001_001_lpqkgg.jpg",
        series: "Gundam 00",
        releaseDate: "05-2014",
        price: 1500
    },
    {
        gunplaName: "GN Arms Type E (Real Grade Color Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960139/7c1076cc-2f24-40e7-b0f0-3cfda6d3f242_tex4li.jpg",
        series: "Gundam 00",
        releaseDate: "04-2014",
        price: 4644
    },
    {
        gunplaName: "Wings of the Sky Effect Part",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630971498/b1ca7de4-e6b5-44a0-9183-93cc5374eb3d_bq61we.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: "11-2013",
        price: 1980
    },
    {
        gunplaName: "Wings of Light Effect Part",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630971501/wing_of_light_Destiny_Gundam_1_gohyh2.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: "05-2013",
        price: 1500
    },
    {
        gunplaName: "Strike Rouge Gundam (I.W.S.P)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962218/N2200140001001_002_jvaa6t.jpg",
        series: "Gundam Seed MSV",
        releaseDate: "01-2013",
        price: 2500
    },
    {
        gunplaName: "Strike Freedom Gundam (Deactive Mode)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962729/N2256565001001_001_mgrerh.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: "02-2014",
        price: 3240
    },
    {
        gunplaName: "Destiny Gundam (Deactive Mode)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962729/N2220165001001_001_gntuku.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: "09-2013",
        price: 2700
    },
    {
        gunplaName: "Justice Gundam (Deactive Mode)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962729/N2188018001003_003_zhkavd.jpg",
        series: "Gundam Seed",
        releaseDate: "09-2012",
        price: 2500
    },
    {
        gunplaName: "Freedom Gundam (Deactive Mode)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962729/N2173942001001_001_xbjmtw.jpg",
        series: "Gundam Seed",
        releaseDate: "05-2012",
        price: 2700
    },
    {
        gunplaName: "",
        image: "",
        series: "",
        releaseDate: "0",
        price: 0
    },
];

const rgSeed = async () => {
    try {
        await RealGrade.deleteMany({});
        const realGrade = await RealGrade.insertMany(rgSeeds)
        console.log(realGrade);
        return;
    } catch (error) {
        console.log(error);
        return;
    }
}

module.exports = {rgSeed};