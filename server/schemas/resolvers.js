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
        },
        getUserConverge: async (parent, args, context) => {
            if(context.user) {
                const userConverges = await ProfileData.findById(context.user._id).populate('gotConverges').populate('gunplaName')
                return userConverges
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserHighGrade: async (parent, args, context) => {
            if(context.user) {
                const userHighGrade = await ProfileData.findById(context.user._id).populate('gotHighGrades').populate('gunplaName')
                return userHighGrade
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserRealGrade: async (parent, args, context) => {
            if(context.user) {
                const userRealGrade = await ProfileData.findById(context.user._id).populate('gotRealGrades').populate('gunplaName')
                return userRealGrade
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserMasterGrade: async (parent, args, context) => {
            if(context.user) {
                const userMasterGrade = await ProfileData.findById(context.user._id).populate('gotMasterGrades').populate('gunplaName')
                return userMasterGrade
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserPerfectGrade: async (parent, args, context) => {
            if(context.user) {
                const userPerfectGrade = await ProfileData.findById(context.user._id).populate('gotPerfectGrades').populate('gunplaName')
                return userPerfectGrade
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserSDGrade: async (parent, args, context) => {
            if(context.user) {
                const userSDGrade = await ProfileData.findById(context.user._id).populate('gotSDGrades').populate('gunplaName')
                return userSDGrade
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserConvergeWishlist: async (parent, args, context) => {
            if(context.user) {
                const userConvergeWish = await ProfileData.findById(context.user._id).populate('convergeWish').populate('gunplaName')
                return userConvergeWish
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserHighWishlist: async (parent, args, context) => {
            if(context.user) {
                const userHighWish = await ProfileData.findById(context.user._id).populate('highGradeWish').populate('gunplaName')
                return userHighWish
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserRealWishlist: async (parent, args, context) => {
            if(context.user) {
                const userRealWish = await ProfileData.findById(context.user._id).populate('realGradeWish').populate('gunplaName')
                return userRealWish
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserMasterWishlist: async (parent, args, context) => {
            if(context.user) {
                const userMasterWish = await ProfileData.findById(context.user._id).populate('masterGradeWish').populate('gunplaName')
                return userMasterWish
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserPerfectWishlist: async (parent, args, context) => {
            if(context.user) {
                const userPerfectWish = await ProfileData.findById(context.user._id).populate('perfectGradeWish').populate('gunplaName')
                return userPerfectWish
            }
            throw new AuthenticationError("Not logged in");
        },
        getUserSDWishlist: async (parent, args, context) => {
            if(context.user) {
                const userSDWish = await ProfileData.findById(context.user._id).populate('sdGradeWish').populate('gunplaName')
                return userSDWish
            }
            throw new AuthenticationError("Not logged in");
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
        saveHighGrade: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const findHighGrade = await HighGrade.findOne({gunplaName: name})
            if(!findHighGrade) {
                return 'HighGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {gotHighGrades: findHighGrade}
            },
            {
                new: true
            })
        },
        saveRealGrade: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const findRealGrade = await RealGrade.findOne({gunplaName: name})
            if(!findRealGrade) {
                return 'RealGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {gotRealGrades: findRealGrade}
            },
            {
                new: true
            })
        },
        saveMasterGrade: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const findMasterGrade = await MasterGrade.findOne({gunplaName: name})
            if(!findMasterGrade) {
                return 'MasterGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {gotMasterGrades: findMasterGrade}
            },
            {
                new: true
            })
        },
        savePerfectGrade: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const findPerfectGrade = await PerfectGrade.findOne({gunplaName: name})
            if(!findPerfectGrade) {
                return 'PerfectGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {gotPerfectGrades: findPerfectGrade}
            },
            {
                new: true
            })
        },
        saveSDGrade: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const findSDGrade = await SDGrade.findOne({gunplaName: name})
            if(!findSDGrade) {
                return 'SDGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {gotSDGrades: findSDGrade}
            },
            {
                new: true
            })
        },
        convergeWishlist: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user._id: id
            const fetchConverge = await Converge.findOne({gunplaName: name})
            if(!fetchConverge) {
                return 'Converge does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {convergeWish: fetchConverge}
            },
            {
                new: true
            })
        },
        highGradeWishlist: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user_id: id
            const fetchHighGrade = await HighGrade.findOne({gunplaName: name})
            if(!fetchHighGrade) {
                return 'HighGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {highGradeWish: fetchHighGrade}
            },
            {
                new: true
            })
        },
        realGradeWishlist: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user_id: id
            const fetchRealGrade = await RealGrade.findOne({gunplaName: name})
            if(!fetchRealGrade) {
                return 'RealGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {realGradeWish: fetchRealGrade}
            },
            {
                new: true
            })
        },
        masterGradeWishlist: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user_id: id
            const fetchMasterGrade = await MasterGrade.findOne({gunplaName: name})
            if(!fetchMasterGrade) {
                return 'MasterGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {masterGradeWish: fetchMasterGrade}
            },
            {
                new: true
            })
        },
        perfectGradeWishlist: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user_id: id
            const fetchPerfectGrade = await PerfectGrade.findOne({gunplaName: name})
            if(!fetchPerfectGrade) {
                return 'PerfectGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {perfectGradeWish: fetchPerfectGrade}
            },
            {
                new: true
            })
        },
        sdGradeWishlist: async (parent, {name, id}, context) => {
            let userId = context.user ? context.user_id: id
            const fetchSDGrade = await SDGrade.findOne({gunplaName: name})
            if(!fetchSDGrade) {
                return 'SDGrade does not exist'
            }
            return await ProfileData.findByIdAndUpdate({
                _id: userId
            },
            {
                $push: {sdGradeWish: fetchSDGrade}
            },
            {
                new: true
            })
        },
        deleteConvergeSave: async (parent, {convergeID, id}, context) => {
            let userId = context.user ? context.user_id: id
            return await ProfileData.findOneAndUpdate({
                _id: userId
            },
            { $pull: 
                {
                    'gotConverges': {
                        _id: convergeID
                    }
                }
            },
            {
                new: true
            })
            
        },
        deleteHighGradeSave: async (parent, {highGradeID, id}, context) => {
            let userId = context.user ? context.user_id: id
            return await ProfileData.findOneAndUpdate({
                _id: userId
            },
            {
                $pull: {
                    'gotHighGrades': {
                        _id: highGradeID
                    }
                }
            },
            {
                new: true
            })
        }
    }
}

module.exports = resolvers;