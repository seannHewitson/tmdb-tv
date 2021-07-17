import { EpisodeDetails } from './episode.types';
import { SeasonDetails, SeasonImages, SeasonPoster } from './season.types';

export interface ShowDetails {
  backdrop_path?: string;
  created_by?: Array<Creator>;
  episode_run_time?: Array<number>;
  first_air_date: string;
  genres?: Array<Genre>;
  homepage?: string;
  id: string;
  in_production?: boolean;
  languages?: Array<string>;
  last_air_date?: string;
  last_episode_to_air?: EpisodeDetails;
  name: string;
  next_episode_to_air?: EpisodeDetails;
  networks?: Array<Network>;
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: Array<string>;
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
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
}

export interface Keywords {
  id: string;
  results: Array<Keyword>;
}

export interface Recommendations {
  page: number;
  results: Array<ShowDetails>;
  total_pages: number;
  total_results: number;
}

export interface Similar {
  page: number;
  results: Array<ShowDetails>;
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
  profile_path?: string;
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
  logo_path?: string;
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
