process.stdin.resume();
process.stdin.setEncoding('utf8');

var lingeringLine = "";

process.stdin.on('data', function(chunk) {
    lingeringLine = chunk.replace(/([^\n]*)\n/gm, processLine)
});

process.stdin.on('end', processLine);

function processLine (x, line = '') {
  line = lingeringLine + line
  lingeringLine = ''
  console.log(line + '!')
  return ''
}
