import Request from './request';
import Show from './show';
import { ShowDetails } from './show.types';
import { AiringToday, OnTheAir, Popular, SearchResults, TopRated } from './types';

class TMDBClass {
  private apiKey: string;
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  Search = (term: string, page: number = 1): Promise<SearchResults> =>
    Request(this.apiKey, 'search/tv', `query=${term.replace(' ', '%20')}&page=${page}`);

  GetLatest = (): Promise<ShowDetails> => Request(this.apiKey, 'tv/latest');

  GetAiringToday = (page: number = 1): Promise<AiringToday> =>
    Request(this.apiKey, 'tv/airing_today', `page=${page}`);

  GetOnTheAir = (page: number = 1): Promise<OnTheAir> =>
    Request(this.apiKey, 'tv/on_the_air', `page=${page}`);

  GetPopular = (page: number = 1): Promise<Popular> =>
    Request(this.apiKey, 'tv/popular', `page=${page}`);

  GetTopRated = (page: number = 1): Promise<TopRated> =>
    Request(this.apiKey, 'tv/top_rated', `page=${page}`);

  Show = (id: string) => new Show(this.apiKey, id);
}

const TMDB = (apiKey: string) => new TMDBClass(apiKey);

export default TMDB;
