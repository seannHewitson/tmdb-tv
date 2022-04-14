import { MockTMDB } from '../..';

const TMDB = MockTMDB('API_KEY_NOT_REQUIRED');

describe('Season', () => {
  test('GetDetails', async () => {
    const results = await TMDB.Show('48866').Season('1').GetDetails();
    expect(results.season_number).toBe(1);
  });

  test('GetAggrigateCredits', async () => {
    const results = await TMDB.Show('48866').Season('1').GetAggregateCredits();
    expect(results.cast.length).toBe(11);
    expect(results.crew.length).toBe(11);
    expect(results.id).toBe(55214);
  });
  test('GetCredits', async () => {});
  test('GetExternalIDs', async () => {});
  test('GetImages', async () => {});
  test('GetVideos', async () => {});
});
