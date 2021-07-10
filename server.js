const http = require("http");
const fs = require("fs");
var data;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(
    fs.readFileSync("data.json", "utf8", (err, jsonString) => {
      if (err) {
        return "Error: " + err;
      }
      return jsonString;
    })
  );
});
