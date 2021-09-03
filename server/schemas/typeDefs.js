const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type ProfileData {
        _id: ID
        username: String
        email: String
        gotConverges: [Converge]
        gotHighGrades: [HighGrade]
        gotRealGrades: [RealGrade]
        gotMasterGrades: [MasterGrade]
        gotPerfectGrades: [PerfectGrade]
        gotSDGrades: [SDGrade]
        convergeWish: [Converge]
        realGradeWish: [RealGrade]
        highGradeWish: [HighGrade]
        masterGradeWish: [MasterGrade]
        perfectGradeWish: [PerfectGrade]
        sdGradeWish: [SDGrade]
    }

    type HighGrade {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: Float
        price: Float
    }

    type RealGrade {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: Float
        price: Float
    }

    type MasterGrade {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: Float
        price: Float
    }

    type PerfectGrade {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: Float
        price: Float
    }

    type SDGrade {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: Float
        price: Float
    }

    type Converge {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: Float
        price: Float
    }

    type Auth {
      token: ID
      user: ProfileData
    }

    type Query {
        getHG: [HighGrade]
        getRG: [RealGrade]
        getMG: [MasterGrade]
        getPG: [PerfectGrade]
        getSD: [SDGrade]
        getConverges: [Converge]
        user: [ProfileData]
        getUserConverge: ProfileData
        getUserHighGrade: ProfileData
        getUserRealGrade: ProfileData
        getUserMasterGrade: ProfileData
        getUserPerfectGrade: ProfileData
        getUserSDGrade: ProfileData
        getUserConvergeWishlist: ProfileData
        getUserHighWishlist: ProfileData
        getUserRealWishlist: ProfileData
        getUserMasterWishlist: ProfileData
        getUserPerfectWishlist: ProfileData
        getUserSDWishlist: ProfileData
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String): Auth
        saveConverge(name: String! id: ID): ProfileData
        saveHighGrade(name: String! id: ID): ProfileData
        saveRealGrade(name: String! id: ID): ProfileData
        saveMasterGrade(name: String! id: ID): ProfileData
        savePerfectGrade(name: String! id: ID): ProfileData
        saveSDGrade(name: String! id: ID): ProfileData
        convergeWishlist(name: String! id: ID): ProfileData
        highGradeWishlist(name: String! id: ID): ProfileData
        realGradeWishlist(name: String! id: ID): ProfileData
        masterGradeWishlist(name: String! id: ID): ProfileData
        perfectGradeWishlist(name: String! id: ID): ProfileData
        sdGradeWishlist(name: String! id: ID): ProfileData
        deleteConvergeSave(convergeID: ID! id: ID): ProfileData
        deleteHighGradeSave(highGradeID: ID! id: ID): ProfileData
        deleteRealGradeSave(realGradeID: ID! id: ID): ProfileData
        deleteMasterGradeSave(masterGradeID: ID! id: ID): ProfileData
        deletePerfectGradeSave(perfectGradeID: ID! id: ID): ProfileData
        deleteSDGradeSave(sdGradeID: ID! id: ID): ProfileData
    }
`;
module.exports = typeDefs;

