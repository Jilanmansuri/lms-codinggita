import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const SemesterAttendance = () => {
    const [user, setUser] = useState(null);
    const [selectedSemIdx, setSelectedSemIdx] = useState(0);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    if (!user) {
        return (
            <div className="min-h-screen pt-20 bg-neutral-950 text-white flex items-center justify-center">
                <Navbar />
                <div className="text-xl font-semibold">Loading student data...</div>
            </div>
        );
    }

    const attendanceData = user.attendance || [];
    const currentSem = attendanceData[selectedSemIdx] || {};
    
    // Calculations
    const presentCount = currentSem.present || 0;
    const totalMarked = currentSem.total || 0;
    const absentCount = totalMarked - presentCount;
    const attendancePercentage = totalMarked > 0 ? Math.round((presentCount / totalMarked) * 100) : 0;
    const leaveDays = currentSem.bonus || 0; // Interpreting bonus as some form of leave or additional info

    return (
        <div className="min-h-screen pt-20 bg-neutral-950 text-white">
            <Navbar />
            <div className="mx-auto pb-10 max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">

                <div className="mb-6">
                    <h1 className="text-3xl font-bold">Semester Attendance</h1>
                    <p className="text-neutral-400 text-sm mt-1">
                        View your attendance statistics by semester
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                    <div>
                        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">

                            <div className="text-sm text-neutral-300 mb-4 font-semibold">
                                Semesters
                            </div>

                            <div className="space-y-3">
                                {attendanceData.map((sem, index) => (
                                    <div 
                                        key={index}
                                        onClick={() => setSelectedSemIdx(index)}
                                        className={`cursor-pointer border rounded-lg p-3 transition-colors ${
                                            selectedSemIdx === index 
                                                ? "bg-blue-900 border-blue-600" 
                                                : "bg-black border-neutral-800 hover:bg-neutral-800"
                                        }`}
                                    >
                                        <div className="font-medium">{sem.semester}</div>
                                        <div className={`text-xs mt-1 ${selectedSemIdx === index ? "text-neutral-300" : "text-neutral-400"}`}>
                                            {sem.startDate} - {sem.endDate}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 space-y-6">

                        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">

                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <div className="font-semibold text-lg">{currentSem.semester}</div>
                                    <div className="text-xs text-neutral-400 mt-1">
                                        {currentSem.startDate} - {currentSem.endDate}
                                    </div>
                                </div>

                                <div className="text-right">
                                    <div className="text-3xl font-bold">{attendancePercentage}%</div>
                                    <div className="text-xs text-neutral-400">Attendance</div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-neutral-300">Overall Attendance</span>
                                    <span className="text-neutral-300 font-medium">{attendancePercentage}%</span>
                                </div>

                                <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-2 transition-all duration-500 ease-in-out ${
                                            attendancePercentage >= 75 ? "bg-green-500" : "bg-red-500"
                                        }`} 
                                        style={{ width: `${attendancePercentage}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">

                                <div className="bg-black border border-neutral-800 rounded-lg p-4">
                                    <div className="text-xs text-neutral-400">Total Marked</div>
                                    <div className="text-2xl font-bold mt-1">{totalMarked}</div>
                                </div>

                                <div className="bg-black border border-neutral-800 rounded-lg p-4">
                                    <div className="text-xs text-neutral-400">Present Count</div>
                                    <div className="text-2xl font-bold text-green-400 mt-1">{presentCount}</div>
                                </div>

                                <div className="bg-black border border-neutral-800 rounded-lg p-4">
                                    <div className="text-xs text-neutral-400">Absent Count</div>
                                    <div className="text-2xl font-bold text-red-400 mt-1">{absentCount}</div>
                                </div>

                                <div className="bg-black border border-neutral-800 rounded-lg p-4">
                                    <div className="text-xs text-neutral-400">Attendance %</div>
                                    <div className="text-2xl font-bold text-blue-400 mt-1">{attendancePercentage}%</div>
                                </div>

                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-neutral-800 pt-6">

                                <div>
                                    <div className="text-sm text-neutral-400 mb-3">Status Breakdown</div>

                                    <div className="space-y-2 text-sm">

                                        <div className="flex justify-between">
                                            <span className="text-neutral-300">Present Count</span>
                                            <span className="text-green-400 bg-green-900/40 px-2 py-0.5 rounded-md text-xs">{presentCount}</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="text-neutral-300">Absent Count</span>
                                            <span className="text-red-400 bg-red-900/40 px-2 py-0.5 rounded-md text-xs">{absentCount}</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="text-neutral-300">Leave Days</span>
                                            <span className="text-yellow-400 bg-yellow-900/40 px-2 py-0.5 rounded-md text-xs">0</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="text-neutral-300">Bonus Attendance</span>
                                            <span className="text-purple-400 bg-purple-900/40 px-2 py-0.5 rounded-md text-xs">{leaveDays}</span>
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <div className="text-sm text-neutral-400 mb-3">Period Information</div>

                                    <div className="space-y-2 text-sm">

                                        <div className="flex justify-between">
                                            <span className="text-neutral-300">Start Date</span>
                                            <span>{currentSem.startDate}</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="text-neutral-300">End Date</span>
                                            <span>{currentSem.endDate}</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="text-neutral-300">Status</span>
                                            <span className={attendancePercentage >= 75 ? "text-green-400" : "text-red-400"}>
                                                {attendancePercentage >= 75 ? "Satisfactory" : "Low Attendance"}
                                            </span>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                            <div className="font-semibold mb-3">Attendance Progress</div>

                            <div className={`${attendancePercentage >= 75 ? "text-green-400" : "text-yellow-400"} flex gap-2 items-start`}>
                                <span>{attendancePercentage >= 75 ? "✓" : "⚠"}</span>
                                <span>
                                    {attendancePercentage >= 75 
                                        ? "Your attendance is good. Keep up the consistent attendance!" 
                                        : "Your attendance is below 75%. Try to attend more classes to improve your record."
                                    }
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SemesterAttendance;