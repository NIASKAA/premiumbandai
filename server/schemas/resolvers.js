const { AuthenticationError } = require("apollo-server-express")
const {HighGrade, RealGrade, MasterGrade, PerfectGrade, Converge, SDGrade, ProfileData} = require('../models')
const {signToken} = require('../utils/auth')
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
            return await PerfectGrade.find({});
        },
        getSD: async () => {
            return await SDGrade.find({});
        },
        getConverges: async () => {
            return await Converge.find({});
        },
        user: async (parent, args, context) => {
            if(context.user) {
                const user = await ProfileData.findById(context.user.id)
                return user;
            }
            throw new AuthenticationError("Not Logged In")
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            try {
                const user = await ProfileData.create(args)
                const token = signToken(user)
                return {token, user}
            } catch (error) {
                console.log(error)
                throw new AuthenticationError("Username or Email Taken")
            }
        },
        login: async (parent, {email, password}) => {
            const user = await ProfileData.findOne({email})
            if(!user) {
                throw new AuthenticationError("Incorrect")
            }
            const correctPassword = await user.isCorrectPassword(password)
            if(!correctPassword) {
                throw new AuthenticationError("Incorrect")
            }
            const token = signToken(user)
            return {token, user}
        },
        saveConverge: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id : id
            const findConverge = await Converge.findOne({gunplaName: name})
            console.log(findConverge)
            if(!findConverge) {
                return 'Converge does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {gotConverges: findConverge}
            },
            {
                new: true
            })
        },
        saveHighGrade: async (parent, {input}, context) => {
            const highGrade = {...input}
            if(context.user) {
                return ProfileData.findByIdAndUpdate(
                    {_id: context.user.id},
                    {$push: {gotHighGrades: highGrade}},
                    {new: true}
                )
             }
        },
        saveRealGrade: async (parent, {input}, context) => {
            const realGrade = {...input}
            if(context.user) {
                return ProfileData.findByIdAndUpdate(
                    {_id: context.user.id},
                    {$push: {gotRealGrades: realGrade}},
                    {new: true}
                )
            }
        },
        saveMasterGrade: async (parent, {input}, context) => {
            const masterGrade = {...input}
            if(context.user) {
                return ProfileData.findByIdAndUpdate(
                    {_id: context.user.id},
                    {$push: {gotMasterGrades: masterGrade}},
                    {new: true}
                )
            }
        },
        savePerfectGrade: async (parent, {input}, context) => {
            const perfectGrade = {...input}
            if(context.user) {
                return ProfileData.findByIdAndUpdate(
                    {_id: context.user.id},
                    {$push: {gotPerfectGrades: perfectGrade}},
                    {new: true}
                )
            }
        },
        saveSDGrade: async (parent, {input}, context) => {
            const sdGrade = {...input}
            if(context.user) {
                return ProfileData.findByIdAndUpdate(
                    {_id: context.user.id},
                    {$push: {gotSDGrades: sdGrade}},
                    {new: true}
                )
            }
        }
    }
}

module.exports = resolvers;