import express from "express";
const app = express();
const PORT = 4173;
import * as fs from "node:fs/promises";

let dataStandford=new Array;
app.get("/pharmacies", (req, res) => {
  fs.readFile("./data/Stratford.json", "utf8").then(data =>{
    dataStandford = JSON.parse(data);
    res.status(200).send(dataStandford["pharmacies"]);
  });
});

app.get("/colleges", (req, res) => {
  fs.readFile("./data/Stratford.json", "utf8").then(data =>{
    dataStandford = JSON.parse(data);
    res.status(200).send(dataStandford["colleges"]);
  });
});

app.get("/doctors", (req, res) => {
  fs.readFile("./data/Stratford.json", "utf8").then(data =>{
    dataStandford = JSON.parse(data);
    res.status(200).send(dataStandford["doctors"]);
  });
});

app.get("/hospitals", (req, res) => {
  fs.readFile("./data/Stratford.json", "utf8").then(data =>{
    dataStandford = JSON.parse(data);
    res.status(200).send(dataStandford["hospitals"]);
  });
});





app.listen(PORT, () => {
  console.log("Listening on http://localhost:4173.");
});