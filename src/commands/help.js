import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('help')
  .setDescription('See what Revvie can do');

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor(0x6C5CE7)
    .setTitle('Revvie -- your AI economics companion')
    .setDescription('Here\'s what I can help with:')
    .addFields(
      {
        name: '/docs',
        value: 'Revenium documentation',
        inline: true,
      },
      {
        name: '/quickstart',
        value: 'Get started in 5 minutes',
        inline: true,
      },
      {
        name: '/github',
        value: 'Open-source repos & SDKs',
        inline: true,
      },
      {
        name: '/mcp',
        value: 'MCP server setup guide',
        inline: true,
      },
      {
        name: '/explain <concept>',
        value: 'AI economics concepts explained',
        inline: true,
      },
      {
        name: '/resources',
        value: 'All links in one place',
        inline: true,
      },
    )
    .setFooter({ text: 'Revvie | Revenium community bot' });

  await interaction.reply({ embeds: [embed], ephemeral: true });
}
