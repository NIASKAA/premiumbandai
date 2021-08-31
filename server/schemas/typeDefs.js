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

    input GetConverge {
        gunplaName: String!
    }

    input GetHighGrade {
        gunplaName: String!
    }

    input GetRealGrade {
        gunplaName: String!
    }

    input GetMasterGrade {
        gunplaName: String!
    }

    input GetPerfectGrade {
        gunplaName: String!
    }

    input GetSDGrade {
        gunplaName: String!
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
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String): Auth
        saveConverge(input: GetConverge!): ProfileData
        saveHighGrade(input: GetHighGrade!): ProfileData
        saveRealGrade(input: GetRealGrade!): ProfileData
        saveMasterGrade(input: GetMasterGrade!): ProfileData
        savePerfectGrade(input: GetPerfectGrade!): ProfileData
        saveSDGrade(input: GetSDGrade!): ProfileData
    }
`;
module.exports = typeDefs;

