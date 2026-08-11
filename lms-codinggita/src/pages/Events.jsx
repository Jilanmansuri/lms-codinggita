import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom"



export default function Events() {
    return (
        <div className="min-h-screen pt-20 bg-neutral-950 text-white">
            <Navbar />
            <div className="mx-auto pb-10 max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-2xl font-semibold">Events</h1>

                    </div>

                    <Link
                        to="/student"
                        className="text-sm text-blue-400 hover:text-blue-300"
                    >
                        ← Back to Dashboard
                    </Link>
                </div>


                <div className="rounded-xl border border-neutral-800 bg-neutral-900 mb-6">
                    <div className="p-4 border-b border-neutral-800 ">
                        <div className="text-white font-semibold">Ongoing</div>
                    </div>
                    <div className="p-4 ">
                        <div className="text-neutral-400 text-sm">No ongoing events.</div>
                    </div>
                </div>


                <div className="rounded-xl border border-neutral-800 bg-neutral-900 mb-6">
                    <div className="p-4 border-b border-neutral-800 ">
                        <div className="text-white font-semibold">Upcoming</div>
                    </div>
                    <div className="p-4 ">
                        <div className="text-neutral-400 text-sm">No Upcoming events.</div>
                    </div>
                </div>


                <div className="rounded-xl border border-neutral-800 bg-neutral-900 mb-6">
                    <div className="p-4 border-b border-neutral-800 ">
                        <div className="text-white font-semibold">Past</div>
                    </div>
                    <div className="p-4 ">
                        <div className="text-neutral-400 text-sm p-0.5 ">

                            <div className=" max-w-1/3 rounded-xl border border-neutral-700 bg-neutral-800 p-4">
                                <h2 className="text-lg font-medium text-neutral-100 hover:underline">Diwali Vacation</h2>
                                <p className="text-xs mt-1">18/10/2025 - 26/10/2025</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}
