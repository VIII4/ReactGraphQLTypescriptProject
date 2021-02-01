import { graphql } from "graphql";
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

//Create query object
const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => "Hello from the query",
    },
  },
});

//create mutation object
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => "Hello from the mutation",
    },
  },
});

//create and export schema
export const schema = new GraphQLSchema({ query, mutation });
