import axios, { AxiosResponse } from 'axios'
import { LatestResults, SearchResults, ShowDetails } from './types'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

const Request = (apiKey: string, action: string, extras?: string) =>
  axios
    .get(`${action}?api_key=${apiKey}&language=en-US${extras ? `&${extras}` : ''}`)
    .then(({ data }: AxiosResponse) => data)

class TMDBClass {
  private apiKey: string

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  GetLatest = (): Promise<LatestResults> => Request(this.apiKey, 'tv/latest')
  GetTVAiringToday = (): Promise<any> => Request(this.apiKey, '', '')
  GetTVOnTheAir = (): Promise<any> => Request(this.apiKey, '', '')
  GetPopular = (): Promise<any> => Request(this.apiKey, '', '')
  GetTopRated = (): Promise<any> => Request(this.apiKey, '', '')
  Search = (term: string, page: number = 1): Promise<SearchResults> => Request(this.apiKey, 'search/tv', `query=${term.replace(' ', '%20')}&page=${page}`)

  Show = (id: string) => new Show(this.apiKey, id)
}

class Show {
  private id: string
  private apiKey: string

  constructor(apiKey: string, id: string) {
    this.id = id
    this.apiKey = apiKey
  }

  GetDetails = (): Promise<ShowDetails> => Request(this.apiKey, '', '')
  GetAccountStates = (): Promise<any> => Request(this.apiKey, '', '')
  GetAggregateCredits = (): Promise<any> => Request(this.apiKey, '', '')
  GetAlternativeTitles = (): Promise<any> => Request(this.apiKey, '', '')
  GetChanges = (): Promise<any> => Request(this.apiKey, '', '')
  GetContentRatings = (): Promise<any> => Request(this.apiKey, '', '')
  GetCredits = (): Promise<any> => Request(this.apiKey, '', '')
  GetEpisodeGroups = (): Promise<any> => Request(this.apiKey, '', '')
  GetExternalIDs = (): Promise<any> => Request(this.apiKey, '', '')
  GetImages = (): Promise<any> => Request(this.apiKey, '', '')
  GetKeywords = (): Promise<any> => Request(this.apiKey, '', '')
  GetRecommendations = (): Promise<any> => Request(this.apiKey, '', '')
  GetReviews = (): Promise<any> => Request(this.apiKey, '', '')
  GetScreenedTheatrically = (): Promise<any> => Request(this.apiKey, '', '')
  GetSimilarTVShows = (): Promise<any> => Request(this.apiKey, '', '')
  GetTranslations = (): Promise<any> => Request(this.apiKey, '', '')
  GetVideos = (): Promise<any> => Request(this.apiKey, '', '')
  GetWatchProviders = (): Promise<any> => Request(this.apiKey, '', '')
}

const TMDB = (apiKey: string) => new TMDBClass(apiKey)

export default TMDB
