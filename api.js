var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;
var bodyParser = require("body-parser");
var constr = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.json());

app.get("/employ", (req, res) => {
  mongoClient.connect(constr).then((clientObj) => {
    var database = clientObj.db("Employ");
    database
      .collection("EmployList")
      .find({})
      .toArray()
      .then((documents) => {
        res.send(documents);
        res.end();
      });
  });
});

app.post("/employlist", (req, res) => {
  var user = {
    Id: req.body.Id,
    Name: req.body.Name,
    Hometown: req.body.Hometown,
    Salery: req.body.Salery,
  };
  mongoClient.connect(constr).then((clientObj) => {
    var database = clientObj.db("Employ");
    database
      .collection("EmployList")
      .insertOne(user)
      .then(() => {
        console.log(`employ insert`);
        res.redirect("/Employ");
        res.end();
      });
  });
});

app.listen(5000);
console.log(`Server Started : http://127.0.0.1:5000`);
