const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();

function findPath(id) {
  if (id == undefined) {
    return "./assets/error.json";
  } else {
    return "./files/" + id + "/" + id + ".json";
  }
}

function authentication(id, pwd) {
  var file = require(findPath(url));
  if (file.pwd === pwd) {
    return 1;
  } else {
    return 0;
  }
}


app.get("/", (req, res) => {
  let par = url.parse(req.url, true).query;
  res.send(require(findPath(par.id)));
});

app.listen(8080, () => {
  console.log(`Server are listening at 8080`);
});
