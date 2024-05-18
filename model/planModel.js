const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  role: String,
});

const planSchema = new Schema({
  createdBy: userSchema,
  assignedTo: userSchema,
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
