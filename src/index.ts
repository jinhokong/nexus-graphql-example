import * as types from "types";

import { ApolloServer } from "apollo-server";
import { makeSchema } from "nexus";

console.log("1");


const schema = makeSchema({
  types,
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
