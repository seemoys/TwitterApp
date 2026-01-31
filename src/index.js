import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { PORT } from "./config/serverConfig.js";
import tweetsRouter from "./routes/V1/tweet.js";
import apiRouter from "./routes/apiRoutes.js";

// Create a express app server object.
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

// app.get("/home", function (req, res) {
//   res.render("index", { name: "Seemoy Shome" });
// });

// app.use(morgan("combined"));

// function mid1(req, res, next) {
//   console.log("Mid1", next);
//   next();
// }

// function mid2(req, res, next) {
//   console.log("Mid2", next);
//   next();
// }

// function mid3(req, res, next) {
//   console.log("Mid3", next);
//   next();
// }

// function commonMiddleWare(req, res, next) {
//   console.log("Common MDLW");
//   next();
// }

// app.use(commonMiddleWare);

// const middleWare = [mid1, mid2, mid3];

// app.get("/ping", middleWare, (req, res) => {
//   return res.json({
//     message: "pong",
//   });
// });

// app.use("/tweets", tweetsRouter);

app.use("/api", apiRouter);


app.get("/ping", (req, res) => {
  return res.json({
    message: "pong",
  });
});

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

// Define a port & attach it on express
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
