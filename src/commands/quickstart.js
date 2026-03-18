import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { resources } from '../data/resources.js';

export const data = new SlashCommandBuilder()
  .setName('quickstart')
  .setDescription('Get started with Revenium in 5 minutes');

export async function execute(interaction) {
  const r = resources.quickstart;
  const embed = new EmbedBuilder()
    .setColor(0x6C5CE7)
    .setTitle(r.title)
    .setURL(r.url)
    .setDescription(r.description);

  await interaction.reply({ embeds: [embed] });
}
