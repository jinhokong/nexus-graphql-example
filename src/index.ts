import { queryType, stringArg, makeSchema } from 'nexus'
import { ApolloServer } from 'apollo-server'

const Query = queryType({
  definition(t) {
    t.string('hello', {
      args: { name: stringArg({ nullable: true }) },
      resolve: (parent, { name }) => `Hello ${name || 'World'}!`,
    })
  },
})

const schema = makeSchema({
  types: [Query],
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/typings.ts',
  },
})

const server = new ApolloServer({
  schema,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});