const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

var db;
MongoClient.connect('mongodb+srv://song0726:song033634120@cluster0.jkh1uqu.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true }, function (err, client) {
   if (err) return console.log(err);
   db = client.db('todolist');

   app.listen(8080, function () {
      console.log('listening 8080');
   });
})

app.get('/', function (req, res) {
   res.render('index.ejs');
})

app.get('/list', function (req, res) {
   db.collection('post').find().toArray(function (err, result) {
      res.render('list.ejs', { posts: result });
      // console.log(result);
   })
})

app.get('/write', function (req, res) {
   res.render('write.ejs');
})

app.post('/add', function (req, res) {
   db.collection('cnt').findOne({ name: '게시물 갯수' }, function (err, result) {
      db.collection('post').insertOne({ _id: result.total, work: req.body.Work, content: req.body.Content, date: req.body.date }, function (err, result) {
         db.collection('cnt').updateOne({ name: '게시물 갯수' }, { $inc: { total: 1 } }, function (err, result) {
            if (err) return console.log(err);
            res.redirect('/write');
         });
      });
   });
})

app.delete('/delete/:id', function(req, res){
   db.collection('post').deleteOne({_id : parseInt(req.params.id)}, function(err, result){
      console.log('삭제완료');
      res.status(200).send({message : '성공했습니다'});
      // res.status(400).send({message : '실패했습니다'});
   })
})
// app.delete('/delete', function(req, res){
//    // console.log(parseInt(req.body._id));
//    req.body._id = parseInt(req.body._id);
//    db.collection('post').deleteOne({_id : req.body._id}, function(err, result){
//       console.log('삭제완료');
//       res.status(200).send({message : '성공했습니다'});
//       // res.status(400).send({message : '실패했습니다'});
//    })
// })


app.get('/detail/:id', function(req, res){
   db.collection('post').findOne({_id : parseInt(req.params.id)}, function(err, result){
      res.render('detail.ejs', { posts : result });
      // console.log(result);
   })
})

