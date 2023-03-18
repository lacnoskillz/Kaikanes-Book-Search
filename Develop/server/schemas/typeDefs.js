const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBook: [Book]
  }

  type Book {
    bookId: ID!
    authors: String
    description: String
    title: String
    image: String
    link: String
  }

  type Query {
    me: [User]
  }
 
 type Auth {
 token: ID!
 user: [User]
 }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(books: [authors, description, title, bookId, image, link]): User
    removeBook(books: bookId!, ): User

  }
`;

module.exports = typeDefs;