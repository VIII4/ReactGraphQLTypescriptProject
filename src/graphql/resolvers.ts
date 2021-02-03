import { IResolverObject } from "apollo-server-express";
import { IResolvers } from "apollo-server-express";
import { listings } from "../listing";

export const resolvers: IResolvers = {
  Query: {
    listings: () => {
      return listings;
    },
  },
  Mutation: {
    deleteListing: (_root: undefined, { id }: { id: string }) => {
      for (let i = 0; i < listings.length; i++) {
        if (listings[i].id === id) {
          return listings.splice(i, 1)[0];
        }
      }

      throw new Error("failed to delete listing");
    },
  },
};
