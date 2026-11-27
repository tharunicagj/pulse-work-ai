import { useForm } from 'react-hook-form'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import propertySchema from '../lib/propertySchema'

const PropertyForm = ({ addOn }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(propertySchema)
  })

  const submit = (data) => {
    addOn(data)
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>

        <input {...register("Name")} placeholder="Enter property name" />
        <p>{errors.Name?.message}</p>

        <input {...register("location")} placeholder="Enter location" />
        <p>{errors.location?.message}</p>

        <input {...register("price")} type="number" placeholder="Enter monthly rent" />
        <p>{errors.price?.message}</p>

        <select {...register("propertyType")}>
          <option value="">Select property type</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Villa">Villa</option>
          <option value="Commercial">Commercial</option>
        </select>
        <p>{errors.propertyType?.message}</p>

        <button type="submit">Add Property</button>

      </form>
    </div>
  )
}

export default PropertyForm