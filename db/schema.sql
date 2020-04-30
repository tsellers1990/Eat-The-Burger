CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) NOT NULL,
    isEaten BOOLEAN DEFAULT false
);