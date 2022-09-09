import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title       : String,
  message     : String,
  creator     : String,
  tags        : [String],
  selectedFile: String,
  likeCount: {
  type     : Number,
    default: 0
  },
  createdAt: {
    type   : Date,
    default: new Date()
  }
});

const PostMessage = mongoose.model('PostMessage', postSchema);
// exporting mongoose model from this file. This will be used for find, create, delete, and update;
export default PostMessage;