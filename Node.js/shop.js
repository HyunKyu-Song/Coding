var router = require('express').Router();

router.get('/shirts', function(req, res){
   res.send('shirts 파는 페이지');
});

router.get('/pants', function(req, res){
   res.send('pants 파는 페이지');
});

module.exports = router;