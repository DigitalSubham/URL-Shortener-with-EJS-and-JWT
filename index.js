const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const { restrictToLoginUser, checkAuth } = require("./middleware/auth");
require("dotenv").config();

PORT = 8000;

app.use(express.json()); //to parse json data
app.use(express.urlencoded({ extended: false })); //to parse form data
app.use(cookieParser());

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");
app.use("/url", restrictToLoginUser, urlRoute);
app.use("/", checkAuth, staticRoute);
app.use("/user", userRoute);

const connectToMongoDB = require("./connect");

connectToMongoDB(process.env.MONGOURL).then(() =>
  console.log("mongodb connection successful")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.listen(PORT, () => {
  console.log(`server started at port no ${PORT}`);
});
