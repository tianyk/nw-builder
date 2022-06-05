/**
 *
 * @param {string} version
 * @param {"linux" | "osx" | "win"} os
 * @returns {string}
 */
const getCacheDir = (version, os) => {
    return `./cache/v${version}/${os}`;
};

export default getCacheDir;