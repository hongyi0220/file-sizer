const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const app = express();
const upload = multer();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/form', upload.single('user-file'), (req, res) => {
  if (req.file) res.send({size: req.file.size.toString()});
  else res.send('No file chosen');
});

app.listen(process.env.PORT);