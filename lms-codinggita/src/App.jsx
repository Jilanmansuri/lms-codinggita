import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import StudentDashboard from "./pages/studentDashboard";
import StudentAttendance from "./pages/StudentAttendance";
import StudentCalendar from "./pages/StudentCalendar";
import StudentChat from "./pages/StudentChat";
import ApplyLeave from "./pages/ApplyLeave";
import SemesterAttendance from "./pages/SemesterAttendance";
import Profile from "./pages/Profile";

import Assignments from "./pages/Assignments";
import Events from "./pages/Events";
function App() {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/student/attendance" element={<StudentAttendance />} />
      <Route path="/student/calendar" element={<StudentCalendar />} />
      <Route path="/student/chat-groups" element={<StudentChat />} />
      <Route path="/student/apply-leave" element={<ApplyLeave />} />
      <Route path="/student/semester-attendance" element={<SemesterAttendance />} />
      <Route path="/student/profile" element={<Profile />} />


      <Route path="/student/assignments" element={<Assignments />} />
      <Route path="/student/events" element={<Events />} />

    </Routes>
  );
}

export default App;
