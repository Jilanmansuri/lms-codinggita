import React from 'react'
import Navbar from "../components/Navbar";
export default function StudentDashboard() {

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className='min-h-screen bg-black flex items-center justify-center px-4 text-white'>


            <Navbar/>

        </div>
    )
}