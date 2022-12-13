import {gql} from "apollo-server"
import {Author} from './author.js'
import {Module} from './module.js'
import {IncrementTrackViews} from './increment-track-views.js'

export const Track = gql`
    type Query{
        "Query to get tracks array for the homepage grid"
        tracksForHome: [Track!]!
        "Query to get a single track corresponding to its ID"
        track(id: ID!): Track! #id is passed as an argument to the query "track"
    }
    "A track is a group of modules that teaches about specific type"
    type Track {
        id: ID!
        "The track's title"
        title: String!
        "The track's author"
        author: Author!
        "The track's main illustration to display in track card or track page details"
        thumbnail: String
        "The track's approximate length to complete, in minutes"
        length: String
        "The number of modules the track contains"
        modulesCount: Int
        "Description about the track, can be in Markdown format"
        description: String
        "Number of views the track has received"
        numberOfViews: Int
        "An array comprising of every modules in the track"
        modules: [Module!]!
    }
    
    ${Author}
    ${Module}
    ${IncrementTrackViews}
`