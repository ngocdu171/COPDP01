import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Apartment = {
  __typename?: 'Apartment';
  address: Scalars['String'];
  balcony: Scalars['String'];
  createdAt: Scalars['DateTime'];
  elevator: Scalars['Boolean'];
  floor: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  park: Scalars['Float'];
  price: Scalars['Float'];
  rooms: Scalars['String'];
  square: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  vacant: Scalars['Boolean'];
  water: Scalars['Float'];
  year: Scalars['Float'];
};

export type ApartmentMutationResponse = IMutationResponse & {
  __typename?: 'ApartmentMutationResponse';
  apartment?: Maybe<Apartment>;
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
};

export type CreateApartmentInput = {
  address: Scalars['String'];
  balcony: Scalars['String'];
  elevator: Scalars['Boolean'];
  floor: Scalars['String'];
  name: Scalars['String'];
  park: Scalars['Float'];
  price: Scalars['Float'];
  rooms: Scalars['String'];
  square: Scalars['String'];
  vacant: Scalars['Boolean'];
  water: Scalars['Float'];
  year: Scalars['Float'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
};

export type IMutationResponse = {
  code: Scalars['Float'];
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type LoginInput = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserMutationResponse;
  createApartment: ApartmentMutationResponse;
  deleteApartment: ApartmentMutationResponse;
  forgotPassword: Scalars['Boolean'];
  login: UserMutationResponse;
  logout: Scalars['Boolean'];
  register?: Maybe<UserMutationResponse>;
  updateApartment: ApartmentMutationResponse;
};


export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
  token: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationCreateApartmentArgs = {
  createApartmentInput: CreateApartmentInput;
};


export type MutationDeleteApartmentArgs = {
  _id: Scalars['ID'];
};


export type MutationForgotPasswordArgs = {
  forgotPasswordInput: ForgotPasswordInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationUpdateApartmentArgs = {
  updateApartmentInput: UpdateApartmentInput;
};

export type Query = {
  __typename?: 'Query';
  apartment?: Maybe<Apartment>;
  apartments?: Maybe<Array<Apartment>>;
  checklogin?: Maybe<Tb_User>;
};


export type QueryApartmentArgs = {
  id: Scalars['ID'];
};

export type RegisterInput = {
  admin: Scalars['Boolean'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Tb_User = {
  __typename?: 'Tb_user';
  admin: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UpdateApartmentInput = {
  address: Scalars['String'];
  balcony: Scalars['String'];
  elevator: Scalars['Boolean'];
  floor: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  park: Scalars['Float'];
  price: Scalars['Float'];
  rooms: Scalars['String'];
  square: Scalars['String'];
  vacant: Scalars['Boolean'];
  water: Scalars['Float'];
  year: Scalars['Float'];
};

export type UserMutationResponse = IMutationResponse & {
  __typename?: 'UserMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  user?: Maybe<Tb_User>;
};

export type ChangePasswordMutationVariables = Exact<{
  userId: Scalars['String'];
  token: Scalars['String'];
  changePasswordInput: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null, user?: { __typename?: 'Tb_user', username: string } | null } };

export type ForgotPasswordMutationVariables = Exact<{
  forgotPasswordInput: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null, user?: { __typename?: 'Tb_user', id: string, username: string, email: string, admin: boolean } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  registerInput: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null, user?: { __typename?: 'Tb_user', id: string, username: string, email: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } | null };

export type GetallApartmentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetallApartmentQuery = { __typename?: 'Query', apartments?: Array<{ __typename?: 'Apartment', id: string, name: string, price: number, address: string, floor: string, vacant: boolean, elevator: boolean, rooms: string, year: number, square: string, water: number, balcony: string, park: number, createdAt: any, updatedAt: any }> | null };

export type CheckLoginQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckLoginQuery = { __typename?: 'Query', checklogin?: { __typename?: 'Tb_user', id: string, username: string, email: string } | null };


export const ChangePasswordDocument = gql`
    mutation ChangePassword($userId: String!, $token: String!, $changePasswordInput: ChangePasswordInput!) {
  changePassword(
    userId: $userId
    token: $token
    changePasswordInput: $changePasswordInput
  ) {
    code
    success
    message
    user {
      username
    }
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      token: // value for 'token'
 *      changePasswordInput: // value for 'changePasswordInput'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($forgotPasswordInput: ForgotPasswordInput!) {
  forgotPassword(forgotPasswordInput: $forgotPasswordInput)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      forgotPasswordInput: // value for 'forgotPasswordInput'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    code
    success
    message
    user {
      id
      username
      email
      admin
    }
    errors {
      field
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($registerInput: RegisterInput!) {
  register(registerInput: $registerInput) {
    code
    success
    message
    user {
      id
      username
      email
    }
    errors {
      field
      message
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      registerInput: // value for 'registerInput'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetallApartmentDocument = gql`
    query GetallApartment {
  apartments {
    id
    name
    price
    address
    floor
    vacant
    elevator
    rooms
    year
    square
    water
    balcony
    park
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetallApartmentQuery__
 *
 * To run a query within a React component, call `useGetallApartmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetallApartmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetallApartmentQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetallApartmentQuery(baseOptions?: Apollo.QueryHookOptions<GetallApartmentQuery, GetallApartmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetallApartmentQuery, GetallApartmentQueryVariables>(GetallApartmentDocument, options);
      }
export function useGetallApartmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetallApartmentQuery, GetallApartmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetallApartmentQuery, GetallApartmentQueryVariables>(GetallApartmentDocument, options);
        }
export type GetallApartmentQueryHookResult = ReturnType<typeof useGetallApartmentQuery>;
export type GetallApartmentLazyQueryHookResult = ReturnType<typeof useGetallApartmentLazyQuery>;
export type GetallApartmentQueryResult = Apollo.QueryResult<GetallApartmentQuery, GetallApartmentQueryVariables>;
export const CheckLoginDocument = gql`
    query CheckLogin {
  checklogin {
    id
    username
    email
  }
}
    `;

/**
 * __useCheckLoginQuery__
 *
 * To run a query within a React component, call `useCheckLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckLoginQuery({
 *   variables: {
 *   },
 * });
 */
export function useCheckLoginQuery(baseOptions?: Apollo.QueryHookOptions<CheckLoginQuery, CheckLoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckLoginQuery, CheckLoginQueryVariables>(CheckLoginDocument, options);
      }
export function useCheckLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckLoginQuery, CheckLoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckLoginQuery, CheckLoginQueryVariables>(CheckLoginDocument, options);
        }
export type CheckLoginQueryHookResult = ReturnType<typeof useCheckLoginQuery>;
export type CheckLoginLazyQueryHookResult = ReturnType<typeof useCheckLoginLazyQuery>;
export type CheckLoginQueryResult = Apollo.QueryResult<CheckLoginQuery, CheckLoginQueryVariables>;