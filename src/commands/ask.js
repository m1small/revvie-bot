import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { matchTopics } from '../data/doc-topics.js';

export const data = new SlashCommandBuilder()
  .setName('ask')
  .setDescription('Ask Revvie anything about Revenium -- matched to the right docs')
  .addStringOption(option =>
    option
      .setName('question')
      .setDescription('Your question about Revenium')
      .setRequired(true)
  );

export async function execute(interaction) {
  const question = interaction.options.getString('question');
  const matches = matchTopics(question);

  if (matches.length === 0) {
    const embed = new EmbedBuilder()
      .setColor(0xFDAA5B)
      .setTitle('Hmm, I\'m not sure about that one')
      .setDescription(
        'I couldn\'t match your question to a specific doc. Here are some ways to find what you need:\n\n' +
        '**Browse the docs:** [docs.revenium.io](https://docs.revenium.io)\n' +
        '**For AI agents:** [docs.revenium.io/for-ai-agents](https://docs.revenium.io/for-ai-agents)\n' +
        '**Ask the community:** post your question in a channel and someone will help!'
      )
      .setFooter({ text: 'Revvie | Try /docs, /explain, or /resources' });

    await interaction.reply({ embeds: [embed], ephemeral: true });
    return;
  }

  const top = matches[0];
  const embed = new EmbedBuilder()
    .setColor(0x6C5CE7)
    .setTitle(top.title)
    .setURL(top.url)
    .setDescription(top.description);

  // Always show an explicit read-more link
  embed.addFields({ name: 'Read more', value: `[${top.url.replace('https://', '')}](${top.url})` });

  // Show related topics from the topic's defined relationships
  if (top.resolvedRelated && top.resolvedRelated.length > 0) {
    const related = top.resolvedRelated
      .slice(0, 4)
      .map(m => `[${m.title}](${m.url})`)
      .join('\n');
    embed.addFields({ name: 'Related', value: related });
  }

  embed.setFooter({ text: 'Revvie | /ask <question> to find the right doc' });

  await interaction.reply({ embeds: [embed] });
}
