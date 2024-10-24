require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dns = require('dns')
const app = express();
const url = require('url');

// Basic Configuration


var Basket = {}
var used_url = 1;
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.post('/api/shorturl',function(req,res){
  let url_act= url.parse(req.body['url'],true);
  let domain =  url_act.host;
  dns.lookup(domain,function(err,address,family){
    if(err)
      res.json({ "error": 'invalid url' });
    else{
      if(Object.values(Basket).indexOf(req.body['url'])>-1)
        {
          res.json({"url":req.body['url'],"short_url":Object.values(Basket).indexOf(req.body['url'])+1});
        }
      else{
      let short_url = used_url ;
      Basket[used_url] = req.body['url']
      used_url +=1
      res.json({"url":req.body['url'],"short_url":"http://localhost:"+port+"/api/shorturl/"+short_url});}
    }
  })
})

app.get('/api/shorturl/:short_url',function(req,res){
  if(Basket[req.params['short_url']])
    {
      res.redirect(Basket[req.params['short_url']]);
    }
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

