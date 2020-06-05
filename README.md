# tmdb-tv
TMDB (The Movie Database) API  wrapper for TV Shows only.

### Install

```bash
$ npm install tmdb-tv
```

### Import
```js
let TMDB = require('tmdb-tv')("YOUR_TMDB_API_KEY");
```

### Example
```js
var results = await TMDB.Search("Lucifer");
//  results returns an array of shows.
console.log(results);

var Show = TMDB.Show(results[0].id);
var show = await Show.GetDetails();
console.log(show);
show.seasons.forEach(async(season_no) => {
    var Season = Show.Season(season_no);
    var season = await Season.GetDetails();
    console.log(season);
    season.episodes.forEach(async(episode_no) => {
        var Episode = Season.Episode(episode_no);
        var episode = await Episode.GetDetails();
        console.log(episode);
    });
});


```
Basic usage of each method can be found in the test document "test/app.js"

### Useful Information
For examples on what each object is returned, check out tmdb api documentation here:
(https://developers.themoviedb.org/3/tv)
