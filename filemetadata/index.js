var express = require('express');
var cors = require('cors');
var multer = require('multer');
const req = require('express/lib/request');
require('dotenv').config()

const upload = multer({ dest: 'uploads/' });

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post('/api/fileanalyse',upload.single('upfile'), (req,res)=>{
  let data = req.file;

  res.json({
    "name": data.originalname,
    "type" : data.mimetype,
    "size" : data.size
  })
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

