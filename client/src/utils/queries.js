import { gql } from "@apollo/client";

export const QUERY_USER_ORDERS = gql `
    query Query {
        me {
            _id
            placedOrders {
                foodId
                name
                description
                image
                price
            }
        }
    }
`