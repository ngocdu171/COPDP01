import { CreateApartmentInput } from "../type/CreateApartmentInput";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { ApartmentMutationResponse } from "../type/ApartmentMutationResponse";
import { Apartment } from "../entities/Apartment";

@Resolver()
export class ApartmentResolver {
    @Mutation(_return => ApartmentMutationResponse)
    async createApartment (@Arg('createApartmentInput') createApartmentInput: CreateApartmentInput) {
       try {
           const { name, price, address, floor, vacant, elevator, rooms, year, square, water, balcony, park } = createApartmentInput
           const newApartment = Apartment.create({
            name, price, address, floor, vacant, elevator, rooms, year, square, water, balcony, park
           })
    
           await newApartment.save()
           return {
            code: 200,
            success: true,
            message: 'Apartment created successfully',
            apartment: newApartment
        }
       } catch (error) {
           console.log(error)
           return {
            code: 500,
            success: false,
            message: `Internal server error ${error.message}`,
        }
       }
   }

   @Query(_return => [Apartment])
   async apartment() {
      return Apartment.find()
    }
}