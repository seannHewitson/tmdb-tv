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
//  Results returns an array of shows.
var Show = await TMDB.Show(results[0].id);

var Season = await Show.Season(1);


```

### Useful Information
For examples on what each object is returned, check out tmdb api documentation here:
(https://developers.themoviedb.org/3/tv)