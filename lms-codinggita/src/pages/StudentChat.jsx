import React from 'react'
import Navbar from '../components/Navbar'
export default function StudentChat() {
    return (
        <div className="min-h-screen pt-20 bg-neutral-950 text-white">
            <Navbar />
            <div className="mx-auto  px-6 pb-8 max-w-6xl  sm:px-6 lg:px-2 space-y-7">
                <div>
                    <h1 className='font-bold text-3xl mb-1'>Chat Groups</h1>
                    <p className='text-neutral-400 text-sm'>Groups assigned to you and universal groups.</p>
                </div>

                <div>
                    <p className='text-neutral-400'>No groups assigned to you yet.</p>
                </div>
            </div>
        </div>
    )
}
