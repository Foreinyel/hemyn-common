import { USER_TOKEN_KEY } from "./constants";
import { localStorage } from "./storage";
export var tokenKey = USER_TOKEN_KEY;
export var setToken = function (token) {
    localStorage.set(USER_TOKEN_KEY, token);
};
export var getToken = function () {
    return localStorage.get(USER_TOKEN_KEY);
};
