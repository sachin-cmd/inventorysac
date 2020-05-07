/* 
 * Importing express and graphql packagaes
 * Importing other dependecies 
 * */

const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const User= require('./models/user')

const app = new  express();

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

app.use(bodyParser.json());

app.use((req,res,next)=>
{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');

    if(req.method=='OPTIONS')
    {
        return res.sendStatus(200);
    }

    next();
})





  


   

app.use('/graphql',graphqlHttp({
    
    
    schema : graphQlSchema ,
    rootValue : graphQlResolvers,
    graphiql:true
})

);



mongoose.connect(`mongodb+srv://sachinsivakumar99:hello@cluster0-awsaa.mongodb.net/events-react-dev?retryWrites=true&w=majority`
, { 
    useNewUrlParser: true
})
.then( () => {
    console.log("Test Run  Sucess")
    app.listen(process.env.PORT||3000);
})
.catch(err => {
    console.log(err)
});
