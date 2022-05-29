const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//import routes

const tarjetasRoutes = require('./routes/tarjetas');

//settings 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Main'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'mysql2022',
    port: 3306,
    database: 'pasareladepagos'
}, 'single'));
app.use(express.urlencoded({extended: false}))

//routes
app.use('/', tarjetasRoutes);

//static files

app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'),()=>{
    console.log("Srerver on port 3000")
})