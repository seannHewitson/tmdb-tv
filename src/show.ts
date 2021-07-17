import { ExternalIDs, Videos } from './episode.types';
import Request from './request';
import Season from './season';
import { AggregateCredits, SeasonCredits } from './season.types';
import {
  ContentRatings,
  EpisodeGroups,
  Keywords,
  Recommendations,
  ShowDetails,
  ShowImages,
  Similar,
} from './show.types';

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

export default Show;
