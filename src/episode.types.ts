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
  still_path?: string;
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
  freebase_mid?: string;
  freebase_id?: string;
  tvdb_id?: string;
  tvrage_id?: string;
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
  site?: string;
  size?: number;
  type?: string;
}

export interface EpisodeStill {
  aspect_ratio?: number;
  file_path: string;
  height?: number;
  iso_639_1?: string;
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
  job: string;
  known_for_department?: string;
  name: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string;
}

export interface GuestStar {
  adult?: boolean;
  character_name: string;
  credit_id: string;
  gender: number;
  id: string;
  known_for_department?: string;
  name: string;
  order: number;
  original_name?: string;
  popularity?: number;
  profile_path?: string;
}
