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
exports.WrappedSyntheticAggregator = void 0;
// types
var misc_1 = require("../../types/misc");
// utils
var common_1 = require("../../common");
var misc_2 = require("../../utils/misc");
var financial_1 = require("../../utils/financial");
var utils_1 = require("../../utils");
var WrappedSyntheticAggregator = /** @class */ (function () {
    function WrappedSyntheticAggregator(_syntheticAggregatorService) {
        this.syntheticAggregatorService$ = _syntheticAggregatorService;
    }
    WrappedSyntheticAggregator.prototype.getOrCacheMargin = function (_derivative, _overrides) {
        if (_overrides === void 0) { _overrides = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var signer, derivativeHash, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.syntheticAggregatorService$.sdkCtx.getProvider()];
                    case 1:
                        signer = (_a.sent()).getSigner();
                        derivativeHash = (0, financial_1.getDerivativeHash)(_derivative);
                        return [2 /*return*/, this.syntheticAggregatorService$.contract
                                .connect(signer)
                                .getOrCacheMargin(derivativeHash, _derivative, _overrides)];
                    case 2:
                        error_1 = _a.sent();
                        if ((0, misc_1.isErrorReasonExplicit)(error_1)) {
                            if ((0, utils_1.pickError)(error_1.reason)) {
                                throw new common_1.SDKError((0, utils_1.pickError)(error_1.reason));
                            }
                        }
                        if (error_1 instanceof Error) {
                            throw new Error(error_1.message);
                        }
                        throw Error;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WrappedSyntheticAggregator.prototype.getOrCacheSyntheticCache = function (_derivative, _overrides) {
        if (_overrides === void 0) { _overrides = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var signer, derivativeHash, _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.syntheticAggregatorService$.sdkCtx.getProvider()];
                    case 1:
                        signer = (_b.sent()).getSigner();
                        derivativeHash = (0, financial_1.getDerivativeHash)(_derivative);
                        _a = misc_2.struct;
                        return [4 /*yield*/, this.syntheticAggregatorService$.contract
                                .connect(signer)
                                .getOrCacheSyntheticCache(derivativeHash, _derivative, _overrides)];
                    case 2: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                    case 3:
                        error_2 = _b.sent();
                        if ((0, misc_1.isErrorReasonExplicit)(error_2)) {
                            if ((0, utils_1.pickError)(error_2.reason)) {
                                throw new common_1.SDKError((0, utils_1.pickError)(error_2.reason));
                            }
                        }
                        if (error_2 instanceof Error) {
                            throw new Error(error_2.message);
                        }
                        throw Error;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return WrappedSyntheticAggregator;
}());
exports.WrappedSyntheticAggregator = WrappedSyntheticAggregator;
//# sourceMappingURL=wrappedSyntheticAggregator.js.map