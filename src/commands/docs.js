import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { resources } from '../data/resources.js';

export const data = new SlashCommandBuilder()
  .setName('docs')
  .setDescription('Link to Revenium documentation');

export async function execute(interaction) {
  const r = resources.docs;
  const embed = new EmbedBuilder()
    .setColor(0x6C5CE7)
    .setTitle(r.title)
    .setURL(r.url)
    .setDescription(r.description)
    .addFields(
      {
        name: 'For AI Agents (recommended)',
        value: '[docs.revenium.io/for-ai-agents](https://docs.revenium.io/for-ai-agents)\nContext7 MCP, llms.txt, and OpenAPI specs for accurate AI-generated code.',
      },
      {
        name: 'Context7 MCP Setup',
        value: '```json\n{ "context7": { "command": "npx", "args": ["-y", "@upstash/context7-mcp@latest"] } }\n```',
      },
      {
        name: 'llms.txt (paste into any AI chat)',
        value: '`https://revenium.readme.io/llms.txt`',
        inline: true,
      },
    );

  await interaction.reply({ embeds: [embed] });
}
