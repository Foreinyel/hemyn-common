export const localStorage = {
  set: (key: string, value: any) => {
    if (typeof value === "object") {
      window.localStorage.setItem(key, JSON.stringify(value));
    } else {
      window.localStorage.setItem(key, value);
    }
  },
  get: (key: string) => {
    const value = window.localStorage.getItem(key);
    if (!value) {
      return null;
    }
    try {
      const obj = JSON.parse(value);
      return obj;
    } catch {}
    return value;
  },
};
