import React from 'react'

function PropertyCard({ name, location, price, type, status }) {

    return (
        <div className="rounded-xl bg-white p-5 shadow-md hover:shadow-lg">

            <div className="mb-3 flex items-center justify-between">

                <h2 className="text-xl font-bold text-blue-600">
                    {name}
                </h2>

                <span className={`rounded-full px-3 py-1 text-sm ${
                    status === "Available"
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700"
                }`}>
                    {status}
                </span>

            </div>

            <p className="mb-2 text-gray-600">
                📍 {location}
            </p>

            <p className="mb-2 text-gray-600">
                Property Type: {type}
            </p>

            <p className="text-lg font-bold text-gray-800">
                ₹{price} / month
            </p>

            <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                View Details
            </button>

        </div>
    )
}

export default PropertyCard