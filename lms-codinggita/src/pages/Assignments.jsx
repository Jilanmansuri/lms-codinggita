import React from 'react'
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

export default function Assignments() {
    return (
        <div className="min-h-screen pt-20 bg-neutral-950 text-white">
            <Navbar />
            <div className="mx-auto pb-10 max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">

                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-2xl font-semibold">Assignments</h1>
                        <p className="text-sm text-gray-400">
                            Search, filter and sort your assignments.
                        </p>
                    </div>

                    <NavLink
                        to="/student"
                        className="text-sm text-blue-400 hover:text-blue-300"
                    >
                        ← Back to Dashboard
                    </NavLink>
                </div>

                {/* Filters */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex flex-wrap gap-4 mb-6">

                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search by heading"
                        className="flex-1 min-w-[200px] bg-black border border-neutral-700 rounded px-3 py-2 text-sm outline-none focus:border-blue-500"
                    />

                    {/* Filter Dropdown */}
                    <select className="bg-black border border-neutral-700 rounded px-3 py-2 text-sm">
                        <option>All</option>
                        <option>Completed</option>
                        <option>Pending</option>
                    </select>

                    {/* Sort */}
                    <select className="bg-black border border-neutral-700 rounded px-3 py-2 text-sm">
                        <option>Sort by deadline</option>
                        <option>Sort by name</option>
                    </select>

                    {/* Order */}
                    <select className="bg-black border border-neutral-700 rounded px-3 py-2 text-sm">
                        <option>Asc</option>
                        <option>Desc</option>
                    </select>
                </div>

                {/* Assignments List */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                    <h2 className="text-lg font-medium mb-4">All Assignments</h2>

                    {/* Empty State */}
                    <p className="text-gray-400 text-sm">
                        No assignments found.
                    </p>
                </div>
            </div>
        </div>
    )
}
