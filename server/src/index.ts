import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { makeExecutableSchema } from "@graphql-tools/schema";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { useServer } from "graphql-ws/lib/use/ws";
import http from "http";
import { WebSocketServer } from "ws";
import { resolvers, typeDefs } from "./graphql";

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();
const httpServer = http.createServer(app);

// Creating the WebSocket server
const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});

// Hand in the schema we just created and have the
// WebSocketServer start listening.
// TODO THROW ERROR when no token
const serverCleanup = useServer(
  {
    schema,
    context({ connectionParams }) {
      return connectionParams.headers;
    },
  },
  wsServer
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    // Proper shutdown for the HTTP server.
    ApolloServerPluginDrainHttpServer({ httpServer }),

    // Proper shutdown for the WebSocket server.
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

const startServer = async () => {
  await server.start();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(
    "/",
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    // TODO THROW ERROR when no token
    expressMiddleware(server, {
      context: async ({ req }) => {
        return { authorization: { userId: req.headers["user-id"] } };
      },
    })
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Query endpoint ready at http://localhost:4000/graphql`);
  console.log(`🚀 Subscription endpoint ready at ws://localhost:4000/graphql`);
};

startServer();
