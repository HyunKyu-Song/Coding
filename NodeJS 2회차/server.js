const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.json());
var cors = require('cors');
app.use(cors({
   origin: "*",                // 출처 허용 옵션
   credentials: true,          // 응답 헤더에 Access-Control-Allow-Credentials 추가
   optionsSuccessStatus: 200,  // 응답 상태 200으로 설정
}));
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));

var mysql = require('mysql2');
var connection = mysql.createConnection({
   host: process.env.DATABASE_HOST,
   user: process.env.DATABASE_USER,
   password: process.env.DATABASE_PW,
   database: process.env.DATABASE
});

app.listen(8080, () => {
   console.log('Listening on 8008~');
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '/build/index.html'));
});


app.get('/list', (req, res) => {

   connection.connect();
   connection.query(`
   SELECT * FROM post
   
   `, function (error, results, fields) {
      if (error) throw (error);
      // console.log(results)
      res.send(results);

   });
   // console.log(11)

})

app.post('/add', (req, res) => {

   connection.connect();
   connection.query(`
   INSERT INTO mydatabase.post (post_work, date)
   VALUES ('${req.body.work}', '${req.body.date}');`
      , function (error, results, fields) {
         if (error) throw (error);
      });

   // connection.end();

   res.redirect('http://localhost:3000');
   // res.redirect('/');
   console.log(req.body)
});

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '/build/index.html'));
})




// app.get('/', (req, res) => {
//    res.sendFile(__dirname + '/index.html');
// });

// app.get('/write', (req, res) => {
//    res.sendFile(__dirname + '/write.html');
// });

// app.get('/list', (req, res) => {
//    res.sendFile(__dirname + '/index.html');
// });

// app.post('/add', (req, res) => {

//    connection.connect();

//    connection.query(`
//       INSERT INTO mydatabase.post (post_work, date)
//       VALUES ('${req.body.work}', '${req.body.date}');`
//       , function (error, results, fields) {
//          if (error) throw (error);
//       });

//    // connection.end();

//    res.redirect('/');
//    console.log(req.body)
// });