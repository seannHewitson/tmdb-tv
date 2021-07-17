"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("./request");
var season_1 = require("./season");
var Show = /** @class */ (function () {
    function Show(apiKey, id) {
        var _this = this;
        this.GetDetails = function () { return request_1.default(_this.apiKey, "tv/" + _this.id); };
        this.GetAggregateCredits = function () {
            return request_1.default(_this.apiKey, "tv/" + _this.id + "/aggregate_credits");
        };
        this.GetContentRatings = function () {
            return request_1.default(_this.apiKey, "tv/" + _this.id + "/content_ratings");
        };
        this.GetCredits = function () { return request_1.default(_this.apiKey, "tv/" + _this.id + "/credits"); };
        this.GetEpisodeGroups = function () {
            return request_1.default(_this.apiKey, "tv/" + _this.id + "/episode_groups");
        };
        this.GetExternalIDs = function () { return request_1.default(_this.apiKey, "tv/" + _this.id + "/external_ids"); };
        this.GetImages = function () { return request_1.default(_this.apiKey, "tv/" + _this.id + "/images"); };
        this.GetKeywords = function () { return request_1.default(_this.apiKey, "tv/" + _this.id + "/keywords"); };
        this.GetRecommendations = function (page) {
            if (page === void 0) { page = 1; }
            return request_1.default(_this.apiKey, "tv/" + _this.id + "/recommendations", "page=" + page);
        };
        this.GetSimilarShows = function (page) {
            if (page === void 0) { page = 1; }
            return request_1.default(_this.apiKey, "tv/" + _this.id + "/similar", "page=" + page);
        };
        this.GetVideos = function () { return request_1.default(_this.apiKey, "tv/" + _this.id + "/videos"); };
        this.Season = function (id) { return new season_1.default(_this.apiKey, _this.id, id); };
        this.id = id;
        this.apiKey = apiKey;
    }
    return Show;
}());
exports.default = Show;
