import { MockTMDB } from '../..';

const TMDB = MockTMDB('API_KEY_NOT_REQUIRED');

describe('Episode', () => {
  test('GetDetails', async () => {
    const results = await TMDB.Show('48866').Season('1').Episode('1').GetDetails();
    expect(results.season_number).toBe(1);
    expect(results.episode_number).toBe(1);
  });
  test('GetCredits', async () => {});
  test('GetExternalIDs', async () => {});
  test('GetImages', async () => {});
  test('GetVideos', async () => {});
});
