let TMDB = require('../lib/index')('45f92bdfc8545cfd0731561a9ad0cfea');

(async function(){
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
})();


// (async function(){
//     var search = await TMDB.Search('Lucifer');
//     var latest = await TMDB.GetLatest();
//     var airingToday = await TMDB.GetAiringToday();
//     var onTheAir = await TMDB.GetOnTheAir();
//     var popular = await TMDB.GetPopular();
//     var topRated = await TMDB.GetTopRated();
    
//     var Show = TMDB.Show(search[0].id);
//     var show = await Show.GetDetails();
//     var accountStates = await Show.GetAccountStates();
//     var alternativeTitles = await Show.GetAlternativeTitles();
//     var changes = await Show.GetChanges();
//     var contentRatings = await Show.GetContentRatings();
//     var credits = await Show.GetCredits();
//     var episodeGroups = await Show.GetEpisodeGroups();
//     var externalIDs = await Show.GetExternalIDs();
//     var images = await Show.GetImages();
//     var keywords = await Show.GetKeywords();
//     var recommendations = await Show.GetRecommendations();
//     var reviews = await Show.GetReviews();
//     var screenedTheatrically = await Show.GetScreenedTheatrically();
//     var similar = await Show.GetSimilarShows();
//     var translations = await Show.GetTranslations();
//     var videos = await Show.GetVideos();

//     var Season = Show.Season(1);
//     var season = Season.GetDetails();
//     var seasonAccountStates = await Season.GetAccountStates();
//     var seasonCredits = await Season.GetCredits();
//     var seasonExternalIDs = await Season.GetExternalIDs();
//     var seasonImages = await Season.GetImages();
//     var seasonVideos = await Season.GetVideos();

//     var Episode = Season.Episode(1);
//     var episodeAccountStates = await Episode.GetAccountStates();
//     var episodeVredits = await Episode.GetCredits();
//     var episodeExternalIDs = await Episode.GetExternalIDs();
//     var episodeImages = await Episode.GetImages();
//     var episodeTranslations = await Episode.GetTranslations();
//     var episodeVideos = await Episode.GetVideos();
// })();