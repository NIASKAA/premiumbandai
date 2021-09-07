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
        gunplaName: "Messer F02",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988347/hguc-messer-f02-type_1_lb8tcl.jpg",
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
        gunplaName: "Gundam TR-1 Hazenthley Rah II",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988347/hguc-gundam-tr-1-hazenthley-rah-ii_1_n8txl7.jpg",
        series: "Advance of Zeta",
        releaseDate: 11-2020,
        price: 5940
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
        gunplaName: "Dictus (Callisto's Light)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988346/hguc-dictus_1_qaevzw.jpg",
        series: "Crossbone Gundam",
        releaseDate: 08-2020,
        price: 3960
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
        gunplaName: "Gundam Geminass 01",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988346/hgac-gundam-geminass-01_1_unpgxp.jpg",
        series: "Gundam Wing G-Unit",
        releaseDate: 05-2020,
        price: 2200
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
        gunplaName: "Gundam TR-6 Hazen'n-Thley II Rah",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988347/hguc-hazenthley-ii-rah_1_n4fd36.jpg",
        series: "Advance of Zeta",
        releaseDate: 02-2020,
        price: 6490
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
        gunplaName: "Leo (Full Weapon Set)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988346/hgac-leo-full-weapon-set_1_nalyni.jpg",
        series: "Gundam Wing",
        releaseDate: 01-2020,
        price: 2310
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
        gunplaName: "Gamma Gundam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717562/hgbd-b-build-gamma-gundam_e5dfo8.jpg",
        series: "Gundam Build Divers",
        releaseDate: 01-2020,
        price: 2090
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
        gunplaName: "Mudrock Gundam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675363/hguc-gundam-unit-6-mudrock_1_l3wjt4.jpg",
        series: "Missing Link",
        releaseDate: 11-2019,
        price: 2200
    },
    {
        gunplaName: "Gundam AgeII Magnum SV (Fx Plosion)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717562/hgbd-age-fx-plosion_1_gw7raf.jpg",
        series: "Gundam Build Divers",
        releaseDate: 11-2019,
        price: 3300
    },
    {
        gunplaName: "GM Sniper Custom (Missile Launcher)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717562/hg-gm-sniper-custom-missile-launcher_1_px8a7v.jpg",
        series: "MSV",
        releaseDate: 11-2019,
        price: 2530
    },
    {
        gunplaName: "Hrududu II Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717563/hguc-hrududu-II_2_qkcief.jpg",
        series: "Advance of Zeta",
        releaseDate: 10-2019,
        price: 1650
    },
    {
        gunplaName: "White Base Catapult Deck (Renewal Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717564/REALISTIC-MODEL-SERIES-WHITE-BASE-CATAPULT-DECK_1_wnmpnt.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: 10-2019,
        price: 14080
    },
    {
        gunplaName: "Second Victory Gundam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988348/hguc-second-victory-gundam_1_jkkdaj.jpg",
        series: "Victory Gundam",
        releaseDate: 10-2019,
        price: 2200
    },
    {
        gunplaName: "Gundam TR-6 Haze'n-Thley II",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988347/hguc-gundam-tr-6-hyzenthley-ii_3_woqvwu.jpg",
        series: "Advance of Zeta",
        releaseDate: 10-2019,
        price: 4840
    },
    {
        gunplaName: "GM Intercept Custom (Fellow Booster)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717562/hg-gm-intercept-custom-fellow-booster_1_nn1d0a.jpg",
        series: "MSV",
        releaseDate: 09-2019,
        price: 3240
    },
    {
        gunplaName: "Hrududu Deployment Color",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725876/hguc_g_parts_hrududu_combat_deployment_colors2_pdkzxm.jpg",
        series: "Advance of Zeta",
        releaseDate: 09-2019,
        price: 1188
    },
    {
        gunplaName: "Advance Hazel Gundam TR-6",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717562/hguc_hazel_rah_second_form_and_gaplant_II1_qx838g.jpg",
        series: "Advance of Zeta",
        releaseDate: 09-2019,
        price: 1836
    },
    {
        gunplaName: "Hyaku Shiki Revive (Gold Coating)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717563/hguc-hyaku-shiki-gold-coating_1_w7fxci.jpg",
        series: "Zeta Gundam",
        releaseDate: 08-2019,
        price: 4320
    },
    {
        gunplaName: "Hyaku Shiki Revive (Gold Coating)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995582/hguc-hyaku-shiki-gold-coating_1_fn9qbg.jpg",
        series: "Zeta Gundam",
        releaseDate: 08-2019,
        price: 4320
    },
    {
        gunplaName: "Dodai Kai",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717563/hguc-dodai-kai_1_vrcjtk.jpg",
        series: "Zeta Gundam",
        releaseDate: 08-2019,
        price: 1296
    },
    {
        gunplaName: "Mega Bazooka Launcher",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717561/conroy_s-mega-bazooka-launcher_1_n7h84k.jpg",
        series: "Gundam Unicorn",
        releaseDate: 08-2019,
        price: 1620
    },
    {
        gunplaName: "Maganac Corps Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630990345/hgac-maganac-36-set_1_jvojow.jpg",
        series: "Gundam Wing",
        releaseDate: 08-2019,
        price: 48600
    },
    {
        gunplaName: "Gustav Karl (Gihren's Greed)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717563/hguc-gustav-karl-ghirens-greed-ver_1_ohmmty.jpg",
        series: "Gihren's Greed",
        releaseDate: 07-2019,
        price: 2592
    },
    {
        gunplaName: "Maganac Auda + Ahmad Custom",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988346/hgac-auda-and-ahmad-maganac-custom_3_wulirl.jpg",
        series: "Gundam Wing",
        releaseDate: 07-2019,
        price: 1728
    },
    {
        gunplaName: "Maganac Rashid + Abdul Custom",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988347/hgac-rasheed-abdul-custom-maganacs_4_tx4elu.jpg",
        series: "Gundam Wing",
        releaseDate: 07-2019,
        price: 1728
    },
    {
        gunplaName: "Gundam Unicorn Perfectibility Destory Mode",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717563/hguc-unicorn-perfectibility-best-selections_1_jfydtb.jpg",
        series: "Gundam Unicorn",
        releaseDate: 07-2019,
        price: 3672
    },
    {
        gunplaName: "Jegan D Type (Camouflage Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812854/hguc-type-d-jegan-camouflage_1_ehv90f.jpg",
        series: "Gundam Unicorn",
        releaseDate: 07-2019,
        price: 1944
    },
    {
        gunplaName: "Primrose",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988347/hguc-primrose_1_ojqcl5.jpg",
        series: "Advance of Zeta",
        releaseDate: 07-2019,
        price: 1404
    },
    {
        gunplaName: "Zaku Cannon",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725876/hg-msd-zaku-cannon1_fsyxga.jpg",
        series: "Mobile Suit Gundam The Origin",
        releaseDate: 06-2019,
        price: 2376
    },
    {
        gunplaName: "Hrududu",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988346/hg_hrududu2_kaliyj.jpg",
        series: "Advance of Zeta",
        releaseDate: 05-2019,
        price: 1188
    },
    {
        gunplaName: "Hazel Custom TR-6 Hazel Custom",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725876/hguc_hazel_custom_with_tr-6_conversion1_ey1hbg.jpg",
        series: "Advance of Zeta",
        releaseDate: 05-2019,
        price: 1620
    },
    {
        gunplaName: "Dijeh (Narrative Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725876/hguc_dijeh_narrative_version1_yka0ml.jpg",
        series: "Gundam Unicorn",
        releaseDate: 05-2019,
        price: 2160
    },
    {
        gunplaName: "Advanced GN-X (Deborah Galiena)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995581/1000132864_1_1_cd9egy.jpg",
        series: "Gundam 00",
        releaseDate: 04-2018,
        price: 2160
    },
    {
        gunplaName: "Regelgu (Unicorn Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725876/hguc_regelgu_sleeves-unicorn-ver_1_lgmafq.jpg",
        series: "Gundam Unicorn",
        releaseDate: 03-2019,
        price: 2376
    },
    {
        gunplaName: "Gundam TR-6 (Hazel II)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995582/hguc_gundam-TR-6-hazel-II_furrwm.jpg",
        series: "Advance of Zeta",
        releaseDate: 03-2019,
        price: 2592
    },
    {
        gunplaName: "Narrative Gundam B Packs",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725876/hguc_narrative-gundam_b-packs_1_biqbrw.jpg",
        series: "Gundam Narrative",
        releaseDate: 04-2019,
        price: 1404
    },
    {
        gunplaName: "Neo Zeong II",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725876/hguc-II-neo-zeong-narrative-ver_1_ysy2qx.jpg",
        series: "Gundam Narrative",
        releaseDate: 02-2019,
        price: 28080
    },
    {
        gunplaName: "Jegan D Type (Escort Team)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725876/hguc-jegan-type-d-escort-type_1_gaagsp.jpg",
        series: "Gundam Unicorn",
        releaseDate: 01-2019,
        price: 1944
    },
    {
        gunplaName: "Leo (Flight Unit)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725877/hguc-leo-flight-unit_1_dewzg3.jpg",
        series: "Gundam Wing",
        releaseDate: 01-2019,
        price: 1836
    },
    {
        gunplaName: "GN-X IV (Commander)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725876/hg-gn-x-IV-commander_1_k55qye.jpg",
        series: "Gundam 00",
        releaseDate: 12-2018,
        price: 2376
    },
    {
        gunplaName: "Gundam Unicorn (Painting Model)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725878/hg-unicorn-gundam-paintin_ncxezw.jpg",
        series: "Gundam Unicorn",
        releaseDate: 12-2018,
        price: 2484
    },
    {
        gunplaName: "GM Cannon Space Assault Type",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995582/hg-gm-cannon-space-use_1_n5wwcl.jpg",
        series: "MSV",
        releaseDate: 12-2018,
        price: 2052
    },
    {
        gunplaName: "Jesta A (Shezarr Type)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725876/hguc-jesta-shezarr-team-a-equipment_1_limzdg.jpg",
        series: "Gundam Unicorn",
        releaseDate: 11-2018,
        price: 3024
    },
    {
        gunplaName: "Jesta Team A, B, C (Shezarr Type)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725876/Screenshot_003_qsik5v.jpg",
        series: "Gundam Unicorn",
        releaseDate: 11-2018,
        price: 2484
    },
    {
        gunplaName: "Zaku II F2 (Kinbareid Force)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725878/mg-zaku-ii-f2-kimbaraid-forces_1_e6ks99.jpg",
        series: "Stardust Memory",
        releaseDate: 11-2018,
        price: 3888
    },
    {
        gunplaName: "Zaku II F2 (Neuen Bitter)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725877/mg-zaku-II-F2-Neuen-bitter-machine_1_exlwcs.jpg",
        series: "Stardust Memory",
        releaseDate: 11-2018,
        price: 3888
    },
    {
        gunplaName: "Leo (Space Type)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725875/hgac-leo-space-type_1_brcgzl.jpg",
        series: "Gundam Wing",
        releaseDate: 10-2018,
        price: 1512
    },
    {
        gunplaName: "Base Jabber",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020888/re-100-type89-base-jabber_2_taxtwv.jpg",
        series: "Char's Counterattack",
        releaseDate: 10-2018,
        price: 3240
    },
    {
        gunplaName: "Heavy Gundam (Roll Out Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995582/hg-origin-heavy-gundam-roll-out-color_1_z4m6hy.jpg",
        series: "MSV",
        releaseDate: 10-2018,
        price: 2200
    },
    {
        gunplaName: "Johnny Ridden's Gelgoog",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725877/hguc-johnny-ridden-gelgoog_1_iikf2d.jpg",
        series: "MSV",
        releaseDate: 09-2018,
        price: 2160
    },
    {
        gunplaName: "Graze Ritter (Carta Corps)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762479/hg-graze-ritter-carta-corps_1_uva2iq.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 09-2018,
        price: 1296
    },
    {
        gunplaName: "Gelgoog J (Shin Matsunaga)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988348/hguc-shin-matsunaga-gelgoog-jager_1_g7r6hb.jpg",
        series: "MSV",
        releaseDate: 09-2018,
        price: 1620
    },
    {
        gunplaName: "Graze Ritter (Mcgillis Corps)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762480/hg-graze-ritter-mcgillis_1_yo582l.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 09-2018,
        price: 1296
    },
    {
        gunplaName: "G-Gundam (Parachute Pack Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762480/hguc-ground-type-gundam-parachute-pack-ver_1_n4z5j5.jpg",
        series: "08th Team",
        releaseDate: 08-2018,
        price: 2160
    },
     {
        gunplaName: "Gundam Zeta (UC 0088)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988347/hguc-zeta-gundam-ver-0088_2_rhb3al.jpg",
        series: "ZZ Gundam",
        releaseDate: 09-2018,
        price: 2376
    },
    {
        gunplaName: "GM Sniper Custom",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988345/HG-MSD-GM-SNIPER-CUSTOM_f0lg9p.jpg",
        series: "MSV",
        releaseDate: 08-2018,
        price: 2052
    },
    {
        gunplaName: "Efreet",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762480/hguc-efreet_1_k68lr6.jpg",
        series: "MSV",
        releaseDate: 07-2018,
        price: 2160
    },
    {
        gunplaName: "Regelgu",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762480/hguc-regelgoog_1_nrey8l.jpg",
        series: "ZZ Gundam",
        releaseDate: 07-2018,
        price: 2160
    },
    {
        gunplaName: "Gundam TR-6 Woundwart",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995582/hguc-woundwort_1_utiwuv.jpg",
        series: "Advance of Zeta",
        releaseDate: 06-2018,
        price: 1944
    },
    {
        gunplaName: "Gouf Flight Type",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762480/hguc-gouf-flight-type_1_vjxpix.jpg",
        series: "08th Team",
        releaseDate: 05-2018,
        price: 2268
    },
    {
        gunplaName: "IO Frame Shiden (Teiwaz Corps)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762480/hg-io-frame-shiden-teiwaz_1_cyhv44.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 06-2018,
        price: 1296
    },
    {
        gunplaName: "Graze Schild & Graze (Araianhod Set)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762480/hg-grze-schild-and-graze-arianrhod-custom-set1_xzmnl9.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 04-2018,
        price: 3240
    },
    {
        gunplaName: "Advanced GN-X",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988345/hg-00v-advanced-gn-x_1_bj49ab.jpg",
        series: "Gundam 00",
        releaseDate: 04-2018,
        price: 2180
    },
    {
        gunplaName: "Crossbone Gundam X0",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762480/hguc-crossbone-gundam-x-0_1_h7xh9u.jpg",
        series: "Crossbone Gundam",
        releaseDate: 04-2018,
        price: 2484
    },
    {
        gunplaName: "Tall Strike Gundam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762480/hgbf-tall-strike-gundam-glitter_1_zs0ou2.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 03-2018,
        price: 1944
    },
    {
        gunplaName: "Gundam M91",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762479/hgbf-gundam-m91_1_enzy9h.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 03-2018,
        price: 1944
    },
    {
        gunplaName: "Act Zaku",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988345/hg-msd-act-zaku_1_gl9xyo.jpg",
        series: "MSV",
        releaseDate: 02-2018,
        price: 2160
    },
    {
        gunplaName: "Gjallarhorn Arianrhod Fleet",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631022704/hg-ibo-arianrhod-fleet-diansleif_1_lpflyl.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 02-2018,
        price: 6480
    },
    {
        gunplaName: "Ewac Jegan",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631022704/hguc-ewac-jegan_1_fa0nmw.jpg",
        series: "Gundam F91",
        releaseDate: 02-2018,
        price: 3240
    },
    {
        gunplaName: "Rick-Do Gyanko",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988345/hgbf-rick-do-gyanko_1_yv9wp2.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 01-2018,
        price: 2700
    },
    {
        gunplaName: "Atlas Gundam (Thunderbolt Bandit Flower Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762479/hg-atlas-gundam-bandit-flower-ver_1_t0emsh.jpg",
        series: "Thunderbolt",
        releaseDate: 01-2018,
        price: 2592
    },
    {
        gunplaName: "Psycho GM",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762479/hgbf-psycho-gm_1_ziur9r.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 12-2017,
        price: 6264
    },
    {
        gunplaName: "Geirail Scharfrichter & Landman Rodi Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631022704/hg-geirail-scharfritter-landman-rodi-ser_1_qsrojc.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 12-2017,
        price: 3456
    },
    {
        gunplaName: "Sinanju Weiss",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988345/hgbf-weiss-sinanju_1_v7hcii.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 12-2017,
        price: 2808
    },
    {
        gunplaName: "Gundam Local Type (Roll Out Color)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995580/p-bandai-hg-gundam-local-type-roll-out-colors_1_dfefw1.jpg",
        series: "MSV",
        releaseDate: 11-2017,
        price: 2170
    },
    {
        gunplaName: "Jegan (Birnam Corps)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631022704/hguc-jegan-birnam-corps_1_k6fpjk.jpg",
        series: "Gundam F91",
        releaseDate: 11-2017,
        price: 1944
    },
    {
        gunplaName: "Jegan D Type (Piko Altidore)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631022705/hguc-jegan-pico-altidore_rtaxk8.jpg",
        series: "Gundam F91",
        releaseDate: 11-2017,
        price: 1728
    },
    {
        gunplaName: "Gundam Fenice Liberta",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762479/hgbf-gundam-fenice-liberta_1_c7ghfw.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 11-2017,
        price: 2160
    },
    {
        gunplaName: "Gundam X Jumaoh",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762479/hgbf-gundam-x-jumaoh_1_oldvw6.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 11-2017,
        price: 1944
    },
    {
        gunplaName: "Command Fumina",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988347/hgbf-command-fumina_1_oqoa2t.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 11-2017,
        price: 2592
    },
    {
        gunplaName: "Graze (Ground Type Set)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762478/p-banda-hg-graze-ground-type-twin-set_1_nua43x.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 11-2017,
        price: 3465
    },
    {
        gunplaName: "Zeta Gundam (Wave Shooter)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762480/hguc-zeta-gundam-wave-shooter-type_1_wbnatm.jpg",
        series: "Gundam Sentinel",
        releaseDate: 10-2017,
        price: 2160
    },
    {
        gunplaName: "Strike Freedom + Wing of Light DX Edition",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995582/hgce-strike-freedom-gundam-wings-of-light-dx-edition_1_vvzour.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: 10-2017,
        price: 4104
    },
    {
        gunplaName: "Chinyagguy (Gunpla's Cos Heroines)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762479/hgbf-chinyagguy_1_zlmkvz.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 10-2017,
        price: 2592
    },
    {
        gunplaName: "Amazing Z'Gok",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762479/hgbf-amazing-z_gok_1_cwdb6w.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 09-2017,
        price: 1620
    },
    {
        gunplaName: "Byarlant Isolde",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762480/hguc-byarlant-isolde_1_zxelso.jpg",
        series: "Twilight Axis",
        releaseDate: 08-2017,
        price: 3024
    },
    {
        gunplaName: "Pale Rider (Space Equipment)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988347/hguc-pale-rider-space-equipment-type_1_ln1vxy.jpg",
        series: "Missing Link",
        releaseDate: 08-2017,
        price: 2160
    },
    {
        gunplaName: "Iron Blood Orphan Tekkadan Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631022705/p-bandai-hg-tekkadan-set_1_jhsheg.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 08-2017,
        price: 6696
    },
    {
        gunplaName: "Hambrabi Suban",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631022704/hgbf-hambrabi-suban-p-bandai-release_1_kcpdul.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 08-2017,
        price: 1944
    },
    {
        gunplaName: "Io Frame Shiden Custom (Riden-Go)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812854/hg-shiden-custom-riden-go_1_ja22ec.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 07-2017,
        price: 1296
    },
    {
        gunplaName: "Io Frame Shiden Custom (Orga Custom)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812854/hg-shiden-orga-custom_1_lhtv6m.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 07-2017,
        price: 1296
    },
    {
        gunplaName: "Zaku I Black Tri-Star Color",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995581/1000113899_5_dc3i2a.jpg",
        series: "MSV",
        releaseDate: 06-2017,
        price: 1836
    },
    {
        gunplaName: "Pluma Set (INvasion of Chryse)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812854/hg-pluma-set-invasion-chryse_1_jhrqma.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 06-2017,
        price: 1944
    },
    {
        gunplaName: "Guncannon First Rollout Unit",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988345/hg-rollout-guncannon_1_uhwfua.jpg",
        series: "MSV",
        releaseDate: 05-2017,
        price: 1944
    },
    {
        gunplaName: "Gelgoog (Unicorn Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812854/hguc-gelgoog-unicorn-ver_1_vcxt7i.jpg",
        series: "Gundam Unicorn",
        releaseDate: 05-2017,
        price: 1836
    },
    {
        gunplaName: "Zaku II Kai B Type",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812854/hguc-zaku-ii-kai-unicorn-ver_1_zveazs.jpg",
        series: "Gundam Unicorn",
        releaseDate: 05-2017,
        price: 1512
    },
    {
        gunplaName: "Hi Nu Influx Gundam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631022704/hi-nu_influx_p-bandai_1_i5jjmd.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 05-2017,
        price: 3240
    },
    {
        gunplaName: "Reginlaze (Standard Type)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812851/p-bandai-hg-reginlaze-general-equipment-ver_1_a8qgoy.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 05-2017,
        price: 1296
    },
    {
        gunplaName: "Dom Tropen (Unicorn Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812854/hguc-dom-tropen-unicorn-ver_1_ybyvor.jpg",
        series: "Gundam Unicorn",
        releaseDate: 04-2017,
        price: 1836
    },
    {
        gunplaName: "Jegan Ecoas (Conroy Haagensen)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995582/hguc-jegan-ecoas-type-conroy-machine-p-bandai_1_cr9jbe.jpg",
        series: "Gundam Unicorn",
        releaseDate: 04-2017,
        price: 1944
    },
    {
        gunplaName: "Byarlant Custom 02 (Bande Dessinee)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812852/1000085053_1_yqeowm.jpg",
        series: "Gundam Unicorn",
        releaseDate: 02-2017,
        price: 3360
    },
    {
        gunplaName: "Reginlaze (Iok Kujan)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630846769/hg-reginlaze-ioku-custom_1_xwoglr.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 03-2017,
        price: 4500
    },
    {
        gunplaName: "Graze Ritter (McGillis)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631022704/hg-graze-ritter-mcgillis-custom-p-bandai_1_w9hbbv.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 02-2017,
        price: 1620
    },
    {
        gunplaName: "Bugu",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988345/hg-gto-bugu-orange_1_pavdnx.jpg",
        series: "MSV",
        releaseDate: 02-2017,
        price: 1836
    },
    {
        gunplaName: "Hugo (Dawn Horizon Corps Twin)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812853/hg-ibo-hugo-twin-set_1_xawsj3.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 01-2017,
        price: 3240
    },
    {
        gunplaName: "Gundam Phenex Type RC Silver Coating Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631024501/HGUC-UNICORN-MODE-PHENEX-TYPE-RC-RECONGUISTA-SILVER-COATING_5_jyr57z.jpg",
        series: "Other",
        releaseDate: 01-2017,
        price: 5400
    },
    {
        gunplaName: "Io Frame Shiden Custom (Ryusei Go)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812854/io-frame-shiden-ryusei-go_1_vb5meq.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 12-2016,
        price: 1296
    },
    {
        gunplaName: "Super Fumina Titans Maid Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631026491/hgbf_super_fumina_titans_maid_ver_p-bandai_2_ddsysu.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 12-2016,
        price: 1944
    },
    {
        gunplaName: "Sword Impulse Gundam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995582/hgce-sword-impulse_yk2mkm.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: 12-2016,
        price: 2700
    },
    {
        gunplaName: "Zeta Plus C1",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988347/HGUC_zeta_plus_C1_1_vzkrjr.jpg",
        series: "Gundam Sentinel",
        releaseDate: 11-2016,
        price: 2592
    },
    {
        gunplaName: "Waterproof Gundam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988346/b004-2_pzswrt.jpg",
        series: "MSV",
        releaseDate: 10-2016,
        price: 2160
    },
    {
        gunplaName: "Mega Launcher (Hyaku Shiki Revive)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812853/1000105597_3_sqfnfi.jpg",
        series: "Zeta Gundam",
        releaseDate: 09-2016,
        price: 1296
    },
    {
        gunplaName: "Crossbone Gundam X1 Kai (Skull Heart)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812854/hguc_crossbone_gundam_kai_kai_skull_heart_1_v39c4t.jpg",
        series: "Crossbone Gundam",
        releaseDate: 10-2016,
        price: 2376
    },
    {
        gunplaName: "GM Sniper II (Lydo Wolf)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812853/gm_sniper_ii_lydo_wolf_1_vnhwum.jpg",
        series: "Missing Link",
        releaseDate: 09-2016,
        price: 1620
    },
    {
        gunplaName: "Prototype Stark Jegan",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812852/banm160901-1_dnirpr.jpg",
        series: "Char's Counterattack",
        releaseDate: 09-2016,
        price: 2700
    },
    {
        gunplaName: "Quebeley MK-II (Elpeo Ple Use)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631022704/1000105063_1_jxlbgt.jpg",
        series: "ZZ Gundam",
        releaseDate: 09-2016,
        price: 1944
    },
    {
        gunplaName: "Blast Impulse Gundam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995582/hgce-blast-impulse_dr9t9q.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: 08-2016,
        price: 1944
    },
    {
        gunplaName: "Gerbera Tetra (Kirara Custom)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812851/b160831_kmf2sq.jpg",
        series: "Stardust Memory",
        releaseDate: 08-2016,
        price: 1944
    },
    {
        gunplaName: "Ghost Jegan M",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631022703/1000104649_1_vkqqkk.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 08-2016,
        price: 1800
    },
    {
        gunplaName: "Gundam Barbatos Complete Form Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631024500/bs02_mt3j9u.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 07-2016,
        price: 3240
    },
    {
        gunplaName: "Ghost Jegan F",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631022704/1000104652_1_gfvgjl.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 06-2018,
        price: 1800
    },
    {
        gunplaName: "Lightning Zeta Gundam Aspros",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812852/banm160601_n2ds9o.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 06-2016,
        price: 2376
    },
    {
        gunplaName: "RX-78-2 Gundam (21 Century Real Color Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631024500/b081_zllglt.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: 06-2016,
        price: 1296
    },
    {
        gunplaName: "Guncannon (21 Century Real Color Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631024500/b70_lwbr5i.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: 06-2016,
        price: 1512
    },
    {
        gunplaName: "Gouf (21 Century Real Color Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631024500/b61_qdr8vl.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: 06-2016,
        price: 1836
    },
    {
        gunplaName: "Dra-C Kai",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812853/dra_c_kai_3_jvaesn.jpg",
        series: "Gundam Unicorn",
        releaseDate: 05-2016,
        price: 2376
    },
    {
        gunplaName: "Crossbone Gundam X2",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631022704/gundam_kits_collection013_buqsmr.jpg",
        series: "Crossbone Gundam",
        releaseDate: 05-2016,
        price: 2160
    },
    {
        gunplaName: "Gerberta Terra (Roll Out Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812853/gundam_kits_collection002_lvj83b.jpg",
        series: "Stardust Memory",
        releaseDate: 05-2016,
        price: 2160
    },
    {
        gunplaName: "EZ-SR Foxhound",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631026015/foxhound_1_lzqecs.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 04-2016,
        price: 2160
    },
    {
        gunplaName: "High Mobility Prototype Zaku",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995582/gundam_kits_collection006_xqkfqb.jpg",
        series: "MSV",
        releaseDate: 04-2016,
        price: 2160
    },
    {
        gunplaName: "Quebeley MK-II Unit 2 (Ple Use)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631022705/ple_use_qubeley_1_cssrfz.jpg",
        series: "ZZ Gundam",
        releaseDate: 03-2016,
        price: 1944
    },
    {
        gunplaName: "Qubeley Revive Effect Parts",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631022704/gundam_kits_collection016_z5kcop.jpg",
        series: "Zeta Gundam",
        releaseDate: 03-2016,
        price: 1080
    },
    {
        gunplaName: "Gilla Shiki",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812853/gundam_kits_collection017_x9olfe.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 02-2016,
        price: 4644
    },
    {
        gunplaName: "Schwalbe Graze (Gaelio)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630848454/Ca08uRGUsAAT_Jv_xkwtwb.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 01-2016,
        price: 1400
    },
    {
        gunplaName: "Graze Commander Type (Ares Color)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850841/graze_aresu_1_lyeqzt.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 02-2016,
        price: 4500
    },
    {
        gunplaName: "Mobile Worker Late Type (Ramba Ral)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020889/1000100579_1_lppvex.jpg",
        series: "Mobile Suit Gundam The Origin",
        releaseDate: 01-2016,
        price: 1944
    },
    {
        gunplaName: "White Base Catapult Deck",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850843/04-11_sslk6m.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: 01-2016,
        price: 11232
    },
    {
        gunplaName: "Prototype Goud (Mobility Demonstrator Blue Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995582/gundam_kits_collection010_ohb9e3.jpg",
        series: "MSV",
        releaseDate: 01-2016,
        price: 1944
    },
    {
        gunplaName: "Turn A Gundam Shin",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630863367/turn-a-gundam-shin_1_rtpfld.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 11-2015,
        price: 1944
    },
    {
        gunplaName: "Prototype Gouf (Mobility Demonstrator Sand Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995581/1000099249_7_brafpu.jpg",
        series: "MSV",
        releaseDate: 11-2015,
        price: 1944
    },
    {
        gunplaName: "RX-78-2 Gundam Cake Special Mission",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850841/gundam_cake_5_q8njfr.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: 12-2015,
        price: 3980
    },
    {
        gunplaName: "GM II Semi Striker",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850840/1000098879_1_lnqq49.jpg",
        series: "Gundam Unicorn",
        releaseDate: 10-2015,
        price: 1728
    },
    {
        gunplaName: "Gundam G-Self Reflector Pack",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850841/gundam-g-self-reflector_pack_hg_1_ztuctk.jpg",
        series: "Gundam Reconguista in G",
        releaseDate: 09-2015,
        price: 2367
    },
    {
        gunplaName: "Jegan A2 Type (General Revil)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850840/1000098304_1_btjseo.jpg",
        series: "Gundam Unicorn",
        releaseDate: 09-2015,
        price: 1836
    },
    {
        gunplaName: "Silver Bullet (Gael Chan)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850843/1000098174_1_lredxr.jpg",
        series: "Gundam Unicorn",
        releaseDate: 09-2015,
        price: 2484
    },
    {
        gunplaName: "Cathedral Gundam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631026015/Cathedral-gundam-hgbf_1_eyxvba.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 08-2015,
        price: 2484
    },
    {
        gunplaName: "Gundam Dryon III",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988346/dryon-iii-hgbf_1_lxuruz.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 08-2015,
        price: 3000
    },
    {
        gunplaName: "Elf Bulllock & Mac Knife Type",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850843/1000097211_2_iah1oe.jpg",
        series: "Gundam Reconguista in G",
        releaseDate: 06-2015,
        price: 1512
    },
    {
        gunplaName: "Elf Bulllock",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850843/1000097210_2_rcstgi.jpg",
        series: "Gundam Reconguista in G",
        releaseDate: 06-2015,
        price: 1944
    },
    {
        gunplaName: "Zssa",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850842/hguc_zssa_yellow_2_ksl5kx.jpg",
        series: "ZZ Gundam",
        releaseDate: 07-2015,
        price: 2592
    },
    {
        gunplaName: "Crossbone Gundam X2 Kai",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850843/1000097151_1_a5cilq.jpg",
        series: "Crossbone Gundam",
        releaseDate: 06-2015,
        price: 2160
    },
    {
        gunplaName: "Victory Gundam Wings of Light Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850843/1000096903_1_xov779.jpg",
        series: "Victory Gundam",
        releaseDate: 05-2015,
        price: 1620
    },
    {
        gunplaName: "Stark Jegan CCA-MSV Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850843/1000096885_2_vv2ydd.jpg",
        series: "Char's Counterattack",
        releaseDate: 06-2015,
        price: 2484
    },
    {
        gunplaName: "Crossbone Gundam X1 Kai",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630865348/519tqzfL2ZL._AC__kjwj2a.jpg",
        series: "Crossbone Gundam",
        releaseDate: 05-2015,
        price: 2160
    },
    {
        gunplaName: "Jegan Type A (F91 Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630865345/6f86cda0-6dae-4b2f-a339-0ce729ecdd21_ww8hgb.jpg",
        series: "Gundam F91",
        releaseDate: 05-2015,
        price: 4500
    },
    {
        gunplaName: "Z II (Travis Kirkland)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850842/travis_kirkland_custom_z_ii_1_nrflae.jpg",
        series: "Missing Link",
        releaseDate: 04-2015,
        price: 2500
    },
    {
        gunplaName: "Pale Rider (Land Heavy Equip)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630865585/N2262100001006_013_qz825n.jpg",
        series: "Missing Link",
        releaseDate: 04-2015,
        price: 1944
    },
    {
        gunplaName: "Jegan Type B (F91 Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957120/e620aafc-30fd-43e6-b67f-fdc213d66fe6_fo4zts.jpg",
        series: "Gundam F91",
        releaseDate: 05-2015,
        price: 1836
    },
    {
        gunplaName: "Gundam Astray Gold Frame",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957130/1000084120_1_ldb6gs.jpg",
        series: "Gundam Seed Astray",
        releaseDate: 01-2014,
        price: 1680
    },
    {
        gunplaName: "Jegan Normal Type (F91 Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957120/d991be41-ecfc-41a8-abfe-4c2edffe609b_btqskm.jpg",
        series: "Gundam F91",
        releaseDate: 05-2015,
        price: 1836
    },
    {
        gunplaName: "Neo Zeong Psycho Shard",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957125/N2255542001001_005_yknaze.jpg",
        series: "Gundam Unicorn",
        releaseDate: 06-2014,
        price: 2500
    },
    {
        gunplaName: "GM Kai + Ball",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957120/s-l500_1_fezzje.jpg",
        series: "Stardust Memory",
        releaseDate: 11-2014,
        price: 2100
    },
    {
        gunplaName: "Star Build Strike Gundam Ver RG. System",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957120/N2279789001001_004_wvp8nc.jpg",
        series: "Gundam Build Fighters",
        releaseDate: 10-2014,
        price: 1800
    },
    {
        gunplaName: "God Gundam Vs Master Gundam Hyper Mode",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957120/gundamkitscollectionSS004_ejp4h3.jpg",
        series: "Mobile Fighter God Gundam",
        releaseDate: 08-2014,
        price: 6480
    },
    {
        gunplaName: "Jegan D Type (F91 Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957120/p_bandai_hg_1144_rgm89d_jegan_d_type_1529078478_cc3c8f790_progressive_fwlykw.jpg",
        series: "Gundam F91",
        releaseDate: 06-2014,
        price: 1725
    },
    {
        gunplaName: "Rick Dom Anavel Gato",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957130/0_1_itnqmo.jpg",
        series: "Stardust Memory",
        releaseDate: 04-2014,
        price: 1836
    },
    {
        gunplaName: "Asshimar (Green Divers Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957121/unnamed_mkjwfr.jpg",
        series: "Gundam Evolve",
        releaseDate: 04-2014,
        price: 2000
    },
    {
        gunplaName: "Rozen Zulu (Guard Rose Clear Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960140/gundamkitscollectionSS011_cz1adg.jpg",
        series: "Gundam Unicorn",
        releaseDate: 06-2014,
        price: 2983
    },
    {
        gunplaName: "Jesta Cannon (Tristar Clear Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960140/gundamkitscollectionSS016_ii5six.jpg",
        series: "Gundam Unicorn",
        releaseDate: 06-2014,
        price: 2160
    },
    {
        gunplaName: "Geara Zulu (Cureon Custom)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960140/s-l500_l1tfhe.jpg",
        series: "Gundam Unicorn",
        releaseDate: 06-2014,
        price: 2160
    },
    {
        gunplaName: "Geara Zulu (Gilboa Sant Use)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960140/s-l1600_zxhovi.jpg",
        series: "Gundam Unicorn",
        releaseDate: 06-2014,
        price: 2376
    },
    {
        gunplaName: "GN Arms Type E (Real Grade Color Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960139/7c1076cc-2f24-40e7-b0f0-3cfda6d3f242_tex4li.jpg",
        series: "Gundam 00",
        releaseDate: 04-2014,
        price: 4644
    },
    {
        gunplaName: "Sumo Gold and Silver Plated Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960139/banml018_kzd3bm.jpg",
        series: "Turn A Gundam",
        releaseDate: 04-2014,
        price: 2592
    },
    {
        gunplaName: "Turn A Butterfly Effect Wings",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960139/banml010_pkfxfp.jpg",
        series: "Turn A Gundam",
        releaseDate: 04-2014,
        price: 1728
    },
    {
        gunplaName: "Byarlant Custom 02",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631024500/1000085054_1_wbhv44.jpg",
        series: "Gundam Unicorn MSV",
        releaseDate: 02-2014,
        price: 3360
    },
    {
        gunplaName: "Rebawoo",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960139/1000083472_2_acxt4s.jpg",
        series: "Gundam Unicorn MSV",
        releaseDate: 02-2014,
        price: 2520
    },
    {
        gunplaName: "Silver Bullet + Fin Funnel Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960140/1d0e552b-0c39-414f-96db-5038aabc81db_tfuoxp.jpg",
        series: "Gundam Unicorn MSV",
        releaseDate: 04-2014,
        price: 2520
    },
    {
        gunplaName: "Ewac-Zack, Eye-Zack, Gaza-C Unicorn Ver. Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962218/oZuMCndHRHXvaJEaLVC1ew_qzhuhp.jpg",
        series: "Gundam Unicorn",
        releaseDate: 11-2013,
        price: 5145
    },
    {
        gunplaName: "GM III (Unicorn Desert Color Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962219/1000016305_1_iau4fm.jpg",
        series: "Gundam Unicorn",
        releaseDate: 09-2013,
        price: 1575
    },
    {
        gunplaName: "Rezel Type C (GR)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962219/416Tf0uLfrL._AC__hqrobx.jpg",
        series: "Gundam Unicorn",
        releaseDate: 09-2013,
        price: 2310
    },
    {
        gunplaName: "Dra-C Unicorn Version",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962218/N2151512001001_003_oxukva.jpg",
        series: "Gundam Unicorn",
        releaseDate: 09-2013,
        price: 2100
    },
    {
        gunplaName: "Gundam Legilis (Memory of Eden)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962218/41Is1Tob9-L._AC_UL600_SR600_600__arww4l.jpg",
        series: "Gundam Age",
        releaseDate: 09-2013,
        price: 1575
    },
    {
        gunplaName: "Gundam Age-2 (Special Force Unit Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962729/N2188281001001_001_lnnydm.jpg",
        series: "Gundam Age",
        releaseDate: 09-2013,
        price: 1575
    },
    {
        gunplaName: "Base Jabber Type-94",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631024500/B2P5LWc6AEEhnYQPuOpMug_owhv36.jpg",
        series: "Gundam Unicorn",
        releaseDate: 09-2013,
        price: 1080
    },
    {
        gunplaName: "Zogok (Operation Capture Jaburo Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962219/51_FXD0C3rL._AC__pn03uv.jpg",
        series: "MSV",
        releaseDate: 10-2013,
        price: 1995
    },
    {
        gunplaName: "Base Jabber (Zeta Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962218/41CUvb1yv1L._AC__m5z44j.jpg",
        series: "Zeta Gundam",
        releaseDate: 06-2013,
        price: 1050
    },
    {
        gunplaName: "Gundam Unicorn Banshee Destory Mode (Clear Color)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960140/gundamkitscollectionSS029_dguf4k.jpg",
        series: "Gundam Unicorn",
        releaseDate: 02-2013,
        price: 1955
    },
    {
        gunplaName: "Gundam Unicorn Banshee Unicorn Mode (Clear Color)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960140/gundamkitscollectionSS034_ocxud5.jpg",
        series: "Gundam Unicorn",
        releaseDate: 02-2013,
        price: 1680
    },
    {
        gunplaName: "Gelgoog & Gouf (Visch Donahue Set)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962219/hguc-gouf-gelgoog-visch-donahue-custom-01_bmaqyo.jpg",
        series: "MSV",
        releaseDate: 02-2013,
        price: 2500
    },
    {
        gunplaName: "Guncannon Mass Production & GM (White Dingo)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962219/412vMZUUg-L._AC_UL600_SR600_600__rdlqmy.jpg",
        series: "MSV",
        releaseDate: 02-2013,
        price: 2100
    },
    {
        gunplaName: "GM Sniper II (White Dingo)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962218/N2180533001004_002_o5pose.jpg",
        series: "MSV",
        releaseDate: 02-2012,
        price: 1980
    },
    {
        gunplaName: "Meteor Unit",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962219/1000077001_2_bi0qpi.jpg",
        series: "Gundam Seed",
        releaseDate: 10-2012,
        price: 6825
    },
    {
        gunplaName: "Rezel Type C Defensor (B-Unit)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962219/1000077982_1_encqk9.jpg",
        series: "Gundam Unicorn",
        releaseDate: 10-2012,
        price: 2600
    },
    {
        gunplaName: "GM II (AEUG Colors)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962218/7cf18e23-b9b2-4cb8-aec4-65072dfeb77d_nzfr7q.jpg",
        series: "Zeta Gundam",
        releaseDate: 11-2012,
        price: 1470
    },
    {
        gunplaName: "Base Jabber (Zeon Remnants)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962218/41GoJYtBs6L._AC__xpcd62.jpg",
        series: "Gundam Unicorn",
        releaseDate: 11-2012,
        price: 1050
    },
    {
        gunplaName: "Hyaku Shiki (GPB Color)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962728/1000007518_2_iohkhn.jpg",
        series: "Other",
        releaseDate: 12-2012,
        price: 1260
    },
    {
        gunplaName: "Sazabi (GPB Color)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962729/1000007933_1_ctbecg.jpg",
        series: "Other",
        releaseDate: 12-2012,
        price: 2940
    },
    {
        gunplaName: "Bawoo & Zaku Sniper (GPB Color)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962728/1000010237_1_iq2g0o.jpg",
        series: "Other",
        releaseDate: 12-2012,
        price: 2730
    },
    {
        gunplaName: "Danazine (Purple Color)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962729/1000076743_3_hzin4z.jpg",
        series: "Gundam Age",
        releaseDate: 09-2012,
        price: 1575
    },
    {
        gunplaName: "Gundam Astray Gold Frame Amatsu",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962729/P-Bandai_Online_Hobby_Shop_Exclusive_HG_1144_Gundam_Astray_Gold_Frame_Amatsu_2_syzvkd.jpg",
        series: "Gundam Seed Astray",
        releaseDate: 10-2012,
        price: 1890
    },
    {
        gunplaName: "Blue Destiny Gundam 03 (Omega)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962729/N2188016001001_001_vlrjgi.jpg",
        series: "Other",
        releaseDate: 07-2013,
        price: 1575
    },
    {
        gunplaName: "Gelgood (Anavel Gato)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631025724/1000081189_1_ptbhfw.jpg",
        series: "Stardust Memory",
        releaseDate: 07-2013,
        price: 1890
    },
    {
        gunplaName: "Jesta (Clear Color)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630973476/1000015815_1_1_u5ne7i.jpg",
        series: "Gundam Unicorn",
        releaseDate: 06-2012,
        price: 1575
    },
    {
        gunplaName: "Delta Plus Gundam (Clear Color)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962729/1000015822_1_fhhaxp.jpg",
        series: "Gundam Unicorn",
        releaseDate: 06-2012,
        price: 2400
    },
    {
        gunplaName: "G-Flying Armor Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962728/11_myvif3.jpg",
        series: "Zeta Gundam",
        releaseDate: 05-2015,
        price: 1890
    },
    {
        gunplaName: "Juaggu (MSV Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962728/425187_161557900631969_100003332809462_222592_52403622_n_mykd1c.jpg",
        series: "MSV",
        releaseDate: 05-2012,
        price: 1700
    },
    {
        gunplaName: "",
        image: "",
        series: "",
        releaseDate: 0,
        price: 0
    },
    {
        gunplaName: "",
        image: "",
        series: "",
        releaseDate: 0,
        price: 0
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