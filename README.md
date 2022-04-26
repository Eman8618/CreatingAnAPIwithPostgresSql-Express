# Storefront Backend Project
#### This project is created with the assistance of the starter project and contents of lessons that are
#### provided from Udacity. I organized the routes and models as functions according to live 
#### sessions from our leader 
store have customer credentail to user to can add or update or delete any of products , and orders so if the user doesn't have credential id then he cannot have permission for create ,update ,delete .
Also user password have been hashed by pepper bcrypt libary and using jwt token for verify it  
## For install packages that is used 
#####    npm install
## Scripts for run the project

#### For Create the 2 database and migration

##### create storefrbk  with pgAdmin 4
####  For migration up for storefrbk database
###### npm run mig-u-dev  
#### For create test database & migration for  storefrbktest database 
###### npm run mig-u-test
####  For migration down for storefrbk database
###### npm run mig-d-dev  
#### For migration down for storefrbktest database & drop it 
###### npm run mig-d-test
####   For build server 
###### npm run build-server-proj2
####   For start server 
###### npm run start-server-proj2
####   For test server 
###### npm run test-server-proj2
#### For testing of the storefrbktest database in test mode 
######  npm run test-test
#### For testing of the storefrbk database in dev mode
######   npm run test-dev
####   For run eslint & prettier server 
###### npm run lint-f-proj2
###### npm run prettier-f-proj2

# The env variables that I used on the Project 
### Enviroment variables from .env file are as the following:
ENV=dev
PORT=3000
POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5432
POSTGRES_DB=storefrbk
POSTGRES_DB_TEST=storefrbktest
POSTGRES_USER=postgres
POSTGRES_PASSWORD=E@man
BCRYPT_PASSWORD=eman-auth-and-confirm
TOKEN_SEC=em145an$
SALT_ROUNDS=10
## customerscredentials()  function which contain the following  functions:
Create new customer credential,Aut_fun,showcustomercredentail,id_showcustomercredentail, showallcustomercredentail, updatecustomercredentailemail,updatecustomercredentailpassword,deletecustomercredential,

## customersmenuinfo() function which contain the following  functions:
createcustomerinfo,showcustomerinfo,showallcustomerinfo,updatecustomerinfo,deletecustomerinfo


## productinfo()  function which contain the following  functions:
createproductinfo,showproductinfo,updateproductinfo,showallproductinfo,deleteproductinfo
## ordersmenuinfo() function which contain the following function
createorderinfo,showorderinfo,showallorderinfo,updateorderinfo,deleteorderinfo,

Note that all delete functions I marked them as comments as I donot use them on tests

functions are : delete_allcustomercredential ,delete_allcustomerinfo,delete_allproductinfo,delete_allorderinfo

## The original content 
## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `yarn` in your terminal at the project root.

## Required Technologies
Your application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Steps to Completion

### 1. Plan to Meet Requirements

In this repo there is a `REQUIREMENTS.md` document which outlines what this API needs to supply for the frontend, as well as the agreed upon data shapes to be passed between front and backend. This is much like a document you might come across in real life when building or extending an API. 

Your first task is to read the requirements and update the document with the following:
- Determine the RESTful route for each endpoint listed. Add the RESTful route and HTTP verb to the document so that the frontend developer can begin to build their fetch requests.    
**Example**: A SHOW route: 'blogs/:id' [GET] 

- Design the Postgres database tables based off the data shape requirements. Add to the requirements document the database tables and columns being sure to mark foreign keys.   
**Example**: You can format this however you like but these types of information should be provided
Table: Books (id:varchar, title:varchar, author:varchar, published_year:varchar, publisher_id:string[foreign key to publishers table], pages:number)

**NOTE** It is important to remember that there might not be a one to one ratio between data shapes and database tables. Data shapes only outline the structure of objects being passed between frontend and API, the database may need multiple tables to store a single shape. 

### 2.  DB Creation and Migrations

Now that you have the structure of the databse outlined, it is time to create the database and migrations. Add the npm packages dotenv and db-migrate that we used in the course and setup your Postgres database. If you get stuck, you can always revisit the database lesson for a reminder. 

You must also ensure that any sensitive information is hashed with bcrypt. If any passwords are found in plain text in your application it will not pass.

### 3. Models

Create the models for each database table. The methods in each model should map to the endpoints in `REQUIREMENTS.md`. Remember that these models should all have test suites and mocks.

### 4. Express Handlers

Set up the Express handlers to route incoming requests to the correct model method. Make sure that the endpoints you create match up with the enpoints listed in `REQUIREMENTS.md`. Endpoints must have tests and be CORS enabled. 

### 5. JWTs

Add JWT functionality as shown in the course. Make sure that JWTs are required for the routes listed in `REQUIUREMENTS.md`.

### 6. QA and `README.md`

Before submitting, make sure that your project is complete with a `README.md`. Your `README.md` must include instructions for setting up and running your project including how you setup, run, and connect to your database. 

Before submitting your project, spin it up and test each endpoint. If each one responds with data that matches the data shapes from the `REQUIREMENTS.md`, it is ready for submission!



