var express = require("express");
var http = require("http");
var app = express();

app.use(function(request, response, next) {
    // Set Debug Options
    if (process.env.debug >=0 ){
        request.debug = true;
    }
    request.debug = true;
    console.log('Debug Mode Set to ', request.debug)
    next();
});

app.use(function(req, resp, next){
    if(req.debug){
        console.log('Validating Authorization Token')
    }
    next();
});

app.use(function(req, resp, next){
    if(req.debug){console.log('Validating JSON Schema')}
    next();
});

app.use(function(req, resp, next){
    resp.end('Hello Dork !')
})
http.createServer(app).listen(3000);