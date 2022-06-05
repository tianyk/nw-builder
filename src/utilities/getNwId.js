/**
 *
 * @param {string} version
 * @param {"sdk" | "normal"} flavor
 * @param {"linux" | "osx" | "win"} os
 * @param {"ia32" | "x64"} arch
 * @param {boolean} isZipped
 * @returns {string}
 */
const getNwId = (version, flavor, os, arch, isZipped = true) => {
  if (isZipped) {
    return `nwjs-${flavor}-v${version}-${os}-${arch}${
      os === "linux" ? ".tar.gz" : ".zip"
    }`;
  } else {
    return `nwjs-${flavor}-v${version}-${os}-${arch}`;
  }
};

export default getNwId;