
    import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-blue-500 text-2xl p-4 text-white">

      <h1 className="text-xl font-bold">RentEasy - Property Rental Management</h1>

      <h1 className="text-xl font-bold">Welcome to the New Owner</h1>

      <Link to="/" className="mt-3 p-4">DashBoard</Link>

      <Link to="/about" className="mt-3 p-4">About</Link>

      <Link to="/properties" className="mt-3 p-4">Properties</Link>

      <Link to="/add-property" className="mt-3 p-4">Add Property</Link>

      <Link to="/tenants" className="mt-3 p-4">Tenants</Link>

      <Link to="/setting" className="mt-3 p-4">Settings</Link>

    </nav>
  )
}

export default Navbar