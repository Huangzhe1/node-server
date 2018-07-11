var http = require('http')
var fs = require('fs')
http.createServer(function(req,res){
    switch(req.url){
        case '/README.md':
        res.end(fs.readFileSync(__dirname + '/README.md'))
        break;
        default:
        res.end(fs.readFileSync(__dirname + '/sample/test.html'))
    }
}).listen(8087)
