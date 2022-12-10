import {RESTDataSource} from 'apollo-datasource-rest'

class TrackApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/"
  }

  getTracksForHome() {
    return this.get("tracks")
  }

  getTrack(trackId) {
    return this.get(`track/${trackId}`)
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`)
  }

  getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`)
  }
}

export default TrackApi