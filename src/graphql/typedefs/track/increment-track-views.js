import {gql} from "apollo-server"

export const IncrementTrackViews = gql`
    type Mutation {
        "Increments 'numberOfViews' in Track by 1 on every page views"
        incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
    }
    
    type IncrementTrackViewsResponse {
        "Similar to HTTP status code, represents the status of mutation"
        code: Int!
        "Indicates whether the mutation was successful"
        success: Boolean!
        "Human-readable message for the UI"
        message: String!
        "Newly updated track after a successful mutation"
        track: Track
    }
`