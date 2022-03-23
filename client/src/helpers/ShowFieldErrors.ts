import { FieldError } from "../generated/graphql";

export const ShowFieldErrors = (errors: FieldError[]) => {
    return errors.reduce((accumulatedErrorsObj, error) => {
        return {
            ...accumulatedErrorsObj,
            [error.field]: error.message
        }
    },{})
}