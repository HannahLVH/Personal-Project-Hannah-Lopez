const express = require("express");

const morgan = require("morgan");

const path = require("node:path");

const app = express();

const PORT = process.env.PORT || 5001;

const cors = require("cors");

//MIDDLEWARE

const siteRouter = require("./routes/siteRouter");
const userRouter = require("./routes/userRouter");

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, "public")));

// app.use(cors())


//ROUTES
const planData = require("./data/data")

// app.get("/index", (req, res, next) => {
//     // res.status(200).json({success: {message: "Index Page"}, data: {planData}, statusCode: 200});
//     res.json("Index landing page")
// })

app.use("/", siteRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
    console.log(`The server is listening ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})

