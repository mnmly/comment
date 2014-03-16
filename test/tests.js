var fs = require('fs');
var text = fs.readFileSync(__dirname + '/test.txt', 'utf-8');
var comment = require('./../');
var out = comment(text);

console.log(out);

