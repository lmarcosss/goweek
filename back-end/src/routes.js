const express = require("express");

const routes = express.Router();

const TweetController = require("./controllers/TweetController");
const LikeController = require("./controllers/LikeController");
const UserController = require("./controllers/UserController");

//Tweets
routes.get("/tweets", TweetController.index);
routes.post("/tweets", TweetController.store);

//Likes
routes.post("/likes/:id", LikeController.store);

//Users
routes.post("/users", UserController.store);
routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.getId);

module.exports = routes;
