import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();
import multer from 'multer';


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

var upload = multer({ storage: storage }).single('file')




export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
        
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}




export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator } = req.body;

    console.log(selectedFile);

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator })

    try {
        await newPostMessage.save();

        res.status(201).json({ message: 'Post Message successfully created.' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id)

    var updatedRecord = {
        title: req.body.title,
        message: req.body.message
    }

    PostMessage.findByIdAndUpdate(req.params.id, { $set: updatedRecord },{new:true}, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while updating a record : ' + JSON.stringify(err, undefined, 2))
    })
}

export const deletePost = (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id)

    PostMessage.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while deleting a record : ' + JSON.stringify(err, undefined, 2))
    })
}


export default router;