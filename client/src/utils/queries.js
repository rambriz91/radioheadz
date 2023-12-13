import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
    }
  }
`;

export const QUERY_STATIONS = gql`
  {
    stations {
      _id
      frequency
      url
      callSign
      genre
      name
      isIframe
      isCompatible
      iframe
      city
    }
  }
`;
