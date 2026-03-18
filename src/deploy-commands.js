/**
 * Run this once (or after adding new commands) to register slash commands with Discord.
 *   node src/deploy-commands.js
 */
import { REST, Routes } from 'discord.js';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readdirSync } from 'fs';

config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const commands = [];
const commandFiles = readdirSync(join(__dirname, 'commands')).filter(f => f.endsWith('.js'));

for (const file of commandFiles) {
  const command = await import(`./commands/${file}`);
  if (command.data) {
    commands.push(command.data.toJSON());
  }
}

const rest = new REST().setToken(process.env.DISCORD_TOKEN);

try {
  console.log(`Registering ${commands.length} slash commands...`);

  // Guild-scoped commands update instantly (global commands take up to 1 hour)
  if (process.env.DISCORD_GUILD_ID) {
    await rest.put(
      Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID, process.env.DISCORD_GUILD_ID),
      { body: commands },
    );
    console.log(`Registered to guild ${process.env.DISCORD_GUILD_ID}`);
  } else {
    await rest.put(
      Routes.applicationCommands(process.env.DISCORD_CLIENT_ID),
      { body: commands },
    );
    console.log('Registered globally (may take up to 1 hour to propagate)');
  }
} catch (error) {
  console.error('Failed to register commands:', error);
}
