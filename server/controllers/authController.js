const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const Student = require("../models/Student");

const normalizeEmail = (value = "") => value.trim().toLowerCase();

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

// Register student
const registerStudent = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      college,
      course,
      year,
      skills,
      interests,
      bio,
    } = req.body;

    const normalizedEmail = normalizeEmail(email);

    // Validate required fields
    if (
      !name ||
      !normalizedEmail ||
      !password ||
      !phone ||
      !college ||
      !course ||
      !year
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields",
      });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email: normalizedEmail });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user account
    const user = await User.create({
      name,
      email: normalizedEmail,
      password: hashedPassword,
      role: "student",
    });

    // Create student profile
    const student = await Student.create({
      name,
      email: normalizedEmail,
      phone,
      college,
      course,
      year,
      skills: skills || [],
      interests: interests || [],
      bio: bio || "",
      role: "student",
    });

    // Generate login token
    const token = generateToken(user);

    res.status(201).json({
      success: true,
      message: "Student registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      student,
    });
  } catch (error) {
    console.error("Registration error:", error);

    res.status(500).json({
      success: false,
      message: "Registration failed",
      error: error.message,
    });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const normalizedEmail = normalizeEmail(email);

    // Validate fields
    if (!normalizedEmail || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find user
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare password
    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate token
    const token = generateToken(user);

    res.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);

    res.status(500).json({
      success: false,
      message: "Login failed",
      error: error.message,
    });
  }
};

module.exports = {
  registerStudent,
  login,
};