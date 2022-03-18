import { Field, ObjectType } from "type-graphql";
import { IMutationResponse } from "./MutationResponse";
import { FieldError } from "./FieldError";
import { Tb_user } from "../entities/Users";

@ObjectType({implements: IMutationResponse})
export class UserMutationResponse implements IMutationResponse {
    code: number
    success: boolean;
    message?: string;

    @Field({nullable: true})
    user?: Tb_user

    @Field(_type => [FieldError], {nullable:true})
    errors?: FieldError[]
}