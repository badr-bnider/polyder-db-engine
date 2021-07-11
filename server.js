const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  let par = url.parse(req.url, true).query;
  res.send(read(par.id));
});

app.listen(8080, () => {
  console.log(`Server are listening at 8080`);
});

function read(id, pwd) {
  return require(findPath(id));
}

function write(dataToWrite, id, pwd) {
  JSON.stringify(dataToWrite);
  fs.writeFile(findPath(id, dataToWrite));
}

function authentication(id, pwd) {
  var file = read(id);
  if (file.pwd === pwd) {
    return 1;
  } else {
    return 0;
  }
}

function findPath(id){
  if (id == undefined) {
    return "./files/public/error.json";
  } else {
    return "./files/" + id + "/" + id + ".json";
  }
}