const express = require("express");

const {
  getMyProfile,
  getStudents,
  getStudentById,
  deleteStudent,
} = require("../controllers/studentController");

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

const router = express.Router();

/*
  =====================================================
  AUTHENTICATED STUDENT ROUTES
  =====================================================
*/

/*
  Logged-in student can view their own profile.
  This route must come BEFORE /:id.
*/
router.get("/me", protect, getMyProfile);


/*
  =====================================================
  ADMIN ONLY ROUTES
  =====================================================
*/

/*
  Get all registered students
*/
router.get(
  "/",
  protect,
  adminOnly,
  getStudents
);


/*
  Get one student
*/
router.get(
  "/:id",
  protect,
  adminOnly,
  getStudentById
);


/*
  Delete student
*/
router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteStudent
);


module.exports = router;