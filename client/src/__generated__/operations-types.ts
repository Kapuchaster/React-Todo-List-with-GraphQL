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
};

export type ChatRoom = {
  __typename?: 'ChatRoom';
  description: Scalars['String'];
  id: Scalars['String'];
  messages: Array<Message>;
  title: Scalars['String'];
};

export type CreateChatRoomInput = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export type CreateMessageInput = {
  author: Scalars['String'];
  text: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  author: Scalars['String'];
  id: Scalars['String'];
  text: Scalars['String'];
  timestamp: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createChatRoom: ChatRoom;
  createMessage: Scalars['Boolean'];
};


export type MutationCreateChatRoomArgs = {
  input?: InputMaybe<CreateChatRoomInput>;
};


export type MutationCreateMessageArgs = {
  input?: InputMaybe<CreateMessageInput>;
};

export type Query = {
  __typename?: 'Query';
  chatRoomList: Array<ChatRoom>;
};

export type Subscription = {
  __typename?: 'Subscription';
  chatRoomCreated: ChatRoom;
  messageCreated: Message;
};

export type CreateChatRoomMutationVariables = Exact<{
  input?: InputMaybe<CreateChatRoomInput>;
}>;


export type CreateChatRoomMutation = { __typename?: 'Mutation', createChatRoom: { __typename?: 'ChatRoom', id: string, title: string, description: string } };

export type CreateMessageMutationVariables = Exact<{
  input?: InputMaybe<CreateMessageInput>;
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: boolean };

export type GetChatRoomListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChatRoomListQuery = { __typename?: 'Query', chatRoomList: Array<{ __typename?: 'ChatRoom', id: string, title: string, description: string, messages: Array<{ __typename?: 'Message', id: string, author: string, text: string, timestamp: string }> }> };

export type ChatRoomSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ChatRoomSubscription = { __typename?: 'Subscription', chatRoomCreated: { __typename?: 'ChatRoom', id: string, title: string, description: string, messages: Array<{ __typename?: 'Message', id: string, author: string, text: string, timestamp: string }> } };

export type MessageSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MessageSubscription = { __typename?: 'Subscription', messageCreated: { __typename?: 'Message', id: string, author: string, text: string, timestamp: string } };


export const CreateChatRoomDocument = gql`
    mutation CreateChatRoom($input: CreateChatRoomInput) {
  createChatRoom(input: $input) {
    id
    title
    description
  }
}
    `;
export type CreateChatRoomMutationFn = Apollo.MutationFunction<CreateChatRoomMutation, CreateChatRoomMutationVariables>;

/**
 * __useCreateChatRoomMutation__
 *
 * To run a mutation, you first call `useCreateChatRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatRoomMutation, { data, loading, error }] = useCreateChatRoomMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateChatRoomMutation(baseOptions?: Apollo.MutationHookOptions<CreateChatRoomMutation, CreateChatRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChatRoomMutation, CreateChatRoomMutationVariables>(CreateChatRoomDocument, options);
      }
export type CreateChatRoomMutationHookResult = ReturnType<typeof useCreateChatRoomMutation>;
export type CreateChatRoomMutationResult = Apollo.MutationResult<CreateChatRoomMutation>;
export type CreateChatRoomMutationOptions = Apollo.BaseMutationOptions<CreateChatRoomMutation, CreateChatRoomMutationVariables>;
export const CreateMessageDocument = gql`
    mutation CreateMessage($input: CreateMessageInput) {
  createMessage(input: $input)
}
    `;
export type CreateMessageMutationFn = Apollo.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, options);
      }
export type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export const GetChatRoomListDocument = gql`
    query GetChatRoomList {
  chatRoomList {
    id
    title
    description
    messages {
      id
      author
      text
      timestamp
    }
  }
}
    `;

/**
 * __useGetChatRoomListQuery__
 *
 * To run a query within a React component, call `useGetChatRoomListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatRoomListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatRoomListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChatRoomListQuery(baseOptions?: Apollo.QueryHookOptions<GetChatRoomListQuery, GetChatRoomListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChatRoomListQuery, GetChatRoomListQueryVariables>(GetChatRoomListDocument, options);
      }
export function useGetChatRoomListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChatRoomListQuery, GetChatRoomListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChatRoomListQuery, GetChatRoomListQueryVariables>(GetChatRoomListDocument, options);
        }
export type GetChatRoomListQueryHookResult = ReturnType<typeof useGetChatRoomListQuery>;
export type GetChatRoomListLazyQueryHookResult = ReturnType<typeof useGetChatRoomListLazyQuery>;
export type GetChatRoomListQueryResult = Apollo.QueryResult<GetChatRoomListQuery, GetChatRoomListQueryVariables>;
export const ChatRoomDocument = gql`
    subscription ChatRoom {
  chatRoomCreated {
    id
    title
    description
    messages {
      id
      author
      text
      timestamp
    }
  }
}
    `;

/**
 * __useChatRoomSubscription__
 *
 * To run a query within a React component, call `useChatRoomSubscription` and pass it any options that fit your needs.
 * When your component renders, `useChatRoomSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatRoomSubscription({
 *   variables: {
 *   },
 * });
 */
export function useChatRoomSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ChatRoomSubscription, ChatRoomSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ChatRoomSubscription, ChatRoomSubscriptionVariables>(ChatRoomDocument, options);
      }
export type ChatRoomSubscriptionHookResult = ReturnType<typeof useChatRoomSubscription>;
export type ChatRoomSubscriptionResult = Apollo.SubscriptionResult<ChatRoomSubscription>;
export const MessageDocument = gql`
    subscription Message {
  messageCreated {
    id
    author
    text
    timestamp
  }
}
    `;

/**
 * __useMessageSubscription__
 *
 * To run a query within a React component, call `useMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageSubscription({
 *   variables: {
 *   },
 * });
 */
export function useMessageSubscription(baseOptions?: Apollo.SubscriptionHookOptions<MessageSubscription, MessageSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MessageSubscription, MessageSubscriptionVariables>(MessageDocument, options);
      }
export type MessageSubscriptionHookResult = ReturnType<typeof useMessageSubscription>;
export type MessageSubscriptionResult = Apollo.SubscriptionResult<MessageSubscription>;