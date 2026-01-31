import express from "express";
import tweetsRouter from "./tweet.js";
import commentsRouter from "./comment.js";

const router = express.Router();

router.use("/tweets", tweetsRouter); //!if the remaining req URL starts with tweets then use the tweetsRouter
router.use("/comments", commentsRouter); //!if the remaining req URL starts with comments then use the import commentsRouter from './comment.js';

export default router;
