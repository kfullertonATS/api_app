import * as express from "express";

const bodyParser = require('body-parser');
const app = express();
const winston = require('winston');
const expressWinston = require('winston-express-middleware');
let v1api = require('./routes/v1_api')
//winston logging
// let yaml = require('yamljs');
// const cfg = yaml.load('tcsb.yaml');

// Before anything else set Debug and Loggins
//  if (process.env.debug >=0 ){
       app.set('debug', true);
//     }
// need a global logging service.  
// const logger = new (winston.Logger)({
//     transports: [
//       new (winston.transports.Console)({
//             json: true,
//             colorize: true
//         })
//     ]
// });
// app.set('logger', logger);

const foo = expressWinston.logger({
    transports: [
        new winston.transports.Console({
            json: false,
            colorize: true,
            level: (app.get('debug')) ? 'debug': 'info'
        })
    ]
});

app.use(foo);

// Replace with external module to validate the JWT
app.use((req: express.Request, resp:  express.Response, next: express.NextFunction) => {
    if(app.get('debug')){
        console.log('Validating Authorization Token')
    }
    next();
});

// Replace with external modulue to validate JSON Schema
app.use(bodyParser.json());
app.use((req: express.Request, resp:  express.Response, next: express.NextFunction) => {
    if(app.get('debug')){console.log('Validating JSON Schema')}
    next();
});

// foo.info('this is a test');

// use the Version 1 Routes and Business Logic
app.use("/v1", v1api);



const server = app.listen(80, () => {
//    const {address, port} = server.address();
    console.log('Listening on :80');
});
