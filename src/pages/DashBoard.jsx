import React from 'react'
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

            {/* Dashboard Statistics */}

            <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-3">

                <div className="rounded-xl bg-white p-5 shadow">
                    <h3 className="text-gray-500">Total Properties</h3>
                    <p className="text-3xl font-bold">6</p>
                </div>

                <div className="rounded-xl bg-white p-5 shadow">
                    <h3 className="text-gray-500">Available Properties</h3>
                    <p className="text-3xl font-bold text-green-600">3</p>
                </div>

                <div className="rounded-xl bg-white p-5 shadow">
                    <h3 className="text-gray-500">Rented Properties</h3>
                    <p className="text-3xl font-bold text-orange-500">3</p>
                </div>

            </div>

            {/* Property Listings */}

            <h2 className="mb-4 text-xl font-bold">
                Property Listings
            </h2>

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