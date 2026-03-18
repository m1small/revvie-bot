import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { resources } from '../data/resources.js';

export const data = new SlashCommandBuilder()
  .setName('mcp')
  .setDescription('Revenium MCP server -- connect AI agents to cost tracking & billing');

export async function execute(interaction) {
  const r = resources.mcp;
  const embed = new EmbedBuilder()
    .setColor(0x6C5CE7)
    .setTitle(r.title)
    .setURL(r.url)
    .setDescription(r.description)
    .addFields(
      {
        name: 'Quick install (Claude Code)',
        value: '```\nclaude mcp add revenium \\\n  -e REVENIUM_API_KEY=your_key \\\n  -- uvx revenium-mcp\n```',
      },
      {
        name: 'Profiles',
        value: '**Starter** (7 tools): Cost monitoring, alerts, AI metering\n**Business** (15 tools): + product management, subscriptions, billing',
      },
      {
        name: 'Get your API key',
        value: '[ai.revenium.io](https://ai.revenium.io)',
        inline: true,
      }
    );

  await interaction.reply({ embeds: [embed] });
}
