#step1#
获取http模块和fs模块
>
```
var http = require('http')
var fs = require('fs')
```
#step2#
创建一个server，返回的是一个server对象，对象直接侦听8087端口
>
```
http.createServer(function(req,res){
    switch(req.url){
        case '/README.md':  
        res.end(fs.readFileSync(__dirname + '/README.md'))
        break;
        default:            
        res.end(fs.readFileSync(__dirname + '/sample/test.html'))
    }
    }).listen(8087)
```
当请求到了，只要是以localhost:8087作为前缀的都会到这个当前服务器上
