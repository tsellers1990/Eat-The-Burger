CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name varchar(100) NOT NULL,
    isEaten BOOLEAN DEFAULT false
);

select * from burgers;