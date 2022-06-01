export interface GetNextVersionParam {
  version?: string;
  beta?: boolean;
}

export const getNextVersion = (param?: GetNextVersionParam) => {
  const { version, beta } = param || {};
  if (!version) {
    return beta ? "1.0.0-beta.0" : "1.0.0";
  }
  const isBeta = version.indexOf("beta") > 0;
  const [versionPart, betaPart] = version.split("-");
  const [major, minor, patch] = versionPart.split(".");
  const betaNo = isBeta ? betaPart.split(".")[1] : "";
  if (isBeta) {
    return beta ? `${versionPart}-beta.${parseInt(betaNo) + 1}` : versionPart;
  } else {
    return beta
      ? `${major}.${minor}.${parseInt(patch) + 1}-beta.0`
      : `${major}.${minor}.${parseInt(patch) + 1}`;
  }
};
