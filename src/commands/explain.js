import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { concepts } from '../data/resources.js';

// --- Categorized topic menu for browsing ---
const categories = [
  {
    name: 'Foundational',
    keys: ['ai-economics', 'token-pricing', 'cost-per-request'],
  },
  {
    name: 'The MPM Framework',
    keys: ['measure', 'prove', 'monetize', 'tci', 'agent-debt', 'agentic-capital', 'economic-proof', 'ai-roi'],
  },
  {
    name: 'The Problem',
    keys: ['shadow-ai', 'agent-sprawl', 'trust-tax', 'runaway-cost'],
  },
  {
    name: 'Operations',
    keys: ['cost-attribution', 'metering', 'usage-based-billing', 'chargebacks', 'margin-analysis', 'anomaly-detection', 'agentic-governance', 'autonomous-job', 'finops-for-ai'],
  },
];

// --- Featured concepts shown when autocomplete input is empty ---
const featured = ['ai-economics', 'agent-debt', 'tci', 'measure', 'prove', 'monetize'];

function fuzzyMatch(query, text) {
  return text.toLowerCase().includes(query.toLowerCase());
}

export const data = new SlashCommandBuilder()
  .setName('explain')
  .setDescription('Get a concise explanation of an AI economics concept')
  .addStringOption(option =>
    option
      .setName('concept')
      .setDescription('Which concept? Leave blank to browse all topics.')
      .setRequired(false)
      .setAutocomplete(true)
  );

export async function autocomplete(interaction) {
  const input = interaction.options.getFocused();

  let results;
  if (!input) {
    // Empty input -- show featured concepts
    results = featured
      .filter(k => concepts[k])
      .map(k => ({ name: concepts[k].title, value: k }));
  } else {
    // Fuzzy match against title and key
    results = Object.entries(concepts)
      .filter(([key, val]) => fuzzyMatch(input, val.title) || fuzzyMatch(input, key))
      .slice(0, 25)
      .map(([key, val]) => ({ name: val.title, value: key }));
  }

  await interaction.respond(results);
}

export async function execute(interaction) {
  const key = interaction.options.getString('concept');

  // No concept selected -- show the categorized topic menu
  if (!key) {
    const menu = new EmbedBuilder()
      .setColor(0x6C5CE7)
      .setTitle('AI Economics Topics')
      .setDescription(
        'Browse the topics below, then run `/explain <topic>` to learn more.\n' +
        'Start typing to search -- Revvie will suggest matches.'
      );

    for (const cat of categories) {
      const items = cat.keys
        .filter(k => concepts[k])
        .map(k => `\`${concepts[k].title}\``)
        .join(', ');
      if (items) {
        menu.addFields({ name: cat.name, value: items });
      }
    }

    menu.setFooter({ text: 'Revvie | Curated by the Revenium team -- not AI-generated' });
    await interaction.reply({ embeds: [menu], ephemeral: true });
    return;
  }

  const concept = concepts[key];

  if (!concept) {
    await interaction.reply({
      content: `I don't have an explanation for that yet. Try \`/explain\` with no arguments to browse all topics, or ask in **#ai-economics**.`,
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
