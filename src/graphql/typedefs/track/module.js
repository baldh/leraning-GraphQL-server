import {gql} from 'apollo-server'

export const Module = gql`
    "A module is a single unit of teaching. Multiple modules compose a track"
    type Module {
        id: ID!
        "The module's title"
        title: String!
        "The module's length in minutes"
        length: Int
    }
`