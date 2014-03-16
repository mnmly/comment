module.exports = comment;

/**
 * @param {String} text
 *
 * @return {String}
 */

function comment(text) {

  var lines = text.split(/\n/);
  var out = lines.map(function(line, i){

    var pad = i === 0 ? '/**' : ' *';
    var count = line.length;
    var regexp;
    var ret;

    if(i === lines.length - 1) {
      pad += '/';
    } else {
      pad += ' ';
    }
  
    if(0 === i && count >= pad.length) {
      ret = pad + '\n * ' + line;
    } else {
      ret = pad + line;
    }

    return ret;
  });

  return out.join('\n');
}

