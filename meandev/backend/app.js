const express = require('express');

const app = express();



app.use('/api/posts' ,(req,res,next)=>{
  //res.send("Hello pandas");

  const posts =[
    {
      id: 'asdasd',
      title: 'st',
      content: 'asd'
    },
    {
      id: 'asdfsdasd',
      title: 'ssdft',
      content: 'assdfd'
    },
  ];
  res.status(200).json({
    mess: 'done',
    posts: posts
  });
});

module.exports = app; // export middle ware
