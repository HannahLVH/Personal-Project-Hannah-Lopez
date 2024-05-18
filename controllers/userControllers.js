const User = require("../model/userModel");
const Plan = require("../model/planModel");

//EDIT Profile
const editProfile = async (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, username, role } = req.body;
  try {
    const updatedProfile = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          firstName,
          lastName,
          username,
          role
        },
      },
      { new: true }
    );
    res.status(201).json({
      success: {
        message: "Your profile is updated",
        data: updatedProfile,
        statusCode: 201
      },
    });
  } catch (error) {
    res.status(400).json({
      error: {
        message: "Something went wrong while editing your profile",
        statusCode: 400,
      },
    });
  }
};

const getAllStudents = async (req, res, next) => {
    try {
    if (200) {
        const users = await User.find({role: "Student"});
        res.status(200).json({success: {message: "This is your Student Roster"}, data: users, statusCode: 200,
        })
    }
    } catch (error) {
        res.status(400).json({error: {message: "There was an error getting your student roster"}})
    }
};

//GET ALL Plans
const getAllTeacherPlans = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const plans = await Plan.find({ "createdBy._id": userId });
    res.status(200).json({
      success: { message: "Route to VIEW Teacher Practice Plans" },
      data: plans,
      statusCode: 200,
    });
  } catch (error) {
    res.status(400).json({
      error: {
        message: "Something went wrong while accessing teacher practice plans",
        statusCode: 400,
      },
    });
  }
};

const getAllStudentPlans = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const plans = await Plan.find({ "assignedTo._id": userId });
    res.status(200).json({
      success: {
        message: "Route to VIEW student Practice Plans",
        data: plans,
        statusCode: 200,
      },
    });
  } catch (error) {
    res.status(400).json({
      error: {
        message: "Something went wrong while accessing student practice plans",
        statusCode: 400,
      },
    });
  }
};

//GET ONE Plan
const getPlan = async (req, res, next) => {
  const { id } = req.params;
  try {
    const plan = await Plan.findOne({_id: id});
    res.status(200).json({
      success: {
        message: "Success! Found the plan you were looking for",
        data: plan,
        statusCode: 200,
      },
    });
  } catch (error) {
    res.status(400).json({
      error: {
        message: "Error! Something went wrong retrieving the plan!",
        statusCode: 400,
      },
    });
  }
};


//CREATE Practice Plan
const createPlan = async (req, res, next) => {
    const {
        createdBy,
        assignedTo,
        title,
        activity,
        practiceNotes,
    } = req.body;

  const createdByUser = await User.findById(createdBy);
  const assignedToUser = await User.findById(assignedTo);

  if (!createdByUser || !assignedToUser) {
    return res.status(404).json({
      error: {
        message: "User not found",
        statusCode: 404
      }
    });
  }

  const newPlan = new Plan({
    createdBy: {
        _id: createdByUser._id,
        username: createdByUser.username,
        role: createdByUser.role
    },
    assignedTo: {
        _id: assignedToUser._id,
        username: assignedToUser.username,
        role: assignedToUser.role
    },
    createdOn: new Date(),
    title,
    activity,
    practiceNotes
  });

  try {
    await newPlan.save();
    res.status(200).json({
      success: {
        message: "Route to CREATE Teacher practice plan",
        data: newPlan,
        statusCode: 200,
      },
    });
  } catch (error) {
    res.status(400).json({
      error: {
        message: "Something went wrong while creating practice plan",
        statusCode: 400,
      },
    });
  }
};

// EDIT Practice Plan

const editPlan = async (req, res, next) => {
  const { id } = req.params;
  const {
    assignedTo,
    title,
    activity,
    practiceNotes,
  } = req.body;

  try {
    const updatedPlan = await Plan.findOneAndUpdate({ _id: id },
      {
        $set: {
            createdOn: new Date(),
            assignedTo,
            title,
            activity,
            practiceNotes,
        },
      },
      { new: true });
    
    res.status(201).json({
      success: { message: "Plan is updated", data: updatedPlan, statusCode: 201 },
    });
  } catch (error) {
    res.status(400).json({
      error: {
        message: "Something went wrong while editing teacher practice plan",
        statusCode: 400,
      },
    });
  }
};

// DELETE Practice Plan

const deletePlan = async (req, res, next) => {
  const { id } = req.params;

  try {
    await Plan.findOneAndDelete({_id: id});
    res.status(200).json({
      success: {
        message: "The practice plan was deleted successfully",
        statusCode: 200,
      },
    });
  } catch (error) {
    res.status(400).json({
      error: {
        message: "Something went wrong while deleting the practice plan",
        statusCode: 400,
      },
    });
  }
};

module.exports = {
  editProfile,
  getAllStudents,
  getAllTeacherPlans,
  getAllStudentPlans,
  getPlan,
  createPlan,
  editPlan,
  deletePlan,
};
