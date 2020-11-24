# Team TeamWork Blue Badge Server

## Sever
The node server is ran on a port specified by an .env file. In order for this file to work on your local machine, you must create a .env in the root directory and create a PORT variable and assigne port there.

It should be a different port than what your client runs on.

## DB - Database
The database credentials are located in the .env file. You must create a pg account and link to your database by making a DB_CONNECTION variable and assigning the credentials to that variable in the .env file.