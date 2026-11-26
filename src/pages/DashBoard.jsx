import React, { useState, useEffect } from 'react'
import PropertyCard from '../components/PropertyCard'

function Dashboard() {

    const [properties, setProperties] = useState([
        {
            id: 1,
            name: "Luxury Apartment",
            location: "Coimbatore",
            price: "15000",
            type: "Apartment",
            status: "Available"
        },
        {
            id: 2,
            name: "Family House",
            location: "Pollachi",
            price: "12000",
            type: "Independent House",
            status: "Rented"
        },
        {
            id: 3,
            name: "Modern Villa",
            location: "Chennai",
            price: "25000",
            type: "Villa",
            status: "Available"
        },
        {
            id: 4,
            name: "2BHK Apartment",
            location: "Tiruppur",
            price: "10000",
            type: "Apartment",
            status: "Rented"
        }
    ])

    const [search, setSearch] = useState("")

    // useEffect Hook
    useEffect(() => {
        document.title = "RentEasy Dashboard"
        console.log("RentEasy Dashboard Loaded")
    }, [])

    // Add Property Function
    function addProperty() {

        const newProperty = {
            id: Date.now(),
            name: "New Property",
            location: "Coimbatore",
            price: "12000",
            type: "Apartment",
            status: "Available"
        }

        setProperties([...properties, newProperty])
    }

    // Search Function
    const filteredProperties = properties.filter((property) =>
        property.name.toLowerCase().includes(search.toLowerCase()) ||
        property.location.toLowerCase().includes(search.toLowerCase())
    )

    const availableProperties = properties.filter(
        (property) => property.status === "Available"
    ).length

    const rentedProperties = properties.filter(
        (property) => property.status === "Rented"
    ).length

    return (

        <div className="flex-1 bg-gray-100 p-6">

            <h2 className="mb-2 text-2xl font-bold">
                RentEasy Dashboard
            </h2>

            <p className="mb-6 text-gray-500">
                Manage your rental properties easily.
            </p>

            {/* Statistics */}

            <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-3">

                <div className="rounded-xl bg-white p-5 shadow">
                    <h3>Total Properties</h3>
                    <p className="text-3xl font-bold">
                        {properties.length}
                    </p>
                </div>

                <div className="rounded-xl bg-white p-5 shadow">
                    <h3>Available Properties</h3>
                    <p className="text-3xl font-bold text-green-600">
                        {availableProperties}
                    </p>
                </div>

                <div className="rounded-xl bg-white p-5 shadow">
                    <h3>Rented Properties</h3>
                    <p className="text-3xl font-bold text-orange-500">
                        {rentedProperties}
                    </p>
                </div>

            </div>

            {/* Search */}

            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

                <h2 className="text-xl font-bold">
                    Property Listings
                </h2>

                <input
                    type="text"
                    placeholder="Search properties..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="rounded-lg border bg-white p-2"
                />

            </div>

            {/* Add Property */}

            <button
                onClick={addProperty}
                className="mb-5 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
                + Add Property
            </button>

            {/* Property Cards */}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                {filteredProperties.length > 0 ? (

                    filteredProperties.map((property) => (

                        <PropertyCard
                            key={property.id}
                            name={property.name}
                            location={property.location}
                            price={property.price}
                            type={property.type}
                            status={property.status}
                        />

                    ))

                ) : (

                    <p>No properties found.</p>

                )}

            </div>

        </div>
    )
}

export default Dashboard






/*import React from 'react'
import PropertyCard from '../components/PropertyCard'

function Dashboard() {

    return (
        <div className="flex-1 bg-gray-100 p-6">

            <h2 className="mb-2 text-2xl font-bold">
                RentEasy Dashboard
            </h2>

            <p className="mb-6 text-gray-500">
                Manage your rental properties easily.
            </p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                <PropertyCard
                    name="Luxury Apartment"
                    location="Coimbatore"
                    price="15000"
                    type="Apartment"
                    status="Available"
                />

                <PropertyCard
                    name="Family House"
                    location="Pollachi"
                    price="12000"
                    type="Independent House"
                    status="Rented"
                />

                <PropertyCard
                    name="Modern Villa"
                    location="Chennai"
                    price="25000"
                    type="Villa"
                    status="Available"
                />

                <PropertyCard
                    name="2BHK Apartment"
                    location="Tiruppur"
                    price="10000"
                    type="Apartment"
                    status="Rented"
                />

                <PropertyCard
                    name="Premium House"
                    location="Erode"
                    price="18000"
                    type="Independent House"
                    status="Available"
                />

                <PropertyCard
                    name="Studio Apartment"
                    location="Coimbatore"
                    price="8000"
                    type="Studio"
                    status="Rented"
                />

            </div>

        </div>
    )
}

export default Dashboard*/