import express from "express";
import tweetsRouter from "./V1/tweet.js";
import commentsRouter from "./V1/comment.js";
import v1Router from "./V1/v1Routes.js";
import v2Router from "./V2/v2Routes.js";

const router = express.Router();

router.use("/v1", v1Router); //!if the remaining req URL starts with /v1 then use the v1Router
router.use("/v2", v2Router); //!if the remaining req URL starts with /v2 then use the v1Router

export default router;
