const {GFrame} = require('../models')

const GFrameSeeds = [
    {
        gunplaName: '',
        iamge: '',
        series: '',
        releaseDate: '',
        price: 0000
    },
];

const GFrameSeed = async () => {
    try {
        await GFrame.deleteMany({});
        const gFrame = await GFrame.insertMany(GFrameSeeds)
        console.log(gFrame)
        return;
    } catch (error) {
        console.log(error)
        return;
    }
}

module.exports = {GFrameSeed};