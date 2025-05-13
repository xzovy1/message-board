const fs = require('node:fs');
const path = require("node:path");
const express = require('express');
const newMessageRouter = require('./routes/newMessageRouter');
const {indexRouter} = require('./routes/indexRouter');


const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));
console.log(assetsPath)

app.use(express.urlencoded({extended: true}));
app.use('/', indexRouter);
app.use('/new', newMessageRouter);


const PORT = 5173;
app.listen(PORT, ()=>{console.log(`running on http://localhost:${PORT}`)})
