CREATE DATABASE cubs_db;

USE cubs_db;

CREATE TABLE cubInfo
        (
                id int NOT NULL AUTO_INCREMENT,
                name varchar(50) NOT NULL,
                photo varchar(260) NOT NULL,
                video varchar(260) NOT NULL,
                glink varchar(260 ) NOT NULL,
                location varchar(50) NOT NULL,
                email varchar(35) NOT NULL,
                relocate TINYINT(1) DEFAULT 0,
                html TINYINT(1) DEFAULT 0,
                css TINYINT(1) DEFAULT 0,
                javascript TINYINT(1) DEFAULT 0,
                node TINYINT(1) DEFAULT 0,
                mysql TINYINT(1) DEFAULT 0,
                curl TINYINT(1) DEFAULT 0,
                heroku TINYINT(1) DEFAULT 0,
                github TINYINT(1) DEFAULT 0,
                PRIMARY KEY (id)
        );