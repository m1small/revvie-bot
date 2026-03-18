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
    .setDescription(r.description);

  await interaction.reply({ embeds: [embed] });
}
