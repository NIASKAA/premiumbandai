import {gql} from '@apollo/client'

export const GET_ALL_HG = gql`
{
    getHG {
        _id
        gunplaName
        image
        series
        releaseDate
        price
    }
}
`;

export const GET_ALL_RG = gql`
{
    getRG {
        _id
        gunplaName
        image
        series
        releaseDate
        price
    }
}
`;

export const GET_ALL_MG = gql`
{
    getMG {
        _id
        gunplaName
        image
        series
        releaseDate
        price
    }
}
`;

export const GET_ALL_PG = gql`
{
    getPG {
        _id
        gunplaName
        image
        series
        releaseDate
        price
    }
}
`;

export const GET_ALL_SD = gql`
{
    getSD {
        _id
        gunplaName
        image
        series
        releaseDate
        price
    }
}
`;

export const GET_ALL_CONVERGES = gql`
{
    getConverges {
        _id
        gunplaName
        image
        series
        releaseDate
        price
    }
}
`;

export const QUERY_USER = gql`
    query {
        user {
            _id
            username
            email
            haveCollected
        }
    }
`;

export const GET_SAVE_CONVERGE = gql`
    query {
        getUserConverge{
            username
            email
            gotConverges {
            _id
            gunplaName
            series
            image
            releaseDate
            price
            }
        }
    }
`;