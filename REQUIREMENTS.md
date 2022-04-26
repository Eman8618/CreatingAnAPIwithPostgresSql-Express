# Update of API Requirements
## Database Schema
I have created two database one for dev and one for test both of them contain the following tables:
## customerscredentials table
TABLE customerscredentials (
    id SERIAL PRIMARY KEY, 
    email VARCHAR(100)  UNIQUE  NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_di VARCHAR(200)  UNIQUE NOT NULL
);
## customersmenuinfo table
TABLE customersmenuinfo(
  id SERIAL PRIMARY KEY ,
  credentialid INTEGER REFERENCES customerscredentials(id) UNIQUE  NULL,
  customername VARCHAR(50) NOT NULL,
  mobile VARCHAR(11) NOT NULL,
  addresses VARCHAR(50) NOT NULL,
  customercountry VARCHAR(50) NOT NULL,
  nationalid VARCHAR(50)  NULL
);
## productsmenuinfo table
CREATE TABLE  productsmenuinfo(
  id SERIAL PRIMARY KEY,
  credentialid INTEGER REFERENCES customerscredentials(id)  NULL,
  productname VARCHAR(50) NOT NULL,
  price FLOAT(2) NOT NULL,
  category VARCHAR(50) NOT NULL,
  productioncountry VARCHAR(50) NOT NULL 
);
## ordersmenuinfo table
TABLE ordersmenuinfo(
  id SERIAL PRIMARY KEY,
  credentialid INTEGER REFERENCES customerscredentials(id)  NULL,
  orderquantity NUMERIC(12) NOT NULL,
  purchasedate DATE  NULL, 
  onlinepayment BOOLEAN NOT NULL,
  customerid INTEGER REFERENCES customersmenuinfo(id)  NULL,
  productid  INTEGER REFERENCES productsmenuinfo(id)  NULL
);
### Each table of them  contain id as serial number && contain credentialid that reference to 
### the credential of customer to can create or update or delete product or order
### Order table have also id of the product and id of customer 

# Here the list of all route and their functions
## Route for the server starting using get request
http://localhost:3000

## Customer credential routes
#### For create new customer credential using post request
http://localhost:3000/customerscredentials/email/:email/username/:username/password_di/:password_di
#### For authorization using post request
http://localhost:3000/auth/username/:username/password_di/:password_di
#### For show the customer credential with id using get request
http://localhost:3000/customerscredentials/id/:id
#### For Show customer credentials with user name for customer using get request
http://localhost:3000/customerscredentials/username/:username
#### For show all customers credentials using get request
http://localhost:3000/customerscredentials
#### For Update customer credential email using put request
http://localhost:3000/customerscredentials/username/:username/email/:email
#### For Update customer credential password using put request 
http://localhost:3000/customerscredentials/username/:username/password_di/:password_di/email/:email
#### For delete customer credential with id using delete request
http://localhost:3000/customerscredentials/id/:id

## For customer menu info routes 
#### For create new customer menu info using post request
http://localhost:3000/customersmenuinfo/credentialid/:credentialid/customername/:customername/mobile/:mobile/addresses/:addresses/customercountry/:customercountry/nationalid/:nationalid
#### For show the customer info with id using get request
http://localhost:3000/customersmenuinfo/id/:id
#### For show all customers info using get request
http://localhost:3000/customersmenuinfo
#### For Update customer mobile number usig put request
http://localhost:3000/customersmenuinfo/credentialid/:credentialid/customerinfoid/:id/mobile/:mobile
#### For delete customer info with id
http://localhost:3000/customersmenuinfo/credentialid/:credentialid/customerinfoid/:id


## For Product menu info routes
#### For create new product menu info using post request
http://localhost:3000/productsmenuinfo/credentialid/:credentialid/productname/:productname/price/:price/category/:category/productioncountry/:productioncountry
#### For show the product info with id using get request
http://localhost:3000/productsmenuinfo/id/:id
#### For show all poducts info using get request
http://localhost:3000/productsmenuinfo
#### For Update product number using put request
http://localhost:3000/productsmenuinfo/credentialid/:credentialid/productinfoid/:id/price/:price
#### For delete product  info with id using delete
http://localhost:3000/productsmenuinfo/credentialid/:credentialid/productinfoid/:id


## For Order menu info routes
#### For create new order menu info using post request
http://localhost:3000/ordersmenuinfo/credentialid/:credentialid/orderquantity/:orderquantity/purchasedate/:purchasedate/activeorder/:activeorder/customerid/:customerid/productid/:productid
#### For show the order info with id using get request
http://localhost:3000/ordersmenuinfo/id/:id
#### For show all order info using get request
http://localhost:3000/ordersmenuinfo
#### For Update  order quantity using put request
http://localhost:3000/ordersmenuinfo/credentialid/:credentialid/orderid/:id/orderquantity/:orderquantity
#### For delete order info with id
http://localhost:3000/ordersmenuinfo/credentialid/:credentialid/orderid/:id


##### Finally note that  I marked them as comments because I donot like to apply them on tests The routing of all delete 

#### For delete all orders
http://localhost:3000/ordersmenuinfo/alldelete/credentialid/:credentialid

#### For delete all products 
http://localhost:3000/productsmenuinfo/alldelete/credentialid/:credentialid

#### For delete all customer info 
http://localhost:3000/customersmenuinfo/alldelete/credentialid/:credentialid

#### For delete all  customers credential
 http://localhost:3000/customerscredentials/alldelete








# Original file contents
#  API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
- Show
- Create [token required]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required]
- Show [token required]
- Create N[token required]

#### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

#### User
- id
- firstName
- lastName
- password

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

