import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { join } from "node:path";
import { fileURLToPath } from "url";
const books = [
    {
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        title: "City of Glass",
        author: "Paul Auster",
    },
];
const __dirname = fileURLToPath(import.meta.url);
console.log(__dirname);
const schema = loadSchemaSync(join(__dirname, "../schema/schema.graphql"), {
    loaders: [new GraphQLFileLoader()],
});
// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };
// const schemaWithResolvers = addResolversToSchema({ schema, resolvers });
// // The ApolloServer constructor requires two parameters: your schema
// // definition and your set of resolvers.
// const server = new ApolloServer({
//   schema: schemaWithResolvers,
// });
// // Passing an ApolloServer instance to the `startStandaloneServer` function:
// //  1. creates an Express app
// //  2. installs your ApolloServer instance as middleware
// //  3. prepares your app to handle incoming requests
// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });
// console.log(`🚀  Server ready at: ${url}`);
