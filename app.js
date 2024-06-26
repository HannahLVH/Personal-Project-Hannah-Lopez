require("dotenv").config();
require("./config/connection");
require("./config/authStrategy");

const express = require("express");

const morgan = require("morgan");

const path = require("node:path");

const app = express();

const PORT = process.env.PORT || 5001;

const cors = require("cors");

const helmet = require("helmet");

const session = require("express-session");

const passport = require("passport");

const bodyParser = require('body-parser');

app.use(morgan("dev"));

const siteRouter = require("./routes/siteRouter");
const userRouter = require("./routes/userRouter");

app.use(cors());
app.use(helmet({
    contentSecurityPolicy: false,
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'yourSecretKey',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

//ROUTES

app.get("/", (req, res, next) => {
    // res.status(200).json({success: {message: "Index Page"}, data: {planData}, statusCode: 200});
    // res.json("Index landing page")
    res.send(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1> Test for Deployment </h1>
            <p> Are you able to see this? </p>
        </body>
        </html>`)
});

app.use("/", siteRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
    console.log(`The server is listening ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})

