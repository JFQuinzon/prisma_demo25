// api/graphql/route.ts
import { createYoga } from "graphql-yoga";
import { makeSchema } from "nexus";
import * as mySchemas from "../../schema/types";

interface NextContext {
  params: Promise<Record<string, string>>;
}

// Create the Nexus schema
const schema = makeSchema({
  types: [mySchemas],
  outputs: false,
});

const { handleRequest } = createYoga<NextContext>({
  schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
});

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};
