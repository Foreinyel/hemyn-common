"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.versionCompare = exports.getNextVersion = void 0;
var assert_1 = __importDefault(require("assert"));
var getNextVersion = function (param) {
    var _a = param || {}, version = _a.version, beta = _a.beta;
    if (!version) {
        return beta ? "1.0.0-beta.0" : "1.0.0";
    }
    var isBeta = version.indexOf("beta") > 0;
    var _b = version.split("-"), versionPart = _b[0], betaPart = _b[1];
    var _c = versionPart.split("."), major = _c[0], minor = _c[1], patch = _c[2];
    var betaNo = isBeta ? betaPart.split(".")[1] : "";
    if (isBeta) {
        return beta ? "".concat(versionPart, "-beta.").concat(parseInt(betaNo) + 1) : versionPart;
    }
    else {
        return beta
            ? "".concat(major, ".").concat(minor, ".").concat(parseInt(patch) + 1, "-beta.0")
            : "".concat(major, ".").concat(minor, ".").concat(parseInt(patch) + 1);
    }
};
exports.getNextVersion = getNextVersion;
/**
 * va > vb
 * @param va
 * @param vb
 */
var versionCompare = function (va, vb) {
    var versionsOfA = va.match(/\d/g);
    var versionsOfB = vb.match(/\d/g);
    assert_1.default.ok((versionsOfA === null || versionsOfA === void 0 ? void 0 : versionsOfA.length) && (versionsOfB === null || versionsOfB === void 0 ? void 0 : versionsOfB.length), "invalid va or vb");
    var times = versionsOfA.length > versionsOfB.length
        ? versionsOfB.length
        : versionsOfA.length;
    var i = 0;
    while (i < times) {
        var a = Number(versionsOfA[i]);
        var b = Number(versionsOfB[i]);
        if (a > b) {
            return true;
        }
        else if (a < b) {
            return false;
        }
        i++;
    }
    return versionsOfA.length > versionsOfB.length ? true : false;
};
exports.versionCompare = versionCompare;
