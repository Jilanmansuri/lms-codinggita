import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Calendar, Clock, FileText, CheckCircle } from "lucide-react";

const ApplyLeave = () => {

    const [leaves, setLeaves] = useState([]);
    const [category, setCategory] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [fromTime, setFromTime] = useState("");
    const [toTime, setToTime] = useState("");

    useEffect(() => {
        try {
            const data = localStorage.getItem("leaves");
            if (data) {
                setLeaves(JSON.parse(data));
            }
        } catch (error) {
            console.log("Invalid JSON, clearing storage");
            localStorage.removeItem("leaves");
        }
    }, []);


    useEffect(() => {
        localStorage.setItem("leaves", JSON.stringify(leaves));
    }, [leaves]);


    const handleSubmit = () => {
        if (!category || !fromDate || !toDate) {
            alert("Please fill all required fields");
            return;
        }

        const start = new Date(fromDate);
        const end = new Date(toDate);

        const diffTime = end - start;
        const days = diffTime / (1000 * 60 * 60 * 24) + 1;
        if (end < start) {
            alert("To Date cannot be before From Date");
            return;
        }


        const newLeave = {
            category,
            fromDate,
            toDate,
            fromTime,
            toTime,
            appliedOn: new Date().toLocaleDateString(),
            status: "Pending",
            days: days
        };

        setLeaves([...leaves, newLeave]);

        setCategory("");
        setFromDate("");
        setToDate("");
        setFromTime("");
        setToTime("");
    };

    const total = leaves.length;
    const pending = leaves.filter(l => l.status === "Pending").length;
    const approved = leaves.filter(l => l.status === "Approved").length;
    const rejected = leaves.filter(l => l.status === "Rejected").length;

    return (

        <>
            <div className="min-h-screen pt-20 bg-neutral-950 text-white">

                <Navbar />
                <div className="mx-auto pb-10 max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">

                    {/* Heading */}
                    <h1 className="text-2xl sm:text-3xl font-bold mb-2">Apply for Leave</h1>
                    <p className="text-gray-400 mb-8">
                        Submit your leave application and track your requests
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

                        <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl">
                            <h2 className="text-2xl font-bold ">{total}</h2>
                            <p className="text-gray-400 text-sm">Total Applications</p>
                        </div>

                        <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl">
                            <h2 className="text-2xl font-bold  text-yellow-400">{pending}</h2>
                            <p className="text-gray-400 text-sm">Pending Review</p>
                        </div>

                        <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl">
                            <h2 className="text-2xl font-bold  text-green-400">{approved}</h2>
                            <p className="text-gray-400 text-sm">Approved</p>
                        </div>

                        <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl">
                            <h2 className="text-2xl font-bold  text-red-400">{rejected}</h2>
                            <p className="text-gray-400 text-sm">Rejected</p>
                        </div>

                    </div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* LEFT FORM */}
                        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl">

                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                                    +
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold">New Leave Application</h2>
                                    <p className="text-gray-400 text-sm">
                                        Fill out the form to submit your leave request
                                    </p>
                                </div>
                            </div>



                            {/* Category */}
                            <label className="text-sm text-gray-300">Leave Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full mt-2 p-3 bg-neutral-800 border border-neutral-700 rounded-lg"
                            >
                                <option value="">Select category</option>
                                <option value="personal">Personal reasons</option>
                                <option value="festival">Festival celebration</option>
                                <option value="hackathon">Hackathon participation</option>
                                <option value="college_events">College events (seminars, workshops, competitions, etc.)</option>
                                <option value="sick_leave">Sick leave / medical reasons</option>
                                <option value="placement">Placement drives</option>
                                <option value="company_work">Company work (official tasks or visits)</option>
                                <option value="interviews">Interviews</option>
                                <option value="family">Family functions</option>
                                <option value="emergency">Emergency situations</option>
                                <option value="travel">Travel-related reasons</option>
                                <option value="duty">Duty leave</option>
                                <option value="others">Others</option>
                            </select>


                            {/* Dates */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="text-sm text-gray-300">From Date</label>
                                    <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="w-full mt-2 p-3 bg-neutral-800 border border-neutral-700 rounded-lg" />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-300">To Date</label>
                                    <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className="w-full mt-2 p-3 bg-neutral-800 border border-neutral-700 rounded-lg" />
                                </div>
                            </div>

                            {/* Time */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="text-sm text-gray-300">Leave Time</label>
                                    <input type="time" value={fromTime} onChange={(e) => setFromTime(e.target.value)} className="w-full mt-2 p-3 bg-neutral-800 border border-neutral-700 rounded-lg" />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-300">Return Time</label>
                                    <input type="time" value={toTime} onChange={(e) => setToTime(e.target.value)} className="w-full mt-2 p-3 bg-neutral-800 border border-neutral-700 rounded-lg" />
                                </div>
                            </div>

                            {/* Remarks */}
                            <div className="mt-4">
                                <label className="text-sm text-gray-300">
                                    Additional Remarks (Optional)
                                </label>
                                <textarea
                                    placeholder="Any additional information for your mentor or admin"
                                    className="w-full mt-2 p-3 bg-neutral-800 border border-neutral-700 rounded-lg"
                                    rows={4}
                                />
                            </div>

                            {/* Button */}
                            <button onClick={handleSubmit} className="w-full mt-5 bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-medium ">
                                Submit Leave Application
                            </button>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg">

                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                                    👤
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold">My Leave Requests</h2>
                                    <p className="text-gray-400 text-sm">
                                        Track the status of your applications
                                    </p>
                                </div>
                            </div>
                            {leaves.length === 0 ? (
                                <h3 className="text-center text-gray-400 mt-10 mb-10 rounded-lg p-10 bg-neutral-900 border border-neutral-700">
                                    No Leave Request
                                </h3>
                            ) : (
                                <div className="space-y-3">
                                    {leaves.length === 0 ? (
                                        <h3 className="text-center text-gray-400 mt-10 mb-10 rounded-lg p-10 bg-neutral-900 border border-neutral-700">
                                            No Leave Request
                                        </h3>
                                    ) : (
                                        // output leave data
                                        <div className="space-y-4">
                                            {leaves.map((leave, index) => (
                                                <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">

                                                    {/* TOP */}
                                                    <div className="flex justify-between items-start">

                                                        <div className="flex gap-3">
                                                            <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center">
                                                                <FileText size={18} />
                                                            </div>

                                                            <div>
                                                                <h2 className="font-semibold text-lg capitalize">
                                                                    {leave.category.replace("_", " ")}
                                                                </h2>
                                                                <p className="text-sm text-gray-400">
                                                                    Applied on {leave.appliedOn}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <span className="flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400">
                                                            <CheckCircle size={14} />
                                                            {leave.status}
                                                        </span>
                                                    </div>

                                                    {/* data card */}
                                                    {/* MIDDLE */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm text-gray-300">

                                                        <p className="flex items-center gap-2">
                                                            <Calendar size={16} />
                                                            {leave.fromDate} → {leave.toDate}
                                                        </p>

                                                        <p className="flex items-center gap-2">
                                                            <Clock size={16} />
                                                            {leave.fromTime} → {leave.toTime}
                                                        </p>

                                                        <p className="flex items-center gap-2">
                                                            <Clock size={16} />
                                                            {leave.days} days
                                                        </p>

                                                        <p className="flex items-center gap-2">
                                                            <CheckCircle size={16} />
                                                            0 credits
                                                        </p>

                                                    </div>

                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ApplyLeave;