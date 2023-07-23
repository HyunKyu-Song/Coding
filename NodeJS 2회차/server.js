const express = require('express');
const bodyParser = require('body-parser');
const app = express();
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

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

app.get('/write', (req, res) => {
   res.sendFile(__dirname + '/write.html');
});

app.get('/list', (req, res)=>{
   res.sendFile(__dirname + '/index.html');
});

app.post('/add', (req, res) => {
   var len;

   connection.connect();
   connection.query(`SELECT COUNT(*) AS len FROM post;`, function (error, results, fields) {
      if (error) throw (error);

      len = results[0].len;

      connection.query(`
         INSERT INTO mydatabase.post 
            (post_id, post_work, date)
         VALUES
            ('${len}', '${req.body.work}', '${req.body.date}');`
         , function (error, results, fields) {
            if (error) throw (error);
         });
   });
   connection.end();

   res.redirect('/');
   console.log(req.body)
});