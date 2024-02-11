const dotenv = require('dotenv');
const { Client } = require('discord.js');

dotenv.config();

const { partialsList, intentsList } = require('./modules/clientconfig.js');

const client = new Client({
  partials: [...partialsList],
  intents: [...intentsList],
});

client.on('ready', () => {
  const discriminator = client.user.discriminator;
  console.log(`
    ------------------------------
    |  Online como: ${discriminator ?  `${client.user.username}#${discriminator}` : `${client.user.username}` };
    |  Operando em: ${client.guilds.cache.size} servidores.
    |  Online para: ${client.users.cache.size} Usuários.
    ------------------------------
    |  SERVIDORES ONDE EU ESTOU:
    |  ${client.guilds.cache.map((guild) => guild.name).join('\n      |  ')}
    ------------------------------
  `);
});

client.login(process.env.TOKEN);