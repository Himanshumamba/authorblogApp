import express from "express";
import { addPost,getPosts,getPost,deletePost,updatePost } from "../controllers/post.js";

const  router = express.Router();

router.post('/',addPost);
router.get('/',getPosts);
router.get('/:id',getPost);
router.delete('/:id',deletePost);
router.put('/:id',updatePost);





 export default router;