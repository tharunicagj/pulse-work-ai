import React from 'react'
import { useState, useEffect } from 'react'

const UserInput = () => {
  const [Name, SetName] = useState("")

  useEffect(() => {
    console.log("Property name changing:", Name)
  }, [Name])

  return (
    <div>
      <h3>Property Input</h3>

      <input
        type="text"
        value={Name}
        placeholder="Enter property name"
        onChange={(t) => {
          SetName(t.target.value)
        }}
      />

      <p>Property Name: {Name}</p>
    </div>
  )
}

export default UserInput