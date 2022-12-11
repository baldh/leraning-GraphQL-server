import {ApolloServer} from 'apollo-server'
import schema from './graphql/schema/index.js'
import TrackApi from './graphql/data/rest/track-api.js'

const server = new ApolloServer({
  schema,
  dataSources: () => {
    return {
      trackApi: new TrackApi()
    }
  }
})

server.listen().then(() => {
  console.log(`
  🚀 Server is running!
  🔊 Listening on port 400
  📭 Query at http://localhost:4000
  `)
})