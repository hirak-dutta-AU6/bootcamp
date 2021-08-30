//node tutorial


var fs = require("fs");

fs.readFile("sample.txt",function(err,data){
console.log("error is ...."+err);
console.log("Data is ...."+data);
});