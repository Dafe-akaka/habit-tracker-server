const db = require('./init.js');
const fs = require('fs');

const seeds = fs.readFileSync(__dirname + '/db.sql').toString();

// ToDo: Add extra query info here
db.query(seeds, () => console.log('Dev database seeding has been attempted'));
