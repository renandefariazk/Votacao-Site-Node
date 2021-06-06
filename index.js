const express = require('express');
const app = express();
const homeRouter = require('./route/home.route');
const loginRouter = require('./route/login.route');
const cadastroRouter = require('./route/cadastro.route');

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use('/',homeRouter,loginRouter,cadastroRouter);

app.listen('3000');