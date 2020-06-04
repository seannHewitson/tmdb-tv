var req = require('./req');

class TMDB {
    constructor(api_key){
        this.api_key = api_key;
    }

    async Search(term, page = 1){
        return await req(this.api_key, 'search/tv', `query=${term.replace(' ', '%20')}&page=${page}`);
    }

    async GetLatest(){
        return await req(this.api_key, 'tv/latest')
    }

    async GetAiringToday(page = 1){
        return await req(this.api_key, 'tv/airing_today', `page=${page}`)
    }

    async GetOnTheAir(page = 1){
        return await req(this.api_key, 'tv/on_the_air', `page=${page}`)
    }
    
    async GetPopular(page = 1){
        return await req(this.api_key, 'tv/popular', `page=${page}`)
    }

    async GetTopRated(page = 1){
        return await req(this.api_key, 'tv/top_rated', `page=${page}`)
    }

    Show(id){
        return require('./show')(this.api_key, id)
    }
}

module.exports = function(api_key){
    return new TMDB(api_key)
}