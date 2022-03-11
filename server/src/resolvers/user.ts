import { User } from "../entities/User";
import { validateRegisterInput } from "../utils/validateRegisterInput";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import argon2 from 'argon2'
import { UserMutationResponse } from "../type/UserMutationResponse";
import { RegisterInput } from "../type/RegisterInput";
import { LoginInput } from "../type/LoginInput";
import { Context } from "../type/Context";
import { COOKIE_NAME } from "../constants";

@Resolver()
export class UserResolver {
    @Mutation(_returns => UserMutationResponse, {nullable: true})
    async register(
        @Arg('registerInput') registerInput: RegisterInput,
        @Ctx() {req} :Context
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

            let newUser = User.create({
                username,
                password: hashPassword,
                email
            })

            newUser = await User.save(newUser)

            req.session.userId = newUser.id
            
            return {
                code: 200,
                success: true,
                message: 'Registration successful',
                user: newUser
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

    @Mutation(_return => UserMutationResponse)
    async login(
        @Arg('loginInput') loginInput: LoginInput,
        @Ctx() {req}: Context
    ) {
        try {
            const existingUser = await User.findOne(loginInput.usernameOrEmail.includes('@') ? {email: loginInput.usernameOrEmail} : {username: loginInput.usernameOrEmail})
            if(!existingUser)
            return {
                code: 400,
                success: false,
                message: 'User not found',
                errors: [{
                    field: 'usernameOrEmail',
                    message: 'Username or Email incorrect'
                }]
            }
            const passwordValid = await argon2.verify(existingUser.password, loginInput.password)
            if(!passwordValid)
            return {
                code: 400,
                success: false,
                message: 'Wrong password',
                errors: [{
                    field: 'password',
                    message: ' Wrong password'
                }]
            }

            //create session and return cookie
            req.session.userId = existingUser.id

            return {
                code: 200,
                success: true,
                message: 'Login successfully',
                user : existingUser
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

    @Mutation(_return => Boolean)
    logout(@Ctx() {req, res}: Context) {
        return new Promise((resolve, _reject) => {
            res.clearCookie(COOKIE_NAME)
            req.session.destroy(error => {
                if (error) {
                    console.log('Destroying session error: ', error);
                    resolve(false)
                }
                resolve(true)
            })
        })
    }
    
}