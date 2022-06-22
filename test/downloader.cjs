var test = require("tape"),
  nock = require("nock"),
  temp = require("@tianyk/temp"),
  path = require("path"),
  fs = require("fs");

temp.track();

var downloader = require("../lib/downloader.cjs");
var fixturesZip = "./test/fixtures/test.zip";
var fixturesZipStrip = "./test/fixtures/test-strip.zip";
var fixturesTar = "./test/fixtures/test.tar.gz";
var isWindows = process.platform === "win32";

test("downloadAndUnpack: zip", function (t) {
  t.plan(isWindows ? 3 : 6);
  nock("https://amazon.s3.nw.com")
    .get("/test.zip")
    .replyWithFile(200, fixturesZip);
  temp.mkdir("tmpcache", function (err, dirPath) {
    downloader
      .downloadAndUnpack(dirPath, "https://amazon.s3.nw.com/test.zip")
      .then(function (files) {
        files.forEach(function (file) {
          t.ok(
            fs.existsSync(path.join(dirPath, file.path)),
            file.path + " unpacked",
          );
        });

        if (!isWindows) {
          t.ok(
            fs.statSync(path.join(dirPath, "file1")).mode.toString(8) == 100444,
            "444 file permission",
          );
          t.ok(
            fs.statSync(path.join(dirPath, "file2")).mode.toString(8) == 100666,
            "666 file permission",
          );
          t.ok(
            fs.statSync(path.join(dirPath, "file3")).mode.toString(8) == 100644,
            "644 file permission",
          ); // DOES NOT WORK ON WINDOWS
        }
      });
  });
});

test("downloadAndUnpack: zip+strip", function (t) {
  t.plan(isWindows ? 3 : 6);
  nock("https://amazon.s3.nw.com")
    .get("/test-strip.zip")
    .replyWithFile(200, fixturesZipStrip);
  temp.mkdir("tmpcache", function (err, dirPath) {
    downloader
      .downloadAndUnpack(dirPath, "https://amazon.s3.nw.com/test-strip.zip")
      .then(function (files) {
        files.forEach(function (file) {
          t.ok(
            fs.existsSync(path.join(dirPath, file.path)),
            file.path + " unpacked",
          );
        });

        if (!isWindows) {
          t.ok(
            fs.statSync(path.join(dirPath, "file1")).mode.toString(8) == 100444,
            "444 file permission",
          );
          t.ok(
            fs.statSync(path.join(dirPath, "file2")).mode.toString(8) == 100666,
            "666 file permission",
          );
          t.ok(
            fs.statSync(path.join(dirPath, "file3")).mode.toString(8) == 100644,
            "644 file permission",
          ); // DOES NOT WORK ON WINDOWS
        }
      });
  });
});

test("downloadAndUnpack: tar", function (t) {
  t.plan(isWindows ? 3 : 6);
  nock("https://amazon.s3.nw.com")
    .get("/test.tar.gz")
    .replyWithFile(200, fixturesTar);
  temp.mkdir("tmpcache", function (err, dirPath) {
    downloader
      .downloadAndUnpack(dirPath, "https://amazon.s3.nw.com/test.tar.gz")
      .then(function (files) {
        files.forEach(function (file) {
          t.ok(
            fs.existsSync(path.join(dirPath, file.path)),
            file.path + " unpacked",
          );
        });

        if (!isWindows) {
          t.ok(
            fs.statSync(path.join(dirPath, "file1")).mode.toString(8) == 100444,
            "444 file permission",
          ); // DOES NOT WORK ON WINDOWS
          t.ok(
            fs.statSync(path.join(dirPath, "file2")).mode.toString(8) == 100666,
            "666 file permission",
          );
          t.ok(
            fs.statSync(path.join(dirPath, "file3")).mode.toString(8) == 100644,
            "644 file permission",
          ); // DOES NOT WORK ON WINDOWS
        }
      });
  });
});

test("Should throw an error if you try to download a file that is not available", function (t) {
  t.plan(2);
  nock("https://doesnot.com").get("/exist.zip").reply(404);
  downloader
    .downloadAndUnpack("/", "https://doesnot.com/exist.zip")
    .catch(function (err) {
      t.equal(err.statusCode, 404, err.msg);
    });
  nock("https://doesnot.com").get("/exist.tar").reply(404);
  downloader
    .downloadAndUnpack("/", "https://doesnot.com/exist.tar")
    .catch(function (err) {
      t.equal(err.statusCode, 404, err.msg);
    });
});
