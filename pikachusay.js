#!/usr/bin/env node

const list = process.argv.slice(2);
let pikaSay = [];
for (let word of list) {
  const repeat = Math.ceil(word.length / 4);
  const pikaWord = 'pika'.repeat(repeat);
  pikaSay.push(pikaWord);
}
console.log(`

(( ${pikaSay.join(' ')} ))
      \\
        \/\\---\/\\
     ϞϞ(๑⚈ ․̫ ⚈๑)∩
`);
