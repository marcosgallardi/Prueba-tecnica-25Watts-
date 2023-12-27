const express = require("express");
const server = express();
 const router = require("./Routes/index");

server.use((req, res, next) => {
    //cambiar el asterisco por la url del cliente
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use("/", router);
module.exports = server;