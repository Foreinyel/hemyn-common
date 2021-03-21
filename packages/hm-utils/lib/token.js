import { localStorage } from "./storage";
export var tokenKey = "auth-token";
export var setToken = function (token) {
    localStorage.set(tokenKey, token);
};
export var getToken = function () {
    return localStorage.get(tokenKey);
};
