import tmdb, { ShowDetails } from '.';

const TMDB = tmdb('45f92bdfc8545cfd0731561a9ad0cfea');

TMDB.Show('93740')
  .GetDetails()
  .then((show: ShowDetails) => {
    show = fixIDs(show, 'created_by');
    show = fixIDs(show, 'last_episode_to_air');
    show = fixIDs(show, 'next_episode_to_air');
    show = fixIDs(show, 'networks');
    show = fixIDs(show, 'production_companies');
    show = fixIDs(show, 'seasons');
    show.id = `${show.id}`;
    console.log(show);
  });

const fixIDs = (obj: any, key: any): any => {
  if (obj[key]) {
    obj[key] = Array.isArray(obj[key]) ? obj[key].map(fixID) : fixID(obj[key]);
  }
  return obj;
};

const fixID = (obj: any) => ({
  ...obj,
  id: `${obj.id}`,
});
