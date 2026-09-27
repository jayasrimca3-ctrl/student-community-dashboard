const Student = require("../models/Student");

/*
  Get the currently logged-in student's own profile
*/
const getMyProfile = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required.",
      });
    }

    const student = await Student.findOne({
      email: req.user.email,
    });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student profile not found.",
      });
    }

    res.json({
      success: true,
      student,
    });
  } catch (error) {
    console.error("Get my profile error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to load your profile.",
      error: error.message,
    });
  }
};


/*
  Get all registered students
  ADMIN ONLY
*/
const getStudents = async (req, res) => {
  try {
    const students = await Student.find()
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: students.length,
      students,
    });
  } catch (error) {
    console.error("Get students error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch students",
      error: error.message,
    });
  }
};


/*
  Get one student by ID
  ADMIN ONLY
*/
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.json({
      success: true,
      student,
    });
  } catch (error) {
    console.error("Get student error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch student",
      error: error.message,
    });
  }
};


/*
  Delete a student
  ADMIN ONLY
*/
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    await Student.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    console.error("Delete student error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to delete student",
      error: error.message,
    });
  }
};


module.exports = {
  getMyProfile,
  getStudents,
  getStudentById,
  deleteStudent,
};