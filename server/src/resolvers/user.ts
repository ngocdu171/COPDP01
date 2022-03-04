import { User } from "../entities/User";
import { Arg, Mutation, Resolver } from "type-graphql";
import argon2 from 'argon2'
import { UserMutationResponse } from "../type/UserMutationResponse";

@Resolver()
export class UserResolver {
    @Mutation(_returns => UserMutationResponse, {nullable: true})
    async register(
        @Arg('email') email: string,
        @Arg('username') username: string,
        @Arg('password') password: string
    ) {
        try {
            const existingUsername = await User.findOne({
                where: [{username}, {email}]
            })
            if(existingUsername) 
                return {
                    code: 400,
                    success: false,
                    message: 'Duplicated username or email',
                    errors: [
                        {
                            field: existingUsername.username === username ? 'username' : 'email',
                            message: `${existingUsername.username === username ? 'Username' : 'Email'} already taken`
                        }
                    ]
                }

            const hashPassword = await argon2.hash(password)

            const newUser = User.create({
                username,
                password: hashPassword,
                email
            })
            return {
                code: 200,
                success: true,
                message: 'Registration successful',
                user: await User.save(newUser)
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
}