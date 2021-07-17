"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("./request");
var show_1 = require("./show");
var TMDBClass = /** @class */ (function () {
    function TMDBClass(apiKey) {
        var _this = this;
        this.Search = function (term, page) {
            if (page === void 0) { page = 1; }
            return request_1.default(_this.apiKey, 'search/tv', "query=" + term.replace(' ', '%20') + "&page=" + page);
        };
        this.GetLatest = function () { return request_1.default(_this.apiKey, 'tv/latest'); };
        this.GetAiringToday = function (page) {
            if (page === void 0) { page = 1; }
            return request_1.default(_this.apiKey, 'tv/airing_today', "page=" + page);
        };
        this.GetOnTheAir = function (page) {
            if (page === void 0) { page = 1; }
            return request_1.default(_this.apiKey, 'tv/on_the_air', "page=" + page);
        };
        this.GetPopular = function (page) {
            if (page === void 0) { page = 1; }
            return request_1.default(_this.apiKey, 'tv/popular', "page=" + page);
        };
        this.GetTopRated = function (page) {
            if (page === void 0) { page = 1; }
            return request_1.default(_this.apiKey, 'tv/top_rated', "page=" + page);
        };
        this.Show = function (id) { return new show_1.default(_this.apiKey, id); };
        this.apiKey = apiKey;
    }
    return TMDBClass;
}());
var TMDB = function (apiKey) { return new TMDBClass(apiKey); };
exports.default = TMDB;
