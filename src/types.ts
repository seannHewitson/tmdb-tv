import { ShowDetails } from './show.types';

export interface SearchResults {
  page: number;
  results: Array<ShowDetails>;
  total_results: number;
  total_pages: number;
}

export interface AiringToday {
  page: number;
  results: Array<ShowDetails>;
  total_results: number;
  total_pages: number;
}

export interface OnTheAir {
  page: number;
  results: Array<ShowDetails>;
  total_results: number;
  total_pages: number;
}

export interface Popular {
  page: number;
  results: Array<ShowDetails>;
  total_results: number;
  total_pages: number;
}

export interface TopRated {
  page: number;
  results: Array<ShowDetails>;
  total_results: number;
  total_pages: number;
}
