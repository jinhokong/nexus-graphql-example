import * as graphqlSchema from "graphqlSchema";

import { ApolloServer } from "apollo-server";
import { makeSchema } from "nexus";

const schema = makeSchema({
  types: graphqlSchema,
  outputs: {
    schema: __dirname + "/generated/schema.graphql",
    typegen: __dirname + "/generated/typings.ts"
  }
});

const server = new ApolloServer({
  schema
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
