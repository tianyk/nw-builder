const OPTIONS = {
  mode: "run", // run, build or package
  // Run options
  srcDir: "./src",
  platforms: null,
  cacheDir: "./nw/cache",
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

export default OPTIONS;
