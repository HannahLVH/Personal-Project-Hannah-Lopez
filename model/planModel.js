const mongoose = require("mongoose");

const { Schema, ObjectId } = mongoose;

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
    type: Date,
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
