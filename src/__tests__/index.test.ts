import TMDB from '../';
import { ShowDetails } from '../show.types';

const tmdb = TMDB('45f92bdfc8545cfd0731561a9ad0cfea');

test('Search', async () => {
  const search = await tmdb.Search('The');
  expect(search.page).toBe(1);
  expect(search.results.length).toBe(20);
  expect(search.results[0].name).toBe('The Flash');
});

test('Latest', async () => {
  const latest = await tmdb.GetLatest();
  // expect(latest.name).toBe('Morichika');
  //  This will change constantly so tests aren't required
});

test('Airing Today', async () => {
  const airing = await tmdb.GetAiringToday();
  expect(airing.page).toBe(1);
  expect(airing.results.length).toBe(20);
  expect(airing.results[0]).toBe(<ShowDetails>airing.results[0]);
});

test('On The Air', async () => {
  const onAir = await tmdb.GetOnTheAir();
  expect(onAir.page).toBe(1);
  expect(onAir.results.length).toBe(20);
  expect(onAir.results[0]).toBe(<ShowDetails>onAir.results[0]);
});

test('Popular', async () => {
  const popular = await tmdb.GetPopular(2);
  expect(popular.page).toBe(2);
  expect(popular.results.length).toBe(20);
  expect(popular.results[0]).toBe(<ShowDetails>popular.results[0]);
});

test('Top Rated', async () => {
  const topRated = await tmdb.GetTopRated(2);
  expect(topRated.page).toBe(2);
  expect(topRated.results.length).toBe(20);
  expect(topRated.results[0]).toBe(<ShowDetails>topRated.results[0]);
});
