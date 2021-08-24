const express = require("express");
const dotenv = require("dotenv");
// now we tell config where the dotenv file is
dotenv.config({ path: "./.env" });
const app = express();

const postsRoute = require("./routes/post");
const userRoute = require("./routes/user");
const imageRoute = require("./routes/images");
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/posts", postsRoute);
app.use("/user", userRoute);
app.use("/image", imageRoute);

app.get("/", (req, res) => {
 res.send("Hello world");
});

module.exports = app;
