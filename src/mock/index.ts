import {
  AggregateCredits,
  AiringToday,
  ContentRatings,
  EpisodeCredits,
  EpisodeDetails,
  EpisodeGroups,
  EpisodeImages,
  ExternalIDs,
  Keywords,
  OnTheAir,
  Popular,
  Recommendations,
  SearchResults,
  SeasonCredits,
  SeasonDetails,
  SeasonImages,
  ShowDetails,
  ShowImages,
  Similar,
  TopRated,
  Videos,
} from '../';
import mockAiringToday from './airingToday';
import mockLatest from './latest';
import mockOnTheAir from './onTheAir';
import mockPopular from './popular';
import mockSearch from './search';
import mockAggregateCredits from './show/aggregateCredits';
import mockContentRatings from './show/contentRatings';
import mockCredits from './show/credits';
import mockShowDetails, { mockShowsDetails } from './show/details';
import mockEpisodeGroups from './show/episodeGroups';
import mockExternalIDs from './show/externalIDs';
import mockShowImages from './show/images';
import mockKeywords from './show/keywords';
import mockRecommendations from './show/recommendations';
import mockSeasonAggregateCredits from './show/season/aggregateCredits';
import mockSeasonCredits from './show/season/credits';
import mockSeasonDetails from './show/season/details';
import mockEpisodeCredits from './show/season/episode/credits';
import mockEpisodeDetails from './show/season/episode/details';
import mockEpisodeExternalIDs from './show/season/episode/externalIDs';
import mockEpisodeImages from './show/season/episode/images';
import mockEpisodeVideos from './show/season/episode/videos';
import mockSeasonExternalIDs from './show/season/externalIDs';
import mockSeasonImages from './show/season/images';
import mockSeasonVideos from './show/season/videos';
import mockSimilar from './show/similarShows';
import mockVideos from './show/videos';
import mockTopRated from './topRated';

class Mocktmdb {
  private apiKey: string;
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  Search = (term: string, page: number = 1): Promise<SearchResults> => Promise.resolve(mockSearch);

  GetLatest = (): Promise<ShowDetails> => Promise.resolve(mockLatest);

  GetAiringToday = (page: number = 1): Promise<AiringToday> => Promise.resolve(mockAiringToday);

  GetOnTheAir = (page: number = 1): Promise<OnTheAir> => Promise.resolve(mockOnTheAir);

  GetPopular = (page: number = 1): Promise<Popular> => Promise.resolve(mockPopular);

  GetTopRated = (page: number = 1): Promise<TopRated> => Promise.resolve(mockTopRated);

  Show = (id: string) => new Show(this.apiKey, id);
}

const MockTMDB = (apiKey: string) => new Mocktmdb(apiKey);
export default MockTMDB;

class Show {
  private id: string;
  private apiKey: string;
  constructor(apiKey: string, id: string) {
    this.id = id;
    this.apiKey = apiKey;
  }

  GetDetails = (): Promise<ShowDetails | any> => Promise.resolve(GetDetails(this.id));

  GetAggregateCredits = (): Promise<AggregateCredits> => Promise.resolve(mockAggregateCredits);

  GetContentRatings = (): Promise<ContentRatings> => Promise.resolve(mockContentRatings);

  GetCredits = (): Promise<SeasonCredits> => Promise.resolve(mockCredits);

  GetEpisodeGroups = (): Promise<EpisodeGroups> => Promise.resolve(mockEpisodeGroups);

  GetExternalIDs = (): Promise<ExternalIDs> => Promise.resolve(mockExternalIDs);

  GetImages = (): Promise<ShowImages> => Promise.resolve(mockShowImages);

  GetKeywords = (): Promise<Keywords> => Promise.resolve(mockKeywords);

  GetRecommendations = (page: number = 1): Promise<Recommendations> =>
    Promise.resolve(mockRecommendations);

  GetSimilarShows = (page: number = 1): Promise<Similar> => Promise.resolve(mockSimilar);

  GetVideos = (): Promise<Videos> => Promise.resolve(mockVideos);

  Season = (id: string) => new Season(this.apiKey, this.id, id);
}

const GetDetails = (show: string) => {
  let index: number = mockShowsDetails.map(({ id }: ShowDetails) => id).indexOf(show);
  if (index !== -1) {
    return mockShowsDetails[index];
  }
  throw new Error('404 not found');
};

class Season {
  private id: string;
  private show: string;
  private apiKey: string;
  constructor(apiKey: string, show: string, id: string) {
    this.id = id;
    this.show = show;
    this.apiKey = apiKey;
  }

  GetDetails = (): Promise<SeasonDetails> => Promise.resolve(mockSeasonDetails);

  GetAggregateCredits = (): Promise<AggregateCredits> =>
    Promise.resolve(mockSeasonAggregateCredits);

  GetCredits = (): Promise<SeasonCredits> => Promise.resolve(mockSeasonCredits);

  GetExternalIDs = (): Promise<ExternalIDs> => Promise.resolve(mockSeasonExternalIDs);

  GetImages = (): Promise<SeasonImages> => Promise.resolve(mockSeasonImages);

  GetVideos = (): Promise<Videos> => Promise.resolve(mockSeasonVideos);

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
  GetDetails = (): Promise<EpisodeDetails> => Promise.resolve(mockEpisodeDetails);

  GetCredits = (): Promise<EpisodeCredits> => Promise.resolve(mockEpisodeCredits);

  GetExternalIDs = (): Promise<ExternalIDs> => Promise.resolve(mockEpisodeExternalIDs);

  GetImages = (): Promise<EpisodeImages> => Promise.resolve(mockEpisodeImages);

  GetVideos = (): Promise<Videos> => Promise.resolve(mockEpisodeVideos);
}
