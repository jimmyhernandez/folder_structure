var express = require('express');
var app = express();

app.use(express.static(__dirname + '/views'));

/**app.get('/',function(req,res){
  res.send('Test');
});*/

var server = app.listen(3003,function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example Server listening at http://%s:%s',host,port);
});