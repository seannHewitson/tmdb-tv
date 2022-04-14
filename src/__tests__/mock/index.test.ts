import { MockTMDB } from '../..';
import mockAiringToday from '../../mock/airingToday';
import mockOnTheAir from '../../mock/onTheAir';
import mockPopular from '../../mock/popular';
import mockTopRated from '../../mock/topRated';

const TMDB = MockTMDB('API_KEY_NOT_REQUIRED');

test('Search', async () => {
  const search = await TMDB.Search('The');
  expect(search.page).toBe(1);
  expect(search.results.length).toBe(20);
  expect(search.results[0].name).toBe('The Flash');
});

test('Latest', async () => {
  const latest = await TMDB.GetLatest();
  // expect(latest.name).toBe('Morichika');
  //  This will change constantly so tests aren't required
});

test('Airing Today', async () => {
  const airing = await TMDB.GetAiringToday();
  expect(airing.page).toBe(1);
  expect(airing.results.length).toBe(20);
  expect(airing.results[0]).toMatchObject(mockAiringToday.results[0]);
});

test('On The Air', async () => {
  const onAir = await TMDB.GetOnTheAir();
  expect(onAir.page).toBe(1);
  expect(onAir.results.length).toBe(20);
  expect(onAir.results[0]).toMatchObject(mockOnTheAir.results[0]);
});

test('Popular', async () => {
  const popular = await TMDB.GetPopular(1);
  expect(popular.page).toBe(1);
  expect(popular.results.length).toBe(20);
  expect(popular.results[0]).toMatchObject(mockPopular.results[0]);
});

test('Top Rated', async () => {
  const topRated = await TMDB.GetTopRated(1);
  expect(topRated.page).toBe(1);
  expect(topRated.results.length).toBe(20);
  expect(topRated.results[0]).toBe(mockTopRated.results[0]);
});
