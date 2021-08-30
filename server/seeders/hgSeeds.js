const {HighGrade} = require("../models")

const hgSeeds = [
    {
        gunplaName: "Gundam Harute Final Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333018/hg-gundam-harute-final-battle_1_juuxcf.jpg",
        series: "Gundam 00",
        releaseDate: 12-2021,
        price: 2970
    },
    {
        gunplaName: "Gundam Zabanya Final Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333019/hg-gundam-zabanya-final-battle_1_xmhbeu.jpg",
        series: "Gundam 00",
        releaseDate: 12-2021,
        price: 2750
    },
    {
        gunplaName: "Gundam F91 Vital Uni1 & 2",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333014/hguc-gundam-f91-vital-units_1_ck2x2z.jpg",
        series: "Gundam F91",
        releaseDate: 10-2021,
        price: 3190
    },
    {
        gunplaName: "Gundam Wing Sky Zero",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333019/lineup11c_xn5vzr.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 10-2021,
        price: 1870
    },
    {
        gunplaName: "Astray Red Fame Inversion",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333018/lineup04d_gtxwpr.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 10-2021,
        price: 1980
    },
    {
        gunplaName: "00 Command Quanta",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333018/lineup08d_mrsnws.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 11-2021,
        price: 2200
    },
    {
        gunplaName: "Gouf Crimson Custom",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333018/lineup03c_oveepm.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 11-2021,
        price: 1980
    },
    {
        gunplaName: "G-Gundam (Urban Warfare)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333018/lineup10d_m9vgk8.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 11-2021,
        price: 1980
    },
    {
        gunplaName: "Messer F02 Commander Type",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333015/hguc-messer-f02-commander_1_kdradn.jpg",
        series: "Hathaway Flash",
        releaseDate: 09-2021,
        price: 3190
    },
    {
        gunplaName: "Baund Doc(Gates Capa)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333020/HGUC-BAUND-DOC-GATES-CAPA_1_qucd5r.jpg",
        series: "Zeta Gundam",
        releaseDate: 10-2021,
        price: 5500
    },
    {
        gunplaName: "Zaku Dessert Type",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333017/hg-zaku-desert-type-double-antenna_1_zjivth.jpg",
        series: "MSV",
        releaseDate: 10-2021,
        price: 2640
    },
    {
        gunplaName: "Leo S",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333015/hgac-leo-S-7_j1lffy.jpg",
        series: "Gundam Wing",
        releaseDate: 09-2021,
        price: 1980
    },
    {
        gunplaName: "Blue Destiny (Metallic)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333426/hguc-blue-destiny-unit-1-exam-metallic-gloss_1_iqimw6.jpg",
        series: "Gundam Blue Destiny",
        releaseDate: 05-2021,
        price: 1780
    },
    {
        gunplaName: "WoundWart (Metallic)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333017/hguc-woundwort-clear-box-art_paok2q.jpg",
        series: "Advance of Zeta",
        releaseDate: 05-2021,
        price: 1980
    },
    {
        gunplaName: "Rx-78-2 Gundam (Beyond Global)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333017/hg-gundam-base-beyond-global-gundam_1_pnailx.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: 05-2021,
        price: 2420
    },
    {
        gunplaName: "Windam (Neo Roanoke)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333016/HGCE-WINDAM-NEO-RAONOKE-CUSTOM_1_eghhfb.jpg",
        series: "Gundam Seed",
        releaseDate: 08-2021,
        price: 1540
    },
    {
        gunplaName: "L Expansion Pack",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333016/hgce-dagger-L-windam-expansion_1_spaexq.jpg",
        series: "Gundam Seed",
        releaseDate: 08-2021,
        price: 1650
    },
    {
        gunplaName: "Pale Rider DII (Titans)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333015/hguc-pale-rider-DII-titans_4_xc41r6.jpg",
        series: "Missing Link",
        releaseDate: 08-2021,
        price: 2420
    },
    {
        gunplaName: "Cruiser Mode Booster",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333020/hguc-cruiser-booster_vgtxhg.jpg",
        series: "Advance of Zeta",
        releaseDate: 02-2021,
        price: 1650
    },
    {
        gunplaName: "Barzam (Region Capture Unit)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333016/hguc-red-barzam_4_bwsy4n.jpg",
        series: "Advance of Zeta",
        releaseDate: 11-2021,
        price: 4500
    },
    {
        gunplaName: "Barzam (AoZ Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333019/hguc-barzam-AOZ-reboot-ver_4_t7emqe.jpg",
        series: "Advance of Zeta",
        releaseDate: 07-2021,
        price: 2420
    },
    {
        gunplaName: "Rick Dias",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333016/hguc-rick-dias_6_i0tjvj.jpg",
        series: "Zeta Gundam",
        releaseDate: 06-2021,
        price: 2090
    },
    {
        gunplaName: "Gelgood Vertex",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333014/hguc-gelgoog-vertex_1_rfbqpo.jpg",
        series: "MSV",
        releaseDate: 06-2021,
        price: 2750
    },
    {
        gunplaName: "Dictus (Callisto Shadow)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333021/hguc-dictus-shadow-callisto_2_w8fecb.jpg",
        series: "Crossbone Gundam",
        releaseDate: 05-2021,
        price: 3950
    },
    {
        gunplaName: "Crossbone Gundam X0 Full Cloth",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333020/hguc-crossbone-gundam-x0-full-cloth_3_iorc9p.jpg",
        series: "Crossbone Gundam",
        releaseDate: 05-2021,
        price: 2750
    },
    {
        gunplaName: "Land Battle Heavy Unit",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333015/hgac-gundam-geminass-02-land-battle_1_hzky0o.jpg",
        series: "Gundam Wing",
        releaseDate: 05-2021,
        price: 2200
    },
    {
        gunplaName: "Gundam Rollout Color",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333019/hg-rx-78-02-gundam-the-origin-rollout_1_ayffds.jpg",
        series: "Mobile Suit Gundam The Origin",
        releaseDate: 04-2021,
        price: 2860
    },
    {
        gunplaName: "Gundam MK-III",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333014/hguc-gundam-mk-III_1_mymwiq.jpg",
        series: "Missing Link",
        releaseDate: 04-2021,
        price: 240
    },
    {
        gunplaName: "Pale Rider Cavalry",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333015/hguc-pale-rider-cavalry_1_yamfik.jpg",
        series: "Missing Link",
        releaseDate: 04-2021,
        price: 2420
    },
    {
        gunplaName: "Vayeate & Mercurius Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333015/HGAC-VAYEATE-MERCURIUS_1_mb5caj.jpg",
        series: "Gundam Wing",
        releaseDate: 01-2021,
        price: 4180
    },
    {
        gunplaName: "Todesritter",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333019/hguc-AMX-018_HADES_Todesritter_1_loaqls.jpg",
        series: "Missing Link",
        releaseDate: 12-2020,
        price: 3300
    },
    {
        gunplaName: "Extreme Gundam (Type Leos Eclipse)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333016/hg-extreme-gundam-eclipse_1_htxfcr.jpg",
        series: "Other",
        releaseDate: 03-2021,
        price: 2970
    },
    {
        gunplaName: "Light Liner",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333015/hguc-light-liner_1_rchti5.jpg",
        series: "Mobile Suit Gundam The Origin",
        releaseDate: 02-2021,
        price: 1430
    },
    {
        gunplaName: "Gundam Geminass 02",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333015/hgac-gundam-geminass-02_1_us6okl.jpg",
        series: "Gundam Wing",
        releaseDate: 01-2021,
        price: 2200
    },
    {
        gunplaName: "AOZ Reprint Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333024/20200930_aoz_repaintset_02_fs1gkg.jpg",
        series: "Advance of Zeta",
        releaseDate: 02-2021,
        price: 2200
    },
    {
        gunplaName: "Gundam Tr-1 Hazel Owsla",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333015/hguc-next-gen-mass-producton-MS_1_ojqxdp.jpg",
        series: "Advance of Zeta",
        releaseDate: 02-2021,
        price: 3300
    },
    {
        gunplaName: "Gundam Sandrock Custom",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333015/hgac-gundam-sandrock-custom_1_h8p8uc.jpg",
        series: "Gundam Wing",
        releaseDate: 01-2021,
        price: 1650
    },
    {
        gunplaName: "Barzam (Weiss)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333016/hgbf-weiss-barzam_1_jjisia.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 02-2021,
        price: 1650
    },
    {
        gunplaName: "Gundam Tr-6 Kehaar II",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333015/hguc-gundam-tr-6-kehaar-ii_1_u1n3dn.jpg",
        series: "Advance of Zeta",
        releaseDate: 06-2020,
        price: 2750
    },
    {
        gunplaName: "Gundam Try-Age",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333018/hg-gundam-try-age_1_riyoki.jpg",
        series: "Gundam Build Fighter",
        releaseDate: 11-2020,
        price: 2970
    },
    {
        gunplaName: "GM Cannon (Rocket Bazooka)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333018/hg-gm-cannon-rocket-bazooka_1_ah4stp.jpg",
        series: "MSV",
        releaseDate: 11-2020,
        price: 2530
    },
];

const hgSeed = async () => {
    try {
        await HighGrade.deleteMany({});
        const highGrade = await HighGrade.insertMany(hgSeeds)
        console.log(highGrade);
        return;
    } catch (error) {
        console.log(error);
        return;
    }
}

module.exports = {hgSeed};