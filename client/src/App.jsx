import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import StudentDashboard from "./Pages/StudentDashboard";
import Profile from "./Pages/Profile";
import Events from "./Pages/Events";
import Resources from "./Pages/Resources";

import AdminDashboard from "./Pages/Admin/AdminDashboard";
import Students from "./Pages/Admin/Students";
import StudentDetails from "./Pages/Admin/StudentDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />

        {/* Student Pages */}
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/profile" element={<Profile />} />

        {/* Admin Pages */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<Students />} />
        <Route
          path="/admin/students/:id"
          element={<StudentDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;