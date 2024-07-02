require('dotenv').config();

let token = process.env.TOKEN;

if (!token) {
    const config = require('../config.json');
    token = config.token;
}

if (!token) {
    console.error('Token not found');
    process.exit(1);
}

module.exports = token;
