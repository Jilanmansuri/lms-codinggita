import React from "react";
import Navbar from "../components/Navbar";

const attendanceData = [
  {
    code: "SU0204",
    subject: "OOPS (C++)",
    markedBy: "Ankita",
    status: "present",
  },
  {
    code: "SU0203",
    subject: "NoSQL Database (MongoDB/Redis)",
    markedBy: "Ankita",
    status: "present",
  },
  {
    code: "SU0202",
    subject: "NodeJS",
    markedBy: "Ankita",
    status: "present",
  },
  {
    code: "SU0201",
    subject: "ReactJS",
    markedBy: "Ankita",
    status: "present",
  },
];

const StudentAttendance = () => {
  const data = localStorage.getItem("user");
  const user = data ? JSON.parse(data) : null;

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        No user found. Please login.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-20">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        {/* Header */}
        <h1 className="text-2xl font-semibold mb-6">Attendance Overview</h1>

        {/* Card Container */}
        <div className="bg-neutral-900 rounded-2xl p-6 shadow-lg border border-neutral-800">
          {/* Title */}
          <h2 className="text-lg font-medium mb-1">Today's Attendance</h2>
          <p className="text-neutral-400 text-sm mb-4">
            Date: {new Date().toISOString().slice(0, 10)}
          </p>

          {/* Attendance List */}
          <div className="space-y-4">
            {attendanceData.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-black border border-neutral-800 rounded-xl px-4 py-3"
              >
                <div>
                  <h3 className="font-medium">
                    {item.code} - {item.subject}
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    Marked by: {item.markedBy}
                  </p>
                </div>

                <span className="bg-green-900/30 text-green-400 text-sm px-3 py-1 rounded-full border border-green-800/50">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAttendance;