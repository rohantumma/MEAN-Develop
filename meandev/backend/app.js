const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require ('mongoose');


const Post = require ('./models/post');

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

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

//max max1234

app.post("/api/posts", (req, res, next) => {
  const post = new Post ({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  //save post into db auto creat write Query into db
  post.save();
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.get("/api/posts", (req, res, next) => {
  // const posts = [
  //   {
  //     id: "fadf12421l",
  //     title: "First server-side post",
  //     content: "This is coming from the server"
  //   },
  //   {
  //     id: "ksajflaj132",
  //     title: "Second server-side post",
  //     content: "This is coming from the server!"
  //   }
  // ];

  //models/post.js
  Post.find()
      .then(document=>{
        console.log(document);
        res.status(200).json({
          message: "Posts fetched successfully!",
          posts: document
        });
    });
});

module.exports = app;
