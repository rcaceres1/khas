const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const favicon = require('serve-favicon')
const logger = require('morgan')


require('dotenv').config();
require('./config/database');


const app = express()

app.use(cors());
app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))

app.use(express.static(path.join(__dirname, 'build')))

app.use('/api/users', require('./routes/api/users'));
app.use('/api/comms', require('./routes/api/comms'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
}); 

const port = process.env.PORT || 3001;

app.listen(port, ()=>{
        console.log(`You are connected on port: ${port}`)
})
