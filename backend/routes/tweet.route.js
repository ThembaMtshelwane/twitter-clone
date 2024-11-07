import express from "express";

import updateTweet from "../controllers/tweets/updateTweet.js";
import addTweet from "../controllers/tweets/addTweet.js";
import deleteTweet from "../controllers/tweets/deleteTweet.js";
import readAllTweets from "../controllers/tweets/readAllTweets.js";

const router = express.Router();

router.get("/", readAllTweets);
router.post("/", addTweet);
router.patch("/:id", updateTweet);
router.delete("/:id", deleteTweet);

export default router;
