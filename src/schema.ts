// graphql/schema.ts
import { createSchema } from "graphql-yoga"

export const typeDefs = `
    type Course {
        id: ID
        title: String
        description: String
        category: String
        url: String
        imageUrl: String
        members: [String]
    }

    type Query {
        courses: [Course]!
    }
`


export const resolvers = {
    Query: {
      courses: () => {
        return [
          {
            category: 'Paartanz Erwachsene',
            description: 'Montags-Senioren',
            id: 1,
            imageUrl: 'https://nextjs.org/static/twitter-cards/home.jpg',
            title: 'EC12',
            url: 'https://nextjs.org',
          },
          {
            category: 'Kindertanz',
            description: 'Nervensägen mittwochs',
            id: 2,
            imageUrl: 'https://www.prisma.io/images/og-image.png',
            title: 'KC31',
            url: 'https://www.prisma.io',
          },
          {
            category: 'HipHop',
            description: 'Thursday Tigers',
            id: 3,
            imageUrl: 'https://www.apollographql.com/apollo-home.jpg',
            title: 'VC41',
            url: 'https://apollographql.com',
          },
        ]
      },
    },
  }

export const schema = createSchema({
    typeDefs,
    resolvers,
  })