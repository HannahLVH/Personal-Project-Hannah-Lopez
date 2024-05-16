const mongoose = require("mongoose");

const {Schema} = mongoose;

const planSchema = new Schema ({
    activity1: {
        type: String,
    },
    practiceNotes1:{
        type: String,
    },
    activity2: {
        type: String,
    },
    practiceNotes2:{
        type: String,
    },
    activity3: {
        type: String,
    },
    practiceNotes3:{
        type: String,
    },
})

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
