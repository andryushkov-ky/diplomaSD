const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const database = 'enterdb';
const bdCredits = {
  host: 'localhost',
  user: 'root',
  password: '',
  database,
};
const con = mysql.createConnection(bdCredits);

con.connect(function (err) {
  if (err) throw err;

  // Создаем Базу Данных
  try {
    con.query(`CREATE DATABASE ${database}`, function (err, result) {
      console.log('Database created');
    });
  } catch (e) {
    console.error(err);
  }

  // Создаем Таблицу
  try {
    var sql = 'CREATE TABLE test (name VARCHAR(255), address VARCHAR(255))';
    con.query(sql, function (err, result) {
      console.log('Table created');
    });
  } catch (e) {
    console.error(err);
  }
});

function getAllUsers() {
  con.query('SELECT * FROM registratontable', function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
}

app.get('/api/getUser', (req, res) => {
  getAllUsers();

  res.send('Hello World!');
});

app.get('/api/createUser', (req, res) => {
  getAllUsers();

  res.send('Hello World!');
});
