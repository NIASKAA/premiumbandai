import {gql} from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_CONVERGE = gql`
    mutation saveConverge($name: String!, id: ID) {
        saveConverge(name: $name id: $id) {
            username
            email
            gotConverges {
                _id
                gunplaName
                series
                releaseDate
                price
            }
        }
    }
`;

export const SAVE_HIGHGRADE = gql`
    mutation saveHighGrade($name: String!, id: ID) {
        saveHighGrade(name: $name id: $id) {
            username
            email
            gotConverges {
                _id
                gunplaName
                series
                releaseDate
                price
            }
        }
    }
`;

export const SAVE_REALGRADE = gql`
    mutation saveRealGrade($name: String!, id: ID) {
        saveRealGrade(name: $name id: $id) {
            username
            email
            gotConverges {
                _id
                gunplaName
                series
                releaseDate
                price
            }
        }
    }
`;

export const SAVE_MASTERGRADE = gql`
    mutation saveMasterGrade($name: String!, id: ID) {
        saveMasterGrade(name: $name id: $id) {
            username
            email
            gotConverges {
                _id
                gunplaName
                series
                releaseDate
                price
            }
        }
    }
`;

export const SAVE_PERFECTGRADE = gql`
    mutation savePerfectGrade($name: String!, id: ID) {
        savePerfectGrade(name: $name id: $id) {
            username
            email
            gotConverges {
                _id
                gunplaName
                series
                releaseDate
                price
            }
        }
    }
`;

export const SAVE_SDGRADE = gql`
    mutation saveSDGrade($name: String!, id: ID) {
        saveSDGrade(name: $name id: $id) {
            username
            email
            gotConverges {
                _id
                gunplaName
                series
                releaseDate
                price
            }
        }
    }
`;