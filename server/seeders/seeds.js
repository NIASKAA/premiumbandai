const db = require('../config/connection')
const {convergeSeed} = require('./convergeSeeds')
const {hgSeed} = require('./hgSeeds')
const {mgSeed} = require('./mgSeeds')
const {pgSeed} = require('./pgSeeds')
const {rgSeed} = require('./rgSeeds')
const {sdSeed} = require('./sdSeeds')
const {re100Seed} = require('./re100Seeds');
const {ensembleSeed} = require('./ensembleSeeds')
const {GFrameSeed} = require('./GFrameSeeds')

db.once("open", async () => {
    try {
        await convergeSeed();
        await hgSeed();
        await mgSeed();
        await pgSeed();
        await rgSeed();
        await sdSeed();
        await re100Seed();
        await ensembleSeed();
        await GFrameSeed();
        console.log("All data seeded");
      process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})