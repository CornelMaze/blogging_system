# The is a Blogging System

To use this app run:
=> node server.js

## Blogging System with Node.Js and MySQL

This Blogging System has the following functionality. The users can signup, login, perform CRUD operations, Image Upload and Comment on other posts.
Functionality wise we would perform: CRUD, DB Migrations, DB Seeds, Data Validation, Authentications(Token Based), Image Uploading and Relationships.
We would use express and sequelize
Note: You would need a database for this to work
Database Tables:
=> users

- id
- name
- email
- password

=> posts

- id
- title
- content
- image_url
- categoryId
- userId

=> categories

- id
- name

=> comments

- id
- content
- postId
- userId

Sequelize is the ORM (Object Relational Mapping) that we are using. With this we can run queries without writing SQL.

To initialize sequelize we run:
=> sequelize init

To have sequelize-cli run:
=> npm install -g sequelize-cli
Sequelize would be installed globally on your cli.
This command would create:

- config
  => config.json
- migrations
- models
  => index.js
- seeders

To run our migrations we write:
=> sequelize db:migrate

For our Validation we would use fastest-validator:
=> npm install fastest-validator

For our Authentications we need bcryptjs jsonwebtoken
=> npm install bcryptjs jsonwebtoken

For our environment file we use dotenv
=> npm i dotenv

For Uploading images we use multer
=> npm i multer

It handles authentication from the user registering, creating tokens, saving tokens in the browser's local storage, protecting routes

Note: Having the ability to reset your password with email would be in future application.

## How to use

- run 'git clone ...'
- run 'npm start'

### Login and registration API

root url is http://localhost:4000

All the user API router follows '/api/auth/' For authenticated resources

| #   | Routers              | Verbs  | Progress | Is Private | Description     |
| --- | -------------------- | ------ | -------- | ---------- | --------------- |
| 1   | '/user/sign-up'      | POST   | DONE     | No         | Register a user |
| 2   | '/user/login'        | POST   | DONE     | No         | Login a user    |
| 3   | '/posts'             | POST   | DONE     | Yes        | Create a post   |
| 4   | '/posts/:id'         | GET    | DONE     | No         | Get post by id  |
| 5   | '/posts'             | GET    | DONE     | No         | Get all post    |
| 6   | '/posts/:id'         | PATCH  | DONE     | Yes        | Update a post   |
| 7   | '/posts/:id'         | DELETE | DONE     | Yes        | Delete a post   |
| 8   | '/image/uploads'     | POST   | DONE     | Yes        | Upload an image |
| 8   | '/uploads/image_url' | GET    | DONE     | No         | Get an image    |

The sign-up route takes in the name, email and password of the user
The login route requires the email and password and returns a token
To update a post select Authorization as Bearer Token and paste your token in then your can edit a post.
