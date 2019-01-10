process.stdin.resume();
process.stdin.setEncoding('utf8');

var lingeringLine = "";

process.stdin.on('data', function(chunk) {
    var p = -1, s
    while (~(p = chunk.indexOf("\n", s = p+1))) {
      processLine(chunk.slice(s, p))
    }
    lingeringLine = chunk.slice(s)
});

process.stdin.on('end', processLine);

function processLine (line = '') {
  line = lingeringLine + line
  lingeringLine = ''
  console.log(line + '!')
  return ''
}
