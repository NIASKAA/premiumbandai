const {RealGrade} = require("../models")

const rgSeeds = [
    {
        gunplaName: "Hi-Nu Gundam Hyper Mega Bazooka Launcher",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630183023/rg-hyper-mega-launcher-beltorchika-children_3_txyran.jpg",
        series: "Char's CounterAttack",
        releaseDate: 09-2021,
        price: 2750
    },
    {
        gunplaName: 'High Mobility Zaku II (Team Monster Custom)',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630183184/RG-high-mobility-zaku-ii-team-monstor-custom_6_usdwdy.jpg',
        series: "Gundam Build Real Project",
        releaseDate: 11-2021,
        price: 3850
    },
    {
        gunplaName: 'RX-78-2 Gundam (Bright Custom)',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333023/rg-rx-78-2-gundam-team-bright-colors_6_vvzy9q.jpg',
        series: 'Gundam Build Real Project',
        releaseDate: 11-2021,
        price: 3300
    },
    {
        gunplaName: "Nu Gundam (Titanium Finish)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333023/rg-nu-gundam-titanium-finish_1_yjo13x.jpg",
        series: "Char's Counterattack",
        releaseDate: 10-2021,
        price: 9350
    },
    {
        gunplaName: "Tallgeese III (Titanium Finish)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333024/rg-tallgeese-III-titanium_1_dspzs4.jpg",
        series: "Gundam WIng",
        releaseDate: 06-2021,
        price: 7700
    },
    {
        gunplaName: "Strike Freedom Gundam (Titanium Finish)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333023/rg-strike-freedom-gundam-titanium-finish_1_bzomso.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: 01-2021,
        price: 8250
    },
    {
        gunplaName: "Sword Impulse GUndam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333024/rg-sword-impulse-gundam_1_cv5abx.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: 11-2020,
        price: 3850
    },
    {
        gunplaName: "Nu Gundam HWS",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630683221/RG-nu-gundam-HWS_1_ytjgfc.jpg",
        series: "Char's Counterattack",
        releaseDate: 09-2020,
        price: 6600
    },
    {
        gunplaName: "HWS Expansion Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630683221/rg-nu-gundam-hws-expansion-parts_1_f0hest.jpg",
        series: "Char's Counterattack",
        releaseDate: 09-2020,
        price: 1980
    },
    {
        gunplaName: "Destiny Gundam (Titanium Finish)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675361/rg-destiny-gundam-titanium-finish_1_cdyeyt.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: 07-2020,
        price: 7150
    },
    {
        gunplaName: "Sinanju (Special Coating)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675361/rg-sinanju-special-coating_1_fwlmut.jpg",
        series: "Gundam Unicorn",
        releaseDate: 07-2020,
        price: 11000
    },
    {
        gunplaName: "Banshee Norn Destroy Mode (lighting)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675361/RG-banshee-norn-destroy-mode-lightning-model_1_ebvbgb.jpg",
        series: "Gundam Unicorn",
        releaseDate: 04-2020,
        price: 11550
    },
    {
        gunplaName: "Tallgeese (TV Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675361/rg-tallgeese-TV-ver_1_s0c9dq.jpg",
        series: "Gundam Wing",
        releaseDate: 06-2020,
        price: 2750
    },
    {
        gunplaName: "Crossbone Gundam X2",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675361/rg-crossbone-gundam-x2_1_ncejl8.jpg",
        series: "Crossbone Gundam",
        releaseDate: 12-2019,
        price: 3190
    },
    {
        gunplaName: "Uma Lightning Zaku II",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675361/rg-uma-lightning-zaku-II_3_on3iaj.jpg",
        series: "MSV",
        releaseDate: 01-2020,
        price: 3600
    },
    {
        gunplaName: "Double Fin Funnel Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717565/rg-nu-gundam-double-fin-funnel_1_aqhbde.jpg",
        series: "Char's Counterattack",
        releaseDate: 09-2019,
        price: 1836
    },
    {
        gunplaName: "Tallgeese III",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717565/rg-tallgeese-III_1_berdgz.jpg",
        series: "Gundam Wing Endless Waltz",
        releaseDate: 07-2019,
        price: 3024
    },
    {
        gunplaName: "Sazabi (Special Coating)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717565/rg-sazabi-special-coating_1_g8x0aw.jpg",
        series: "Char's Counterattack",
        releaseDate: 08-2019,
        price: 10800
    },
    {
        gunplaName: "Gundam Exia Repair III",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717565/rg-gundam-exia-repair-III1_r4k5kf.jpg",
        series: "Gundam 00",
        releaseDate: 06-2019,
        price: 3024
    },
    {
        gunplaName: "Advance Hazel Gundam TR-6",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717562/hguc_hazel_rah_second_form_and_gaplant_II1_qx838g.jpg",
        series: "Advance of Zeta",
        releaseDate: 09-2019,
        price: 1836
    },
    {
        gunplaName: "Banshee's Armed Armor",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725875/1000133044_1_nk5zms.jpg",
        series: "Gundam Unicorn",
        releaseDate: 04-2019,
        price: 1620
    },
    {
        gunplaName: "Zaku II (Eric Mansfield)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725878/P-Bandai_RG_1144_MS-06R-1A_Zaku_II_Eric_Mansfield_Custom_fwfd59.jpg",
        series: "MSV",
        releaseDate: 05-2019,
        price: 3240
    },
    {
        gunplaName: "Gundam Banshee Norn Final Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725878/rg-banshee-norn-final-battle_1_dt3kst.jpg",
        series: "Gundam Unicorn",
        releaseDate: 02-2019,
        price: 4320
    },
    {
        gunplaName: "High Mobility Zaku II (Gabby Hazard)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725878/rg-gabby-hazzard-high-mobility-zaku-II_1_uui0is.jpg",
        series: "MSV",
        releaseDate: 10-2018,
        price: 2800
    },
    {
        gunplaName: "Tallgeese EW (Titanium Finish)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725878/rg-tallgeese-ew-titanium-finish_1_evrdtl.jpg",
        series: "Gundam Wing",
        releaseDate: 10-2018,
        price: 6696
    },
    {
        gunplaName: "",
        image: "",
        series: "",
        releaseDate: 11-2021,
        price: 4500
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