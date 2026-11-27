import React from 'react'

const Properties = ({ properties }) => {

  return (
    <div className="p-6 w-full">

      <h1 className="text-2xl font-bold mb-5">
        Available Properties
      </h1>

      {properties.length === 0 ? (
        <p>No properties added yet.</p>
      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {properties.map((property, index) => (

            <div key={index} className="bg-white p-5 rounded-lg shadow-md">

              <h2 className="text-xl font-bold">
                {property.Name}
              </h2>

              <p>Location: {property.location}</p>

              <p>Monthly Rent: ₹{property.price}</p>

              <p>Property Type: {property.propertyType}</p>

            </div>

          ))}

        </div>

      )}

    </div>
  )
}

export default Properties