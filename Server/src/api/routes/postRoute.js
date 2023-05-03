import { Router } from "express";
const postRoute = Router();
import postController from "../controllers/admin/Posts.js";

postRoute.post("/post/create", postController.createPost);
postRoute.get("/post/getAll", postController.getPosts);
postRoute.put("/post/update/:id", postController.updatePosts);
postRoute.delete("/post/delete/:id", postController.deletePosts);

export default postRoute;
