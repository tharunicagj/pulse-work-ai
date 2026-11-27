import { z } from "zod";

const propertySchema = z.object({

  Name: z.string()
    .min(3, "Property name must contain at least 3 characters"),

  location: z.string()
    .min(3, "Location is required"),

  price: z.coerce.number()
    .positive("Rent must be greater than zero"),

  propertyType: z.string()
    .min(1, "Please select a property type")

});

export default propertySchema;