# DS2_proyecto_final

**Tutorial para instalar base de datos:**
https://www.youtube.com/watch?v=FQ7XAygh0qA

**Usuario y Contraseñas recomendos para la instalación**
```
user: 'root'
password: 'mysql2022'
```
**Comado para instalar node en el proyecto**
```
npm install express mysql morgan ejsexpress-myconection
```

**Con respecto a la base de datos:**
Es recomendado ejecutar el siguiente comando en la base datos para el proyecto:
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```
Donde  ``password`` es la contraseña establecido para la base de datos.
Esto es para evitar el siguiente error:
```
ER_NOT_SUPPORTED_AUTH_MODE
```
Tambien se deben ejecutar las instrucciones del archivo ``db.sql``, el cual crea las tablas y las llena.
**Subir el servidor**
```
node Pasarela_de_pago/app.js
```

## Tarjetas funcionales:

| Numero de tarjeta | Numero de la tarjeta | Mes de expiracion | Año de expiración | CCV | Saldo | Tipo |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| 1000000000000000 | Alejandro Polo | 01 | 26 | 111 | N/A |Credito |
| 13212232422424231 | Alex Jones | 02 | 26 | 112 | 20000.47 | Debito |
| 23212232422424231 | Michael Morbius | 03 | 26 | 113 | N/A | Credito |
| 43212232422424231 | Jhon Doe | 04 | 26| 114 | 7000000 | Debito |
| 53212232422424231 | David Brown | 05 | 26 | 115 | 450000 | Debito |
| 63212232422424231 | Alice Smith | 06 | 26 | 116 | N/A | Credito |
| 73212232422424231 | Thom York | 07 | 26 | 117 | 30000 | Debito |
| 55512232666424231 | Bradly Cooper | 08 | 26 | 118 | N/A | Credito |
| 95325232422424231 | Ted Casablanca | 09 | 26 | 119 | 210000 | Debito |
| 83212232422424231 | Orlando Molinares | 10 | 26 | 120 | N/A | Credito |
| 65645632422424231 | Piter Avila | 11 | 26 | 121 | 50000 | Debito |
| 73312232422424231 | Harold Howard | 12 | 26 | 122 | N/A | Credito |
| 93212232422424231 | Joshua Johnson | 01 | 27 | 123 | 140000 | Debito |
| 2000000000000000 | James Mcgill | 02 | 27 | 124 | N/A | Credito |
| 2024252523525243 | Howard Hamlin | 03 | 27 | 125 | 234000 | Debito |
