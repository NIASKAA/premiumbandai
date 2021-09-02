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
    mutation saveConverge($name: String!, $id: ID) {
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
    mutation saveHighGrade($name: String!, $id: ID) {
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
    mutation saveRealGrade($name: String!, $id: ID) {
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
    mutation saveMasterGrade($name: String!, $id: ID) {
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
    mutation savePerfectGrade($name: String!, $id: ID) {
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
    mutation saveSDGrade($name: String!, $id: ID) {
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

export const CONVERGE_WISHLIST = gql`
    mutation convergeWishlist($name: String! $id: ID) {
        convergeWishlist(name: $name id: $id) {
            username
            email
            convergeWish {
            _id
            gunplaName
            image
            series
            releaseDate
            price
            }
        }
    }
`;

export const HIGHGRADE_WISHLIST = gql`
    mutation highGradeWishlist($name: String! $id: ID) {
        highGradeWishlist(name: $name id: $id) {
            username
            email
            convergeWish {
            _id
            gunplaName
            image
            series
            releaseDate
            price
            }
        }
    }
`;

export const REALGRADE_WISHLIST = gql`
    mutation realGradeWishlist($name: String! $id: ID) {
        realGradeWishlist(name: $name id: $id) {
            username
            email
            convergeWish {
            _id
            gunplaName
            image
            series
            releaseDate
            price
            }
        }
    }
`;

export const MASTERGRADE_WISHLIST = gql`
    mutation masterGradeWishlist($name: String! $id: ID) {
        masterGradeWishlist(name: $name id: $id) {
            username
            email
            convergeWish {
            _id
            gunplaName
            image
            series
            releaseDate
            price
            }
        }
    }
`;

export const PERFECTGRADE_WISHLIST = gql`
    mutation perfectGradeWishlist($name: String! $id: ID) {
        perfectGradeWishlist(name: $name id: $id) {
            username
            email
            convergeWish {
            _id
            gunplaName
            image
            series
            releaseDate
            price
            }
        }
    }
`;

export const SDGRADE_WISHLIST = gql`
    mutation sdGradeWishlist($name: String! $id: ID) {
        sdGradeWishlist(name: $name id: $id) {
            username
            email
            convergeWish {
            _id
            gunplaName
            image
            series
            releaseDate
            price
            }
        }
    }
`;

export const DELETE_CONVERGE_SAVE = gql`
    mutation deleteConvergeSave($convergeID: ID! $id: ID){
        deleteConvergeSave(convergeID: $convergeID id: $id) {
            username
            email
            gotConverges {
            _id
            gunplaName
            image
            series
            price
            releaseDate
            }
        }
    }
`;

export const DELETE_HIGHGRADE_SAVE = gql`
    mutation deleteHighGradeSave($highGradeID: ID! $id: ID){
        deleteHighGradeSave(convergeID: $highGradeID id: $id) {
            username
            email
            gotConverges {
            _id
            gunplaName
            image
            series
            price
            releaseDate
            }
        }
    }
`;