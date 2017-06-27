import * as express from "express";

var api = express.Router();

api.get("/account/:id", (req, resp) => {
    resp.send("Get Account Details")
});

api.get("/user", (req, resp) => {
    resp.send("User List")
});

api.get("/device", (req, resp) => {
    resp.send("Device List")
});

api.get("/site", (req, resp) => {
    resp.send("Site List")
});

module.exports = api;