import express from 'express';

import { getPosts, getPostsBySearch, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;