const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const mongodb = require('./config/devConfig');

const app = express();


app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port)


mongoose.set('useCreateIndex', true)
mongoose.connect(mongodb.userURL, { useNewUrlParser: true });