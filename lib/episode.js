"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("./request");
var Episode = /** @class */ (function () {
    function Episode(apiKey, show, season, id) {
        var _this = this;
        this.GetDetails = function () {
            return request_1.default(_this.apiKey, "tv/" + _this.show + "/season/" + _this.season + "/episode/" + _this.id);
        };
        this.GetCredits = function () {
            return request_1.default(_this.apiKey, "tv/" + _this.show + "/season/" + _this.season + "/episode/" + _this.id + "/credits");
        };
        this.GetExternalIDs = function () {
            return request_1.default(_this.apiKey, "tv/" + _this.show + "/season/" + _this.season + "/episode/" + _this.id + "/external_ids");
        };
        this.GetImages = function () {
            return request_1.default(_this.apiKey, "tv/" + _this.show + "/season/" + _this.season + "/episode/" + _this.id + "/images");
        };
        this.GetVideos = function () {
            return request_1.default(_this.apiKey, "tv/" + _this.show + "/season/" + _this.season + "/episode/" + _this.id + "/videos");
        };
        this.id = id;
        this.season = season;
        this.show = show;
        this.apiKey = apiKey;
    }
    return Episode;
}());
exports.default = Episode;
