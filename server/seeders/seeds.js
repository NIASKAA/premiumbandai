const db = require('../config/connection')
const {convergeSeeds} = require('./convergeSeeds')
const {hgSeeds} = require('./hgSeeds')
const {mgSeeds} = require('./mgSeeds')
const {pgSeeds} = require('./pgSeeds')
const {rgSeeds} = require('./rgSeeds')

db.once("open", async () => {
    try {
        await convergeSeeds();
        await hgSeeds();
        await mgSeeds();
        await pgSeeds();
        await rgSeeds();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})