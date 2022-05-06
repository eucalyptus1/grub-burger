import { gql } from "apollo/client";

export const LOGIN_USER = gql`
    mutation loginUser($email, password: $password) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER =gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user{
                _id
                username
                email
            }
        }
    }
`;

export const PLACE_ORDER = gql`
    mutation placeOrder($foodInput : FoodInput){
        placeOrder(input: $input) {
            _id
            username
            order
            placedOrder{
                foodId
                name
                description
                image
                price
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeOrder($foodId: String!) {
        removeOrder(foodId: $foodId) {
            _id
            username
            order
            placedOrder{
                foodId
                name
                description
                image
                price
            }
        }
    }
`;