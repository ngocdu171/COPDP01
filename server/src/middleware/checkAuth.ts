import { Context } from "../type/Context";
import { MiddlewareFn } from "type-graphql";
import { AuthenticationError } from "apollo-server-express";

export const checkAuth: MiddlewareFn<Context> = ({ context: {req} }, next) => {
    if(!req.session.userId)
    throw new AuthenticationError('Not authentication to perform GraphQL operation')

    return next()
};

export const checkAdmin: MiddlewareFn<Context> = ({ context: {req} }, next) => {
  if(!req.session.userAdmin)
  throw new AuthenticationError('Not authentication to perform GraphQL operation')

  return next()
};