// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type Food {
        foodId: ID!
        description: String
        name: String
        price: String
        image: String
        quantity: Int
    }
    type Order {
        orderNumber: String
        orderPrice: String
        orderFood: [Food]
    }

    type User {
        _id: ID
        username: String
        email: String
        orders: [Order]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
    }

    input FoodInput {
        foodId: ID!
        description: String
        name: String
        price: String
        image: String
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        placeOrder(foodInput: FoodInput): User
        removeOrder(foodId: ID): User
    }
    `

// export the typeDefs
module.exports = typeDefs;