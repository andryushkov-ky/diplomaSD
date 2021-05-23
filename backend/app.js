const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

const jsonParser = bodyParser.json();

// Allow requests from any origin
app.use(cors({ origin: '*' }));

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
    var sql =
      'CREATE TABLE registrationtable (id int NOT NULL AUTO_INCREMENT, name VARCHAR(255), email VARCHAR(255), phone VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id))';
    con.query(sql, function (err, result) {
      console.log('Table created');
    });
  } catch (e) {
    console.error(err);
  }
});

// Это нужно чтобы разместить сайт на хостинге
// Когда будет собрана продакшн версия (билд версия)
// экспресс сервер будет запускать статику из ./build
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '../build', 'index.html'));
// });
//
// app.use(express.static(path.join(__dirname, '../build')));

app.post('/api/getUser', jsonParser, (req, res) => {
  getUser(req.body, res);
});

app.post('/api/createUser', jsonParser, (req, res) => {
  createUser(req.body, res);
});

function createUser(data, res) {
  const { email, name, phone, password } = data;
  const sql = `INSERT INTO registrationtable (name, email, phone, password) VALUES ('${name}', '${email}', '${phone}', '${password}')`;

  con.query(sql, function (err, result, fields) {
    data.id = result.insertId;

    res.send(data);
  });
}

function getUser(data, res) {
  const { email, password } = data;

  con.query(
    `SELECT * FROM registrationtable WHERE email = '${email}' AND password = '${password}'`,
    function (err, result, fields) {
      res.send(result);
    }
  );
}
