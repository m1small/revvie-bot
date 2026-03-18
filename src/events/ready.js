import { Events } from 'discord.js';

export const name = Events.ClientReady;
export const once = true;

export async function execute(client) {
  console.log(`Revvie is online as ${client.user.tag}`);
  console.log(`Serving ${client.guilds.cache.size} guild(s)`);

  client.user.setActivity('AI economics | /help', { type: 3 }); // Watching
}
