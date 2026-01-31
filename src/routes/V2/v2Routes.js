import express from "express";
import tweetsRouterV2 from "./tweet.js";

const router = express.Router();

router.use("/tweets", tweetsRouterV2);

export default router;
