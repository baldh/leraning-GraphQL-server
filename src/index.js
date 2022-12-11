import {ApolloServer} from 'apollo-server'
import typeDefs from './graphql/schema'
import {resolvers} from './graphql/resolvers'
import TrackApi from './graphql/data/rest/track-api'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: ()=> {
    return {
      trackApi: new TrackApi()
    }
  }
})

server.listen().then(()=> {
  console.log(`
  🚀 Server is running!
  🔊 Listening on port 400
  📭 Query at http://localhost:4000
  `)
})