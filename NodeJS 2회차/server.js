const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.listen(8080, ()=>{
   console.log('Listening on 8008~');
});

app.get('/', (req, res)=>{
   res.sendFile(__dirname + '/index.html');
});

app.get('/write', (req, res)=>{
   res.sendFile(__dirname + '/write.html');
});

app.post('/add', (req, res)=>{
   res.send('success!')
   console.log(req.body)
});