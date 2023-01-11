DROP DATABASE IF EXISTS `share-ma-ride`;

CREATE DATABASE `share-ma-ride`;

USE `share-ma-ride`;

DROP TABLE IF EXISTS `user`, `vehicle`, `post`, `rented-vehicle`, `admin`;


CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  email varchar(255) NOT NULL UNIQUE,
  password varchar(255) NOT NULL,
  phone_number varchar(255) NOT NULL,
  city varchar(255) NOT NULL,
  address varchar(255) NOT NULL,
  postal_code varchar(255) NOT NULL,
  rate int NOT NULL DEFAULT 5,
  photo varchar(255) NOT NULL,
  id_card varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO user (first_name, last_name, email, password, phone_number, city, address, postal_code, rate, photo, id_card) 
  VALUES 
    ("John1", "Doe1", "john.doe1@johndoe.com", "password1", "phone_number1", "paris", "1 rue de john doe", "75001", 5, "photo1", "id_card1"),
    ('John2', 'Doe2', 'john.doe2@johndoe.com', 'password2', 'phone_number2', 'paris', '2 rue de john doe', '75001', 5, 'photo2', 'id_card2'),
    ('John3', 'Doe3', 'john.doe3@johndoe.com', 'password3', 'phone_number3', 'paris', '3 rue de john doe', '75001', 5, 'photo3', 'id_card3'),
    ('John4', 'Doe4', 'john.doe4@johndoe.com', 'password4', 'phone_number4', 'paris', '4 rue de john doe', '75001', 5, 'photo4', 'id_card4')
;

CREATE TABLE vehicle (
  id int NOT NULL AUTO_INCREMENT,
  owner_id int NOT NULL,
  type varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  price int NOT NULL,
  photo varchar(255) NOT NULL,
  is_available boolean NOT NULL DEFAULT true,
  PRIMARY KEY (id),
  CONSTRAINT fk_owner_id
    FOREIGN KEY (owner_id)
    REFERENCES user(id)
);

INSERT INTO vehicle (owner_id, type, name, description, price, photo, is_available) 
  VALUES 
    (1, 'bike', 'bike1', 'description1', 10, 'photo1', 1),
    (2, 'bike', 'bike2', 'description2', 20, 'photo2', 1),
    (3, 'bike', 'bike3', 'description3', 30, 'photo3', 0),
    (4, 'bike', 'bike4', 'description4', 40, 'photo4', 0)
;

CREATE TABLE rent (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  vehicle_id int NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_user_id
    FOREIGN KEY (user_id)
    REFERENCES user(id),
  CONSTRAINT fk_vehicle_id
    FOREIGN KEY (vehicle_id)
    REFERENCES vehicle(id)
);

INSERT INTO rent (user_id, vehicle_id, start_date, end_date) 
  VALUES 
    (1, 1, '2019-01-01', '2019-01-02'),
    (2, 2, '2019-01-01', '2019-01-02'),
    (3, 3, '2019-01-01', '2019-01-02')
;

CREATE TABLE admin (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO admin (first_name, last_name, email, password) 
  VALUES 
    ('Michel', 'Fenetre', 'michel.fenetre@sharemaride.com', 'password1'),
    ('Jean', 'Porte', 'jean.porte@sharemaride.com', 'password2')
;
