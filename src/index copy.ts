import axios from 'axios';
import MockTMDB from './mock';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const Request = async (apiKey: string, action: string, extras?: string) => {
  const uri = `${action}?api_key=${apiKey}&language=en-US${extras ? `&${extras}` : ''}`;
  const response = await axios.get(uri);
  const { data } = response;
  return data;
};

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

class Show {
  private id: string;
  private apiKey: string;
  constructor(apiKey: string, id: string) {
    this.id = id;
    this.apiKey = apiKey;
  }

  GetDetails = (): Promise<ShowDetails> => Request(this.apiKey, `tv/${this.id}`);

  GetAggregateCredits = (): Promise<AggregateCredits> =>
    Request(this.apiKey, `tv/${this.id}/aggregate_credits`);

  GetContentRatings = (): Promise<ContentRatings> =>
    Request(this.apiKey, `tv/${this.id}/content_ratings`);

  GetCredits = (): Promise<SeasonCredits> => Request(this.apiKey, `tv/${this.id}/credits`);

  GetEpisodeGroups = (): Promise<EpisodeGroups> =>
    Request(this.apiKey, `tv/${this.id}/episode_groups`);

  GetExternalIDs = (): Promise<ExternalIDs> => Request(this.apiKey, `tv/${this.id}/external_ids`);

  GetImages = (): Promise<ShowImages> => Request(this.apiKey, `tv/${this.id}/images`);

  GetKeywords = (): Promise<Keywords> => Request(this.apiKey, `tv/${this.id}/keywords`);

  GetRecommendations = (page: number = 1): Promise<Recommendations> =>
    Request(this.apiKey, `tv/${this.id}/recommendations`, `page=${page}`);

  GetSimilarShows = (page: number = 1): Promise<Similar> =>
    Request(this.apiKey, `tv/${this.id}/similar`, `page=${page}`);

  GetVideos = (): Promise<Videos> => Request(this.apiKey, `tv/${this.id}/videos`);

  Season = (id: string) => new Season(this.apiKey, this.id, id);
}

class Season {
  private id: string;
  private show: string;
  private apiKey: string;
  constructor(apiKey: string, show: string, id: string) {
    this.id = id;
    this.show = show;
    this.apiKey = apiKey;
  }

  GetDetails = (): Promise<SeasonDetails> =>
    Request(this.apiKey, `tv/${this.show}/season/${this.id}`);

  GetAggregateCredits = (): Promise<AggregateCredits> =>
    Request(this.apiKey, `tv/${this.show}/season/${this.id}/aggregate_credits`);

  GetCredits = (): Promise<SeasonCredits> =>
    Request(this.apiKey, `tv/${this.show}/season/${this.id}/credits`);

  GetExternalIDs = (): Promise<ExternalIDs> =>
    Request(this.apiKey, `tv/${this.show}/season/${this.id}/external_ids`);

  GetImages = (): Promise<SeasonImages> =>
    Request(this.apiKey, `tv/${this.show}/season/${this.id}/images`);

  GetVideos = (): Promise<Videos> =>
    Request(this.apiKey, `tv/${this.show}/season/${this.id}/videos`);

  Episode = (id: string) => new Episode(this.apiKey, this.show, this.id, id);
}

class Episode {
  private id: string;
  private season: string;
  private show: string;
  private apiKey: string;
  constructor(apiKey: string, show: string, season: string, id: string) {
    this.id = id;
    this.season = season;
    this.show = show;
    this.apiKey = apiKey;
  }
  GetDetails = (): Promise<EpisodeDetails> =>
    Request(this.apiKey, `tv/${this.show}/season/${this.season}/episode/${this.id}`);

  GetCredits = (): Promise<EpisodeCredits> =>
    Request(this.apiKey, `tv/${this.show}/season/${this.season}/episode/${this.id}/credits`);

  GetExternalIDs = (): Promise<ExternalIDs> =>
    Request(this.apiKey, `tv/${this.show}/season/${this.season}/episode/${this.id}/external_ids`);

  GetImages = (): Promise<EpisodeImages> =>
    Request(this.apiKey, `tv/${this.show}/season/${this.season}/episode/${this.id}/images`);

  GetVideos = (): Promise<Videos> =>
    Request(this.apiKey, `tv/${this.show}/season/${this.season}/episode/${this.id}/videos`);
}

interface Results {
  page: number;
  results: Array<Result>;
  total_results: number;
  total_pages: number;
}

export interface SearchResults extends Results {}

export interface AiringToday extends Results {}

export interface OnTheAir extends Results {}

export interface Popular extends Results {}

export interface TopRated extends Results {}

export interface Result {
  adult?: boolean | null;
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: Array<string>;
  id: string;
  media_type?: string | null;
  name: string;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface ShowDetails {
  adult?: boolean | null;
  backdrop_path?: string | null;
  created_by?: Array<Creator>;
  episode_run_time?: Array<number>;
  first_air_date: string | null;
  genres?: Array<Genre>;
  homepage?: string;
  id: string;
  in_production?: boolean;
  languages?: Array<string>;
  last_air_date?: string | null;
  last_episode_to_air?: EpisodeDetails | null;
  name: string;
  next_episode_to_air?: EpisodeDetails | null;
  networks?: Array<Network>;
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: Array<string>;
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: Array<ProductionCompany>;
  production_countries?: Array<ProductionCountry>;
  seasons?: Array<SeasonDetails>;
  spoken_languages?: Array<SpokenLanguage>;
  status?: string; //  Change to enum
  tagline?: string;
  type?: string; //  Change to enum
  vote_average?: number;
  vote_count?: number;
}

export interface ContentRatings {
  id: string;
  results: Array<Rating>;
}

export interface EpisodeGroups {
  id: string;
  results: Array<EpisodeGroup>;
}

export interface ShowImages extends SeasonImages {
  backdrops: Array<SeasonPoster>;
  logos?: Array<SeasonPoster>;
}

export interface Keywords {
  id: string;
  results: Array<Keyword>;
}

export interface Recommendations {
  page: number;
  results: Array<Result>;
  total_pages: number;
  total_results: number;
}

export interface Similar {
  page: number;
  results: Array<Result>;
  total_pages: number;
  total_results: number;
}

export interface Keyword {
  id: string;
  name: string;
}

export interface EpisodeGroup {
  description?: string;
  episode_count?: number;
  group_count?: number;
  id: string;
  name: string;
  network?: Network;
  type?: number;
}

export interface Rating {
  iso_3166_1: string;
  rating: string;
}

export interface Creator {
  id: string;
  credit_id?: string;
  name: string;
  gender?: number;
  profile_path?: string | null;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Network {
  name: string;
  id: string;
  logo_path?: string;
  origin_country?: string;
}

export interface ProductionCompany {
  id: string;
  logo_path?: string | null;
  name: string;
  origin_country?: string;
}

export interface ProductionCountry {
  iso_3166_1?: string;
  name: string;
}

export interface SpokenLanguage {
  english_name?: string;
  iso_639_1?: string;
  name: string;
}

export interface SeasonDetails {
  air_date?: string | null;
  episodes?: Array<EpisodeDetails>;
  episode_count?: number;
  id: string;
  name: string;
  overview?: string;
  poster_path?: string | null;
  season_number: number;
  _id?: string;
}

export interface AggregateCredits {
  cast: Array<AggregateCast>;
  crew: Array<AggregateCrew>;
  id: number;
}

export interface SeasonCredits {
  cast: Array<Cast>;
  crew: Array<Crew>;
  id: number;
}

export interface SeasonImages {
  id: string;
  posters: Array<SeasonPoster>;
}

export interface SeasonPoster {
  aspect_ratio?: number;
  file_path: string;
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface AggregateCast extends Cast {
  roles: Array<Role>;
  total_episode_count?: number;
}

export interface AggregateCrew extends Crew {
  jobs?: Array<Job>;
  total_episode_count: number;
}

export interface Role {
  character: string;
  credit_id: string;
  episode_count: number;
}

export interface Job {
  credit_id: string;
  episode_count: number;
  job: string;
}

export interface EpisodeDetails {
  air_date: string;
  crew?: Array<Crew>;
  episode_number: number;
  guest_stars?: Array<GuestStar>;
  id: string;
  name: string;
  overview?: string;
  production_code?: string;
  season_number: number;
  still_path?: string | null;
  vote_average?: number;
  vote_count?: number;
}

export interface EpisodeCredits {
  cast: Array<Cast>;
  crew: Array<Crew>;
  guest_stars: Array<GuestStar>;
  id: string;
}

export interface ExternalIDs {
  imdb_id?: string;
  freebase_mid?: string | number | null;
  freebase_id?: string | number | null;
  tvdb_id?: string | number | null;
  tvrage_id?: string | number | null;
  facebook_id?: string;
  instagram_id?: string;
  twitter_id?: string;
  id: string;
}

export interface EpisodeImages {
  id: string;
  stills: Array<EpisodeStill>;
}

export interface Videos {
  id: string;
  results: Array<Video>;
}

export interface Video {
  id: string;
  iso_639_1?: string;
  iso_3166_1?: string;
  key?: string;
  name?: string;
  official?: boolean | null;
  published_at?: string;
  site?: string;
  size?: number;
  type?: string;
}

export interface EpisodeStill {
  aspect_ratio?: number;
  file_path: string;
  height?: number;
  iso_639_1?: string | null;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface Cast {
  adult?: boolean;
  character?: string;
  credit_id?: string;
  gender: number;
  id: string;
  known_for_department?: string;
  name: string;
  order: number;
  original_name?: string;
  popularity?: number;
  profile_path?: string;
}

export interface Crew {
  adult?: boolean;
  credit_id?: string;
  department: string;
  gender?: number;
  id: string;
  job?: string;
  known_for_department?: string;
  name: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string | null;
}

export interface GuestStar {
  adult?: boolean;
  character?: string;
  character_name?: string;
  credit_id: string;
  gender: number;
  id: string;
  known_for_department?: string;
  name: string;
  order: number;
  original_name?: string;
  popularity?: number;
  profile_path?: string | null;
}

export { MockTMDB };
