var fetch = require('node-fetch');
module.exports = async function(api_key, action, extras = null){
    var uri = `https://api.themoviedb.org/3/${action}?api_key=${api_key}&language=en-US`;
    if(extras)  uri += `&${extras}`;
    var response = await fetch(uri);
    var result = await response.json();
    if(result.results)  return result.results;
    return result;
}