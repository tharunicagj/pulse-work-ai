import React from 'react'

function PropertyCard(props) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">
        {props.Name}
      </h2>

      <p className="mt-2 text-3xl text-blue-600">
        ₹{props.price}
      </p>
    </div>
  )
}

export default PropertyCard