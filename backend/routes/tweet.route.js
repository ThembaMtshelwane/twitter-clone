import express from "express";
import addTweet from "../controllers/tweets/addTweet.js";
import deleteTweet from "../controllers/tweets/deleteTweet.js";
const router = express.Router();

router.post("/", addTweet);
router.delete("/:id", deleteTweet);

export default router;
