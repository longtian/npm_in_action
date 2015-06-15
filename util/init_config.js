/**
 * Created by yan on 15-6-15.
 */

var fs = require('fs');
var path = require('path');

var defaultConfigFilePath = path.join(__dirname, "..", "lib", "config.default.js");
var configFilePath = path.join(process.cwd(), 'config.js');

console.dir(process.env);
console.log(defaultConfigFilePath);
console.log(configFilePath);

