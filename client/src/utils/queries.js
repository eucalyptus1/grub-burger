import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    Query Query {
        me {
        _id
        username
        email
        }
    }
`;

export const QUERY_USERS = gql`
    query Query {
        users {
        _id
        username
        email
        orders {
            orderNumber
            orderPrice
            orderFood {
            foodId
            description
            name
            price
            image
            quantity
            }
        }
        }
    }
`

export const QUERY_PLACEORDER = gql`

`

export const QUERY_REMOVEORDER = gql`
    
`