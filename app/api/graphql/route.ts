// api/graphql/route.ts
import { createYoga } from "graphql-yoga";
import { makeSchema } from "nexus";
import * as mySchemas from "../../schema/types";
// import * as cors from "cors";

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
  cors: {
    origin: "*",
    credentials: true,
  },
});

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};
