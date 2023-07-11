// 사용자가 보낸 값을 보안을 위해 escape하기 위한 모듈입니다.
// 예를 들어 foo & bar >> foo &amp; bar 로 바꿉니다.
const escapeHtml = require('escape-html')
const express = require('express')
const session = require('express-session')
const app = express()
// 박종선바보멍청이 >> SHA256 >>
//9e8821c8ef4ab43ba09310af54e98caedc13e314efdea720bf513b9b3675faf4
app.use(session({
   name: "session-id",
   secret:
      "9e8821c8ef4ab43ba09310af54e98caedc13e314efdea720bf513b9b3675faf4"
   ,
   resave: false,
   saveUninitialized: false
}))
// 미들웨어 : auth
const isAuthenticated = (req, res, next) => {
   // 만약 세션이 있다면 다음 미들웨어로. 그게 아니라면. 다음 route로제어권을 넘깁니다.
   if (req.session.user) next()
   else next('route')
}
// 만약 isAuthenticated 하다면 logout을 보여준다.
app.get('/', isAuthenticated, function (req, res) {
   res.send(escapeHtml(req.session.user) + '님 환영합니다!')
})
// 만약 isAuthenticated 하지 않다면 login을 보여준다.
app.get('/', function (req, res) {
   res.send('<p>로그인</p><form action="/login" method="post">' +
      'Username: <input name="user"><br>' +
      'Password: <input name="pass" type="password"><br>' +
      '<input type="submit" text="Login"></form>')
   98
})
// 로그인요청 >> 세션 생성
app.post('/login', express.urlencoded({ extended: false }),
   function (req, res) {
      if (req.body.user === "song" && req.body.pass === "1234") {
         req.session.regenerate(function (err) {
            if (err) next(err)
            // input : user 에 있는 값을 req.session.user에 할당
            req.session.user = req.body.user
            // 세션 생성 >> 쿠키값 설정 >> 이후 다시 리다이렉팅
            req.session.save(function (err) {
               if (err) return next(err)
               res.redirect('/')
            })
         })
      } else res.redirect('/')
   })
app.listen(3000, () => console.log("server is started : http://localhost:3000"))