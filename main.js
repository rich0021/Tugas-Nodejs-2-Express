import express from "express";

/* 
  url untuk get
  
  http://localhost:8000/biodata?nama=naufal&tempatlahir=Bandung&tanggallahir=23112004&alamat=JL.Maleber+Utara+No+292 
*/

/* 
  json untuk post

  {
    "nama": "Naufal",
    "tempat-lahir": "Bandung",
    "tanggal-lahir": "23112004",
    "almat": "JL.Maleber Utara No 292"
  } 
*/

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/biodata", function (req, res) {
  res.json(req.query);
});

app.post("/biodata", function (req, res) {
  res.json(req.body);
});

app.get("*", function (req, res) {
  res.set("Content-Type", "text/plain");
  res.send("Akses Page /biodata");
});

export default app;
