import {gql} from "apollo-server"

export const Author = gql`
    "An author is a person or organization that creates a track"
    type Author {
        id: ID!
        "Author's first and last name"
        name: String!
        "Author's profile picture url"
        photo: String
    }
`