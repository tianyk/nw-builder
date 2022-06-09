import Options from "../constants/options.js";
import parseOptions from "../utilities/parseOptions.js";
import validateOptions from "../utilities/validateOptions.js";

/**
 *
 * @param {Options} options
 * @returns {Promise<void>}
 */
const nwbuild = async (options) => {
  const parsedOptions = parseOptions(options, Options);

  const validatedOptions = validateOptions(parsedOptions);

  console.log(validatedOptions);
};

export default nwbuild;
