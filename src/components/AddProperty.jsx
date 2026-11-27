import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import propertySchema from '../lib/PropertySchema'

const AddProperty = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(propertySchema)
  })

  const submit = (data) => {
    console.log(data)

    alert("Property added successfully!")

    reset()
  }

  return (
    <div className="p-6 w-full">

      <h1 className="text-2xl font-bold mb-5">
        Add New Property
      </h1>

      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col gap-4"
      >

        {/* Property Name */}
        <div>
          <label className="font-semibold">
            Property Name
          </label>

          <input
            type="text"
            {...register("Name")}
            placeholder="Enter property name"
            className="border p-2 w-full rounded"
          />

          <p className="text-red-500">
            {errors.Name?.message}
          </p>
        </div>

        {/* Location */}
        <div>
          <label className="font-semibold">
            Location
          </label>

          <input
            type="text"
            {...register("location")}
            placeholder="Enter location"
            className="border p-2 w-full rounded"
          />

          <p className="text-red-500">
            {errors.location?.message}
          </p>
        </div>

        {/* Monthly Rent */}
        <div>
          <label className="font-semibold">
            Monthly Rent
          </label>

          <input
            type="number"
            {...register("price")}
            placeholder="Enter monthly rent"
            className="border p-2 w-full rounded"
          />

          <p className="text-red-500">
            {errors.price?.message}
          </p>
        </div>

        {/* Property Type */}
        <div>
          <label className="font-semibold">
            Property Type
          </label>

          <select
            {...register("propertyType")}
            className="border p-2 w-full rounded"
          >
            <option value="">Select property type</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
            <option value="Commercial">Commercial</option>
          </select>

          <p className="text-red-500">
            {errors.propertyType?.message}
          </p>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Property
        </button>

      </form>

    </div>
  )
}

export default AddProperty