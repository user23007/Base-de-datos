const express = require('express');
const path = require('path')
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//importing routes
const cursosRoutes = require('./routes/cursos');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares -> Peticiones que se ejecutan antes de las peticiones de los usuarios
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user:'root',
    password: 'Melia1020105443+',
    port: 3306,
    database: 'project'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', cursosRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));



app.listen(app.get('port'), () => {console.log('Server on port 3000')});