const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(urlencodedParser)


let user_Data ={}
let exerice = {}
function new_key()
{
    // var time = ((new Date().getTime()/1000)).toString(16);
    var dd = 'xxxxxxxxxxxxxxxx'.replace(/[x]/g , () => {
      return (Math.random() * 16 | 0).toString(16) ;
    });
    return dd;
  }

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.post('/api/users',(req,res)=>{
  var data = req.body['username'] 
  if(Object.values(user_Data).includes(data)){
    res.json({
      "username" : data,
      "_id" : Object.keys(user_Data).find(key => user_Data[key]===data)
    })
  }
  else
  {
    var key = new_key();
    user_Data[key] = data ;
    exerice[key] = [];
    res.json({
      "username" : data ,
      "_id" : key
    })
  }
})

app.post('/api/users/:_id/exercises',(req,res) =>{
  let data = req.body;
  let key = req.params['_id'];
  if(Object.keys(user_Data).includes(key)){
    exerice[key].push({
      '_id' : key,
      'username' : user_Data[key],
      'date' : new Date(data['date']),
      'duration' : data['duration'],
      "description" : data['description']
    });
    res.json({
      '_id' : key,
      'username' : user_Data[key],
      'date' : new Date(data['date']).toDateString(),
      'duration' : Number(data['duration']),
      "description" : data['description']
    })
  }
})

app.get('/api/users/:_id/logs?[from][&to][&limit]',(req,res)=>{
  console.log(req.params);
})

app.get('/api/users',(req,res)=>{
  let s = [];
  for(const i in user_Data)
    {
      s.push({"username":user_Data[i],"_id":i});
    }
  res.json(s);
})
app.get('/api/users/:_id/logs',(req,res)=>{
  let key = req.params['_id']
  let LOG = exerice[key]
  let count = LOG.length
  let  log = []
  for (const i in LOG)
    {
      console.log(typeof(LOG[i]['date'].toDateString()));
      log.push({"description": LOG[i]['description'],
        "duration" : Number(LOG[i]['duration']),
        "date" : String(LOG[i]['date'].toDateString())
      })
    }
  res.json({"count":count,"log":log})
})
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

