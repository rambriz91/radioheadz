const gql = String.raw;

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    favStations: [Station]
    friends: [User]
  }

  type Station {
    _id: ID
    frequency: Float
    url: String
    callSign: String
    genre: String
    name: String
    isIframe: Boolean
    isCompatible: Boolean
    iframe: String
    city: String
    users: [User]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user(id: ID!): User
    stations: [Station]
    users: [User]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      username: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      username: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
