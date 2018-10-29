// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

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

//empty date_string
app.get('/api/timestamp/', function (req, res) {
  res.send(new Date());
});

app.get('/api/timestamp/:date_string', function (req, res) {
  var dateParam = req.params['date_string'];
  console.log(dateParam);
  var numDateParam = parseInt(dateParam);
  console.log(numDateParam + " type is " + typeof numDateParam);
  
  if(typeof numDateParam == "number"){
    // Convert timestamp to milliseconds
    var date = new Date(numDateParam*1000);
    // Year
    var year = date.getFullYear();
    // Month
    var month = date.getMonth();
    // Day
    var day = date.getDate();

    var convdataTime = month+'-'+day+'-'+year;
    console.log(convdataTime);
    res.send({"unix": numDateParam, "utc" : convdataTime })

  }

  if (condition) {
    
  }
  
  

  //valid date_string
  if (dateParam == '') {

  }
  //invalid date_string
  else{

  }
});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});