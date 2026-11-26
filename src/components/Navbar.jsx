import React from 'react'
import { Search, Bell, User } from 'lucide-react'

function Navbar() {

    return (

        <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">

            <h1 className="text-2xl font-bold text-blue-600">
                RentEasy
            </h1>

            <div className="flex items-center gap-5">

                <div className="flex items-center rounded-lg bg-gray-100 px-3 py-2">
                    <Search size={18} />

                    <input
                        type="text"
                        placeholder="Search properties..."
                        className="ml-2 w-32 bg-transparent outline-none sm:w-auto"
                    />
                </div>

                <Bell className="cursor-pointer text-gray-600" />

                <div className="flex items-center gap-2">
                    <User />
                    <span className="hidden font-medium sm:block">
                        Admin
                    </span>
                </div>

            </div>

        </nav>

    )
}

export default Navbar