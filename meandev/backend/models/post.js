const mongoose = require('mongoose');

//creating schema
const postSchema = mongoose.Schema({
  title: { type: String , required: true},
  content: { type: String , required: true}
});

//create model based on schema

module.exports = mongoose.model('Post',postSchema);

