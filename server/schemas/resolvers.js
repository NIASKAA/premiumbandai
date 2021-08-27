const { AuthenticationError } = require("apollo-server-express")
const {HighGrade, RealGrade, MasterGrade, PerfectGrade, Converge, SDGrade} = require('../models')

const resolvers = {
    Query: {
        getHG: async () => {
            return await HighGrade.find({});
        },
        getRG: async () => {
            return await RealGrade.find({});
        },
        getMG: async () => {
            return await MasterGrade.find({});
        },
        getPG: async () => {
            return await HighGrade.find({});
        },
        getSD: async () => {
            return await SDGrade.find({});
        },
        getConverge: async () => {
            return await Converge.find({});
        }
    },

    Mutation: {

    }
}

module.exports = resolvers;