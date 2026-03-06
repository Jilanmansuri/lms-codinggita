import React from "react";

function Card() {
  return (
    <div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">

        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">
            Role-based dashboards
          </h3>
          <p className="text-gray-400 text-sm">
            Admin, Mentor, and Student experiences tailored to their needs.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">
            Fast and secure access
          </h3>
          <p className="text-gray-400 text-sm">
            Encrypted sessions and streamlined navigation.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Card;