import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { concepts } from '../data/resources.js';

const conceptChoices = Object.entries(concepts).map(([key, val]) => ({
  name: val.title,
  value: key,
}));

export const data = new SlashCommandBuilder()
  .setName('explain')
  .setDescription('Get a concise explanation of an AI economics concept')
  .addStringOption(option =>
    option
      .setName('concept')
      .setDescription('Which concept?')
      .setRequired(true)
      .addChoices(...conceptChoices)
  );

export async function execute(interaction) {
  const key = interaction.options.getString('concept');
  const concept = concepts[key];

  if (!concept) {
    await interaction.reply({
      content: `I don't have an explanation for that yet. Try /explain to see available concepts, or ask in <#${process.env.CHANNEL_AI_ECONOMICS}>.`,
      ephemeral: true,
    });
    return;
  }

  const embed = new EmbedBuilder()
    .setColor(0x6C5CE7)
    .setTitle(concept.title)
    .setDescription(concept.explanation);

  if (concept.related?.length) {
    const relatedLinks = concept.related
      .filter(r => concepts[r])
      .map(r => `\`${concepts[r].title}\``)
      .join(', ');
    if (relatedLinks) {
      embed.addFields({ name: 'Related concepts', value: relatedLinks });
    }
  }

  embed.setFooter({ text: 'Revvie | Curated by the Revenium team -- not AI-generated' });

  await interaction.reply({ embeds: [embed] });
}
