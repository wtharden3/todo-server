# Team TeamWork Blue Badge Server

In order to download the dependencies, run `npm install` in your root directory.

## Sever
The node server is ran on a port specified by an .env file. In order for this file to work on your local machine, you must create a .env in the root directory and create a PORT variable and assigne port there.

It should be a different port than what your client runs on.

## DB - Database
The database credentials are located in the .env file. You must create a pg account and link to your database by making a DB_CONNECTION variable and assigning the credentials to that variable in the .env file.

## Server Signup
http://localhost:4000/user/login

You man need to use a different port other than 4000 if not available. Please use this end point on your client (Postman or React) in order to successfully create a new user.

Body includes email, password, firstname, lastname for login.

image coming soon



## Server login
http://localhost:4000/user/login

You man need to use a different port other than 4000 if not available. Please use this end point on your client (Postman or React) in order to successfully create an existing user.

the body will include email and password. Remeber that this should be the original password and not the hashed password. 

image coming soon