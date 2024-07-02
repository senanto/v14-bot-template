const { Client, Partials } = require('discord.js');
const client = new Client({
  intents: 131071,
  partials: Object.values(Partials).filter(x => typeof x === "string"), 
  shards: 'auto'
});

const listeners = require('./models/prefixListener.js');
const commandHandler = require('./handler/commandHandler');
const token = require('./models/tokenVerify.js');

require('./server/index.js');

client.once('ready', () => {
  console.log(`[ ONLINE ] - ${client.user.tag}`);
  console.log('[ OWNER ] - senanto');
});

commandHandler(client);
listeners(client);

client.login(token);
