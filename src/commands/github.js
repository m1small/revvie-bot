import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { resources } from '../data/resources.js';

export const data = new SlashCommandBuilder()
  .setName('github')
  .setDescription('Revenium open-source repos and SDKs');

export async function execute(interaction) {
  const r = resources.github;
  const embed = new EmbedBuilder()
    .setColor(0x6C5CE7)
    .setTitle(r.title)
    .setURL(r.url)
    .setDescription(r.description);

  await interaction.reply({ embeds: [embed] });
}
