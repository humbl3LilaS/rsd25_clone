const express = require("express");
const {prisma} = require("./prisma");

const app = express();
const cors = require("cors");

app.use(cors());

app.get("/info", (req, res) => {
  res.json({msg: "Yaycha Api"});
});

const server = app.listen(8000, () => {
  console.log("Server is listening at port 8000");
});

const gracefulShutdown = async () => {
  await prisma.$disconnect();
  server.close(() => {
    console.log("Server shutdown gracefully");
    process.exit(0);
  });
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);