# Customers Management REST API

A REST API built with JavaScript for managing customer information. The API allows you to create, retrieve, update, and delete customer records from a database.

## Features

- Create a new customer
- Get all customers
- Get a specific customer
- Update customer information
- Delete a customer
- Store customer data in a database
- RESTful API endpoints
- JSON request and response format

## Technologies Used

- JavaScript
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon

## Project Structure

```text
customers-rest-api/
│
├── customers.js
├── package.json
├── package-lock.json
├── .env
└── README.md
````

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project folder:

```bash
cd customers-rest-api
```

Install the required dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory and add your database connection:

```env
DATABASE_URL=mongodb://localhost/customers
```

## Running the Application

Start the server:

```bash
npm start
```

If you are using Nodemon during development:

```bash
npm run devStart
```

The API will run on:

```text
http://localhost:3000
```

## API Endpoints

### Get All Customers

```http
GET /customers
```

Returns a list of all customers.

### Get One Customer

```http
GET /customers/:id
```

Returns a specific customer using their ID.

### Create a Customer

```http
POST /customers
```

Example request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "0712345678"
}
```

### Update a Customer

```http
PATCH /customers/:id
```

Example request body:

```json
{
  "name": "John Smith",
  "email": "johnsmith@example.com"
}
```

### Delete a Customer

```http
DELETE /customers/:id
```

Deletes a customer using their ID.

## Example Customer

A customer record may look like:

```json
{
  "_id": "68d123456789abcdef123456",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "0712345678"
}
```

## Testing the API

You can test the API using tools such as:

* Postman
* Thunder Client
* Insomnia
* REST Client extensions in VS Code

## Purpose

This project was created to practice building REST APIs with JavaScript, Express.js, MongoDB, and Mongoose. It demonstrates how a backend application can communicate with a database and perform CRUD operations on customer data.

## CRUD Operations

| Operation | HTTP Method | Endpoint         |
| --------- | ----------- | ---------------- |
| Create    | POST        | `/customers`     |
| Read All  | GET         | `/customers`     |
| Read One  | GET         | `/customers/:id` |
| Update    | PATCH       | `/customers/:id` |
| Delete    | DELETE      | `/customers/:id` |

## Author

Sharif Ssekamate

```
```
