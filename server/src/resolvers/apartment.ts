import { CreateApartmentInput } from "../type/CreateApartmentInput";
import { Arg, Ctx, ID, Mutation, Query, Resolver } from "type-graphql";
import { ApartmentMutationResponse } from "../type/ApartmentMutationResponse";
import { Apartment } from "../entities/Apartment";
import { UpdateApartmentInput } from "../type/UpdateApartmentInput";
import { Context } from "../type/Context";
import { AuthenticationError } from "apollo-server-express";

@Resolver()
export class ApartmentResolver {
    @Query(_return => [Apartment], {nullable: true})
    async apartments() {
        try {
            return Apartment.find()
        } catch (error) {
            console.log(error)
            return null
        }
    }

    @Query(_return => Apartment, {nullable: true})
    async apartment(@Arg('_id', _type => ID) _id: number) {
        try {
            const FindItem = await Apartment.findOne(_id)
            return FindItem
        } catch (error) {
            console.log(error)
            return null
        }
    }

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

    @Mutation(_return => ApartmentMutationResponse)
    async updateApartmentInput(
        @Arg('updateApartmentInput') updateApartmentInput: UpdateApartmentInput
    ) {
        try {
            const {id, name, price, address, floor, vacant, elevator, rooms, year, square, water, balcony, park} = updateApartmentInput
            const FindItem = await Apartment.findOne(id)
            if(!FindItem) {
                return {
                    code: 400,
                    success: false,
                    message: 'Apartment not found'
                }
            }
            FindItem.name = name
            FindItem.price = price
            FindItem.address = address
            FindItem.floor = floor
            FindItem.vacant = vacant
            FindItem.elevator = elevator
            FindItem.rooms = rooms
            FindItem.year = year
            FindItem.square = square
            FindItem.water = water
            FindItem.balcony = balcony
            FindItem.park = park
            await FindItem.save()
            return {
                code: 200,
                success: true,
                message: 'Apartment updated successfully',
                apartment: FindItem
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

    @Mutation(_return => ApartmentMutationResponse)
    async deleteApartment(@Arg('_id', _type => ID) _id: number,
    @Ctx() {req}: Context) {
        if (!req.session.userId)
        throw new AuthenticationError('Not authenticated to do this')
        
        const FindItem = await Apartment.findOne(_id)
        if(!FindItem)
        return {
            code: 400,
            success: false,
            message: 'Apartment not found'
        }

        await Apartment.delete({ id: _id })
        return {
            code: 200,
            success: true,
            message: 'Apartment deleted successfully'
        }
    }
}