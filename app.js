const express = require('express');
const mongoose = require('mongoose');

const app = express();
const url = 'mongodb://localhost/NewDatabase';

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true});

const con = mongoose.connection;

con.on('open', ()=>{
    console.log('connected....');
});

app.use(express.json());

const alianRouter = require('./routers/alians');
app.use('/alians', alianRouter);

app.listen(3000, ()=>{
    console.log('server started');
});