const express = require("express");

const Post = require("../models/post");

const router = express.Router();


router.post("",(req, res, next) => {
  const post = new Post ({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  //save post into db auto creat write Query into db
  post.save().then(result=>{
    res.status(201).json({
    message: 'Post added successfully',
    postId: post._id
    });
  });
});

router.get("",(req, res, next) => {
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

router.put("/:_id",(req,res,next)=>{
  const post= new Post({
    _id: req.body._id,
    title: req.body.title,
    content: req.body.content
  });
  Post.updateOne({_id: req.params._id},post)
  .then(result =>{
    console.log(result);
    res.status(200),json({message: "UPDATE DONE..."});
  });
});

//deleted by _id
router.delete("/:_id",(req,res,next)=>{
  Post.deleteOne({_id: req.params._id}).then(result=>{
    console.log(result)
    res.status(200).json({message: "Post Deleted!"});
  });
});


module.exports = router;
