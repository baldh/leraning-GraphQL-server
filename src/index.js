import {ApolloServer} from 'apollo-server'
import typeDefs from './schema.js'
import {resolvers} from './resolvers/index.js'
import TrackApi from './data-sources/rest/track-api.js'

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