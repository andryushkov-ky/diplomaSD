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
    console.log(err);
  }

  // Создаем таблицу пользователей
  try {
    const sql =
      'CREATE TABLE registration (id int NOT NULL AUTO_INCREMENT, name VARCHAR(255), email VARCHAR(255), phone VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id))';
    con.query(sql, function (err, result) {
      console.log('Users table created');
    });
  } catch (e) {
    console.log(err);
  }

  // Создаем таблицу прогресса
  try {
    const sql =
      'CREATE TABLE progress (idUser VARCHAR(255), testsPassed VARCHAR(255), chaptersProgress TEXT)';
    con.query(sql, function (err, result) {
      console.log('Progress table created');
    });
  } catch (e) {
    console.log(err);
  }

  // Создаем таблицу для обратной связи
  try {
    const sql = 'CREATE TABLE contact (name VARCHAR(255), email VARCHAR(255), text TEXT)';
    con.query(sql, function (err, result) {
      console.log('Contact table created');
    });
  } catch (e) {
    console.log(err);
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

app.post('/api/updateTestsProgress', jsonParser, (req, res) => {
  updateTestsProgress(req.body, res);
});

app.post('/api/updateChaptersProgress', jsonParser, (req, res) => {
  updateChaptersProgress(req.body, res);
});

app.post('/api/getUserProgress', jsonParser, (req, res) => {
  getUserProgress(req.body, res);
});

function getUserProgress() {

}

function updateChaptersProgress(data, res) {
  const { chapterId, pageId, totalPages, idUser } = data;

  con.query(
    `SELECT * FROM progress WHERE idUser = '${idUser}'`,
    function (err, result, fields) {
      const field = result[0];

      if (field) {
        const { chaptersProgress } = field;
        let obj, chaptersProgressString;

        if (chaptersProgress) {
          obj = JSON.parse(chaptersProgress);

          const prevPagesCompleted =
            (obj[chapterId] && obj[chapterId].pagesCompleted) || [];
          const nextSet = new Set([...prevPagesCompleted, pageId]);

          obj[chapterId] = {
            totalPages,
            pagesCompleted: [...nextSet],
          };
        } else {
          obj = {
            [chapterId]: {
              pagesCompleted: [pageId],
              totalPages,
            },
          };
        }

        chaptersProgressString = JSON.stringify(obj);
        console.log('NextChaptersProgressObj', obj);
        const sql = `UPDATE progress SET chaptersProgress = '${chaptersProgressString}' WHERE idUser = '${idUser}'`;

        con.query(sql, function (err, result) {
          console.log('err');
        });
      } else {
        const obj = {
          [chapterId]: {
            pagesCompleted: [pageId],
            totalPages,
          },
        };
        const chaptersProgressString = JSON.stringify(obj);

        const sql = `INSERT INTO progress (idUser, chaptersProgress) VALUES ('${idUser}', '${chaptersProgressString}')`;

        con.query(sql, function (err, result, fields) {
          console.log('err');
        });
      }
    }
  );
}

function updateTestsProgress(data, res) {
  const { idUser, testId } = data;

  con.query(
    `SELECT * FROM progress WHERE idUser = '${idUser}'`,
    function (err, result, fields) {
      const field = result[0];

      console.log('FIELD', field);
      if (field) {
        const { testsPassed } = field;
        const nextString = testsPassed ? `${testsPassed},${testId}` : testId;
        const uniqValues = new Set(nextString.split(','));
        const resString = [...uniqValues].join(',');

        const sql = `UPDATE progress SET testsPassed = '${resString}' WHERE idUser = '${idUser}'`;

        con.query(sql, function (err, result) {
          console.log('err');
        });
      } else {
        const sql = `INSERT INTO progress (idUser, testsPassed) VALUES ('${idUser}', '${testId}')`;

        con.query(sql, function (err, result, fields) {
          console.log('err');
        });
      }
    }
  );
}

function createUser(data, res) {
  const { email, name, phone, password } = data;
  const sql = `INSERT INTO registration (name, email, phone, password) VALUES ('${name}', '${email}', '${phone}', '${password}')`;

  con.query(sql, function (err, result, fields) {
    data.id = result.insertId;

    res.send(data);
  });
}

function getUser(data, res) {
  const { email, password } = data;

  con.query(
    `SELECT * FROM registration WHERE email = '${email}' AND password = '${password}'`,
    function (err, result, fields) {
      res.send(result);
    }
  );
}
