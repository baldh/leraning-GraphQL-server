import {makeExecutableSchema} from '@graphql-tools/schema'
//typedefs
import {TypeDefs} from './typedefs/index.js'
//resolvers
import {Resolvers} from './resolvers/index.js'

const schema = makeExecutableSchema({
  typeDefs: TypeDefs,
  resolvers: Resolvers
})

export default schema