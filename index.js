process.stdin.pipe(require('split')(0, 0, { trailing: false })).on('data', processLine)

function processLine (line) {
  console.log(line + '!')
}