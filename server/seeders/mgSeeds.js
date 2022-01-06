const {MasterGrade} = require("../models")

const mgSeeds = [
    {
        gunplaName: 'Gundam F90 [Mars Independent Zeon Forces]',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1641498871/mg-gundam-f90-mars-version_2_slao6c.jpg',
        series: 'Gundam F90',
        releaseDate: '04-2022',
        price: 4500
    },
    {
        gunplaName: 'Gundam Astraea Type F Avalanche Dash Unit (Extension Parts Only)',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1638416728/mg-avalanche-astraea-dash_1_fot2qq.jpg',
        series: 'Gundam 00',
        releaseDate: '04-2022',
        price: 3300
    },
    {
        gunplaName: 'Gundam Astraea Type F (Full Weapon Set)',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1638416726/mg-gundam-astarae-full-weapon-set_1_ty3xvu.jpg',
        series: 'Gundam 00',
        releaseDate: '04-2022',
        price: 6820
    },
    {
        gunplaName: 'Shin Musha Gundam Sengoku No Jin',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1631744120/mg-true-musha-gundam_1_owew4k.jpg',
        series: 'Other',
        releaseDate: '01-2022',
        price: 10450
    },
    {
        gunplaName: 'Manuever Strike Pack',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630183419/mg-maneuver-eclipse-gundam_1_lmxqld.jpg',
        series: "Gundam Seed Eclipse",
        releaseDate: "11-2021",
        price: 3300
    },
    {
        gunplaName: "Tallgeese Fluegel EW",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333022/mg-tallgeese-flugel_1_vbbyua.jpg",
        series: "Gundam Wing",
        releaseDate: "12-2021",
        price: 6600
    },
    {
        gunplaName: "Gundam F90 W Type",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333020/mg-gundam-f90-mission-pack-W_1_pybu8e.jpg",
        series: "Gundam F90",
        releaseDate: "10-2021",
        price: 2200
    },
    {
        gunplaName: "Lightning Strike Ver. RM",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333022/mg-lightning-strike-gundam-ver-rm_tqkisl.jpg",
        series: "Gundam Seed",
        releaseDate: "08-2021",
        price: 5940
    },
    {
        gunplaName: "Lightning Striker Pack",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333022/mg-lightning-striker-pack_1_i2bwva.jpg",
        series: "Gundam Seed",
        releaseDate: "08-2021",
        price: 2970
    },
    {
        gunplaName: "Gundam F91 (Titanium Finish)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333021/mg-gundam-f91-titanium-finish_1_kg06ey.jpg",
        series: "Gundam F91",
        releaseDate: "07-2021",
        price: 9680
    },
    {
        gunplaName: "Gundam F90 Pack R & V",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333021/mg-gundam-f91-mission-pack-V-and-R_1_wrnnlc.jpg",
        series: "Gundam F90",
        releaseDate: "06-2021",
        price: 2530
    },
    {
        gunplaName: "Gundam MK-V",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333021/mg-gundam-mk-V_1_dmssvn.jpg",
        series: "Gundam Sentinel",
        releaseDate: "04-2021",
        price: 8800
    },
    {
        gunplaName: "Yzak Joule's Slash Zaku Phantom",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333024/1000141069_10_wu1zyw.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: "06-2021",
        price: 4950
    },
    {
        gunplaName: "Blaze Zaku Phantom (Rey Za Burrel)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333022/mg-zaku-phantom-ray-za-burrel_1_yopp92.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: "06-2021",
        price: 5170
    },
    {
        gunplaName: "Exia Repair III",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333019/mg-gundam-exia-repair-III_1_xl25v0.jpg",
        series: "Gundam 00",
        releaseDate: "06-2021",
        price: 4950
    },
    {
        gunplaName: "Crossbone Gundam X1 (Patchwork)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333019/mg-crossbone-gundam-x1-patchwork-verka_1_x2idwy.jpg",
        series: "Crossbone Gundam",
        releaseDate: "05-2021",
        price: 4950
    },
    {
        gunplaName: "Glory of Losers Expansion Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333021/mg-gundam-wing-glory-of-the-losers-expansion_8_lag2mb.jpg",
        series: "Gundam Wing",
        releaseDate: "05-2021",
        price: 3520
    },
    {
        gunplaName: "Gundam F90 Unit-2",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333021/MG-gundam-f90-unit-2_1_yigqh9.jpg",
        series: "Gundam F90",
        releaseDate: "03-2021",
        price: 4400
    },
    {
        gunplaName: "Gundam F90 Pack I",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333020/mg-gundam-f90-jupiter-battle-ver_1_ktzlnn.jpg",
        series: "Gundam F90",
        releaseDate: "03-2021",
        price: 2200
    },
    {
        gunplaName: "Blaze Zaku Phantom",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333019/mg-blaze-zaku-phantom-warrior_1_eaqfta.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: "20-2020",
        price: 4950
    },
    {
        gunplaName: "Hyaku Raise Cain",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333022/mg-hyaku-raise-cain_1_f2ml1e.jpg",
        series: "Gundam Sentinel",
        releaseDate: "02-2021",
        price: 13200
    },
    {
        gunplaName: "MGEX Unicorn Gundam (Premium Box)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333019/MGEX-UNICORN-GUNDAM-UNICORN-MODE-BOX_d1fh5w.jpg",
        series: "Gundam Unicorn",
        releaseDate: "11-2020",
        price: 4500
    },
    {
        gunplaName: "Gundam F90II",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333020/mg-gundam-f90-II-Intercept_1_hp7te2.jpg",
        series: "Gundam F90",
        releaseDate: "07-2020",
        price: 4500
    },
    {
        gunplaName: "Gundam F90 Pack D & G",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333021/MG-gundam-f90-mission-pack-D-and-G_1_os6t0l.jpg",
        series: "Gundam F90",
        releaseDate: "12-2020",
        price: 2200
    },
    {   
        gunplaName: 'Emergency Escape Pot Primrose Set',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333022/mg-primrose_1_qmaxfs.jpg',
        releaseDate: "12-2020",
        price: 2750
    },
    {   
        gunplaName: 'Gundam Tr-1 Hazel Owsla',
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333022/mg-hazel-owsla_1_j2i8sb.jpg",
        releaseDate: "12-2020",
        price: 8800
    },
    {
        gunplaName: "Gundam Barbatos Expansion Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333019/mg-gundam-barbatos-expansion-set_1_tpylwt.jpg",
        series: "Iron Blood Orphan",
        releaseDate: "10-2020",
        price: 3410
    },
    {
        gunplaName: "Gundam Storm Bringer FA",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630333021/mg-gundam-turbulence-Fatal-Ash_1_a2muj4.jpg",
        series: "Gundam Build Fighter",
        releaseDate: "11-2020",
        price: 6270
    },
    {
        gunplaName: "Testament Gundam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988349/MG-testament-gundam_1_o1t2tg.jpg",
        series: "Gundam Seed Astray MSV",
        releaseDate: "10-2020",
        price: 6270
    },
    {
        gunplaName: "Gundam Sandrock Armadillo",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988349/mg-gundam-sandrock-armadillo_1_cbmflh.jpg",
        series: "Gundam Wing",
        releaseDate: "10-2020",
        price: 6380
    },
    {
        gunplaName: "Gundam F90 Pack 0 & U",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675364/mg-gundam-f90-U-and-O_1_jqbfj7.jpg",
        series: "Gundam F90",
        releaseDate: "09-2020",
        price: 2200
    },
    {
        gunplaName: "RX-78-2 C.A. Gundam 3.0",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675364/mg-casval_s-gundam-ver-3_1_a6e9bf.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: "09-2020",
        price: 4950
    },
    {
        gunplaName: "GM II (AEUG Colors)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675364/mg-GM-II-AEUG_1_hsf97w.jpg",
        series: "Zeta Gundam",
        releaseDate: "09-2020",
        price: 3850
    },
    {
        gunplaName: "Flight Unit",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675360/mg-flight-unit_1_avmi2c.jpg",
        series: "Gundam Seed Astray",
        releaseDate: "08-2020",
        price: 2200
    },
    {
        gunplaName: "Gundam Astray Red Frame Flight Unit",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675360/P-Bandai_MG_1100_Gundam_Astray_Red_Frame_Flight_Unit_1_z1zrfn.jpg",
        series: "Gundam Seed Astray",
        releaseDate: "08-2020",
        price: 7150
    },
    {
        gunplaName: "Sazabi (Special Coating Ver)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675364/mg-gundam-base-sazabi-ver-ka_1_bkvp7g.jpg",
        series: "Char's Counterattack",
        releaseDate: "12-2018",
        price: 19800
    },
    {
        gunplaName: 'Quabeley Amberil',
        image: 'https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675364/mg-qubeley-amberiil_1_ygczij.jpg',
        series: 'Gundam Build Divers',
        releaseDate: "08-2020",
        price: 5940
    },
    {
        gunplaName: "Aile Strike Gundam (Clear Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675364/mg-aile-strike-gundam-ver-RM_2_ikipnt.jpg",
        series: "Gundam Seed",
        releaseDate: "07-2020",
        price: 4620
    },
    {
        gunplaName: "Freedom Gundam (Clear Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675364/mg-freedom-gundam-ver-2-clear-color_2_scxysj.jpg",
        series: "Gundam Seed",
        releaseDate: "07-2020",
        price: 4950
    },
    {
        gunplaName: "V2 Assault Buster Expansion Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675363/mg-v2-assault-buster-gundam-extension-parts_2_dgmibi.jpg",
        series: "Victory Gundam",
        releaseDate: "07-2020",
        price: 2750
    },
    {
        gunplaName: "Jegan D Type (Initial)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675364/mg-jegan-d-type-initial-deployment_1_z9llea.jpg",
        series: "Gundam UC MSV",
        releaseDate: "06-2020",
        price: 4620
    },
    {
        gunplaName: "MS Cage",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630992197/mg-ms-cage_2_ddle8b.jpg",
        series: "Gundam Unicorn",
        releaseDate: "05-2020",
        price: 2200
    },
    {
        gunplaName: "Debris Part Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675362/Gundam_Base_Limited_Debris_Parts_Set_1_webj2f.jpg",
        series: "Other",
        releaseDate: "05-2020",
        price: 2200
    },
    {
        gunplaName: "Gundam Deathscythe EW (Rouesette)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988348/mg-gundam-deathscythe-ew-rousette_1_drb9ta.jpg",
        series: "Gundam Wing Endless Waltz",
        releaseDate: "04-2020",
        price: 4950
    },
    {
        gunplaName: "Gundam F90 B & K Type Pack",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988348/mg-f90-mission-pack-type-B-and-K_1_ykjymd.jpg",
        series: "Gundam F90",
        releaseDate: "03-2020",
        price: 2200
    },
    {
        gunplaName: "Blast Impulse Gundam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717563/mg-blast-impulse-gundam_1_teargd.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: "01-2020",
        price: 5500
    },
    {
        gunplaName: "Re-GZ (Unicorn Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630675364/mg-re-gz-unicorn-ver_1_tcfzbn.jpg",
        series: "Gundam Unicorn",
        releaseDate: "12-2019",
        price: 5830
    },
    {
        gunplaName: "Gundam Heavyarms EW",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988349/mg-gundam-heavy-arms-ew-igel-equipment_1_i1g8cf.jpg",
        series: "Gundam Wing Endless Waltz",
        releaseDate: "11-2019",
        price: 6050
    },
    {
        gunplaName: "Dwadge Custom",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717563/MG-DWADGE-CUSTOM_1_meemm5.jpg",
        series: "ZZ Gundam",
        releaseDate: "11-2019",
        price: 6050
    },
    {
        gunplaName: "Gundam F90 F & M Type Pack",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988349/mg-gundam-f90-mission-pack-Type-M-Type-F_1_ylmggj.jpg",
        series: "Gundam F90",
        releaseDate: "11-2019",
        price: 2200
    },
    {
        gunplaName: "Gundam Dynames (Trans-Am Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717564/MG-GUNDAM-DYNAMES-TRANS-AM-MODE_1_pb503s.jpg",
        series: "Gundam 00",
        releaseDate: "11-2019",
        price: 4950
    },
    {
        gunplaName: "F91 Gundam (Harrison Madin)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717564/mg-gundam-f91-ver-2-harisson-maddin_1_czofuv.jpg",
        series: "Crossbone Gundam",
        releaseDate: "10-2019",
        price: 4620
    },
    {
        gunplaName: "GM Dominance (Philip Hughes)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630721929/mg-gm-dominance-phillip-hughes-custom_1_lmgd1u.jpg",
        series: "Missing Link",
        releaseDate: "10-2019",
        price: 6050
    },
    {
        gunplaName: "Gundam Hazel Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717564/MG-hazel-II-reserve-unit-quel_1_iuhzci.jpg",
        series: "Advance of Zeta",
        releaseDate: "09-2019",
        price: 4860
    },
    {
        gunplaName: "Gundam F90",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988349/mg-gundam-f90_1_sb6psb.jpg",
        series: "Gundam F90",
        releaseDate: "08-2019",
        price: 4320
    },
    {
        gunplaName: "Crossbone Gundam X0",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717563/mg-crossbone-gundam-x0-ghost_2_tfjsft.jpg",
        series: "Crossbone Gundam",
        releaseDate: "08-2019",
        price: 4725
    },
    {
        gunplaName: "Turn X & A (Nano Skin Image)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717564/mg-turn-x-turn-a-gundam-nano-skin-image_2_fmaeyq.jpg",
        series: "Turn A Gundam",
        releaseDate: "08-2019",
        price: 12420
    },
    {
        gunplaName: "Gundam F90 Pack E & S",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717562/gundam-f90-type-e-and-s-pack_4_szs95j.jpg",
        series: "Gundam F90",
        releaseDate: "08-2019",
        price: 2160
    },
    {
        gunplaName: "GM Cold Climate Type",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630721929/mg-gm-cold-type1_t0sjx8.jpg",
        series: "War in Pocket",
        releaseDate: "06-2019",
        price: 4212
    },
    {
        gunplaName: "Qan[T] Full Saber (Special Coating)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988348/mg_00_quanta_full-saber_special_coating_1_wykkx2.jpg",
        series: "Gundam 00V",
        releaseDate: "07-2019",
        price: 11880
    },
    {
        gunplaName: "GM Sniper II (Lydo Wolf)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630717564/mg-gm-sniper-II-lido-wolf1_qjhkgd.jpg",
        series: "MSV",
        releaseDate: "07-2019",
        price: 4104
    },
    {
        gunplaName: "Shenlong Gundam EW",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988348/mg_shenlong_EW_liaoya1_rhjihq.jpg",
        series: "Gundam Wing Endless Waltz",
        releaseDate: "05-2019",
        price: 4860
    },
    {
        gunplaName: "Dwadge (ZZ Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995582/MG_Dwadge1_shotr4.jpg",
        series: "ZZ Gundam",
        releaseDate: "04-2019",
        price: 5400
    },
    {
        gunplaName: "Re-GZ Custom",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988350/MG-re-gz-custom1_a7rrs5.jpg",
        series: "Char's Counterattack",
        releaseDate: "05-2019",
        price: 5940
    },
    {
        gunplaName: "Jegan Type D",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725877/MG-JEGAN-TYPE-D_xewjuw.jpg",
        series: "Gundam F91",
        releaseDate: "04-2019",
        price: 4536
    },
    {
        gunplaName: "GM Cannon (Jaburo Defense Type)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725877/mg-gm-cannon-red-head_iemktk.jpg",
        series: "MSV",
        releaseDate: "03-2019",
        price: 4320
    },
    {
        gunplaName: "Astray Red Dragon",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725877/mg-Gundam_Astray_red_dragon_1_vhguty.jpg",
        series: "Gundam Seed Astray",
        releaseDate: "02-2019",
        price: 7560
    },
    {
        gunplaName: "Gundam F91 (Afterimage Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725877/mg-gundam-f91-after-image-clear_1_xvs8f9.jpg",
        series: "Gundam F91",
        releaseDate: "02-2019",
        price: 4320
    },
    {
        gunplaName: "GM II Semi Striker",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725877/mg-gm-II-semi-striker_1_w2rhah.jpg",
        series: "MSV",
        releaseDate: "01-2019",
        price: 4536
    },
    {
        gunplaName: "Gaz R/L",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725876/hguc-gaz-R-L_1_ofhf7v.jpg",
        series: "ZZ Gundam",
        releaseDate: "01-2019",
        price: 3780
    },
    {
        gunplaName: "Hyaku Shiki Crash",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725877/mg-hyaku-shiki-crash_1_d9sevp.jpg",
        series: "Other",
        releaseDate: "01-2019",
        price: 6264
    },
    {
        gunplaName: "V2 Assault Buster Gundam Ver.Ka",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988349/mg-v2-assault-buster-gundam-ver-ka-full-kit_2_mkca7h.jpg",
        series: "Victory Gundam",
        releaseDate: "12-2018",
        price: 7560
    },
    {
        gunplaName: "Gundam F91 Back Cannon & Twin VSBR",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988349/mg-gundam-f91-ver2-vsbr_1_lpsrqb.jpg",
        series: "Gundam F91",
        releaseDate: "11-2018",
        price: 6264
    },
    {
        gunplaName: "Qubeley Damned",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725877/mg-qubeley-damned_1_mpbbdp.jpg",
        series: "Other",
        releaseDate: "11-2018",
        price: 5400
    },
    {
        gunplaName: "Perfect Strike (Special Coating Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725875/B161001_w8uq1n.jpg",
        series: "Gundam Seed",
        releaseDate: "01-2018",
        price: 10800
    },
    {
        gunplaName: "GM Cannon (White Dingo Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725877/mg-gm-cannon-white-dingo_1_ytfhd1.jpg",
        series: "MSV",
        releaseDate: "09-2018",
        price: 4320
    },
    {
        gunplaName: "GM (White Dingo Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630725877/mg-gm-white-dingo-p-bandai_1_q3ngfs.jpg",
        series: "MSV",
        releaseDate: "09-2018",
        price: 3720
    },
    {
        gunplaName: "Gundam Storm Bringer",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020888/mg-gundam-storm-bringer_1_ndxkwc.jpg",
        series: "Other",
        releaseDate: "09-2018",
        price: 5400
    },
    {
        gunplaName: "Gelgoog (Anavel Gato)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762481/mg-gelgoog-anavel-gato_1_bpffnn.jpg",
        series: "Stardust Memory",
        releaseDate: "08-2018",
        price: 4500
    },
    {
        gunplaName: "Polypod Ball",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020888/mg-polypod-ball_1_jhkg2v.jpg",
        series: "Gundam Build Divers",
        releaseDate: "08-2018",
        price: 3240
    },
    {
        gunplaName: "Exia Gundam Avalanche Dash",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762478/mg-gundam-avalanche-exia-dash_1_vwfobb.jpg",
        series: "Gundam 00",
        releaseDate: "08-2018",
        price: 7236
    },
    {
        gunplaName: "Hrududu (Deployment colors)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762478/mg-g-parts-hrududu-actual-deployment-colors_2_ck5kqx.jpg",
        series: "Advance of Zeta",
        releaseDate: "07-2018",
        price: 2376
    },
    {
        gunplaName: "Hazel Shield Booster Parts",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762478/mg-hazel-shield-booster-pack_2_nazerp.jpg",
        series: "Advance of Zeta",
        releaseDate: "07-2018",
        price: 1620
    },
    {
        gunplaName: "Hrududu",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762478/mg-g-parts-hrududu_2_xzdhrd.jpg",
        series: "Advance of Zeta",
        releaseDate: "07-2018",
        price: 2376
    },
    {
        gunplaName: "Zaku Cannon (Ian Graden)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762478/mg-zaku-cannon-ian-graden_1_q4vqzy.jpg",
        series: "MSV",
        releaseDate: "07-2018",
        price: 5400
    },
    {
        gunplaName: "GM Dominance",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762481/mg-gm-dominance_1_psoxqt.jpg",
        series: "Missing Link",
        releaseDate: "06-2018",
        price: 4860
    },
    {
        gunplaName: "Advanced Hazel TR-1",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762480/mg-advanced-hazel_1_exbajl.jpg",
        series: "Advance of Zeta",
        releaseDate: "05-2018",
        price: 5940
    },
    {
        gunplaName: "GN-X III (A-Laws Type)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020888/mg-gn-x-III-a-laws-type_1_uxvrvc.jpg",
        series: "Gundam 00",
        releaseDate: "05-2018",
        price: 4644
    },
    {
        gunplaName: "Gundam 00 Seven Sword Trans-Am (Special Coating)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020888/mg-trans-am-00-gundam-seven-sword-g_1_hjpor5.jpg",
        series: "Gundam 00",
        releaseDate: "04-2018",
        price: 12960
    },
    {
        gunplaName: "Qan[T] (Trans-Am Coating)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762480/mg-00-quanta-trans-am-mode_1_vx1m7m.jpg",
        series: "Gundam 00",
        releaseDate: "04-2018",
        price: 10800
    },
    {
        gunplaName: "Turn Red Astray",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762478/mg-gundam-astray-turn-red_1_xtddm9.jpg",
        series: "Gundam Seed Astray MSV",
        releaseDate: "02-2018",
        price: 7560
    },
    {
        gunplaName: "Gm Sniper Custom (Tenneth A.Jung)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988348/mg-gm-sniper-custom-tenneth_1_pd9thg.jpg",
        series: "MSV",
        releaseDate: "01-2018",
        price: 4320
    },
    {
        gunplaName: "Advanced GN-X (Deborah)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762480/mg-deborah_s-advanced-gn-x_1_xpwbt0.jpg",
        series: "Gundam 00",
        releaseDate: "11-2017",
        price: 4536
    },
    {
        gunplaName: "Hazel Custom TR-1 (Titan Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762478/mg-gundam-hazel-custom-titans-color_1_q7jko4.jpg",
        series: "Advance of Zeta",
        releaseDate: "02-2018",
        price: 4860
    },
    {
        gunplaName: "Providence Gundam Special Coating",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020888/mg-providence-gundam-special-coating-ver_1_yww38r.jpg",
        series: "Gundam Seed",
        releaseDate: "01-2018",
        price: 12960
    },
    {
        gunplaName: "Uma's Lightning Gelgoog High Mobility",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762481/mg-gelgoog-uma-lightning_wpnkxa.jpg",
        series: "MSV",
        releaseDate: "01-2018",
        price: 5940
    },
    {
        gunplaName: "Enhanced ZZ Gundam Ver.Ka",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988350/mg-zz-gundam-ver-ka_1_gbirmh.jpg",
        series: "ZZ Gundam",
        releaseDate: "12-2017",
        price: 8640
    },
    {
        gunplaName: "Enhanced ZZ Gundam Ver.Ka Extension Parts",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988350/p-banda-mg-enhanced-zz-gundam-ver-ka_2_emje8y.jpg",
        series: "ZZ Gundam",
        releaseDate: "12-2017",
        price: 2160
    },
    {
        gunplaName: "Gundam Sandrock Custom EW",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762479/mg-gundam-sandrock-custom-ew_2_pqsg9z.jpg",
        series: "Gundam Wing Endless Waltz",
        releaseDate: "10-2017",
        price: 5184
    },
    {
        gunplaName: "GM II (Unicorn Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762478/mg-gundam-II-unicorn-ver_1_uixrfx.jpg",
        series: "Gundam Unicorn",
        releaseDate: "01-2017",
        price: 3996
    },
    {
        gunplaName: "GM Command Space Type",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995580/mg-gm-command-space-type_1_rrbjbz.jpg",
        series: "War In Pocket",
        releaseDate: "11-2017",
        price: 3780
    },
    {
        gunplaName: "Justice Gundam (Special Coating)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020888/mg-justice-gundam-special-coating-ver_1_gzwzql.jpg",
        series: "Gundam Seed",
        releaseDate: "11-2017",
        price: 9720
    },
    {
        gunplaName: "Zaku II High Mobility Test (Breniss Ox)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630762478/mg-zaku-II-breniff-oguz-custom_1_oqmx57.jpg",
        series: "MSV",
        releaseDate: "10-2017",
        price: 4860
    },
    {
        gunplaName: "Gundam TR-1 Hazel Custom",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631022704/1000115790_1_tlmivg.jpg",
        series: "Advance of Zeta",
        releaseDate: "09-2017",
        price: 4500
    },
    {
        gunplaName: "Psycho Zaku Thunderbolt Ver.Ka (Final Battle)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988349/mg-psycho-zaku-ver-ka-final-battle-ver_1_ycz0yz.jpg",
        series: "Thunderbolt",
        releaseDate: "09-2017",
        price: 9180
    },
    {
        gunplaName: "FA Gundam Thunderbolt Ver.Ka (Final Battle)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988349/mg-gundam-thunderbolt-last-battle-ver_4_vtvxrt.jpg",
        series: "Thunderbolt",
        releaseDate: "08-2017",
        price: 7344
    },
    {
        gunplaName: "Zaku II High Mobility (Masaya Nakagawa)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812851/1000115034_1_kde0jl.jpg",
        series: "MSV",
        releaseDate: "08-2017",
        price: 4860
    },
    {
        gunplaName: "Advanced GN-X",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988348/MG-ADVANCED-GN-X_1_laobnm.jpg",
        series: "Gundam 00",
        releaseDate: "07-2017",
        price: 4536
    },
    {
        gunplaName: "Dom (Gravity Front Color)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631024500/mg-ms-09-dom-gravity-front-ms-igloo-colors_1_ng1xdf.jpg",
        series: "MS Igloo",
        releaseDate: "07-2017",
        price: 4320
    },
    {
        gunplaName: "Gouf Custom (Gravity Front Color)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631024500/mg-gouf-custom-gravity-front-color-ver_1_gaoy3j.jpg",
        series: "MS Igloo",
        releaseDate: "07-2017",
        price: 3240
    },
    {
        gunplaName: "Zaku II (Gravity Front Color)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631024501/mg-ms-06j-zaku-II-gravity-front-colors-ms-igloo_1_xcgxdw.jpg",
        series: "MS Igloo",
        releaseDate: "07-2017",
        price: 3780
    },
    {
        gunplaName: "Gundam 00 XN Raiser",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988349/mg-00-xn-raiser_1_gmio7f.jpg",
        series: "Gundam 00V",
        releaseDate: "07-2017",
        price: 8000
    },
    {
        gunplaName: "Providence Gundam Dragoon Effect Parts",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988346/1000113716_1_x9ywtq.jpg",
        series: "Gundam Seed Destiny",
        releaseDate: "06-2017",
        price: 2376
    },
    {
        gunplaName: "Zaku II High Mobility (Shin Matsunaga)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812855/mg-shin-matsunaga-zaku-II-p-bandai-double-spike-shoulder-armor_1_maynmv.jpg",
        series: "MSV",
        releaseDate: "06-2017",
        price: 4860
    },
    {
        gunplaName: "Crossbone Gundam X2 Kai",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812854/mg-crossbone-gundam-x2-kai-ver-ka_1_ywey69.jpg",
        series: "Crossbone Gundam",
        releaseDate: "06-2017",
        price: 4752
    },
    {
        gunplaName: "GM Sniper II (White Dingo)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812855/mg-gm-sniper-II-white-dingo-colors_1_wkpdmm.jpg",
        series: "MSV",
        releaseDate: "03-2017",
        price: 4104
    },
    {
        gunplaName: "Prototype Gouf",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812851/p-bandai-mg-prototype-gouf_1_panysu.jpg",
        series: "MSV",
        releaseDate: "01-2017",
        price: 4860
    },
    {
        gunplaName: "GM II",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812852/p-bandai-mg-gm-ii_1_acxkor.jpg",
        series: "Zeta Gundam",
        releaseDate: "01-2017",
        price: 3780
    },
    {
        gunplaName: "Astray Blue Frame Formation Base",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812853/gundamkitscollectionSS014_mr8jed.jpg",
        series: "Gundam Seed Astray",
        releaseDate: "02-2017",
        price: 1512
    },
    {
        gunplaName: "Nu Gundam HWS Ver.Ka Full Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020888/MG-nu-gundam-hws-ver-ka_-full-set_1_heyoyg.jpg",
        series: "Char's Counterattack",
        releaseDate: "12-2016",
        price: 4500
    },
    {
        gunplaName: "HWS Extension Parts",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020888/MG-nu-gundam-verka_1_un8hsx.jpg",
        series: "Char's Counterattack",
        releaseDate: "12-2016",
        price: 3024
    },
    {
        gunplaName: "Banshee Norn Final Battle Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812852/banshee_norn_green_1_d56c3x.jpg",
        series: "Gundam Unicorn",
        releaseDate: "12-2016",
        price: 6480
    },
    {
        gunplaName: "FA Gundam Thunderbolt Ver. KA Hanger",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812853/gundam_thunderbolt_p-bandai_1_z8slss.jpg",
        series: "Thunderbolt",
        releaseDate: "11-2016",
        price: 2800
    },
    {
        gunplaName: "Zaku II High Mobility (Robert Gilliam)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631024501/MG-ROBERT0GILLIAM-ZAKU-HM-P-BANDAI_1_j1r96w.jpg",
        series: "MSV",
        releaseDate: "11-2016",
        price: 4860
    },
    {
        gunplaName: "Gundam Heavyarms Custom EW",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988346/gundam_heavyarms_custom_ew_1_h9dgv0.jpg",
        series: "Gundam Wing Endless Waltz",
        releaseDate: "10-2016",
        price: 5184
    },
    {
        gunplaName: "Impulse Gundam Blanche",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020888/l160901_r0qfcy.jpg",
        series: "Gundam Seed Destiny MSV",
        releaseDate: "09-2016",
        price: 5616
    },
    {
        gunplaName: "Powered GM",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812853/banm160701_kz8tkt.jpg",
        series: "Stardust Memory",
        releaseDate: "07-2016",
        price: 3240
    },
    {
        gunplaName: "Hyaku Shiki Kai",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630993334/mg-hyaku-shiki-kai_arlwne.jpg",
        series: "MSV",
        releaseDate: "07-2016",
        price: 10000
    },
    {
        gunplaName: "Zeta Plus (Unicorn Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812853/gundam_kits_collection013_g8zxab.jpg",
        series: "Gundam Unicorn",
        releaseDate: "06-2016",
        price: 3456
    },
    {
        gunplaName: "Geara Doga (Unicorn Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020888/gundam_kits_collection002_f2hbz9.jpg",
        series: "Unicorn Gundam",
        releaseDate: "06-2016",
        price: 5400
    },
    {
        gunplaName: "Zaku II High Mobility (Eric Mansfield)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631025152/gundam_kits_collection001_eyuzqm.jpg",
        series: "MSV",
        releaseDate: "05-2016",
        price: 4860
    },
    {
        gunplaName: "Freedom Gundam Ver. 2.0 Effect Parts",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812853/1000103483_1_iqqlot.jpg",
        series: "Gundam Seed",
        releaseDate: "05-2016",
        price: 2160
    },
    {
        gunplaName: "Freedom Gundam 2.0 Full Burst Mode Special Coating",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020889/banm160540_zwqd8u.jpg",
        series: "Gundam Seed",
        releaseDate: "05-2016",
        price: 10800
    },
    {
        gunplaName: "Star Build Strike Gundam RG System",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812851/banm160441_rivt18.jpg",
        series: "Gundam Build Fighters",
        releaseDate: "04-2016",
        price: 6480
    },
    {
        gunplaName: "V2 Gundam Ver Ka. Light Wings",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630812853/gundam_kits_collection006_ufcbg4.jpg",
        series: "Victory Gundam",
        releaseDate: "01-2016",
        price: 2160
    },
    {
        gunplaName: "Gundam Amazing Exia",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850841/gundam_amazing_exia_1_dlzv6p.jpg",
        series: "Gundam Build Fighters",
        releaseDate: "12-2015",
        price: 5400
    },
    {
        gunplaName: "Hyaku Shiki Kai Mass Production",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850841/BANML151201_xpabso.jpg",
        series: "Gundam Sentinel",
        releaseDate: "12-2015",
        price: 5940
    },
    {
        gunplaName: "Altron Gundam EW",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850840/1000099146_1_dtewqc.jpg",
        series: "Gundam Wing Endless Waltz",
        releaseDate: "12-2015",
        price: 4500
    },
    {
        gunplaName: "Jesta Cannon",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631020888/mg_jesta_cannon_5_pk0yrx.jpg",
        series: "Gundam Unicorn",
        releaseDate: "11-2015",
        price: 5400
    },
    {
        gunplaName: "Gundam Fenice Rinascita Alba",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850841/gundam_fenice_rinascita_alba_1_txvolb.jpg",
        series: "Gundam Build Fighters",
        releaseDate: "10-2015",
        price: 5184
    },
    {
        gunplaName: "Heavy Gundam FA",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850842/MG_Heavy_Gundam_1_umwrcs.jpg",
        series: "MSV",
        releaseDate: "09-2015",
        price: 4860
    },
    {
        gunplaName: "Sazabi Ver Ka/NightingGale Effect Part",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850842/mg_sazabi_effect_parts_4_sais94.jpg",
        series: "Char's Counterattack",
        releaseDate: "07-2015",
        price: 1836
    },
    {
        gunplaName: "GM Cannon",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850842/mg_gm_cannon_1_ii8lea.jpg",
        series: "MSV",
        releaseDate: "08-2015",
        price: 4320
    },
    {
        gunplaName: "Mega Bazooka Launcher",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850842/mg_mega-bazooka-launcher_1_gaxrhi.jpg",
        series: "Zeta Gundam",
        releaseDate: "07-2015",
        price: 3024
    },
    {
        gunplaName: "Moonlight Butterfly Effect",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850842/mg-turn-x-turn-a-gundam-nano-skin-image_7_ndr6sd.jpg",
        series: "Turn A Gundam",
        releaseDate: "07-2015",
        price: 1944
    },
    {
        gunplaName: "Gearga Doga",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850841/BANML150713_bwhrlh.jpg",
        series: "Gundam Unicorn",
        releaseDate: "07-2015",
        price: 5940
    },
    {
        gunplaName: "High Mobility Zaku II (Gabby Hazard)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630850841/gabby_hazard_zaku_ii_high_mobility_type_MG_1_oe4pee.jpg",
        series: "MSV",
        releaseDate: "06-2015",
        price: 5000
    },
    {
        gunplaName: "Red Snake's Zeta",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630865123/157_3443_o_1diujl95u1ed1mfk1uvu1s583mu2n_debdf7ba-ee38-44f0-89f0-dcf5368deb23_1512x_os0mtm.jpg",
        series: "Gundam Evolve",
        releaseDate: "06-2015",
        price: 7020
    },
    {
        gunplaName: "Rick Dom (Dozle Zabi)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630865698/ab1d7f07-3496-4e70-bd69-1330ce7668cd_czurob.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: "03-2015",
        price: 5400
    },
    {
        gunplaName: "Z III Gray Wolf's Buster Zeta",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957121/s-l500_szosgr.jpg",
        series: "Gundam Evolve",
        releaseDate: "02-2015",
        price: 7020
    },
    {
        gunplaName: "Tallgeese III",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957120/ec723c38-095e-450f-a382-56ee5d7da4b2_xvrv0d.jpg",
        series: "Gundam Wing Endless Waltz",
        releaseDate: "01-2015",
        price: 4860
    },
    {
        gunplaName: "Gundam Astray Noir",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957125/N2242119001005_005_ugwlhj.jpg",
        series: "Gundam Seed Astray MSV",
        releaseDate: "01-2014",
        price: 5250
    },
    {
        gunplaName: "Hi-Nu Gundam HWS Parts",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957120/gundamkitscollectionSS002_ko5do6.jpg",
        series: "Char's Counterattack",
        releaseDate: "09-2014",
        price: 3024
    },
    {
        gunplaName: "Zaku II (Garma Zabi)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957125/gundamkitscollectionSS016_c4ky5c.jpg",
        series: "MSV",
        releaseDate: "12-2014",
        price: 4100
    },
    {
        gunplaName: "Gundam 00 Seven Sword Inspection Color",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957120/1000090185_2_kelncd.jpg",
        series: "Gundam 00V",
        releaseDate: "09-2014",
        price: 5940
    },
    {
        gunplaName: "Banshee Norn",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630958793/s-l500_qijkdt.jpg",
        series: "Gundam Unicorn",
        releaseDate: "06-2014",
        price: 6480
    },
    {
        gunplaName: "Gouf M'Quve Custom",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957130/26e10ec5-09f4-4526-a7f8-a2a79c1ca147_is3bgb.jpg",
        series: "MSV",
        releaseDate: "08-2014",
        price: 4725
    },
    {
        gunplaName: "S Gundam Booster Unit",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957120/banml139_coewpw.jpg",
        series: "Gundam Sentinel",
        releaseDate: "08-2014",
        price: 10584
    },
    {
        gunplaName: "FA Unicorn Gundam (Red Psycho Frame)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630957125/gundamkitscollectionSS005_qrzhau.jpg",
        series: "Gundam Unicorn",
        releaseDate: "08-2014",
        price: 8400
    },
    {
        gunplaName: "Gelgoog Cannon (MSV Colors)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960140/gundamkitscollectionSS001_xk46uj.jpg",
        series: "MSV",
        releaseDate: "07-2014",
        price: 5184
    },
    {
        gunplaName: "Prototype Gundam",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631026015/1000086345_3_ron7ja.jpg",
        series: "MSV",
        releaseDate: "04-2014",
        price: 4536
    },
    {
        gunplaName: "FA Gundam Blue Color Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630995581/banml001_zoqxbl.jpg",
        series: "MSV",
        releaseDate: "04-2014",
        price: 5400
    },
    {
        gunplaName: "Gundam Astray Red Frame",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960140/unnamed_scexvu.jpg",
        series: "Gundam Seed Astray",
        releaseDate: "01-2014",
        price: 4725
    },
    {
        gunplaName: "Zaku II (Dozle Zabi Custom)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630969583/51X_Q6pE0RL._AC__jsv3pp.jpg",
        series: "MSV",
        releaseDate: "06-2014",
        price: 4860
    },
    {
        gunplaName: "Destiny Impluse R",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960139/51tzgSRIsLL._AC_SY580__n4zuvj.jpg",
        series: "Gundam Seed Destiny MSV",
        releaseDate: "02-2014",
        price: 5460
    },
    {
        gunplaName: "Gundam Exia Repair II",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960139/5152MHhaOVL._AC_SX425__mn8blt.jpg",
        series: "Gundam 00",
        releaseDate: "02-2014",
        price: 4410
    },
    {
        gunplaName: "Gundam 00 Raiser Trans-AM Mode",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630960140/s-l600_v2qmze.jpg",
        series: "Gundam 00",
        releaseDate: "12-2013",
        price: 6825
    },
    {
        gunplaName: "Crossbone Gundam X3",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962218/41xvMgo04xL._AC__lnokbp.jpg",
        series: "Crossbone Gundam",
        releaseDate: "12-2013",
        price: 4620
    },
    {
        gunplaName: "Aile, Sword, RM Launcher Pack",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630988350/ver_RM_launcher_and_sword_striker_pack_2_ltwa9d.jpg",
        series: "Gundam Seed",
        releaseDate: "07-2013",
        price: 2300
    },
    {
        gunplaName: "Crossbone Gundam X2",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962218/N2208641001007_003_ozwwzs.jpg",
        series: "Crossbone Gundam",
        releaseDate: "06-2013",
        price: 4620
    },
    {
        gunplaName: "Z'Gok Unicorn Ver.",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962218/N2238167001002_001_taunse.jpg",
        series: "Gundam Unicorn",
        releaseDate: "11-2013",
        price: 3150
    },
    {
        gunplaName: "Zaku Cannon (Unicorn Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962219/1000083368_1_iejmeq.jpg",
        series: "Gundam Unicorn",
        releaseDate: "11-2013",
        price: 4725
    },
    {
        gunplaName: "Geara Doga Rezin Schnyder",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631022705/P-Bandai_MG_1100_AMS-119_Geara_Doga_Rezin_Schnyder_Use_2_qlv9xv.jpg",
        series: "Char's Counterattack",
        releaseDate: "10-2013",
        price: 5040
    },
    {
        gunplaName: "Gundam 3.0 Accessory Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630970928/VzNo3HEZ3XDD725HKmhiZw_i6sfd8.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: "09-2013",
        price: 1575
    },
    {
        gunplaName: "Gundam Age-1 Normal",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962218/41nWBw1RHZL._AC__rm8kla.jpg",
        series: "Gundam Age",
        releaseDate: "09-2013",
        price: 3675
    },
    {
        gunplaName: "Gundam Age-2 (Special Forces Unit)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962219/GUNDAM-AGE-2-NORMAL-SP-COLORS_2_iabows.jpg",
        series: "Gundam Age",
        releaseDate: "08-2013",
        price: 4410
    },
    {
        gunplaName: "Zaku II High Mobility 2.0 (Anavel Gato)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631024501/HrQqESmCtEbUpnnRXddlEA_xl256k.jpg",
        series: "Stardust Memory",
        releaseDate: "07-2013",
        price: 4410
    },
    {
        gunplaName: "Marasai (Unicorn Ver.)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631026014/4KozXBrGagh.9TxWmFJ2LA_hblxgc.jpg",
        series: "Gundam Unicorn",
        releaseDate: "07-2013",
        price: 3310
    },
    {
        gunplaName: "Johnny Ridden Custom Zaku II",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631022704/1000080314_1_n9ehce.jpg",
        series: "MSV",
        releaseDate: "05-2013",
        price: 4725
    },
    {
        gunplaName: "High Mobility Zaku II Uma Lightning Custom",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631024501/uma_lightning_zaku_ii_1_ctuvjt.jpg",
        series: "MSV",
        releaseDate: "04-2013",
        price: 4725
    },
    {
        gunplaName: "Tallgeese II",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1631024500/1000000374_2_nfu1lt.jpg",
        series: "Gundam Wing",
        releaseDate: "03-2013",
        price: 3800
    },
    {
        gunplaName: "Nu Gundam Ver Ka. Double Fin Funnel Set",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962218/N2203074001001_003_sr8a4p.jpg",
        series: "Char's Counterattack",
        releaseDate: "01-2013",
        price: 2100
    },
    {
        gunplaName: "Zaku II 2.0 (Black Tri-Star)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962729/1000076778_1_ouwgmi.jpg",
        series: "Mobile Suit Gundam MSV",
        releaseDate: "09-2012",
        price: 3675
    },
    {
        gunplaName: "Ballute System",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962729/_2mLqhRJNp_B57koRApC9w_hbibnz.jpg",
        series: "Zeta Gundam",
        releaseDate: "06-2012",
        price: 1470
    },
    {
        gunplaName: "RX-78-2 Gundam (Real Type)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962728/1000015614_1_efvlyj.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: "06-2012",
        price: 3990
    },
    {
        gunplaName: "Zaku II (Real Type)",
        image: "https://res.cloudinary.com/ddtqwizaf/image/upload/v1630962728/1000015614_7_gx8ixd.jpg",
        series: "Mobile Suit Gundam",
        releaseDate: "06-2012",
        price: 3990
    },
    {
        gunplaName: "",
        image: "",
        series: "",
        releaseDate: "0",
        price: 0
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