import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "Welcome To The Comments Route!!!",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "Welcome To The Comments Route With ID!!!",
    id: req.params.id,
  });
});

export default router;
