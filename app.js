const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const contactsRouter = require("./routes/api/contacts");
const authRouter = require("./routes/api/auth");
const { checkToken } = require("./middleware");
const app = express();


async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

main()
  .then(console.log("Database connection successful"))
  .catch((err) => {
    console.log("Mongo is error",err);
    process.exit(1);
  });

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static( "public"))
app.use("/api/contacts", checkToken, contactsRouter);
app.use("/api/users", authRouter )
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
