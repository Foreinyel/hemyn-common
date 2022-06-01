"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextVersion = void 0;
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
