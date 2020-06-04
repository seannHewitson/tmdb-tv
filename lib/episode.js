var req = require('./req');

class Episode {
    constructor(api_key, showID, seasonID, episodeID){
        this.api_key = api_key;
        this.showID = showID;
        this.seasonID = seasonID;
        this.id = episodeID;
    }

    async GetDetails(){
        return await req(this.api_key, `tv/${this.showID}/season/${this.seasonID}/episode/${this.id}`);
    }

    async GetAccountStates(){
        return await req(this.api_key, `tv/${this.showID}/season/${this.seasonID}/episode/${this.id}/account_states`);
    }

    async GetCredits(){
        return await req(this.api_key, `tv/${this.showID}/season/${this.seasonID}/episode/${this.id}/credits`);
    }

    async GetExternalIDs(){
        return await req(this.api_key, `tv/${this.showID}/season/${this.seasonID}/episode/${this.id}/external_ids`);
    }

    async GetImages(){
        return await req(this.api_key, `tv/${this.showID}/season/${this.seasonID}/episode/${this.id}/images`);
    }

    async GetTranslations(){
        return await req(this.api_key, `tv/${this.showID}/season/${this.seasonID}/episode/${this.id}/translations`);
    }

    async GetVideos(){
        return await req(this.api_key, `tv/${this.showID}/season/${this.seasonID}/episode/${this.id}/videos`);
    }
}


module.exports = function(api_key, showID, seasonID, episodeID){
    return new Episode(api_key, showID, seasonID, episodeID)
}