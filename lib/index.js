"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockTMDB = void 0;
var axios_1 = require("axios");
var mock_1 = require("./mock");
exports.MockTMDB = mock_1.default;
axios_1.default.defaults.baseURL = 'https://api.themoviedb.org/3/';
var Request = function (apiKey, action, extras) { return __awaiter(void 0, void 0, void 0, function () {
    var uri, response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                uri = action + "?api_key=" + apiKey + "&language=en-US" + (extras ? "&" + extras : '');
                return [4 /*yield*/, axios_1.default.get(uri)];
            case 1:
                response = _a.sent();
                data = response.data;
                return [2 /*return*/, data];
        }
    });
}); };
var TMDBClass = /** @class */ (function () {
    function TMDBClass(apiKey) {
        var _this = this;
        this.Search = function (term, page) {
            if (page === void 0) { page = 1; }
            return Request(_this.apiKey, 'search/tv', "query=" + term.replace(' ', '%20') + "&page=" + page);
        };
        this.GetLatest = function () { return Request(_this.apiKey, 'tv/latest'); };
        this.GetAiringToday = function (page) {
            if (page === void 0) { page = 1; }
            return Request(_this.apiKey, 'tv/airing_today', "page=" + page);
        };
        this.GetOnTheAir = function (page) {
            if (page === void 0) { page = 1; }
            return Request(_this.apiKey, 'tv/on_the_air', "page=" + page);
        };
        this.GetPopular = function (page) {
            if (page === void 0) { page = 1; }
            return Request(_this.apiKey, 'tv/popular', "page=" + page);
        };
        this.GetTopRated = function (page) {
            if (page === void 0) { page = 1; }
            return Request(_this.apiKey, 'tv/top_rated', "page=" + page);
        };
        this.Show = function (id) { return new Show(_this.apiKey, id); };
        this.apiKey = apiKey;
    }
    return TMDBClass;
}());
var TMDB = function (apiKey) { return new TMDBClass(apiKey); };
exports.default = TMDB;
var Show = /** @class */ (function () {
    function Show(apiKey, id) {
        var _this = this;
        this.GetDetails = function () { return Request(_this.apiKey, "tv/" + _this.id); };
        this.GetAggregateCredits = function () {
            return Request(_this.apiKey, "tv/" + _this.id + "/aggregate_credits");
        };
        this.GetContentRatings = function () {
            return Request(_this.apiKey, "tv/" + _this.id + "/content_ratings");
        };
        this.GetCredits = function () { return Request(_this.apiKey, "tv/" + _this.id + "/credits"); };
        this.GetEpisodeGroups = function () {
            return Request(_this.apiKey, "tv/" + _this.id + "/episode_groups");
        };
        this.GetExternalIDs = function () { return Request(_this.apiKey, "tv/" + _this.id + "/external_ids"); };
        this.GetImages = function () { return Request(_this.apiKey, "tv/" + _this.id + "/images"); };
        this.GetKeywords = function () { return Request(_this.apiKey, "tv/" + _this.id + "/keywords"); };
        this.GetRecommendations = function (page) {
            if (page === void 0) { page = 1; }
            return Request(_this.apiKey, "tv/" + _this.id + "/recommendations", "page=" + page);
        };
        this.GetSimilarShows = function (page) {
            if (page === void 0) { page = 1; }
            return Request(_this.apiKey, "tv/" + _this.id + "/similar", "page=" + page);
        };
        this.GetVideos = function () { return Request(_this.apiKey, "tv/" + _this.id + "/videos"); };
        this.Season = function (id) { return new Season(_this.apiKey, _this.id, id); };
        this.id = id;
        this.apiKey = apiKey;
    }
    return Show;
}());
var Season = /** @class */ (function () {
    function Season(apiKey, show, id) {
        var _this = this;
        this.GetDetails = function () {
            return Request(_this.apiKey, "tv/" + _this.show + "/season/" + _this.id);
        };
        this.GetAggregateCredits = function () {
            return Request(_this.apiKey, "tv/" + _this.show + "/season/" + _this.id + "/aggregate_credits");
        };
        this.GetCredits = function () {
            return Request(_this.apiKey, "tv/" + _this.show + "/season/" + _this.id + "/credits");
        };
        this.GetExternalIDs = function () {
            return Request(_this.apiKey, "tv/" + _this.show + "/season/" + _this.id + "/external_ids");
        };
        this.GetImages = function () {
            return Request(_this.apiKey, "tv/" + _this.show + "/season/" + _this.id + "/images");
        };
        this.GetVideos = function () {
            return Request(_this.apiKey, "tv/" + _this.show + "/season/" + _this.id + "/videos");
        };
        this.Episode = function (id) { return new Episode(_this.apiKey, _this.show, _this.id, id); };
        this.id = id;
        this.show = show;
        this.apiKey = apiKey;
    }
    return Season;
}());
var Episode = /** @class */ (function () {
    function Episode(apiKey, show, season, id) {
        var _this = this;
        this.GetDetails = function () {
            return Request(_this.apiKey, "tv/" + _this.show + "/season/" + _this.season + "/episode/" + _this.id);
        };
        this.GetCredits = function () {
            return Request(_this.apiKey, "tv/" + _this.show + "/season/" + _this.season + "/episode/" + _this.id + "/credits");
        };
        this.GetExternalIDs = function () {
            return Request(_this.apiKey, "tv/" + _this.show + "/season/" + _this.season + "/episode/" + _this.id + "/external_ids");
        };
        this.GetImages = function () {
            return Request(_this.apiKey, "tv/" + _this.show + "/season/" + _this.season + "/episode/" + _this.id + "/images");
        };
        this.GetVideos = function () {
            return Request(_this.apiKey, "tv/" + _this.show + "/season/" + _this.season + "/episode/" + _this.id + "/videos");
        };
        this.id = id;
        this.season = season;
        this.show = show;
        this.apiKey = apiKey;
    }
    return Episode;
}());
