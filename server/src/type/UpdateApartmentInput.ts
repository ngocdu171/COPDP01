import { Field, ID, InputType } from "type-graphql";

@InputType()
export class UpdateApartmentInput {
    @Field(_type => ID)
    id: number

    @Field()
    name: string

    @Field()
    price: number

    @Field()
    address: string

    @Field()
    floor: string

    @Field()
    vacant: boolean

    @Field()
    elevator: boolean

    @Field()
    rooms: string

    @Field()
    year: number

    @Field()
    square: string

    @Field()
    water: number

    @Field()
    balcony: string

    @Field()
    park: number
}