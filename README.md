This read me file will be used to log the steps of our project, the purpose of the project as well as major changes made througout.
___________________________________________________________________________________________________________________________________

explination of the folders:
    config/  --> contains the configuration files for the project (i.e. database connection, api keys, etc)
    controllers/ --> contains the controllers for the project (i.e. login, signup, etc) - These are the functions that do the heavy lifting
    models/  --> contains the models for the project (i.e. user, data, etc) - These are the DB models and the functions related to them
    routes/  --> contains the routes for the project (i.e. login, signup, etc) - These are the functions that handle the requests and responses
    server.js --> listens to any API call from the frontend and handles it accordingly
    .env --> any environment variables that are needed for the project
    .gitignore --> any files that should be ignored by git
    package.json --> contains the dependencies for the project
    README.md --> this file where we document our project
    


Add the following to the database:
CREATE TABLE Users (
    userId INT IDENTITY(1,1) PRIMARY KEY,
    username NVARCHAR(50) NOT NULL UNIQUE,
    email NVARCHAR(100) NOT NULL UNIQUE,
    password NVARCHAR(255) NOT NULL,
    firstName NVARCHAR(50),
    lastName NVARCHAR(50),
    isActive BIT DEFAULT 1,
    createdAt DATETIME DEFAULT GETDATE(),
    updatedAt DATETIME DEFAULT GETDATE()
);