const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    

type User {

    _id : ID!
    firstname : String!
    lastname : String!
    department:String!
    email : String!
    password:String
    verified:Boolean
    createdAt:String
    updatedAt:String
}

input UserInput {
     
    firstname : String!
    lastname : String!
    department:String!
    email : String!
    password:String!
    
        
}

type RootQuery {
    
    users:[User!]!
  
}

type RootMutation {

    createUser(userInput : UserInput) : User
    
    
}

schema {

    query: RootQuery
    mutation: RootMutation
    
} 

    

`);
