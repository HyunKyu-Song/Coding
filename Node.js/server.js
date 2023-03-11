const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');

var db;
MongoClient.connect('mongodb+srv://song0726:song033634120@cluster0.jkh1uqu.mongodb.net/?retryWrites=true&w=majority', {useUnifiedTopology: true}, function (err, client) {
   if (err) return console.log(err);
   db = client.db('todolist');

   app.listen(8080, function () {
      console.log('listening 8080');
   });
})

app.get('/', function (req, res) {
   db.collection('post').findOne({work: '공부'}, function(err, result){
      res.render('list.ejs', {posts : result});
      console.log(result);
   })
})

app.get('/write', function (req, res) {
   res.render('write.ejs');
})

app.post('/add', function (req, res) {
   db.collection('post').insertOne({_id : 2, work : req.body.todayWork, content : req.body.detailContent});
   res.send('전송완료');
})