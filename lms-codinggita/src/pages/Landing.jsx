import React from "react";
import Card from '../components/Featurecard';
function Landing() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

            {/* Heading */}
            <div className="text-center mb-16">
                <h1 className="text-6xl font-bold">
                    Coding <br /><span className="text-gray-400">Gita</span>
                </h1>

                <p className="text-gray-400 mt-4 text-lg">
                    Smart, simple, and reliable attendance for modern classrooms.
                </p>

                <button className="mt-6 bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200">
                    Login
                </button>
            </div>
            {/* card */}

            <Card />
          

        </div>
    )
}

export default Landing;