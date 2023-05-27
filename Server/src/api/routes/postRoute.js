const { Router } = require("express");
const postRoute = Router();
const postController = require("../controllers/admin/Posts.js");

postRoute.post("/post/create", postController.createPost);
postRoute.get("/post/getAll", postController.getPosts);
postRoute.get("/post/get/:id", postController.getOnePost);
postRoute.put("/post/update/:id", postController.updatePosts);
postRoute.delete("/post/delete/:id", postController.deletePosts);

module.exports = postRoute;
