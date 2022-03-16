import { Field, InputType } from "type-graphql";

@InputType()
export class RegisterInput {
    @Field()
    username: string

    @Field()
    email: string

    @Field()
    admin: boolean

    @Field()
    password: string
}