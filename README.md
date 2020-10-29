# Gads_Ecommerce_App

The web-ecomerce is a web application that is meant for use for online shopping where a seller can add products for buyers to purchase and they able to make payments for the products they have ordered.

Gads_Ecommerce_App is a community project on an e-commerce app built by a group of developers from the GADS 2020 program

## Features
- Buyer can search and add products to the buyer's cart.
- Buyer can see his/her cart and modify them by removing and adding. 
- App should show available products, quantity and price.
- Buyer can create an account and login using an email and password
- Buyer can make orders and make payments 
- Buyer can view his/her purchase history
- Seller can add products, delete and update
- Seller can create an account and be able to login as an administrator
- Seller can view orders and make verify them


## API Endpoints

| |REQUEST | ROUTE                           | FUNCTIONALITY                 |
|-| ------- | ------------------------------- | ----------------------------- |
|POST     |api/v1/signin               | Logs in a user                |
|POST     |api/v1/signup               | creates a user account        |
|GET      |api/v1/signout              | ends user session             |
|GET      |api/v1/secret/:userId            | Protected route               |
|GET      |api/v1/user/:userId              | Protected route               |
|PUT      |api/v1/user/:userId              | updates user routes           |
|GET      | api/v1/category/:categoryId     |displays a particular category |
|PUT      |api/v1/category/:categoryId            |updates a category  |
|DELETE      | api/v1/category/:categoryId           |deletes a catergory (protected ) - it requires a user to be an adminstrator |
|GET      |   api/v1/categories       | lists all product categories |
|POST     |  /category/create/:userId          | creates a catergory (protected ) - it requires a user to be an adminstrator |
|GET     | /product/:productId           |Displays a product  |
|   POST  |   /product/create/:userId         |Creates a  (protected ) - it requires a user to be an adminstrator  |
|DELETE     | /product/:productId/:userId           |Deletes  a product   (protected ) - it requires a user to be an adminstrator|
|  PUT   | /product/:productId/:userId           |updates  a product   (protected ) - it requires a user to be an adminstrator|
|  GET   | /products          |Displays all products|
|  GET   | /products/search          |Displays all products based on search / query |
|  GET   | /products/related/:productId         |Displays only related products |
|  GET   | /products/categories       |Displays products based on categories |
|  GET   | /products/by/search       |queries for products based on the users  |
|  GET   | /product/photo/:productId      |diplays product photo  |
|  POST   | /order/create/:userId      |posts an order from the buyer  |
| GET   | /order/list/:userId     |DISPLAYS ALL ORDERS TO THE SELLER |
| GET   |  /order/:orderId/status/:userId  |UPDATES ORDERS STATUS |

### Getting started with the app

### Technologies used to build the application

-   [nodejs ](link)
-   [mongodb](link)
-   [expressjs](link)
-   [app engine]()


### Installation

 > Create a new directory and initialize git in it. Clone this repository by running

```sh
git clone  
```
Install the dependencies in the package.json file using using npm or yarn

```sh
npm install 
```
or 
```sh
yarn install 
```


Start the application by running

```sh
npm start
```
or 
```sh
yarn start
```

Test your setup using [postman](www.getpostman.com) REST-client

### Running tests

-  

### View the API 
- veiw app on heruku 
[Gads_Ecommerce_App](https://gads2020-app.herokuapp.com)
## Contributors 
***  
|| Developers | Role |email|
|--|-----------|------|-----|
||[Ernest Kabahima]( www.github.com/kabahima) |Backend developer |ernest575@oulook.com |
