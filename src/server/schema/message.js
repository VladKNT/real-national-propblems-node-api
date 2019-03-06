import { gql } from 'apollo-server-express';

export default gql `
  type Message {
    id: ID!
    message: String!
    owner: User!
    deleted: Boolean!
    deletedForAll: Boolean!
    edited: Boolean!
    createdAt: String!
    updatedAt: String!
  }
  
  type Query {
    messages(chatId: ID!): [Message!]
  }
  
  type Mutation {
    sendMessage(message: String!, chatId: ID!): Message!
    updateMessage(id: ID!, message: String!): Message!
    deleteMessage(id: ID!, deletedForAll: Boolean): Boolean!
  }
  
  type Subscription {
    messageSent: Message!
  }
`;
