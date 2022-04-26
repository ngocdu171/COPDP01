import { Field, ObjectType } from "type-graphql";
import { Apartment } from "../entities/Apartments";

@ObjectType()
export class PaginatedApartments {
    @Field()
    totalCount!: number

    @Field(_type => Date)
    cursor!: Date

    @Field()
    hasMore!: boolean

    @Field(_type => [Apartment])
    paginatedApartments!: Apartment[]
}