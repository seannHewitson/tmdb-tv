import Request from './request';
import {
  EpisodeCredits,
  EpisodeDetails,
  ExternalIDs,
  EpisodeImages,
  Videos,
} from './episode.types';

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

export default Episode;
