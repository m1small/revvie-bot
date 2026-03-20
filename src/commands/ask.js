import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import Anthropic from '@anthropic-ai/sdk';
import { getDocsContext } from '../services/docs.js';

const anthropic = new Anthropic();

export const data = new SlashCommandBuilder()
  .setName('ask')
  .setDescription('Ask Revvie anything about Revenium -- powered by live documentation')
  .addStringOption(option =>
    option
      .setName('question')
      .setDescription('Your question about Revenium')
      .setRequired(true)
  );

export async function execute(interaction) {
  await interaction.deferReply();

  const question = interaction.options.getString('question');

  try {
    const docsContext = await getDocsContext();

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: `You are Revvie, the Revenium community bot on Discord. You answer questions about Revenium using the official documentation provided below.

Rules:
- Answer based on the documentation. If the docs don't cover the question, say so honestly.
- Be concise -- Discord embeds have character limits. Aim for 1-3 short paragraphs.
- Never make up features or capabilities not in the docs.
- For code examples, keep them short and practical.

Linking strategy:
- For human users asking about features, setup, or concepts: link them to the specific documentation page that answers their question (e.g., https://docs.revenium.io/getting-started, https://docs.revenium.io/ai-metering).
- For questions about AI agent integration, coding with Revenium, or building with LLMs: point them to Context7 MCP for real-time doc access and the Revenium MCP server (https://github.com/revenium/revenium-mcp) for cost tracking and billing tools.
- For pricing questions: direct to https://revenium.io/pricing or https://ai.revenium.io

Documentation:
${docsContext}`,
      messages: [{ role: 'user', content: question }],
    });

    const answer = message.content[0].text;

    // Discord embed description limit is 4096 chars
    const trimmed = answer.length > 4000
      ? answer.slice(0, 3997) + '...'
      : answer;

    const embed = new EmbedBuilder()
      .setColor(0x6C5CE7)
      .setTitle('Revvie')
      .setDescription(trimmed)
      .setFooter({ text: 'Powered by Revenium docs + Claude | Answers may not be perfect -- check docs.revenium.io' });

    await interaction.editReply({ embeds: [embed] });
  } catch (err) {
    console.error('ask command error:', err);

    const errorEmbed = new EmbedBuilder()
      .setColor(0xD63031)
      .setTitle('Could not answer that right now')
      .setDescription(
        'Something went wrong fetching the answer. Try again, or check the docs directly:\n' +
        '- [Documentation](https://docs.revenium.io)\n' +
        '- [For AI Agents](https://docs.revenium.io/for-ai-agents)\n' +
        '- [GitHub](https://github.com/revenium)'
      );

    await interaction.editReply({ embeds: [errorEmbed] });
  }
}
