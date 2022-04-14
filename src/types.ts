export interface ShowDetails {
  backdrop_path: string;
  created_by?: (CreatedBy)[] | null;
  episode_run_time?: (number)[] | null;
  first_air_date: string;
  genres?: (Genres)[] | null;
  homepage: string;
  id: number;
  in_production: boolean;
  languages?: (string)[] | null;
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air?: null;
  networks?: (Networks)[] | null;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country?: (string)[] | null;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: (ProductionCompanies)[] | null;
  production_countries?: (ProductionCountries)[] | null;
  seasons?: (Seasons)[] | null;
  spoken_languages?: (SpokenLanguages)[] | null;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}
export interface Genres {
  id: number;
  name: string;
}
export interface LastEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}
export interface Networks {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}
export interface ProductionCompanies {
  name: string;
  id: number;
  logo_path?: string | null;
  origin_country: string;
}
export interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}
export interface Seasons {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
}
export interface SpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}
export interface SearchResults {
  page: number;
  results?: (Results)[] | null;
  total_results: number;
  total_pages: number;
}
export interface Results {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country?: (string)[] | null;
  genre_ids?: (number)[] | null;
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}
export interface LatestResults {
  backdrop_path?: null;
  created_by?: (null)[] | null;
  episode_run_time?: (number)[] | null;
  first_air_date: string;
  genres?: (GenresOrNetworks)[] | null;
  homepage: string;
  id: number;
  in_production: boolean;
  languages?: (string)[] | null;
  last_air_date: string;
  name: string;
  networks?: (GenresOrNetworks)[] | null;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country?: (string)[] | null;
  original_language: string;
  original_name: string;
  overview?: null;
  popularity: number;
  poster_path?: null;
  production_companies?: (null)[] | null;
  seasons?: (Seasons)[] | null;
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
export interface GenresOrNetworks {
  id: number;
  name: string;
}
export interface Seasons {
  air_date: string;
  episode_count: number;
  id: number;
  poster_path?: string |null;
  season_number: number;
}
