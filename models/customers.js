// we have to create a data model for the database elements that we will be storing in our mongodb database 
// this database model will describe the properties of our database elements 
// it will have a schema which we create using mongoose dependency 
// this schema is a javascript object that describes the properties of our database elements 
// we first import mongoose dependency
const mongoose = require(`mongoose`); // and store the dependency in a variable
// we use the mongoose dependency to create our schema; js object that describes our database element properties 
// we use the mongoose to create the schema.
const customerSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    location : {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    DateCame: {
        type: Date,
        required: true,
        default: Date.now
    }
});

// we need to export our database model for usage in our API routes in our routes script routes 
module.exports =  mongoose.model(`/customers`, customerSchema); 
