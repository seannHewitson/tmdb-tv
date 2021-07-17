import { Cast, Crew, EpisodeDetails } from './episode.types';

export interface SeasonDetails {
  air_date?: string;
  episodes: Array<EpisodeDetails>;
  episode_count?: number;
  id: string;
  name: string;
  overview?: string;
  poster_path?: string;
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
  jobs: Array<Job>;
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
