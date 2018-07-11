#step1#
获取http模块和fs模块
>
```
var http = require('http')
var fs = require('fs')
```
#step2#
创建一个server，返回的是一个server对象，对象直接侦听8087端口
>```
http.createServer(function(req,res){
    switch(req.url){
        case '/README.md':  //请求到了，需要处理对应的路由，路由就是localhost:8080 这个域名后面的那一堆东西。路由的本质是后端根据路由去做对应的事情。
        res.end(fs.readFileSync(__dirname + '/README.md'))   //读这个文件
        break;
        default:            //如果没有匹配，就认为是静态文件 默认
        res.end(fs.readFileSync(__dirname + '/sample/test.html'))
    }
    }).listen(8087)
```
当请求到了，只要是以localhost:8087作为前缀的都会到这个当前服务器上
