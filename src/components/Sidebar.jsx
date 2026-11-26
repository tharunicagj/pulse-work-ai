
import React from 'react'

function Sidebar() {

    return (
        <div className="min-h-screen w-56 bg-gray-800 p-5 text-white">

            <h2 className="mb-6 text-xl font-bold">
                Menu
            </h2>

            <ul className="space-y-4">

                <li className="cursor-pointer rounded-lg p-3 hover:bg-gray-700">
                    Dashboard
                </li>

                <li className="cursor-pointer rounded-lg p-3 hover:bg-gray-700">
                    Properties
                </li>

                <li className="cursor-pointer rounded-lg p-3 hover:bg-gray-700">
                    Tenants
                </li>

                <li className="cursor-pointer rounded-lg p-3 hover:bg-gray-700">
                    Rental Agreements
                </li>

                <li className="cursor-pointer rounded-lg p-3 hover:bg-gray-700">
                    Settings
                </li>

            </ul>

        </div>
    )
}

export default Sidebar