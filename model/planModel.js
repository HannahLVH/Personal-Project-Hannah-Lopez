const mongoose = require("mongoose");

const { Schema } = mongoose;

const planSchema = new Schema({
  createdBy: {
    _id: String,
    username: String,
    role: String,
  },
  assignedTo: {
    _id: String,
    username: String,
    role: String,
  },
  createdOn: {
    type: String,
  },
  title: {
    type: String,
  },
  activity: {
    type: String,
  },
  practiceNotes: {
    type: String,
  },
},
);

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
