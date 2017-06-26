import * as express from "express";

var api = express.Router();



api.get("/account", (req, resp) => {
    resp.send("Get Account List")
});

api.get("/account/:id", (req, resp) => {
    resp.send("Get Account Details")
});

api.get("/", (req, resp) => {
    resp.send("Sample v1 response")
});

module.exports = api;