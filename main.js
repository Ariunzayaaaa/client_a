const fs = require('fs');
const dotenv = require('dotenv');
const message = require('./message');

dotenv. config();
function create(name, number) {
    const result = message.create(name, number);
  
    fs.writeFileSync('result.txt', result);
  
    console.log(result.txt);
  }
  
  const name = process.env.NAME;
  const number = process.env.NUMBER;
  
  create(name, number);