import TMDB, { Keyword, Result } from '../';

const tmdb = TMDB('45f92bdfc8545cfd0731561a9ad0cfea');

test('Details', async () => {
  const show = await tmdb.Show('48866').GetDetails();
  expect(typeof show.name).toBe('string');
  expect(typeof show.number_of_episodes).toBe('number');
  expect(typeof show.number_of_seasons).toBe('number');
});

test('Aggregate Credits', async () => {
  const credits = await tmdb.Show('48866').GetAggregateCredits();
  expect(credits.id).toBe(48866);
  expect(credits.cast.length).toBeGreaterThan(1);
  expect(credits.crew.length).toBeGreaterThan(1);
});

test('Content Ratings', async () => {
  const ratings = await tmdb.Show('48866').GetContentRatings();
  expect(ratings.id).toBe(48866);
  expect(ratings.results.length).toBeGreaterThan(1);
  expect(ratings.results.length).toBe(9);
  expect(ratings.results[5].iso_3166_1).toBe('GB');
  expect(ratings.results[5].rating).toBe('15');
});

test('Credits', async () => {
  const credits = await tmdb.Show('48866').GetCredits();
  expect(credits.id).toBe(48866);
  expect(credits.cast.length).toBeGreaterThan(1);
  expect(credits.crew.length).toBeGreaterThan(1);
  expect(credits.cast[0].name).toBe('Eliza Taylor');
  expect(credits.cast[0].order).toBe(0);
  expect(credits.cast[0].character).toBe('Clarke Griffin');
});

test('Episode Groups', async () => {
  const groups = await tmdb.Show('48866').GetEpisodeGroups();
  expect(groups.id).toBe(48866);
  expect(groups.results.length).toBe(0);
});

test('External IDs', async () => {
  const externalIDs = await tmdb.Show('48866').GetExternalIDs();
  expect(externalIDs.id).toBe(48866);
  expect(externalIDs.imdb_id).toBe('tt2661044');
  expect(externalIDs.twitter_id).toBe('cwthe100');
});

test('Images', async () => {
  const images = await tmdb.Show('48866').GetImages();
  expect(images.id).toBe(48866);
  expect(images.backdrops.length).toBe(0);
  expect(images.posters.length).toBe(0);
});

test('Keywords', async () => {
  const keywords = await tmdb.Show('48866').GetKeywords();
  expect(keywords.id).toBe(48866);
  expect(keywords.results.length).toBeGreaterThan(1);
  const sorted = keywords.results.sort((a: Keyword, b: Keyword) => (a.name < b.name ? -1 : 1));
  expect(sorted[0].name).toBe('apocalypse');
  expect(sorted[5].name).toBe('survival');
  expect(sorted[6].name).toBe('team');
});

test('Recommendations', async () => {
  const recommendations = await tmdb.Show('48866').GetRecommendations();
  expect(recommendations.page).toBe(1);
  expect(recommendations.results.length).toBe(21);
  const sorted = recommendations.results.sort((a: Result, b: Result) => (a.name < b.name ? -1 : 1));
  expect(sorted[1].name).toBe('Arrow');
  expect(sorted[2].name).toBe('Fear the Walking Dead');
  expect(sorted[17].name).toBe('The Walking Dead');
});

test('Similar Shows', async () => {
  const similar = await tmdb.Show('48866').GetSimilarShows();
  expect(similar.page).toBe(1);
  expect(similar.results.length).toBe(20);
  const sorted = similar.results.sort((a: Result, b: Result) => (a.name < b.name ? -1 : 1));
  expect(sorted[0].name).toBe('A Touch of Frost');
  expect(sorted[11].name).toBe('Jericho');
  expect(sorted[15].name).toBe('Sherlock Holmes');
});

test('Videos', async () => {
  const videos = await tmdb.Show('48866').GetVideos();
  expect(videos.id).toBe(48866);
  expect(videos.results.length).toBeGreaterThan(0);
  expect(videos.results[0].site).toBe('YouTube');
  expect(videos.results[0].size).toBe(720);
  expect(videos.results[0].name).toBe('The 100 - Official Trailer');
});
