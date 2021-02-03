import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql";

//From rest server before graphql
//import bodyParser from "body-parser";
//import { testData } from "./listing";

const app = express();
const port = 9000;

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: "/api" });

//#region Rest
//From rest server before graphql
//app.use(bodyParser.json());
// app.get("/", (req, res) => {
//   res.send("hello world typescript!");
// });

// //creating new routes for test data
// //get data
// app.get("/data", (_req, res) => {
//   //
//   return res.send(testData);
// });
// //delete data
// app.post("/delete-data", (req, res) => {
//   const id: string = req.body.id;

//   //find data from id
//   testData.forEach((data, i) => {
//     if (data.id === id) {
//       return res.send(testData.splice(i, 1));
//     }
//   });

//   //return no findings
//   return res.send("Failed to delete");
// });
//#endregion

app.listen(port);

console.log(`[app]: http://localhost:${port}`);
