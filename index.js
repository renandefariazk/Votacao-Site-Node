const express = require('express');
const app = express();
const loginRoute = require('./route/login.route');
const cadastroRoute = require('./route/cadastro.route');

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use('/',loginRoute,cadastroRoute);

app.listen('3000');