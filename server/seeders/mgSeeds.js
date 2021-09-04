const {MasterGrade} = require("../models")

const mgSeeds = [
    {
        gunplaName: "Rx-78-2 Gundam Supreme Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630183025/SUPREME-GUNDAM_ybt3re.jpg",
        series: "Mobile Suit Gundam ",
        releaseDate: 08-2021,
        price: 0000
    },
    {
        gunplaName: 'Manuever Strike Pack',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630183419/mg-maneuver-eclipse-gundam_1_lmxqld.jpg',
        series: "Gundam Seed Eclipse",
        releaseDate: 11-2021,
        price: 3300
    },
    {
        gunplaName: "Tallgeese Fluegel EW",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333022/mg-tallgeese-flugel_1_vbbyua.jpg",
        series: "Gundam Wing",
        releaseDate: 12-2021,
        price: 6600
    },
    {
        gunplaName: "Gundam F90 W Type",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333020/mg-gundam-f90-mission-pack-W_1_pybu8e.jpg",
        series: "Gundam F90",
        releaseDate: 10-2021,
        price: 2200
    },
    {
        gunplaName: "Lightning Strike Ver. RM",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333022/mg-lightning-strike-gundam-ver-rm_tqkisl.jpg",
        series: "Gundam Seed",
        releaseDate: 08-2021,
        price: 5940
    },
    {
        gunplaName: "Lightning Striker Pack",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333022/mg-lightning-striker-pack_1_i2bwva.jpg",
        series: "Gundam Seed",
        releaseDate: 08-2021,
        price: 2970
    },
    {
        gunplaName: "Gundam F91 (Titanium Finish)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333021/mg-gundam-f91-titanium-finish_1_kg06ey.jpg",
        series: "Gundam F91",
        releaseDate: 07-2021,
        price: 9680
    },
    {
        gunplaName: "Gundam F90 Pack R & V",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333021/mg-gundam-f91-mission-pack-V-and-R_1_wrnnlc.jpg",
        series: "Gundam F90",
        releaseDate: 06-2021,
        price: 2530
    },
    {
        gunplaName: "Gundam MK-V",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333021/mg-gundam-mk-V_1_dmssvn.jpg",
        series: "Gundam Sentinel",
        releaseDate: 04-2021,
        price: 8800
    },
    {
        gunplaName: "Yzak Joule's Slash Zaku Phantom",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333024/1000141069_10_wu1zyw.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: 06-2021,
        price: 4950
    },
    {
        gunplaName: "Blaze Zaku Phantom (Rey Za Burrel)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333022/mg-zaku-phantom-ray-za-burrel_1_yopp92.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: 06-2021,
        price: 5170
    },
    {
        gunplaName: "Exia Repair III",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333019/mg-gundam-exia-repair-III_1_xl25v0.jpg",
        series: "Gundam 00",
        releaseDate: 06-2021,
        price: 4950
    },
    {
        gunplaName: "Crossbone Gundam X1 (Patchwork)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333019/mg-crossbone-gundam-x1-patchwork-verka_1_x2idwy.jpg",
        series: "Crossbone Gundam",
        releaseDate: 05-2021,
        price: 4950
    },
    {
        gunplaName: "Glory of Losers Expansion Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333021/mg-gundam-wing-glory-of-the-losers-expansion_8_lag2mb.jpg",
        series: "Gundam Wing",
        releaseDate: 05-2021,
        price: 3520
    },
    {
        gunplaName: "Gundam F90 Unit-2",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333021/MG-gundam-f90-unit-2_1_yigqh9.jpg",
        series: "Gundam F90",
        releaseDate: 03-2021,
        price: 4400
    },
    {
        gunplaName: "Gundam F90 Pack I",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333020/mg-gundam-f90-jupiter-battle-ver_1_ktzlnn.jpg",
        series: "Gundam F90",
        releaseDate: 03-2021,
        price: 2200
    },
    {
        gunplaName: "Blaze Zaku Phantom",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333019/mg-blaze-zaku-phantom-warrior_1_eaqfta.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: 20-2020,
        price: 4950
    },
    {
        gunplaName: "Hyaku Raise Cain",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333022/mg-hyaku-raise-cain_1_f2ml1e.jpg",
        series: "Gundam Sentinel",
        releaseDate: 02-2021,
        price: 13200
    },
    {
        gunplaName: "MGEX Unicorn Gundam (Premium Box)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333019/MGEX-UNICORN-GUNDAM-UNICORN-MODE-BOX_d1fh5w.jpg",
        series: "Gundam Unicorn",
        releaseDate: 11-2020,
        price: 4500
    },
    {
        gunplaName: "Gundam F90II",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333020/mg-gundam-f90-II-Intercept_1_hp7te2.jpg",
        series: "Gundam F90",
        releaseDate: 07-2020,
        price: 4500
    },
    {
        gunplaName: "Gundam F90 Pack D & G",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333021/MG-gundam-f90-mission-pack-D-and-G_1_os6t0l.jpg",
        series: "Gundam F90",
        releaseDate: 12-2020,
        price: 2200
    },
    {   
        gunplaName: 'Emergency Escape Pot Primrose Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333022/mg-primrose_1_qmaxfs.jpg',
        releaseDate: 12-2020,
        price: 2750
    },
    {   
        gunplaName: 'Gundam Tr-1 Hazel Owsla',
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333022/mg-hazel-owsla_1_j2i8sb.jpg",
        releaseDate: 12-2020,
        price: 8800
    },
    {
        gunplaName: "Gundam Barbatos Expansion Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333019/mg-gundam-barbatos-expansion-set_1_tpylwt.jpg",
        series: "Iron Blood Orphan",
        releaseDate: 10-2020,
        price: 3410
    },
    {
        gunplaName: "Gundam Storm Bringer FA",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333021/mg-gundam-turbulence-Fatal-Ash_1_a2muj4.jpg",
        series: "Gundam Build Fighter",
        releaseDate: 11-2020,
        price: 6270
    },
    {
        gunplaName: "Gundam F90 Pack 0 & U",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675364/mg-gundam-f90-U-and-O_1_jqbfj7.jpg",
        series: "Gundam F90",
        releaseDate: 09-2020,
        price: 2200
    },
    {
        gunplaName: "RX-78-2 C.A. Gundam 3.0",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675364/mg-casval_s-gundam-ver-3_1_a6e9bf.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: 09-2020,
        price: 4950
    },
    {
        gunplaName: "GM II (AEUG Colors)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675364/mg-GM-II-AEUG_1_hsf97w.jpg",
        series: "Zeta Gundam",
        releaseDate: 09-2020,
        price: 3850
    },
    {
        gunplaName: "Flight Unit",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675360/mg-flight-unit_1_avmi2c.jpg",
        series: "Gundam Seed Astray",
        releaseDate: 08-2020,
        price: 2200
    },
    {
        gunplaName: "Gundam Astray Red Frame Flight Unit",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675360/P-Bandai_MG_1100_Gundam_Astray_Red_Frame_Flight_Unit_1_z1zrfn.jpg",
        series: "Gundam Seed Astray",
        releaseDate: 08-2020,
        price: 7150
    },
    {
        gunplaName: "Sazabi (Special Coating Ver)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675364/mg-gundam-base-sazabi-ver-ka_1_bkvp7g.jpg",
        series: "Char's Counterattack",
        releaseDate: 12-2018,
        price: 19800
    },
    {
        gunplaName: 'Quabeley Amberil',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675364/mg-qubeley-amberiil_1_ygczij.jpg',
        series: 'Gundam Build Divers',
        releaseDate: 08-2020,
        price: 5940
    },
    {
        gunplaName: "Aile Strike Gundam (Clear Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675364/mg-aile-strike-gundam-ver-RM_2_ikipnt.jpg",
        series: "Gundam Seed",
        releaseDate: 07-2020,
        price: 4620
    },
    {
        gunplaName: "Freedom Gundam (Clear Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675364/mg-freedom-gundam-ver-2-clear-color_2_scxysj.jpg",
        series: "Gundam Seed",
        releaseDate: 07-2020,
        price: 4950
    },
    {
        gunplaName: "Jegan D Type (Initial)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675364/mg-jegan-d-type-initial-deployment_1_z9llea.jpg",
        series: "Gundam UC MSV",
        releaseDate: 06-2020,
        price: 4620
    },
    {
        gunplaName: "Debris Part Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675362/Gundam_Base_Limited_Debris_Parts_Set_1_webj2f.jpg",
        series: "Other",
        releaseDate: 05-2020,
        price: 2200
    },
    {
        gunplaName: "V2 Assault Buster Expansion Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675363/mg-v2-assault-buster-gundam-extension-parts_2_dgmibi.jpg",
        series: "Victory Gundam",
        releaseDate: 07-2020,
        price: 2750
    },
    {
        gunplaName: "Re-GZ (Unicorn Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675364/mg-re-gz-unicorn-ver_1_tcfzbn.jpg",
        series: "Gundam Unicorn",
        releaseDate: 12-2019,
        price: 5830
    },
    {
        gunplaName: "Blast Impulse Gundam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717563/mg-blast-impulse-gundam_1_teargd.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: 01-2020,
        price: 5500
    },
    {
        gunplaName: "Dwadge Custom",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717563/MG-DWADGE-CUSTOM_1_meemm5.jpg",
        series: "ZZ Gundam",
        releaseDate: 11-2019,
        price: 6050
    },
    {
        gunplaName: "Gundam Dynames (Trans-Am Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717564/MG-GUNDAM-DYNAMES-TRANS-AM-MODE_1_pb503s.jpg",
        series: "Gundam 00",
        releaseDate: 11-2019,
        price: 4950
    },
    {
        gunplaName: "F91 Gundam (Harrison Madin)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717564/mg-gundam-f91-ver-2-harisson-maddin_1_czofuv.jpg",
        series: "Crossbone Gundam",
        releaseDate: 10-2019,
        price: 4620
    },
    {
        gunplaName: "GM Dominance (Philip Hughes)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630721929/mg-gm-dominance-phillip-hughes-custom_1_lmgd1u.jpg",
        series: "Missing Link",
        releaseDate: 10-2019,
        price: 6050
    },
    {
        gunplaName: "Gundam Hazel Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717564/MG-hazel-II-reserve-unit-quel_1_iuhzci.jpg",
        series: "Advance of Zeta",
        releaseDate: 09-2019,
        price: 4860
    },
    {
        gunplaName: "Crossbone Gundam X0",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717563/mg-crossbone-gundam-x0-ghost_2_tfjsft.jpg",
        series: "Crossbone Gundam",
        releaseDate: 08-2019,
        price: 4725
    },
    {
        gunplaName: "Turn X & A (Nano Skin Image)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717564/mg-turn-x-turn-a-gundam-nano-skin-image_2_fmaeyq.jpg",
        series: "Turn A Gundam",
        releaseDate: 08-2019,
        price: 12420
    },
    {
        gunplaName: "Gundam F90 Pack E & S",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717562/gundam-f90-type-e-and-s-pack_4_szs95j.jpg",
        series: "Gundam F90",
        releaseDate: 08-2019,
        price: 2160
    },
    {
        gunplaName: "GM Cold Climate Type",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630721929/mg-gm-cold-type1_t0sjx8.jpg",
        series: "War in Pocket",
        releaseDate: 06-2019,
        price: 4212
    },
    {
        gunplaName: "GM Sniper II (Lydo Wolf)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717564/mg-gm-sniper-II-lido-wolf1_qjhkgd.jpg",
        series: "MSV",
        releaseDate: 07-2019,
        price: 4104
    },
];

const mgSeed = async () => {
    try {
        await MasterGrade.deleteMany({});
        const masterGrade = await MasterGrade.insertMany(mgSeeds)
        console.log(masterGrade);
        return;
    } catch (error) {
        console.log(error);
        return;
    }
}

module.exports = {mgSeed};