const mongoose = require("mongoose");

const { Schema } = mongoose;


//only for student
const scheduleSchema = new Schema({
  userId: { //student user ID
    type: Number,
  },
  planId: {
    type: Number,
  },
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
