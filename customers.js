// we then have to import and configure the dotenv dev depedency since we need to use environment variables
require(`dotenv`).config(); // importing and configuring
// we have to connect our server to express 
// we import express to our server and store it in a variable
const express = require(`express`);
// we create an express application called app
const app = express();
// we make our server to accept and use .json files 
app.use(express.json());
// now we have to connect our server to our router 
// we create a router variable that will store the exported router from the routes script file
const customersRouter = require(`./routes/customers`); // we import the exported router from this route 
// we then allow our express app in our server to use this router 
app.use(`/customers`, customersRouter); // if the url begins with `/customers`
// we use the express application to listen for http requests on port 3000
app.listen(3000, () => console.log("Server listening for requests on Port 3000.")); // express server listening to http requests

// we then connect our express server to the mongodb database 
// we first import the mongoose dependency
const mongoose = require(`mongoose`);
// we use the mongoose dependency to establish the connection to the database 
mongoose.connect(process.env.DATABASE_URL); // get the database url from the .env file as an environment variable 
// we then store our connection in a variable 
const db = mongoose.connection;
// if the connection has an error
db.on(`error`, (error) => console.error(error));
//when the connection is successful 
db.once(`open`, () => console.log("Connected to the database successfully."));