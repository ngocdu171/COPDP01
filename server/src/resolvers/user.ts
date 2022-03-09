import { User } from "../entities/User";
import { validateRegisterInput } from "../utils/validateRegisterInput";
import { Arg, Mutation, Resolver } from "type-graphql";
import argon2 from 'argon2'
import { UserMutationResponse } from "../type/UserMutationResponse";
import { RegisterInput } from "../type/RegisterInput";

@Resolver()
export class UserResolver {
    @Mutation(_returns => UserMutationResponse, {nullable: true})
    async register(
        @Arg('registerInput') registerInput: RegisterInput,
    ) {
        const validateRegisterInputErrors = validateRegisterInput(registerInput)
        if(validateRegisterInputErrors !== null)
        return {
            code: 400,
            success: false,
            ...validateRegisterInputErrors
        }
        try {
            const { username, email, password } = registerInput
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