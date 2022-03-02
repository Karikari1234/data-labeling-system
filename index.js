var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use("/static", express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const fs = require("fs");
const dataFileName = "./public/data/sample2.json";
const fileName = "./public/data/sessionValue.json";
const outputFileName = "./outputData.json";

app.get("/", function (req, res) {
  res.send("Hello world!");
});

// app.get("/new", function (req, res) {
//   res.send("Hello New world!");
//   //console.log(req.body);
// });

app.post("/new", function (req, res) {
  const dataFile = require(dataFileName);
  const file = require(fileName);
  if (file.number + 1 >= dataFile.length) {
    res.send("You have reached the end of the data");
    file.number = 0;
  } else {
    file.number = file.number + 1;
  }

  const outputFile = require(outputFileName);
  outputFile.push(req.body);

  fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(file));
    console.log("writing to " + fileName);
  });

  fs.writeFile(
    outputFileName,
    JSON.stringify(outputFile, null, 2),
    function writeJSON(err) {
      if (err) return console.log(err);
      //console.log(JSON.stringify(file));
      console.log("writing to " + outputFileName);
    }
  );

  res.send("Hello Worlddd!");
  console.log(req.body);
  console.log("Responded");
});

// app.post("/", function (req, res) {
//   console.log(req.body);
// });

app.listen(3000);
