const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const itemsRoutes = require("./routes/items-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use("/api/items", itemsRoutes);

app.use((req, res, next) => {
  const err = new HttpError("We can't give you what you are looking for", 404);
  throw err;
});

app.use((err, req, res, next) => {
  if (res.headerSent) {
    return next(err);
  }
  res.status(err.code || 500);
  res.json({ message: err.message || "Unknown error" });
});

mongoose
  .connect(
    `
mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.eyhaq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority

`
  )
  .then(() => {
    console.log("connected to db :)");
    app.listen(5000);
  })
  .catch((err) => {
    console.log("failed to connect to db");
    console.log(err);
  });
