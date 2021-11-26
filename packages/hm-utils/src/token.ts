import { USER_TOKEN_KEY } from "./constants";
import { localStorage } from "./storage";

export const tokenKey = USER_TOKEN_KEY;

export const setToken = (token: string) => {
  localStorage.set(USER_TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.get(USER_TOKEN_KEY);
};
