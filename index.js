var loaderUtils = require('loader-utils');
var neon = require('neon-js');

module.exports = function (source) {
	var options = loaderUtils.getOptions(this) || {};
	var output = options.forceObject ? neon.OUTPUT_OBJECT : neon.OUTPUT_AUTO;
	var value = typeof source === "string" ? neon.decode(source, output) : source;
	return `module.exports = ${JSON.stringify(value)};`;
};
