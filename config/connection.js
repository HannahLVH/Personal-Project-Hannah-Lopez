const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("");
    console.log("MongoDB is connected")
};

