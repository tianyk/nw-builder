import fs from "fs";
import https from "https";
import zlib from "zlib";

import progress from "cli-progress";

import getCacheDir from "./getCacheDir";
import getNwId from "./getNwId";

/**
 *
 * @param {string} mirror
 * @param {string} version
 * @param {"sdk" | "normal"} flavor
 * @param {"linux" | "osx" | "win"} os
 * @param {"ia32" | "x64"} arch
 * @returns {string}
 */
 const getNw = async (mirror, version, flavor, os, arch) => {
    const bar = new progress.SingleBar({}, progress.Presets.rect);

    const nwId = getNwId(version, flavor, os, arch)
    const nwUrl = `${mirror}/v${version}/${nwId}`;
    const cacheDir = getCacheDir(version, os);

    https.get(nwUrl, (res) => {
      let chunks = 0;
      bar.start(res.headers["content-length"], 0);

      res.on("data", (chunk) => {
        chunks += chunk.length;
        bar.increment();
        bar.update(chunks);
      });

      res.on("end", () => {
        bar.stop();
      });

      fs.mkdirSync(cacheDir, { recursive: true });
      const stream = fs.createWriteStream(`${cacheDir}/${nwId}`);
      res.pipe(stream);
    });
  };

export default getNw;