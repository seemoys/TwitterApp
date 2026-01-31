import express from "express";
import {
  createTweet,
  getTweets,
  getTweetsById,
} from "../../controller/tweetcontroller.js";

const router = express.Router();

router.get("/", getTweets);

router.post("/", createTweet);

export default router;
