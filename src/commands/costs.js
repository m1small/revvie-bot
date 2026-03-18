import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { getCostSummary } from '../services/revenium.js';

export const data = new SlashCommandBuilder()
  .setName('costs')
  .setDescription('Live AI cost summary from Revenium (demo data)')
  .addStringOption(option =>
    option
      .setName('period')
      .setDescription('Time period')
      .addChoices(
        { name: 'Last hour', value: '1h' },
        { name: 'Last 24 hours', value: '24h' },
        { name: 'Last 7 days', value: '7d' },
        { name: 'Last 30 days', value: '30d' },
      )
  );

export async function execute(interaction) {
  await interaction.deferReply();

  const period = interaction.options.getString('period') || '24h';

  try {
    const data = await getCostSummary(period);

    const embed = new EmbedBuilder()
      .setColor(0x00B894)
      .setTitle(`AI Cost Summary -- ${period}`)
      .setDescription(
        `Live data from Revenium's API (the same data the MCP server exposes to AI agents).`
      )
      .setFooter({
        text: 'Revvie | Powered by Revenium MCP -- install: claude mcp add revenium -- uvx revenium-mcp',
      });

    // Format whatever the API returns -- adapt to actual response shape
    if (data.totalCost !== undefined) {
      embed.addFields({ name: 'Total Cost', value: `$${data.totalCost.toFixed(2)}`, inline: true });
    }
    if (data.totalTransactions !== undefined) {
      embed.addFields({ name: 'Transactions', value: data.totalTransactions.toLocaleString(), inline: true });
    }
    if (data.providers) {
      const providerList = Object.entries(data.providers)
        .map(([name, cost]) => `${name}: $${cost.toFixed(2)}`)
        .join('\n');
      embed.addFields({ name: 'By Provider', value: providerList || 'No data' });
    }

    // If the response structure is different, show raw summary
    if (!data.totalCost && !data.providers) {
      embed.addFields({
        name: 'Response',
        value: '```json\n' + JSON.stringify(data, null, 2).slice(0, 1000) + '\n```',
      });
    }

    await interaction.editReply({ embeds: [embed] });
  } catch (err) {
    const errorEmbed = new EmbedBuilder()
      .setColor(0xD63031)
      .setTitle('Could not fetch cost data')
      .setDescription(
        `The Revenium API returned an error. This is a live integration demo.\n\n` +
        `Want to try it yourself? Install the MCP server:\n` +
        '```\nclaude mcp add revenium \\\n  -e REVENIUM_API_KEY=your_key \\\n  -- uvx revenium-mcp\n```\n' +
        `Get your API key at [ai.revenium.io](https://ai.revenium.io)`
      );

    await interaction.editReply({ embeds: [errorEmbed] });
  }
}
