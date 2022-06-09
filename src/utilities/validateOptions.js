import fs from "fs";

import {
  ERROR_OPTIONS_OBJECT_TYPE,
  ERROR_OPTIONS_SRC_DIR_TYPE,
  ERROR_OPTIONS_SRC_DIR_UNDEFINED,
  ERROR_OPTIONS_SRC_DIR_PACKAGE_JSON_NOT_FOUND,
} from "../constants/errors.js";

/**
 *
 * @param {object} options
 * @returns {object}
 */
const validateOptions = (options) => {
  if (typeof options !== "object") {
    throw new Error(ERROR_OPTIONS_OBJECT_TYPE);
  }
  if (typeof options.srcDir === "undefined") {
    throw new Error(ERROR_OPTIONS_SRC_DIR_UNDEFINED);
  }
  if (typeof options.srcDir !== "string") {
    throw new Error(ERROR_OPTIONS_SRC_DIR_TYPE);
  }
  if (typeof options.srcDir === "string") {
    if (!fs.lstatSync(options.srcDir).isDirectory()) {
      throw new Error(ERROR_OPTIONS_SRC_DIR_UNDEFINED);
    }
    if (
      fs.lstatSync(options.srcDir).isDirectory() &&
      !fs.existsSync(`${options.srcDir}/package.json`)
    ) {
      throw new Error(ERROR_OPTIONS_SRC_DIR_PACKAGE_JSON_NOT_FOUND);
    }
  }
  return options;
};

export default validateOptions;
