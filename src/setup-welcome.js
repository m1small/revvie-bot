/**
 * One-time script: posts the welcome embed to #welcome.
 * Run after creating the channel:  node src/setup-welcome.js
 */
import { Client, GatewayIntentBits, EmbedBuilder } from 'discord.js';
import { config } from 'dotenv';

config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async () => {
  const channelId = process.env.CHANNEL_WELCOME;
  if (!channelId) {
    console.error('Set CHANNEL_WELCOME in .env first');
    process.exit(1);
  }

  const channel = await client.channels.fetch(channelId);

  // --- Main welcome embed ---
  const welcome = new EmbedBuilder()
    .setColor(0x6C5CE7)
    .setTitle('Welcome to the Revenium Community')
    .setDescription(
      `This is the home for developers building the economics layer of AI.\n\n` +
      `**Revenium** is the AI Economic Control System -- cost tracking, anomaly detection, ` +
      `usage-based billing, and monetization for AI-powered products. ` +
      `We built it because AI costs are unpredictable, invisible, and hard to turn into revenue.\n\n` +
      `**This community** is for anyone who cares about the intersection of AI and economics: ` +
      `how AI gets priced, metered, billed, and monetized. Whether you're building with Revenium ` +
      `or just thinking about these problems -- you're in the right place.`
    );

  // --- What you'll find here ---
  const channels = new EmbedBuilder()
    .setColor(0x6C5CE7)
    .setTitle('What you\'ll find here')
    .addFields(
      {
        name: '#introductions',
        value: 'Say hello. Tell us what you build and what brought you here.',
      },
      {
        name: '#ai-economics',
        value: 'The main discussion channel. AI pricing, API monetization, cost modeling, LLM economics, metering, billing -- the topics that keep us up at night.',
      },
      {
        name: '#building-with-revenium',
        value: 'Technical questions, implementation help, and show-and-tell. Builders helping builders.',
      },
      {
        name: '#announcements',
        value: 'Product updates, blog posts, and events. Low frequency, high signal.',
      },
    );

  // --- Quick links ---
  const links = new EmbedBuilder()
    .setColor(0x6C5CE7)
    .setTitle('Quick Links')
    .setDescription(
      [
        '[Documentation](https://docs.revenium.io) -- Full platform docs',
        '[Quickstart](https://docs.revenium.io/getting-started) -- Up and running in 5 minutes',
        '[GitHub](https://github.com/revenium) -- Open-source repos, MCP server, SDKs',
        '[MCP Server](https://github.com/revenium/revenium-mcp) -- Connect AI agents to Revenium',
        '[Get API Key](https://ai.revenium.io) -- Sign up and start tracking',
      ].join('\n')
    );

  // --- Rules ---
  const rules = new EmbedBuilder()
    .setColor(0x6C5CE7)
    .setTitle('Community Guidelines')
    .setDescription(
      `**Be respectful.** Disagree on ideas, not on people.\n\n` +
      `**Stay on topic.** AI economics, pricing, metering, billing, and building. ` +
      `Off-topic is fine in moderation -- just read the room.\n\n` +
      `**No spam.** Self-promotion is welcome if it's relevant and adds value. ` +
      `Drive-by link drops aren't.\n\n` +
      `**Ask Revvie.** Type \`/help\` in any channel to see what our bot can do. ` +
      `Revvie knows AI economics concepts, has all the resource links, and posts ` +
      `weekly discussion prompts to keep the conversation going.`
    );

  await channel.send({ embeds: [welcome, channels, links, rules] });
  console.log('Welcome embeds posted successfully!');

  client.destroy();
});

client.login(process.env.DISCORD_TOKEN);
