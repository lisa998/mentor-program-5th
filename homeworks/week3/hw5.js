const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => {
  solve(lines)
})

function solve(lines) {
  for (let i = 1; i <= lines[0]; i++) {
    const [A, B, K] = lines[i].split(' ')
    const n = A.length - B.length
    if (K === 1) {
      if (n > 0) {
        console.log('A')
        continue
      } else if (n < 0) {
        console.log('B')
        continue
      } else {
        let c = 0
        for (let j = 0; j < A.length; j++) {
          if (A[j] === B[j]) {
            continue
          } else if (A[j] > B[j]) {
            c++
            console.log('A')
            break
          } else {
            c++
            console.log('B')
            break
          }
        }
        if (c === 0) {
          console.log('DRAW')
        }
      }
    } else {
      if (n > 0) {
        console.log('B')
        continue
      } else if (n < 0) {
        console.log('A')
        continue
      } else {
        let c = 0
        for (let j = 0; j < A.length; j++) {
          if (A[j] === B[j]) {
            continue
          } else if (A[j] > B[j]) {
            console.log('B')
            c++
            break
          } else {
            console.log('A')
            c++
            break
          }
        }
        if (c === 0) {
          console.log('DRAW')
        }
      }
    }
  }
}
