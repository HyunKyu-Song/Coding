const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
app.use(session({secret : '비밀코드', resave : true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session()); 

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

app.delete('/delete/:id', function (req, res) {
   db.collection('post').deleteOne({ _id: parseInt(req.params.id) }, function (err, result) {
      console.log('삭제완료');
      res.status(200).send({ message: '성공했습니다' });
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


app.get('/detail/:id', function (req, res) {
   db.collection('post').findOne({ _id: parseInt(req.params.id) }, function (err, result) {
      res.render('detail.ejs', { posts: result });
      // console.log(result);
   })
})

app.get('/edit/:id', function (req, res) {
   db.collection('post').findOne({ _id: parseInt(req.params.id) }, function (err, result) {
      res.render('edit.ejs', { posts: result });
   })
})

// app.post('/edit/update/:id', function(req, res){
//    db.collection('post').updateOne({_id : parseInt(req.params.id)}, {$set:{work: req.body.Work, content:req.body.Content, date:req.body.date}}, function(err, result){
//       res.redirect('/list');
//    })
// })

app.put('/edit', function (req, res) {
   db.collection('post').updateOne({ _id: parseInt(req.body.id) }, { $set: { work: req.body.Work, content: req.body.Content, date: req.body.date } }, function (err, result) {
      res.redirect('/list');
   })
})

app.get('/login', function (req, res) {
   res.render('login.ejs');
})

app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function (req, res) {
   res.redirect('/');
   //실패시 failureRedirect: '/경로'로 유저를 이동, 성공시 res.redirect('/')로 유저를 이동시킨다.
});

passport.use(new LocalStrategy({
   usernameField: 'userid',	//ex. 'userid'
   passwordField: 'userpw',	//ex. 'userpw'
   session: true,	//로그인 후 세션을 저장할 것인지 true or false
   passReqToCallback: false,	//아이디, 비번 말고도 다른 정보 검증할지 true or false
}, function (입력한아이디, 입력한비번, done) {
   console.log(입력한아이디, 입력한비번);
   db.collection('login').findOne({ user_id: 입력한아이디 }, function (err, result) {
      console.log(result);
      if (err) return done(err)	//err 났는지 검사

      if (!result) return done(null, false, { message: '존재하지않는 아이디요' })	//여기에 걸리면 아이디가 없는 것 (즉, result가 비었음)
      if (입력한비번 == result.user_pw) {
         console.log('비번도 맞음')
         return done(null, result)	//아이디, 비번 검증 성공시 result값을 세션 만들기 user에 보냄
      } else {
         console.log('비번 틀림')
         return done(null, false, { message: '비번틀렸어요' })
      }
   })
}));

passport.serializeUser(function (user, done) {	//아이디, 비번 검증 성공시
   done(null, user)
});

passport.deserializeUser(function (아이디, done) {
   done(null, {})
});