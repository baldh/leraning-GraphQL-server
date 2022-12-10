export const resolvers = {
  Query: {
    //returns an array of tracks that will be used to populate
    //the homepage grid of our content
    tracksForHome: (_, __, {dataSources}) => {
      return dataSources.trackApi.getTracksForHome()
    }
  },
  Track: {
    author: ({authorId}, __, {dataSources}) => {
      return dataSources.trackApi.getAuthor(authorId)
    }
  }
}

/*
* The contextValue argument is an object shared across
* all resolvers that are executing for a particular
* operation. Use this to share per-operation state,
* including auth information, dataloader instances and
* anything else to track across resolvers.
* */

/**
 * The "parent" argument in a resolver is the value returned
 * by the previous resolver. Here, "parent" argument in
 * "Track.author" is the return value of "Query.tracksForHome"
 * */