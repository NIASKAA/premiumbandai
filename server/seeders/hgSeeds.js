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
        gunplaName: "Gundam Unit 5",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630683221/hguc-gundam-g05_1_bghoig.jpg",
        series: "Missing Link",
        releaseDate: 03-2021,
        price: 2475
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
    {
        gunplaName: "Gundam Airmaster Burst",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675362/hgaw-gundam-airmaster-burst_1_djjd3d.jpg",
        series: "Gundam X Afterwars",
        releaseDate: 10-2020,
        price: 2420
    },
    {
        gunplaName: "Daughtress",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675362/hgaw-daughtress_1_eagirv.jpg",
        series: "Gundam X Afterwars",
        releaseDate: 10-2020,
        price: 1320
    },
    {
        gunplaName: "Gundam Shining Break (Before)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675364/hgbd-gundam-shining-break-BEFORE_1_xic6mw.jpg",
        series: "Gundam Build Divers",
        releaseDate: 10-2020,
        price: 1980
    },
    {
        gunplaName: "Gundam G-Else (Before)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675363/hgbd-break-g-else-before-ver_1_gyjzkf.jpg",
        series: "Gundam Build Divers",
        releaseDate: 10-2020,
        price: 2090
    },
    {
        gunplaName: "Gundam Plutone",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675365/hg-gundam-Plutone_1_or43ic.jpg",
        series: "Gundam 00P",
        releaseDate: 09-2020,
        price: 2420
    },
    {
        gunplaName: "Eldora Windam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675363/hgbd-r-eldora-windam_1_ynkdfo.jpg",
        series: "Gundam Build Divers",
        releaseDate: 09-2020,
        price: 1980
    },
    {
        gunplaName: "High Mobility & Assault Booster Pack",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675362/hgac-gundam-geminass-01-assault-booster-high-mobility_1_k8u4ea.jpg",
        series: "Gundam Wing G-Unit",
        releaseDate: 09-2020,
        price: 1760
    },
    {
        gunplaName: "GM Night Seeker (MSV Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675365/hg-gm-night-seeker--msd_1_gthefl.jpg",
        series: "MSV",
        releaseDate: 08-2020,
        price: 2530
    },
    {
        gunplaName: "Crossbone Gundam Full Cloth",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675363/hguc-crossbone-gundam-full-cloth_1_quiq0e.jpg",
        series: "Crossbone Gundam",
        releaseDate: 08-2020,
        price: 2530
    },
    {
        gunplaName: "Rick Dias (Quattro Bajeena Ver)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630680630/hguc-rick-dias-quattro-bajeena-revive_1_zzhclf.jpg",
        series: "Zeta Gundam",
        releaseDate: 08-2020,
        price: 2090
    },
    {
        gunplaName: "Death Beast",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675363/hgfc-death-beast_2_fh89d0.jpg",
        series: "Mobile Fighter G Gundam",
        releaseDate: 07-2020,
        price: 2475
    },
    {
        gunplaName: "GM Ground Slave Wraith (Parachute Pack)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675363/HGUC-GM-GROUND-TYPE-PARACHUTE-PACK_1_vjbqwj.jpg",
        series: "Missing Link",
        releaseDate: 03-2020,
        price: 2420
    },
    {
        gunplaName: "Efreet (Doug Schneid Custom)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675365/hguc-doug-schneider-efreet_1_smglwx.jpg",
        series: "Missing Link",
        releaseDate: 03-2020,
        price: 2640
    },
    {
        gunplaName: "Gundam TR-1 (Haze'n-Thley)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675362/Gundam_TR-1_Haze_n-thley_1_ht4prk.jpg",
        series: "Advance of Zeta",
        releaseDate: 06-2020,
        price: 3850
    },
    {
        gunplaName: "R-Jarja (Twilight Axis Ver)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675363/hguc-twilight-axis-r-jarja_1_tymqql.jpg",
        series: "Twilight Axis",
        releaseDate: 07-2020,
        price: 2090
    },
    {
        gunplaName: "Gundam TR-6 Kehaar II Pack",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675362/6-pack-hguc-kehaar-ii_1_n0s831.jpg",
        series: "Advance of Zeta",
        releaseDate: 06-2020,
        price: 16500
    },
    {
        gunplaName: "Zaku Desert Type",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675363/hg-zaku-desert-type-msd_1_ufes5d.jpg",
        series: "Mobile Suit Gundam The Origin",
        releaseDate: 05-2020,
        price: 2420
    },
    {
        gunplaName: "Gundam Unit 4",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630683221/hguc-gundam-g04_1_dudzhz.jpg",
        series: "Missing Link",
        releaseDate: 05-2020,
        price: 2475
    },
    {
        gunplaName: "Zeta plus A1 (Test Image)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675363/hguc-zeta-plus-amuro-colors_1_jmfcse.jpg",
        series: "Gundam Sentinel",
        releaseDate: 04-2020,
        price: 2750
    },
    {
        gunplaName: "Varguil",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675360/hguc-gundam-varguil_1_cvu88y.jpg",
        series: "Mobile Suit Gundam Moon",
        releaseDate: 04-2020,
        price: 2750
    },
    {
        gunplaName: "Slave Wraith (Parachute Pack)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675360/hguc-slave-wraith-parachute-pack_m81yqy.jpg",
        series: "Missing Link",
        releaseDate: 02-2020,
        price: 2420
    },
    {
        gunplaName: "Gundam Pixy (Fred Reaver)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675365/hguc-gundam-pixy-fred-reaver-custom_1_wgae2g.jpg",
        series: "Missing Link",
        releaseDate: 02-2020,
        price: 2200
    },
    {
        gunplaName: "Mudrock Gundam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675363/hguc-gundam-unit-6-mudrock_1_l3wjt4.jpg",
        series: "Missing Link",
        releaseDate: 11-2019,
        price: 2200
    },
    {
        gunplaName: "GN-X IV (Mass Production)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675365/hg-gn-x-iv-mass-production-type_1_msl4v6.jpg",
        series: "Gundam 00",
        releaseDate: 12-2019,
        price: 2420
    },
    {
        gunplaName: "Sinanju Stein (Unicorn Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675360/hguc-sinanju-stein-UC-MSV-ver_1_wejdf1.jpg",
        series: "Gundam Unicorn NT",
        releaseDate: 12-2019,
        price: 2860
    },
    {
        gunplaName: "GM Guard Custom (E-2 Spray Gun)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675362/1000140608_1_wsycjf.jpg",
        series: "MSV",
        releaseDate: 03-2020,
        price: 2530
    },
    {
        gunplaName: "Eldora Daughtress",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675362/hgbd-r-eldora-daughtress_1_fgmlgu.jpg",
        series: "Gundam Build Divers ReRise",
        releaseDate: 02-2020,
        price: 1430
    },
    {
        gunplaName: "",
        image: "",
        series: "",
        releaseDate: 11-2021,
        price: 4500
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