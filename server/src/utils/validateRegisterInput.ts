import { RegisterInput } from "../type/RegisterInput";

export const validateRegisterInput = (registerInput: RegisterInput) => {
    if(!registerInput.email.includes('@'))
    return {
        message: 'Invalid email',
        errors: [
            {
                field: 'email',
                message: 'Email must include @ symbol'
            }
        ]
    }

    if(registerInput.username.length <= 5)
    return {
        message: 'Invalid username',
        errors: [
            {
                field: 'username',
                message: 'Length must be greater than 5'
            }
        ]
    }

    if(registerInput.username.includes('@'))
    return {
        message: 'Invalid username',
        errors: [
            {
                field: 'username',
                message: 'Username can not include @'
            }
        ]
    }

    if(registerInput.password.length <= 5)
    return {
        message: 'Invalid password',
        errors: [
            {
                field: 'password',
                message: 'Length must be greater than 5'
            }
        ]
    }

    return null
}