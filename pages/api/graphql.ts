// pages/api/graphql.ts

import { createSchema, createYoga } from "graphql-yoga";
// import type { NextApiRequest, NextApiResponse } from 'next'
import { typeDefs } from "../../src/schema";

export default createYoga<{
  //req: NextApiRequest
  //res: NextApiResponse
}>({
  schema: createSchema({
    typeDefs,
  }),
  graphqlEndpoint: "/api/graphql",
});

export const config = {
  api: {
    bodyParser: false,
  },
};
