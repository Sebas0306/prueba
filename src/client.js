import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://project-booking.herokuapp.com/graphql',
  headers: {
    "Content-Type": "application/json",
    "Vary": "Access-Control-Request-Method",
    "Vary": "Access-Control-Request-Headers",
    "databaseId": "8ff2fcab-d863-4245-a6a7-15e5daf6b236"
  },
  cache: new InMemoryCache(),
});

export default client;
