import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { resources } from '../data/resources.js';

export const data = new SlashCommandBuilder()
  .setName('resources')
  .setDescription('All Revenium links in one place');

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor(0x6C5CE7)
    .setTitle('Revenium Resources')
    .setDescription('Everything you need to get started and go deep.')
    .addFields(
      Object.values(resources).map(r => ({
        name: r.title,
        value: `[${r.url.replace('https://', '')}](${r.url})\n${r.description}`,
      }))
    )
    .setFooter({ text: 'Revvie | /help for all commands' });

  await interaction.reply({ embeds: [embed], ephemeral: true });
}
