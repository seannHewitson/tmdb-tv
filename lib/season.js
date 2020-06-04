var req = require('./req');

class Season {
    constructor(api_key, showID, seasonID){
        this.api_key = api_key;
        this.showID = showID;
        this.id = seasonID;
    }

    async GetDetails(){
        return await req(this.api_key, `tv/${this.showID}/season/${this.id}`);
    }

    async GetAccountStates(){
        return await req(this.api_key, `tv/${this.showID}/season/${this.id}/account_states`);
    }
    
    async GetCredits(){
        return await req(this.api_key, `tv/${this.showID}/season/${this.id}/credits`);
    }

    async GetExternalIDs(){
        return await req(this.api_key, `tv/${this.showID}/season/${this.id}/external_ids`);
    }

    async GetImages(){
        return await req(this.api_key, `tv/${this.showID}/season/${this.id}/images`);
    }

    async GetVideos(){
        return await req(this.api_key, `tv/${this.showID}/season/${this.id}/videos`);
    }

    Episode(id){
        return require('./season')(this.api_key, this.showID, this.id, id)
    }
}


module.exports = function(api_key, showID, seasonID){
    return new Season(api_key, showID, seasonID)
}