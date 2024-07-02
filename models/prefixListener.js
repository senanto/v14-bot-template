const { prefix } = require('../config.json');

module.exports = (client) => {
  client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();
    if (!client.commands.has(cmd)) return;
    const command = client.commands.get(cmd);
    try {
      command.execute(message, args, client); 
    } catch (error) {
      console.error(error);
      message.reply(':x: error');
    }
  });
};
