// we need to import our exported database model from the models script and store it in a variable
const Customers = require(`../models/customers`);
// we need to create and export our router for usage in the server here 
// we first import the express dependency
const express = require(`express`);
// we then use express to create our router 
const router = express.Router(); 
// we then need to export our router for usage in our server
module.exports = router; 
// the router wil help us to create the API routes and also helps us to organise our API routes 
// we then create our API routes using our router that we created with the express dependency 

// Getting All The Customers 
router.get(`/`, async (req, res) => {
    // getting the customers from the students mongodb database 
    try{
        // getting the students from the database 
        const customer = await Customers.find(); // its an asynchronous programme so we need to use await keyword 
        // we send the customers details as json to the user as a response 
        res.status(200).json(customer); // sending the customer details as response 
    } 
    catch(err){
        // if an error occurs 
        res.status(500).json({message: err.message});
    }
});
// getting one customer 
// we use the middleware function to complete this route since it gets the customer for us 
// call the middleware function as a callback 
router.get(`/:id`, getCustomer,  (req, res) => {
    try{
        res.status(200).json(res.customer); // we use res.customer since in the middleware function the found customer was stored in the response object
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
});
// creating one customer 
router.post(`/:id`, (req, res) => {
    // we need to create a new customer object. this will be our new customer 
    const customer = new Customers({
        name: req.body.name,
        location: req.body.location,
        nationality: req.body.nationality,
        DateCame : req.body.DateCame
    });
    // we need to then save our new customer to the database 
    try{
        const new_customer = customer.save(); // we then save our new customer to the database (mongodb database)
        // we then pass a success message to our user that the customer has been saved 
        res.status(201).json({message: "Customer has been saved successfully"});
    }
    catch(err){
        // if we get an error this code has to run 
        res.status(404).json({message: err.message});
    }
});
// updating one customer 
// we need to add our middleware function to our function and check if the parameters are null in the requests body 
// if they are not null then we have to change the old properties to the new properties in the request body
router.patch(`/:id`, getCustomer, async (req, res) => {
    // we check if the property in the request body of our PATCH endpoint is not null 
    if(req.body.name != null){
        // if its not null we make the property in the request our new property and it updates the old one 
        res.customer.name = req.body.name;
    }
    if(req.body.location != null){
        res.customer.location = req.body.location;
    }
    if(req.body.nationality != null){
        res.customer.nationality = req.body.nationality;
    }
    if(req.body.DateCame != null){
        res.customer.DateCame = req.body.DateCame;
    }

    // then we have to save our updtated customer in the database 
    try{
        const updated_customer = await res.customer.save(); // saving the updated customer to the database 
        res.status(201).json({message: "Customer has been updated."}); // success message
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
});
// deleting one customer 
// we first use the middleware function as a callback 
// our router function should be asynchronous since deleting takes a specific time that we aint sure of 
router.delete(`/:id`, getCustomer, async (req, res) => {
    try{
        await res.customer.deleteOne(); // this deletes that customer with the id in the url
        res.status(201).json({message: "Customer has been successfully deleted."});   // success message 
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
});
// we have to create a middle ware function that gets a customer by their id from the database 
// the function is asynchronous since we will get a user from the database by their id and it takes a specific time 
async function getCustomer(req, res, next){
    // we create a variable for storing our customer that we get from the database
    let customer;
    try{
        customer = await Customers.findById(req.params.id); // we get the customers from the database according to the id passed in the request 
        if(customer == null){
            res.status(404).json({message: "Customer hasn't been found."});
        }
    }
    catch(err){
        // if we get an error in our search 
        res.status(404).json({message: err.message});
    }
    res.customer = customer; // we store the found customer in the response object for usage in other middleware functions or routers 
    next(); // this signals the end of the middleware function 
}