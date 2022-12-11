import {gql} from "apollo-server"
import {makeExecutableSchema} from '@graphql-tools/schema'
//typedefs
import {Author} from './author.js'
import {Module} from './module.js'
import {Track} from './track.js'
//resolvers
import {TrackResolvers} from '../resolvers/track.js'

const Query = gql`
  type Query{
        "Query to get tracks array for the homepage grid"
        tracksForHome: [Track!]!
        "Query to get a single track corresponding to its ID"
        track(id: ID!): Track! #id is passed as an argument to the query "track"
    }
`

const schema = makeExecutableSchema({
  typeDefs: [Author, Module, Track, Query],
  resolvers: TrackResolvers
})

export default schema