const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'usuario',
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  posteo:{
    type:Schema.Types.ObjectId,
    ref:'post'
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;