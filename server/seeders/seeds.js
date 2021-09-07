const db = require('../config/connection')
const {convergeSeed} = require('./convergeSeeds')
const {hgSeed} = require('./hgSeeds')
const {mgSeed} = require('./mgSeeds')
const {pgSeed} = require('./pgSeeds')
const {rgSeed} = require('./rgSeeds')
const {sdSeed} = require('./sdSeeds')
const {re100Seed} = require('./re100Seeds');

db.once("open", async () => {
    try {
        await convergeSeed();
        await hgSeed();
        await mgSeed();
        await pgSeed();
        await rgSeed();
        await sdSeed();
        await re100Seed();
        console.log("All data seeded");
      process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})