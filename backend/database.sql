DROP DATABASE IF EXISTS `share-ma-ride`;

CREATE DATABASE `share-ma-ride`;

USE `share-ma-ride`;

DROP TABLE IF EXISTS `user`, `vehicle`, `post`, `rented-vehicle`, `admin`;


CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  email varchar(255) NOT NULL UNIQUE,
  hashed_password varchar(255) NOT NULL,
  phone_number varchar(255) NOT NULL,
  city varchar(255) NOT NULL,
  address varchar(255) NOT NULL,
  postal_code varchar(255) NOT NULL,
  rate int NOT NULL DEFAULT 5,
  photo varchar(255) NOT NULL,
  id_card varchar(255) NOT NULL DEFAULT 'id_card',
  is_admin boolean NOT NULL DEFAULT false,
  PRIMARY KEY (id)
);

INSERT INTO user (first_name, last_name, email, hashed_password, phone_number, city, address, postal_code, photo, is_admin) 
  VALUES 
    ("Michel", "Fenêtre", "michel@test.com", "$argon2id$v=19$m=65536,t=5,p=1$lbbK63cdNZ201i+/r7oZCQ$DRHi2fiVoX/2b77vXL8sKag/BKuIfLPuycUcrV1ELI4", "0600000000", "Paris", "1 rue de Michel Fenêtree", "75001", "3549543b-c363-4a68-95e4-d9807332ecbf-Cyril_capitalist_dystopia_dde48940-6cee-4e82-8355-778e0bcf9860.png", 0),
    ('Jean', 'Porte', 'jean@test.com', '$argon2id$v=19$m=65536,t=5,p=1$Nqo42zqE+F3B9/oUFYKZ1g$5fYwpnYf0iToZaIBG68eIAZ8A9kTtV0fF28bWQbyOMA', '0600000000', 'Paris', '1 rue de Jean Porte', '75002', 'd6d86989-62c7-4156-9b08-5047db7e823c-Cyril_landscape_940d61e1-f107-44a6-bed2-c0a3f17e9d9e.png', 0),
    ('John', 'Doe', 'john@test.com', '$argon2id$v=19$m=65536,t=5,p=1$8u2uhTgkA9x/YFPMGZmu8A$eTtb7okuufMlVSRRQbuwn0PD4BOM2IWj48R1/bNOhSA', '0600000000', 'Paris', '1 rue de John Doe', '75003', 'd7206de7-d47a-4c49-bd81-94eecd96605e-Cyril_music_band_5227e2ba-33d5-441e-be00-5f32e4f6ab23.png', 0),
    ('Victor', 'Poignée', 'victor@test.com', '$argon2id$v=19$m=65536,t=5,p=1$tAr2XTLKMza26HoEPurPgQ$nBf5coo9rb5jUpaav+RgOmp1lFXsjcrjG++ge410mb4', '0600000000', 'Paris', '1 rue de Victor Poignée', '75004', '8df376b3-2475-4e41-9b80-be860af1cd6a-Cyril_realistic_8c0c7644-5f69-4c66-9221-52e8979ebde6.png', 0),
    ("Cyril", "Leclercq", "cyril@sharemaride.com", "$argon2id$v=19$m=65536,t=5,p=1$l0GGrhX+VffSwyOh6BVh/g$xdzbOEFOn+t9hYt5xDxW/WqHD5zD2n2JQy4GzWS3pGA", "null", "null", "null", "null", "null", 1)
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
