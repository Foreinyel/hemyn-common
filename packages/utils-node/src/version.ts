import assert from "assert";

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

/**
 * va > vb
 * @param va
 * @param vb
 */
export const versionCompare = (va: string, vb: string) => {
  const versionsOfA = va.match(/\d/g);
  const versionsOfB = vb.match(/\d/g);
  assert.ok(versionsOfA?.length && versionsOfB?.length, "invalid va or vb");
  let times =
    versionsOfA.length > versionsOfB.length
      ? versionsOfB.length
      : versionsOfA.length;
  let i = 0;
  while (i < times) {
    const a = Number(versionsOfA[i]);
    const b = Number(versionsOfB[i]);
    if (a > b) {
      return true;
    } else if (a < b) {
      return false;
    }
    i++;
  }
  return versionsOfA.length > versionsOfB.length ? true : false;
};
