const mongoose = require("mongoose");

const {Schema} = mongoose;

const planSchema = new Schema ({
    actvity1: {
        type: String,
    },
    annotations1:{
        type: String,
    },
    actvity2: {
        type: String,
    },
    annotations2:{
        type: String,
    },
    actvity3: {
        type: String,
    },
    annotations3:{
        type: String,
    },
})

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;