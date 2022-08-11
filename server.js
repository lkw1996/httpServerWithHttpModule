const http = require("http");
const express = require("express");
const { createUser } = require("./app");
const { createPost } = require("./app");

const app = express();
app.use(express.json());

app.post("/signup", createUser);
app.post("/post", createPost);
// app.get("/showPost", showPost);
// app.patch("/modifyPost", modifyPost);

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("server is listening on PORT 8000");
});
