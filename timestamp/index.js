
var express = require('express');
const bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200})); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.post("/api/date",function(req,res){
  let info = req.body['Date']
  if(info)
    {
          let date = new Date(info);
          if(date.toString() != 'Invalid Date')
            {
              res.json({'unix':date.valueOf(),'utc':date.toGMTString()});
            }   
          else
          {
            try
            {let date = new Date(Number(info));
            res.json({'unix':Number(info) ,'utc': date.toGMTString()});
            }
            catch
            {
              res.json({'error':"invalid date"});
            }
          }
    }
  else
  {
    let date = new Date();
    const unix = date.getMilliseconds();
    let utc = date.toGMTString();
    res.json({'unix':unix,'utc':utc});
  }
})


// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
