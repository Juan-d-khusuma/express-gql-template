import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "../graphql/schemas/schema";
import { resolvers } from "../graphql/resolvers/resolver";
const app = express();
const port = process.env.PORT || 5000;

const server = new ApolloServer({ typeDefs, resolvers });

/**
 * Start Apollo GraphQL server
 */
export async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
  app.listen({ port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  );
}
startServer();
