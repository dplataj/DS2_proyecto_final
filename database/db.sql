--Creating databes--
CREATE DATABASE pasareladepagos;

create schema if not exists pasareladepagos;

use pasareladepagos;

drop table if exists transaccion;
drop table if exists tarjeta;
drop table if exists cliente;

CREATE TABLE tarjeta(
    card_num BIGINT UNSIGNED PRiMARY KEY,
    holdername VARCHAR(50) NOT NULL,
    expmonth INT NOT NULL,
    expyear INT NOT NULL,
    ccv INT NOT NULL,
    saldo FLOAT(23),
    credito BOOLEAN

);

CREATE TABLE transaccion(
    card_number BIGINT UNSIGNED PRiMARY KEY,
    ammount FLOAT(23),
    holdername VARCHAR(50) NOT NULL,
    email VARCHAR(50),
    addres VARCHAR(50),
    city VARCHAR(50),
    country VARCHAR(50),
    postalcode VARCHAR(50)
);

INSERT INTO tarjeta VALUES (1000000000000000, 'Alejandro Polo', 01 , 26, 111, null , true );
INSERT INTO tarjeta VALUES (13212232422424231, 'Alex Jones', 02 , 26, 112, 20000.47 , false );
INSERT INTO tarjeta VALUES (23212232422424231, 'Michael Morbius', 03 , 26, 113, null , true );
INSERT INTO tarjeta VALUES (43212232422424231, 'Jhon Doe', 04 , 26, 114, 7000000 , false );
INSERT INTO tarjeta VALUES (53212232422424231, 'David Brown', 05 , 26, 115, 450000 , false );
INSERT INTO tarjeta VALUES (63212232422424231, 'Alice Smith', 06 , 26, 116, null , true );
INSERT INTO tarjeta VALUES (73212232422424231, 'Thom York', 07 , 26, 117, 30000 , false );
INSERT INTO tarjeta VALUES (55512232666424231, 'Bradly Cooper', 08 , 26, 118, null , true );
INSERT INTO tarjeta VALUES (95325232422424231, 'Ted Casablanca', 09 , 26, 119, 210000 , false );
INSERT INTO tarjeta VALUES (83212232422424231, 'Orlando Molinares', 10 , 26, 120, null , true );
INSERT INTO tarjeta VALUES (65645632422424231, 'Piter Avila', 11 , 26, 121, 50000 , false );
INSERT INTO tarjeta VALUES (73312232422424231, 'Harold Howard', 12 , 26, 122, null , true );
INSERT INTO tarjeta VALUES (93212232422424231, 'Joshua Johnson', 01 , 27, 123, 140000 , false );
INSERT INTO tarjeta VALUES (2000000000000000, 'James Mcgill', 02 , 27, 124, null , true );
INSERT INTO tarjeta VALUES (2024252523525243, 'Howard Hamlin', 03 , 27, 125, 234000 , false );

-----Transaccion de prueba-----

INSERT INTO transaccion 
SELECT 1000000000000000,  2000, 'Alejandro Polo', 'apolo@gmail.com' , 'Clle 3B 311', 'Barranquilla', 'Colombia' , '802412'
WHERE EXISTS (SELECT * FROM tarjeta WHERE card_num = 1000000000000000 AND expmonth = 01 AND expyear = 26 AND ccv =111);


SELECT * FROM transaccion;
SELECT * FROM tarjeta;
