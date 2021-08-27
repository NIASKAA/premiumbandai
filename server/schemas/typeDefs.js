const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type HighGrade {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: Number
        price: Number
    }

    type RealGrade {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: Number
        price: Number
    }

    type MasterGrade {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: Number
        price: Number
    }

    type PerfectGrade {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: Number
        price: Number
    }

    type SDGrade {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: Number
        price: Number
    }

    type Converge {
        _id: ID
        gunplaName: String
        image: String
        series: String
        releaseDate: Number
        price: Number
    }

    type Query {
        getHG: [HighGrade]
        getRG: [RealGrade]
        getMG: [MasterGrade]
        getPG: [PerfectGrade]
        getSD: [SDGrade]
        getConverge: [Converge]
    }
`;
module.exports = typeDefs;

