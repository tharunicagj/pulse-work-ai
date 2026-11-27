import React from 'react'

const PropertyDetails = ({ Name, location, price, propertyType }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{Name}</h3>
      <p>Location: {location}</p>
      <p>Monthly Rent: ₹{price}</p>
      <p>Property Type: {propertyType}</p>
    </div>
  )
}

export default PropertyDetails