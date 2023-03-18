import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_USER= gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      _id
    username
    email
    password 
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($User_ID: ID, $book: ) {
    saveBook(User_Id: $User_Id, book: $book) {
     _id
     username
     bookCount
     savedBooks
    }
  }
`;
export const REMOVE_BOOK = gql`
  mutation removeBook($bookID: ID!) {
    removeBook(bookId: $bookId) {
    }
  }
`;
