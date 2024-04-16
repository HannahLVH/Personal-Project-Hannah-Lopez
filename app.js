const express = require("express");

const morgan = require("morgan");

const path = require("node:path");

const app = express();

const PORT = 5001;

const cors = require("cors");

//MIDDLEWARE

// const siteRoutes = require()
// const teacherRoutes = require()

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, "public")));

// app.use(cors())


//ROUTES
const planData = require("./data/data")

app.get("/", (req, res, next) => {
    res.status(200).json({success: {message: "Index Page"}, data: {planData}, statusCode: 200});

})

// app.use("/", siteRoutes);
// app.use("/teacher", teacherRoutes);

app.listen(PORT, () => {
    console.log(`The server is listening ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})

