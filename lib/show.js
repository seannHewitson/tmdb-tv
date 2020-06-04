var req = require('./req');

class Show {
    constructor(api_key, showID){
        this.api_key = api_key;
        this.id = showID;
    }

    async GetDetails(){
        return await req(this.api_key, `tv/${this.id}`);
    }

    async GetAccountStates(){
        return await req(this.api_key, `tv/${this.id}/account_states`);
    }

    async GetAlternativeTitles(){
        return await req(this.api_key, `tv/${this.id}/alternative_titles`)
    }

    async GetChanges(page = 1){
        return await req(this.api_key, `tv/${this.id}/changes`, `page=${page}`)
    }

    async GetContentRatings(){
        return await req(this.api_key, `tv/${this.id}/content_ratings`)
    }

    async GetCredits(){
        return await req(this.api_key, `tv/${this.id}/credits`)
    }

    async GetEpisodeGroups(){
        return await req(this.api_key, `tv/${this.id}/episode_groups`)
    }

    async GetExternalIDs(){
        return await req(this.api_key, `tv/${this.id}/external_ids`)
    }

    async GetImages(){
        return await req(this.api_key, `tv/${this.id}/images`)
    }

    async GetKeywords(){
        return await req(this.api_key, `tv/${this.id}/keywords`)
    }

    async GetRecommendations(page = 1){
        return await req(this.api_key, `tv/${this.id}/recommendations`, `page=${page}`)
    }

    async GetReviews(page = 1){
        return await req(this.api_key, `tv/${this.id}/reviews`, `page=${page}`)
    }

    async GetScreenedTheatrically(){
        return await req(this.api_key, `tv/${this.id}/screened_theatrically`)
    }

    async GetSimilarShows(page = 1){
        return await req(this.api_key, `tv/${this.id}/similar`, `page=${page}`)
    }

    async GetTranslations(){
        return await req(this.api_key, `tv/${this.id}/translations`)
    }

    async GetVideos(){
        return await req(this.api_key, `tv/${this.id}/videos`)
    }

    Season(id){
        return require('./season')(this.api_key, this.id, id)
    }
}


module.exports = function(api_key, showID){
    return new Show(api_key, showID)
}