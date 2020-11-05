const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require ('mongoose');
const postsRoutes = require("./routes/posts");

const path = require("path");

const { create } = require("./models/post");
const { json } = require("body-parser");

const app = express();

//connnect db

mongoose.connect("mongodb+srv://max:max@cluster0.uokio.mongodb.net/kjk?retryWrites=true&w=majority")
        .then(()=>{
          console.log("CONNECT DB..");
        })

        .catch(()=>{ console.log("CONNECTION ERROR...")
        });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/images",express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


app.use("/api/posts", postsRoutes);

module.exports = app;
