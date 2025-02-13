// lib/apolloClient.ts
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "/api/graphql", // Adjust according to your GraphQL server URL
  cache: new InMemoryCache(),
});

export default client;
