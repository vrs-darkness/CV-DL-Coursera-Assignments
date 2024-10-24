// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

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
app.get("/api/:date",function(req,res){
  if(req.params['date'])
    {
          let date = new Date(req.params['date']);
          if(date.toString() != 'Invalid Date')
            {
              res.json({'unix':date.valueOf(),'utc':date.toGMTString()});
            }   
          else
          {
            try
            {let date = new Date(Number(req.params['date']));
            res.json({'unix':Number(req.params['date']) ,'utc': date.toGMTString()});
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
