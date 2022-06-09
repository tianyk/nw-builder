import {
  ERROR_OPTIONS_OBJECT_TYPE,
  ERROR_OPTIONS_SRC_DIR_TYPE,
  ERROR_OPTIONS_SRC_DIR_UNDEFINED,
  ERROR_OPTIONS_SRC_DIR_PACKAGE_JSON_NOT_FOUND,
} from "../../src/constants/errors";
import validateOptions from "../../src/utilities/validateOptions";

test("for options to throw error if not of object type", () => {
  const options = () => validateOptions(4);
  expect(options).toThrow(ERROR_OPTIONS_OBJECT_TYPE);
});

test("for options to be of object type and throw error if srcDir is undefined", () => {
  const options = () => validateOptions({});
  expect(options).toThrow(ERROR_OPTIONS_SRC_DIR_UNDEFINED);
});

test("for options to be of object type and throw error if srcDir is not string type", () => {
  const options = () => validateOptions({ srcDir: 2 });
  expect(options).toThrow(ERROR_OPTIONS_SRC_DIR_TYPE);
});

test("for options to be of object type and throw error if srcDir is not found", () => {
  const options = () => validateOptions({ srcDir: "./test/unit/srcc" });
  expect(options).toThrow();
});

test("for options to be of object type and throw error if srcDir is found but package.json not found", () => {
  const options = () => validateOptions({ srcDir: "./test/unit/srcNoPkg" });
  expect(options).toThrow(ERROR_OPTIONS_SRC_DIR_PACKAGE_JSON_NOT_FOUND);
});
