var express = require('express');
var app = express();

// app.get('/', function(req, res) {
//   res.send('hello, express');
// });

// app.get('/jyc/:name', function(req, res) {
//   res.send('hello, ' + req.params.name);
// });

// app.get('/users/:test', function(req, res) {
//   res.send('hello, ' + req.params.test);
// });

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));// 设置存放模板文件的目录
app.set('view engine', 'ejs');// 设置模板引擎为 ejs

app.use('/', indexRouter);
app.use('/users', userRouter);


app.listen(3000);