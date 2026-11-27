
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  return (
    <div className="w-58 h-100 bg-gray-200 p-5 flex flex-col">
      <h2 className="font-bold">Menu</h2>

      <Link to="/" className="mt-3">Dashboard</Link>
      <Link to="/about" className="mt-3">About</Link>
      <Link to="/properties" className="mt-3">Properties</Link>
      <Link to="/add-property" className="mt-3">Add Property</Link>
      <Link to="/tenants" className="mt-3">Tenants</Link>
      <Link to="/setting" className="mt-3">Settings</Link>

    </div>
  )
}

export default Sidebar