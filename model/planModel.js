const mongoose = require("mongoose");

const { Schema } = mongoose;

const planSchema = new Schema({
  createdBy: {
    user: {
      id: {
        type: String,
      },
      username: {
        type: String,
      },
      role: {
        type: String,
      },
    },
  },
  createdOn: {
    type: Date,
  },
  assignedTo: {
    user: {
        id: {
          type: String,
        },
        username: {
          type: String,
        },
        role: {
          type: String,
        },
      },
  },
//   status: {
//     type: String,    
//   },
  title: {
    type: String,
  },
  activity: {
    type: String,
  },
  practiceNotes: {
    type: String,
  },
});

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
