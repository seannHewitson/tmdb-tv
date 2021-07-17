import Request from './request';
import Episode from './episode';
import { AggregateCredits, SeasonCredits, SeasonDetails, SeasonImages } from './season.types';
import { ExternalIDs, Videos } from './episode.types';

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

export default Season;
