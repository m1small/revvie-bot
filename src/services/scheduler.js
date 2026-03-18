import cron from 'node-cron';
import { EmbedBuilder } from 'discord.js';
import { prompts } from '../data/discussion-prompts.js';

let promptIndex = 0;

/**
 * Post the next discussion prompt to #ai-economics.
 * Cycles through the curated list, wrapping around.
 */
async function postDiscussionPrompt(client) {
  const channelId = process.env.CHANNEL_AI_ECONOMICS;
  if (!channelId) {
    console.warn('CHANNEL_AI_ECONOMICS not set -- skipping discussion prompt');
    return;
  }

  const channel = await client.channels.fetch(channelId).catch(() => null);
  if (!channel) {
    console.warn(`Could not fetch channel ${channelId}`);
    return;
  }

  const prompt = prompts[promptIndex % prompts.length];
  promptIndex++;

  const embed = new EmbedBuilder()
    .setColor(0xFD79A8)
    .setTitle(`Discussion: ${prompt.topic}`)
    .setDescription(prompt.question)
    .setFooter({ text: 'Revvie | Weekly discussion prompt' });

  await channel.send({ embeds: [embed] });
  console.log(`Posted discussion prompt #${promptIndex}: ${prompt.topic}`);
}

/**
 * Start all scheduled tasks.
 */
export function startScheduler(client) {
  const schedule = process.env.DISCUSSION_CRON || '0 14 * * 2'; // Default: Tuesday 10am ET (14:00 UTC)

  cron.schedule(schedule, () => {
    postDiscussionPrompt(client).catch(err =>
      console.error('Failed to post discussion prompt:', err)
    );
  });

  console.log(`Discussion prompt scheduler active (cron: ${schedule})`);
}
