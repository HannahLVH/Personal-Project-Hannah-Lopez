const mongoose = require("mongoose");

const { Schema } = mongoose;


//only for student
const scheduleSchema = new Schema({
  userId: { //student user ID
    type: String,
  },
  planId: [
    {
      type: String,
    },
  ],
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
