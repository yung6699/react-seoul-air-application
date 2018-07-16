
import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import path from 'path';

// import mysql from 'mysql'

// let dbconfig = require(__dirname+'/../server/config/db-config.json');
// let connection = mysql.createConnection(dbconfig);

const app = express();
const port = 3000;
const devPort = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + "/../public"));

app.engine('html', require('ejs').renderFile);
app.set('view engine','html');

if(process.env.NODE_ENV == 'development') {
  console.log('Server is running on development mode');

  const config = require('../webpack.dev.config');
  let compiler = webpack(config);
  let devServer = new WebpackDevServer(compiler, config.devServer);
  devServer.listen(devPort, () => {
      console.log('webpack-dev-server is listening on port', devPort);
  });
}


app.get('/hello', (req, res) => {
  res.render('index.html')
});

const server = app.listen(port, () => {
  console.log('Express listening on port', port);
});


