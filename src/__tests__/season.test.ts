import tmdb from '..';

const TMDB = tmdb('45f92bdfc8545cfd0731561a9ad0cfea');

describe('Season', () => {
  test('GetDetails', async () => {
    const results = await TMDB.Show('48866').Season('1').GetDetails();
    expect(results.season_number).toBe(1);
  });

  test('GetAggrigateCredits', async () => {
    const results = await TMDB.Show('48866').Season('1').GetAggregateCredits();
    expect(results.cast.length).toBe(78);
    expect(results.crew.length).toBe(80);
    expect(results.id).toBe(55214);
  });
  test('GetCredits', async () => {
    const results = await TMDB.Show('48866').Season('1').GetCredits();
    expect(results.cast.length).toBe(9);
    expect(results.crew.length).toBe(0);
    expect(results.id).toBe(55214);
  });
  test('GetExternalIDs', async () => {
    const results = await TMDB.Show('48866').Season('1').GetExternalIDs();
    expect(results.id).toBe(55214);
    expect(results.tvdb_id).toBe(517077);
  });
  test('GetImages', async () => {
    const results = await TMDB.Show('48866').Season('1').GetImages();
    expect(results.id).toBe(55214);
    expect(results.posters.length).toBe(0);
  });
  test('GetVideos', async () => {
    const results = await TMDB.Show('48866').Season('1').GetVideos();
    expect(results.id).toBe(55214);
    expect(results.results.length).toBe(0);
  });
});
