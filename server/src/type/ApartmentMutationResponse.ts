import { Apartment } from "../entities/Apartment";
import { Field, ObjectType } from "type-graphql";
import { IMutationResponse } from "./MutationResponse";
import { FieldError } from "./FieldError";

@ObjectType({implements: IMutationResponse})
export class ApartmentMutationResponse implements IMutationResponse {
    code: number
    success: boolean;
    message?: string;

    @Field({nullable: true})
    apartment?: Apartment

    @Field(_Type => [FieldError], {nullable: true})
    errors?: FieldError[]
}