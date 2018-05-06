
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
// import mysql from 'mysql'


// let dbconfig = require(__dirname+'/../server/config/db-config.json');
// let connection = mysql.createConnection(dbconfig);

const app = express();
let port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + "/../public"));

const server = app.listen(port, () => {
  console.log('Express listening on port', port);
});
