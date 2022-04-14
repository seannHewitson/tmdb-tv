import tmdb from '..';

const TMDB = tmdb('45f92bdfc8545cfd0731561a9ad0cfea');

describe('Episode', () => {
  test('GetDetails', async () => {
    const results = await TMDB.Show('48866').Season('1').Episode('1').GetDetails();
    expect(results.season_number).toBe(1);
    expect(results.episode_number).toBe(1);
  });
  test('GetCredits', async () => {
    const results = await TMDB.Show('48866').Season('1').Episode('1').GetCredits();
    expect(results.cast.length).toBe(9);
    expect(results.crew.length).toBe(41);
    expect(results.guest_stars.length).toBe(17);
    expect(results.id).toBe(972730);
  });
  test('GetExternalIDs', async () => {
    const results = await TMDB.Show('48866').Season('1').Episode('1').GetExternalIDs();
    expect(results.id).toBe(972730);
    expect(results.tvdb_id).toBe(4543295);
  });
  test('GetImages', async () => {
    const results = await TMDB.Show('48866').Season('1').Episode('1').GetImages();
    expect(results.id).toBe(972730);
    expect(results.stills.length).toBe(11);
  });
  test('GetVideos', async () => {
    const results = await TMDB.Show('48866').Season('1').Episode('1').GetVideos();
    expect(results.id).toBe(972730);
    expect(results.results.length).toBe(0);
  });
});
