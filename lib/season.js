"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("./request");
var episode_1 = require("./episode");
var Season = /** @class */ (function () {
    function Season(apiKey, show, id) {
        var _this = this;
        this.GetDetails = function () {
            return request_1.default(_this.apiKey, "tv/" + _this.show + "/season/" + _this.id);
        };
        this.GetAggregateCredits = function () {
            return request_1.default(_this.apiKey, "tv/" + _this.show + "/season/" + _this.id + "/aggregate_credits");
        };
        this.GetCredits = function () {
            return request_1.default(_this.apiKey, "tv/" + _this.show + "/season/" + _this.id + "/credits");
        };
        this.GetExternalIDs = function () {
            return request_1.default(_this.apiKey, "tv/" + _this.show + "/season/" + _this.id + "/external_ids");
        };
        this.GetImages = function () {
            return request_1.default(_this.apiKey, "tv/" + _this.show + "/season/" + _this.id + "/images");
        };
        this.GetVideos = function () {
            return request_1.default(_this.apiKey, "tv/" + _this.show + "/season/" + _this.id + "/videos");
        };
        this.Episode = function (id) { return new episode_1.default(_this.apiKey, _this.show, _this.id, id); };
        this.id = id;
        this.show = show;
        this.apiKey = apiKey;
    }
    return Season;
}());
exports.default = Season;
