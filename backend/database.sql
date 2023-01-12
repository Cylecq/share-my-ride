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
    (1, 'bike', 'Mountain Bike', 'The best bike if yoou want to do a mountain trip', 10, '6c7c0e83-6bcb-4adc-83bb-08550f811eb2-bike.jpeg', 1),
    (2, 'bike', 'City Bike', 'A trip in Paris ? Rent my bike to discover the the most beautiful city in the world !', 18, 'dca56ca9-8678-40c0-9ded-b0ffb8d04415-bike2.jpeg', 0),
    (3, 'bike', 'Vintage Bike', 'Show off in the city with this great vintage bike', 15, 'b070e79f-145f-4024-b009-9358d600eb5a-bike3.jpeg', 1),
    (4, 'roller', 'Vintage Rollers', 'Show off in the city with this great vintage rollers', 15, '98eb2c80-d13d-4187-8488-25eb367eaa02-rollers.png', 1),
    (1, 'roller', 'Disco Rollers', 'Shine on the dancefloor with these sparkling rollerblades', 17, '844a152f-dc0c-46ed-b42e-c9caaffbf8da-rollers2.jpg', 0),
    (2, 'roller', 'Child Rollers', 'Let your children discover rollerblading', 11, '9d892536-b361-401b-b566-0ebeb9672896-rollers3.jpg', 1),
    (3, 'skate', 'Skate from Hell', 'Satan gave it to me', 11, 'acdca399-b7a3-44ac-ad4d-4b48985a1a6c-skate.jpg', 0),
    (4, 'skate', 'Nice Cruiser', 'Discover the city with a skateboard !', 9, '62f61ca9-d1eb-4989-9603-ea6bfa0a476d-skate2.jpg', 1),
    (1, 'skate', 'Skateboard', 'A classic skateboard if you want to spend a day in a skatepark', 10, '7d7776a1-6c1a-4e6d-8aef-b868c06b29ff-skate3.jpeg', 1),
    (2, 'trot', 'Vintage scooter', 'Show off in the city with this great vintage scooter', 16, '01703ddc-0761-4ab2-b444-f9c2a5e703b5-trot.jpg', 1),
    (3, 'trot', 'Freestyle scooter', 'A freestyle scooter if you want to spend a day in a skatepark', 12, 'a239ea76-adc4-4626-a209-ac4886754522-trot2.jpg', 1),
    (4, 'trot', 'Child scooter', 'Let your children discover scooter', 10, '5fb3f387-8a51-4ddc-bb68-b7ec9072dfe3-trot3.jpg', 0),
    (1, 'other', 'Rolling chair', "For life's unexpected events", 35, 'aef69ade-62ff-45df-8463-8937142bf05a-chaiseroulante.jpg', 1),
    (2, 'other', 'Monowheel', "Discover my DIY monowheel !", 30, 'f5724a88-919f-43bf-98e0-14330a87fad6-monowheel.jpg', 1),
    (3, 'other', 'Monowheel', "Flex in the city like Gwenzouz", 25, '1be2c315-767c-4220-adca-c19e3b2c9a89-monowheelGwen.jpg', 1)
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
    (1, 5, '2019-01-01', '2019-01-02'),
    (1, 2, '2019-01-03', '2019-01-04'),
    (1, 3, '2019-01-05', '2019-01-06'),
    (1, 4, '2019-01-07', '2019-01-08'),
    (2, 2, '2019-01-01', '2019-01-02'),
    (3, 3, '2019-01-01', '2019-01-02')
;
