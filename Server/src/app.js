const express = require("express");
const server = express();
const router = require("./Routes/index");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const path = require("path");

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
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(express.json());
server.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads/",
  })
);

server.use("/", router);
module.exports = server;
