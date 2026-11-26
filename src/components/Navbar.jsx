import React from 'react'

function Navbar() {

    return (
        <nav className="flex items-center justify-between bg-white p-4 shadow">

            <h1 className="text-2xl font-bold text-blue-600">
                RentEasy
            </h1>

            <div className="flex items-center gap-4">

                <input
                    type="text"
                    placeholder="Search..."
                    className="w-32 rounded-lg border p-2 sm:w-48"
                />

                <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
                    Admin
                </button>

            </div>

        </nav>
    )
}

export default Navbar