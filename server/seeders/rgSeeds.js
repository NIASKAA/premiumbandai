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
    }
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