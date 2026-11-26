import React from 'react'

import {
    LayoutDashboard,
    Home,
    Users,
    FileText,
    Settings
} from 'lucide-react'

function Sidebar() {

    const menuItems = [
        { name: "Dashboard", icon: LayoutDashboard },
        { name: "Properties", icon: Home },
        { name: "Tenants", icon: Users },
        { name: "Rental Agreements", icon: FileText },
        { name: "Settings", icon: Settings }
    ]

    return (

        <aside className="hidden min-h-screen w-64 shrink-0 bg-slate-900 p-5 text-white md:block">

            <h2 className="mb-8 text-xl font-bold">
                Management
            </h2>

            {menuItems.map((item) => {

                const Icon = item.icon

                return (

                    <div
                        key={item.name}
                        className="mb-3 flex cursor-pointer items-center gap-3 rounded-lg p-3 hover:bg-slate-700"
                    >

                        <Icon size={20} />

                        <span>{item.name}</span>

                    </div>

                )

            })}

        </aside>

    )
}

export default Sidebar