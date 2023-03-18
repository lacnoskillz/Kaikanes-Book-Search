import { gql } from '@apollo/client';

export const QUERY_USER= gql`
  query tech {
    user {
      _id
      name
    }
  }
`;

