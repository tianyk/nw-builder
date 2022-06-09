/**
 * @type {object}
 * @property {"run" | "build" | "package"} mode
 * @property {string} downloadUrl
 * @property {string} manifestUrl
 * @property {string} srcDir
 * @property {string[]} platforms
 * @property {string} cacheDir
 * @property {"sdk" | "normal"} flavor
 * @property {string} buildDir
 * @property {string} icon
 * @property {string} desktopFile
 * @property {string} plistFile
 * @property {string} winVersionStringFile
 * @property {string} outDir
 * @property {boolean} zip
 */
const Options = {
  mode: "run", // run, build or package
  downloadUrl: "https://dl.nwjs.io",
  manifestUrl: "https://nwjs.io/versions.json",
  // Run options
  platforms: [],
  cacheDir: "./nw/cache",
  flavor: "sdk",
  // Build options
  buildDir: "./nw/build",
  icon: "./nw/favicon.ico",
  desktopFile: "./nw/.desktop",
  plistFile: "./nw/Info.plist",
  winVersionStringFile: "./nw/WinVersionString",
  // Package options
  outDir: "./nw/packages",
  zip: false,
};

export default Options;
