import express from "express";
import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

const router = express.Router();

export const getPost = async (request, response) => {
  try {
    // reference of this "access-control-allow-origin"
    //https://stackoverflow.com/questions/45975135/access-control-origin-header-error-using-axios
      // response.header("Access-Control-Allow-Origin", "*");
      const postMessages = await PostMessage.find();
      // convert the postMessage content (which is array) to an JSON array
      response.status(200).json(postMessages);
  } catch (error) {
   response.status(404).json({ message: error.message});
  }
};


export const createPost = async(request, response) => {
  // don't forget to console.log this later
  const post = request.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    response.status(201).json(newPost);   
  } catch (error) {
    response.status(409).json({message: error.message});
  }
}

export const updatePost = async(request, response) => {
  
  const { id: _id } = request.params;
  // will use it for whole updated post
  const post = request.body;
  // is _id a mongoose object ID pr valid?
  if(!mongoose.Types.ObjectId.isValid(_id)) return response.status(404).send('No post with that id.');
  
  // we use model here so we can update our post
  // we place the "...post" here to tell which "keys" are we going to update and the values will be from the client
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, {new: true}); //

  response.json(updatedPost);
}

export const likePost = async(request, response) => {
  const { id } = request.params;
  if(!mongoose.Types.ObjectId.isValid(id)) return response.status(404).send('No post with that id.');

  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1}, { new: true});
  response.json(updatedPost);
}

export const deletePost = async(request, response) => {
  const { id } = request.params;
  if(!mongoose.Types.ObjectId.isValid(id)) return response.status(404).send('No post with that id.');

  await PostMessage.findByIdAndRemove(id);
  response.json({ message: 'Post deleted successfully!'});
}



export default router;