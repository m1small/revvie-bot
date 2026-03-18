import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { getAnomalies } from '../services/revenium.js';

export const data = new SlashCommandBuilder()
  .setName('anomalies')
  .setDescription('Detect AI cost anomalies with Revenium (demo data)')
  .addStringOption(option =>
    option
      .setName('period')
      .setDescription('Time period to scan')
      .addChoices(
        { name: 'Last 24 hours', value: '24h' },
        { name: 'Last 7 days', value: '7d' },
        { name: 'Last 30 days', value: '30d' },
      )
  );

export async function execute(interaction) {
  await interaction.deferReply();

  const period = interaction.options.getString('period') || '7d';

  try {
    const data = await getAnomalies(period);

    const embed = new EmbedBuilder()
      .setColor(0xFDAA5B)
      .setTitle(`Cost Anomaly Detection -- ${period}`)
      .setDescription(
        `Live anomaly scan from Revenium. This is the same analysis the MCP server provides to AI agents.`
      )
      .setFooter({
        text: 'Revvie | Powered by Revenium MCP',
      });

    if (Array.isArray(data.anomalies) && data.anomalies.length > 0) {
      const anomalyList = data.anomalies
        .slice(0, 5) // Show top 5
        .map((a, i) => {
          const parts = [`**${i + 1}.**`];
          if (a.dimension) parts.push(`${a.dimension}:`);
          if (a.value) parts.push(`\`${a.value}\``);
          if (a.cost) parts.push(`-- $${a.cost.toFixed(2)}`);
          if (a.deviation) parts.push(`(${a.deviation}x normal)`);
          return parts.join(' ');
        })
        .join('\n');
      embed.addFields({ name: 'Anomalies Found', value: anomalyList });
    } else if (Array.isArray(data.anomalies)) {
      embed.addFields({ name: 'Result', value: 'No anomalies detected. Your AI spending looks normal.' });
    } else {
      embed.addFields({
        name: 'Response',
        value: '```json\n' + JSON.stringify(data, null, 2).slice(0, 1000) + '\n```',
      });
    }

    await interaction.editReply({ embeds: [embed] });
  } catch (err) {
    const errorEmbed = new EmbedBuilder()
      .setColor(0xD63031)
      .setTitle('Could not run anomaly detection')
      .setDescription(
        `Try it yourself with the MCP server:\n` +
        '```\nclaude mcp add revenium \\\n  -e REVENIUM_API_KEY=your_key \\\n  -- uvx revenium-mcp\n```\n' +
        `Then ask your AI agent: *"Analyze cost anomalies in the last 7 days"*`
      );

    await interaction.editReply({ embeds: [errorEmbed] });
  }
}
