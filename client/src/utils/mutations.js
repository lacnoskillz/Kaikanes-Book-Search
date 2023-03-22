import { gql } from '@apollo/client';
//declare const for LOGIN_USER that uses login mutation
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
//declare const for ADD_USER that uses addUser mutation
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
    token
    user{
    _id
    username
    }
    }
  }
`;
//declare const for SAVE_BOOK that uses saveBook mutation
export const SAVE_BOOK = gql`
  mutation saveBook( $bookData: BookInput! ) {
    saveBook(bookData: $bookData) {
     _id
     username
     email
     savedBooks{
      bookId
    authors
    description
    title
    image
    link

     }
    }
  }
`;
//declare const for REMOVE_BOOK that uses removeBook mutation
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
    _id
    }
  }
`;
