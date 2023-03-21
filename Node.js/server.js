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
app.use(session({ secret: '비밀코드', resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
require('dotenv').config();
app.use('/shop', require('./routes/shop.js'));




var db;
MongoClient.connect(process.env.DB_URL, { useUnifiedTopology: true }, function (err, client) {
   if (err) return console.log(err);
   db = client.db('todolist');

   app.listen(process.env.PORT, function () {
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

app.get('/write', loginCheck, function (req, res) {
   res.render('write.ejs');
})

app.post('/write', function (req, res) {

   db.collection('cnt').findOne({ name: '게시물 갯수' }, function (err, result) {

      db.collection('post').insertOne({ _id: result.total, writer: req.user.user_id, work: req.body.Work, content: req.body.Content, date: req.body.date }, function (err, result) {

         db.collection('cnt').updateOne({ name: '게시물 갯수' }, { $inc: { total: 1 } }, function (err, result) {

            if (err) return console.log(err);
            res.redirect('/write');
         });

      });

   });

})

app.delete('/delete/:id', loginCheck, function (req, res) {

   db.collection('post').findOne({ _id: parseInt(req.params.id) }, function (err, result) {

      if (req.user.user_id === result.writer) {
         db.collection('post').deleteOne({ _id: parseInt(req.params.id) }, function (err, result) {
            console.log('삭제완료');
            res.status(200).send({ message: '성공했습니다' });
            // res.status(400).send({message : '실패했습니다'});
         })
      }
      else {
         res.write("<script>alert('Only authors can delete')</script>");
      }
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


app.get('/detail/:id', loginCheck, function (req, res) {
   db.collection('post').findOne({ _id: parseInt(req.params.id) }, function (err, result) {
      res.render('detail.ejs', { posts: result });
      // console.log(result);
   })
})

app.get('/edit/:id', loginCheck, function (req, res) {
   db.collection('post').findOne({ _id: parseInt(req.params.id) }, function (err, result) {
      res.render('edit.ejs', { posts: result });
   })
})

// app.post('/edit/update/:id', function(req, res){
//    db.collection('post').updateOne({_id : parseInt(req.params.id)}, {$set:{work: req.body.Work, content:req.body.Content, date:req.body.date}}, function(err, result){
//       res.redirect('/list');
//    })
// })

app.put('/edit', loginCheck, function (req, res) {
   db.collection('post').updateOne({ _id: parseInt(req.body.id) }, { $set: { work: req.body.Work, content: req.body.Content, date: req.body.date } }, function (err, result) {
      res.redirect('/list');
   })
})

app.get('/login', function (req, res) {
   if (req.user) {
      res.render('mypage.ejs', { user: req.user });
   }
   else {
      res.render('login.ejs');
   }
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
      // console.log(result);
      if (err) return done(err)	//err 났는지 검사

      if (!result) return done(null, false, { message: '존재하지않는 아이디요' })	//여기에 걸리면 아이디가 없는 것 (즉, result가 비었음)
      if (입력한비번 == result.user_pw) {
         //console.log('비번도 맞음')
         return done(null, result)	//아이디, 비번 검증 성공시 result값을 passport.serializeUser(function (user, done)의 user에 보낸다.
      } else {
         //console.log('비번 틀림')
         return done(null, false, { message: '비번틀렸어요' })
      }
   })
}));

//세션을 저장시키는 코드 (로그인 성공시 발동)
passport.serializeUser(function (user, done) {	//아이디, 비번 검증 성공시
   done(null, user.user_id);
});


//이 세션 데이터를 가진 사람을 DB에서 찾아주세요 (마이페이지 접속시 발동)
//deserializeUser( )는 로그인한 유저의 세션아이디를 바탕으로 개인정보를 DB에서 찾는 역할
passport.deserializeUser(function (아이디, done) {
   db.collection('login').findOne({ user_id: 아이디 }, function (err, result) {
      done(null, result);  //마이페이지 접속시 DB에서 {user_id : 어쩌구}인걸 찾아서 그 결과를 보내줌. 어디로? 바로 app.get('/mypage', loginCheck, function(req, res) 여기로 그래서 req.user에 DB에서 찾은 데이터 들어있음.
   })
});

app.get('/mypage', loginCheck, function (req, res) {
   res.render('mypage.ejs', { user: req.user });
   // console.log(`req.user = ${req.user.user_id}`);
})

function loginCheck(req, res, next) {
   if (req.user) { //로그인 후 세션이 있으면 req.user는 항상있음
      next() //그냥 다음으로 통과하라는 뜻
   }
   else {
      res.redirect('/login');
      // res.send('로그인 안 했음');
   }
}

app.get('/logout', function (req, res) {
   req.logout(function (err, result) {
      if (err) {
         console.log(err);
      }
      else {
         res.write("<script>alert('Logout Complete!')</script>");
         res.write("<script>window.location=\"/\"</script>");
      }
   });
})

app.get('/search', function (req, res) {

   var 검색조건 = [
      {
         $search: {
            index: 'titleSearch',
            text: {
               query: req.query.value,
               path: ['work', 'date']
            }
         }
      }
   ]

   // db.collection('post').find({ work: /식사/ }).toArray(function (err, result) {
   // db.collection('post').find({ $text : { $search: req.query.value} }).toArray(function (err, result) {
   // db.collection('post').find({ work: req.query.value }).toArray(function (err, result) {
   db.collection('post').aggregate(검색조건).toArray(function (err, result) {
      res.render('search.ejs', { posts: result });
      console.log(req.query.value);
      console.log(result);
   })
})


app.get('/sign-up', function (req, res) {
   res.render('sign-up.ejs');
})


app.post('/sign-up', function (req, res) {// 아이디 중복 검사 추가해야 함
   db.collection('login').insertOne({ user_id: req.body.userid, user_pw: req.body.userpw }, function (err, result) {
      res.write("<script>alert('Welcome ToDo List!')</script>");
      res.write("<script>window.location=\"/\"</script>");
   })
})




let multer = require('multer');
var storage = multer.diskStorage({

   destination: function (req, file, cb) {
      cb(null, './public/img')
   },
   filename: function (req, file, cb) {
      cb(null, file.originalname)
   }

});

// var upload = multer({storage : storage});


var path = require('path');

var upload = multer({
   storage: storage,
   fileFilter: function (req, file, callback) {
      var ext = path.extname(file.originalname);
      if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
         return callback(new Error('PNG, JPG만 업로드하세요'))
      }
      callback(null, true)
   },
   limits: {
      fileSize: 1024 * 1024
   }
});


app.get('/upload', function (req, res) {
   res.render('upload.ejs');
})

app.post('/upload', upload.single('profile'), function (req, res) {
   res.send('upload complete!');
})

app.get('/img/:imageName', function (req, res) {
   res.sendFile(__dirname + '/public/img/' + req.params.imageName)
})


app.get('/chat/:id', loginCheck, function (req, res) {
   req.params.id = parseInt(req.params.id);
   db.collection('chatroom').find({ member: req.user.user_id }).toArray(function (err, result) {
      db.collection('message').find({ 보낸사람 : req.user.user_id}).toArray(function(error, result2){
         res.render('chat.ejs', { chat: result, chatmessage: result2 });
      })
   })
})


app.post('/chat/:id', loginCheck, function (req, res) {
   req.params.id = parseInt(req.params.id);
   // console.log(req.params.id);
   db.collection('post').findOne({ _id: req.params.id }, function (err, result) {

      db.collection('chatroom').insertOne({member : [req.user.user_id, result.writer], date : new Date(), title : `chat_${req.params.id}`}, function(err, result){
         res.status(200).send({ message: '성공했습니다' });
      })

   })
})


app.post('/message', function(req, res){
   var 보낼것 = {
      보낸사람 : req.user.user_id, 
      받는사람 : req.body.parent, 
      내용 : req.body.content, 
      date : new Date()
   }
   db.collection('message').insertOne(보낼것, function(err, result){
      res.send('message success!');
   })
})

