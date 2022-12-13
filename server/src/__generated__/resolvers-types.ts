import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ChatRoom = {
  __typename?: 'ChatRoom';
  description: Scalars['String'];
  id: Scalars['String'];
  messages: Array<Message>;
  participants: Array<Author>;
  title: Scalars['String'];
};

export type CreateChatRoomInput = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export type CreateMessageInput = {
  authorName: Scalars['String'];
  roomId: Scalars['ID'];
  text: Scalars['String'];
};

export type JoinChatRoomInput = {
  authorName: Scalars['String'];
  currentRoomId?: InputMaybe<Scalars['ID']>;
  roomIdToJoin: Scalars['ID'];
};

export type Message = {
  __typename?: 'Message';
  authorName: Scalars['String'];
  id: Scalars['String'];
  text: Scalars['String'];
  timestamp: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createChatRoom?: Maybe<ChatRoom>;
  createMessage?: Maybe<Scalars['Boolean']>;
  joinChatRoom?: Maybe<ChatRoom>;
};


export type MutationCreateChatRoomArgs = {
  input?: InputMaybe<CreateChatRoomInput>;
};


export type MutationCreateMessageArgs = {
  input?: InputMaybe<CreateMessageInput>;
};


export type MutationJoinChatRoomArgs = {
  input?: InputMaybe<JoinChatRoomInput>;
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Author: ResolverTypeWrapper<Author>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ChatRoom: ResolverTypeWrapper<ChatRoom>;
  CreateChatRoomInput: CreateChatRoomInput;
  CreateMessageInput: CreateMessageInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  JoinChatRoomInput: JoinChatRoomInput;
  Message: ResolverTypeWrapper<Message>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Author: Author;
  Boolean: Scalars['Boolean'];
  ChatRoom: ChatRoom;
  CreateChatRoomInput: CreateChatRoomInput;
  CreateMessageInput: CreateMessageInput;
  ID: Scalars['ID'];
  JoinChatRoomInput: JoinChatRoomInput;
  Message: Message;
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  Subscription: {};
};

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChatRoomResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChatRoom'] = ResolversParentTypes['ChatRoom']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  messages?: Resolver<Array<ResolversTypes['Message']>, ParentType, ContextType>;
  participants?: Resolver<Array<ResolversTypes['Author']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  authorName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createChatRoom?: Resolver<Maybe<ResolversTypes['ChatRoom']>, ParentType, ContextType, Partial<MutationCreateChatRoomArgs>>;
  createMessage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationCreateMessageArgs>>;
  joinChatRoom?: Resolver<Maybe<ResolversTypes['ChatRoom']>, ParentType, ContextType, Partial<MutationJoinChatRoomArgs>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  chatRoomList?: Resolver<Array<ResolversTypes['ChatRoom']>, ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  chatRoomCreated?: SubscriptionResolver<ResolversTypes['ChatRoom'], "chatRoomCreated", ParentType, ContextType>;
  messageCreated?: SubscriptionResolver<ResolversTypes['Message'], "messageCreated", ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Author?: AuthorResolvers<ContextType>;
  ChatRoom?: ChatRoomResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
};

