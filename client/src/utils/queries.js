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
      frequency
      url
      callSign
      genre
      name
      isIframe
      isCompatible
      city
      iframe
    }
  }
`;
