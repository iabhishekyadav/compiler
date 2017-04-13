"use strict";

var mysqlModel = require('mysql-model');

var db = mysqlModel.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'paytm@197',
  database : 'database-name',
});

module.exports = db;