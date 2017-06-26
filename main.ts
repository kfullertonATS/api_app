import * as express from "express";

// var http = require("http");

const bodyParser = require('body-parser');
const app = express();
const debug = true;
let v1api = require('./routes/v1_api')
// let yaml = require('yamljs');
// const cfg = yaml.load('tcsb.yaml');

// Before anything else set Debug and Loggins
app.use((req, resp, next) => {
    // Set Debug Options
    
//     if (process.env.debug >=0 ){
//         debug = true;
//     }

//     console.log('Debug Mode Set to ', debug)
    console.log('call to : ', req.url)
    next();
});

app.use((req, resp, next) => {
    if(debug){
        console.log('Validating Authorization Token')
    }
    next();
});

app.use(bodyParser.json())
app.use((req, resp, next) => {
    if(debug){console.log('Validating JSON Schema')}
    next();
});

// http.createServer(app).listen(3000);
app.use("/v1", v1api)

const server = app.listen(80, () => {
//    const {address, port} = server.address();
    console.log('Listening on :80');
});
