/**
 * One-time script: posts the rules embeds to #rules.
 * Run after creating the channel:  node src/setup-rules.js
 */
import { Client, GatewayIntentBits, EmbedBuilder } from 'discord.js';
import { config } from 'dotenv';

config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async () => {
  const channelId = process.env.CHANNEL_RULES;
  if (!channelId) {
    console.error('Set CHANNEL_RULES in .env first');
    process.exit(1);
  }

  const channel = await client.channels.fetch(channelId);

  const header = new EmbedBuilder()
    .setColor(0x6C5CE7)
    .setTitle('Community Rules')
    .setDescription(
      `Welcome to the Revenium community. These rules keep the space useful, respectful, and enjoyable for everyone. ` +
      `By participating, you agree to follow them.`
    );

  const conduct = new EmbedBuilder()
    .setColor(0x6C5CE7)
    .setTitle('Conduct')
    .addFields(
      {
        name: '1. Be respectful',
        value: 'Treat everyone with courtesy. Disagree on ideas, not on people. No personal attacks, harassment, hate speech, or discrimination of any kind.',
      },
      {
        name: '2. Keep it professional',
        value: 'This is a professional community. No NSFW content, excessive profanity, or inflammatory behavior. Assume good intent.',
      },
      {
        name: '3. No harassment or bullying',
        value: 'Unwelcome direct messages, repeated pinging, doxxing, or any form of intimidation will result in an immediate ban.',
      },
    );

  const content = new EmbedBuilder()
    .setColor(0x6C5CE7)
    .setTitle('Content')
    .addFields(
      {
        name: '4. Stay on topic',
        value: 'Use the right channel for your message. AI economics, pricing, metering, billing, and building in the relevant channels. Off-topic chat is fine in #general -- just read the room.',
      },
      {
        name: '5. No spam or low-effort promotion',
        value: 'Self-promotion is welcome when it adds value and is relevant to the community. Drive-by link drops, repeated promotions, unsolicited DM marketing, and affiliate spam are not.',
      },
      {
        name: '6. No unapproved bots or automation',
        value: 'Do not add bots, run automated scripts, or scrape content without explicit permission from a moderator.',
      },
      {
        name: '7. Respect intellectual property',
        value: 'Do not share proprietary code, leaked content, or copyrighted material. When sharing resources, credit the source.',
      },
    );

  const safety = new EmbedBuilder()
    .setColor(0x6C5CE7)
    .setTitle('Safety & Privacy')
    .addFields(
      {
        name: '8. Protect privacy',
        value: 'Do not share personal information about yourself or others -- real names, addresses, employers, or credentials -- without consent. Be thoughtful about what you post.',
      },
      {
        name: '9. No security exploits',
        value: 'Do not share active exploits, vulnerabilities, or malicious code. If you find a security issue with Revenium, report it privately to the team.',
      },
    );

  const enforcement = new EmbedBuilder()
    .setColor(0x6C5CE7)
    .setTitle('Enforcement')
    .setDescription(
      `Moderators enforce these rules at their discretion. Depending on severity:\n\n` +
      `**First offense** -- Warning via DM\n` +
      `**Repeated offense** -- Temporary mute or timeout\n` +
      `**Serious or repeated violations** -- Ban\n\n` +
      `If you see a rule being broken, ping a moderator or use Discord's report feature. Do not engage -- let the mod team handle it.\n\n` +
      `Questions? Ask in <#${process.env.CHANNEL_WELCOME}> or DM a moderator.`
    );

  await channel.send({ embeds: [header, conduct, content, safety, enforcement] });
  console.log('Rules embeds posted successfully!');

  client.destroy();
});

client.login(process.env.DISCORD_TOKEN);
