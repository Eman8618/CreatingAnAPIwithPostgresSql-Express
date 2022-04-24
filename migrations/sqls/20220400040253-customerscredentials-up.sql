/* Create customerscredentials table*/
CREATE TABLE customerscredentials (
    id SERIAL PRIMARY KEY, 
    email VARCHAR(100)  UNIQUE  NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_di VARCHAR(200)  UNIQUE NOT NULL
);