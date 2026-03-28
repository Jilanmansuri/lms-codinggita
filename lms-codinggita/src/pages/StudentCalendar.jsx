import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";

export default function CalendarPage() {
  const data = localStorage.getItem("user");
  const user = data ? JSON.parse(data) : null;

  const [date, setDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());

  const changeMonth = (dir) => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + dir);
    setDate(newDate);
    setSelectedDay(1);
  };

  const goToday = () => {
    const today = new Date();
    setDate(today);
    setSelectedDay(today.getDate());
  };

  const monthName = date.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];

  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);
  while (days.length % 7 !== 0) days.push(null);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const legendItems = [
    { label: "Assignment", color: "bg-blue-500" },
    { label: "holiday", color: "bg-pink-500" },
    { label: "exam", color: "bg-red-500" },
    { label: "class test", color: "bg-orange-500" },
    { label: "result announcement", color: "bg-purple-500" },
    { label: "orientation", color: "bg-cyan-500" },
    { label: "convocation", color: "bg-fuchsia-500" },
    { label: "Personal reasons", color: "bg-yellow-500" },
    { label: "Festival celebration", color: "bg-orange-600" },
    { label: "Hackathon participation", color: "bg-teal-500" },
    { label: "College events (seminars, workshops, competitions, etc.)", color: "bg-blue-600" },
    { label: "Sick leave / medical reasons", color: "bg-red-400" },
    { label: "Placement drives", color: "bg-green-500" },
    { label: "Company work (official tasks or visits)", color: "bg-indigo-500" },
    { label: "Interviews", color: "bg-emerald-500" },
    { label: "Family functions", color: "bg-pink-600" },
    { label: "Emergency situations", color: "bg-rose-500" },
    { label: "Travel-related reasons", color: "bg-sky-500" },
    { label: "Duty leave", color: "bg-violet-500" },
    { label: "Others", color: "bg-gray-500" },
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        No user found. Please login.
      </div>
    );
  }
return (
  <div className="min-h-screen bg-black text-white pt-10">
    <Navbar />

    <div className="mx-auto max-w-7xl px-4 pb-10">
      <h1 className="text-2xl font-semibold mb-6 mt-5">Calendar</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 bg-[#111] rounded-2xl border-b border-neutral-800  p-6">
          
          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => changeMonth(-1)}
                className="px-2 py-1 bg-[#1a1a1a] border border-b border-neutral-800  rounded"
              >
                ←
              </button>

              <button
                onClick={goToday}
                className="px-3 py-1 text-sm bg-[#1a1a1a]  border-b border-neutral-800  rounded"
              >
                Today
              </button>
            </div>

            <h2 className="text-sm font-medium">{monthName}</h2>

            <button
              onClick={() => changeMonth(1)}
              className="px-2 py-1 bg-[#1a1a1a] border-b border-neutral-800 rounded"
            >
              →
            </button>
          </div>

          {/* LEGEND */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-4 mb-8 text-xs text-gray-400">
            {legendItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* DAYS HEADER */}
          <div className="grid grid-cols-7 text-center text-xs text-gray-500 mb-2">
            {daysOfWeek.map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-7 gap-2">
            {days.map((day, idx) => (
              <div
                key={idx}
                onClick={() => day && setSelectedDay(day)}
                className={`
                  h-20 rounded-xl border p-2 cursor-pointer
                  ${!day && "invisible"}
                  ${
                    day === selectedDay
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-b border-neutral-800  hover:border-gray-700"
                  }
                `}
              >
                <span className="text-sm">{day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#111] rounded-2xl border-b border-neutral-800  p-6">
          
          <h2 className="text-lg font-semibold mb-6">
            {String(selectedDay).padStart(2, "0")}/
            {String(month + 1).padStart(2, "0")}/{year}
          </h2>

          <div className="space-y-6">
            
            <div>
              <h3 className="text-gray-300 mb-2">Events</h3>
              <p className="text-gray-500 text-sm">No events.</p>
            </div>

            <div>
              <h3 className="text-gray-300 mb-2">Leaves</h3>
              <p className="text-gray-500 text-sm">No leaves.</p>
            </div>

            <div>
              <h3 className="text-gray-300 mb-2">Attendance</h3>
              <p className="text-gray-500 text-sm mb-2">Subject entries:</p>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm">ReactJS — present</span>
              </div>
            </div>

            <div>
              <h3 className="text-gray-300 mb-2">Assignments</h3>
              <p className="text-gray-500 text-sm">None due.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
);
}