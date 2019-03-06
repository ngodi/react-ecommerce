var http = require('http');
var mysql = require('mysql');
var fs = require('fs');

//database connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tshirtshop"
});


//databse query
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
 var result = con.query("select * from department", function (err, result) {
    if (err) throw err;
    console.log("Success");
  });
});


http.createServer(function (req, res) {

  fs.appendFile('index.html', result, function (err) {
  if (err) throw err;
   });
  fs.readFile('index.html', function(err, data) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
});
}).listen(8080);


    






