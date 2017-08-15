DROP DATABASE IF EXISTS burgers_db; 

CREATE DATABASE burgers_db; 

USE burgers_db;

CREATE TABLE burger (
		id INT NOT NULL AUTO_INCREMENT, 
		burger_name VARCHAR(1000) NOT NULL, 
		devoured BOOLEAN DEFAULT FALSE,
        date TIMESTAMP, 
        PRIMARY KEY (id)
);




        
