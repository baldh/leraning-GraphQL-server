import {gql} from "apollo-server"

const typeDefs = gql`
    type Query{
        tracksForHome: [Track!]!
    }
    
    "An author is a person or organization that creates a track"
    type Author {
        id: ID!
        "Author's first and last name"
        name: String!
        "Author's profile picture url"
        photo: String
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
    }
`

export default typeDefs