"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const listing_1 = require("./listing");
const app = express_1.default();
const port = 9000;
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.send("hello world typescript!");
});
//creating new routes for test data
//get data
app.get("/data", (_req, res) => {
    //
    return res.send(listing_1.testData);
});
//delete data
app.post("/delete-data", (req, res) => {
    const id = req.body.id;
    //find data from id
    listing_1.testData.forEach((data, i) => {
        if (data.id === id) {
            return res.send(listing_1.testData.splice(i, 1));
        }
    });
    //return no findings
    return res.send("Failed to delete");
});
app.listen(port);
console.log(`[app]: http://localhost:${port}`);
