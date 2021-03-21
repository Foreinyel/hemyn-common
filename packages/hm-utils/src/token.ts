import { localStorage } from "./storage";

export const tokenKey = "auth-token";

export const setToken = (token: string) => {
  localStorage.set(tokenKey, token);
};

export const getToken = () => {
  return localStorage.get(tokenKey);
};
