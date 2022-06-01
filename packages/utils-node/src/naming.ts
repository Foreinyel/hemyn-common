export const parseResourceName = (name: string) => {
  let newName = name.replace(/@/g, "").replace(/\//g, "_");

  return newName;
};
