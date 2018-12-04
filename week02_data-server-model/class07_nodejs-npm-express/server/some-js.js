// import fs from 'fs';
const fs = require('fs');

const x = 12;
const y = 3;

console.log('hello, I am JavaScript running in node', x + y);

// don't use sync methods in production!
fs.writeFileSync('hello.txt', 'I am some text for the file');