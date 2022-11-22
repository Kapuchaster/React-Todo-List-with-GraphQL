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
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  chatRoomList: Array<ChatRoom>;
};

export type Subscription = {
  __typename?: 'Subscription';
  postCreated?: Maybe<Scalars['String']>;
};

export type GetChatRoomListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChatRoomListQuery = { __typename?: 'Query', chatRoomList: Array<{ __typename?: 'ChatRoom', id: string, title: string, description: string }> };

export type ChatRoomSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ChatRoomSubscription = { __typename?: 'Subscription', postCreated?: string | null };


export const GetChatRoomListDocument = gql`
    query GetChatRoomList {
  chatRoomList {
    id
    title
    description
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
  postCreated
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