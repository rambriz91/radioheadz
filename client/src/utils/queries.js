import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      _id
      firstName
      lastName
      username
      email
      favStations {
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
      friends {
        firstName
      }
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
