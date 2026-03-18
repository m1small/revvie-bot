import { Events, EmbedBuilder } from 'discord.js';

export const name = Events.GuildMemberAdd;
export const once = false;

export async function execute(member) {
  // --- DM welcome ---
  try {
    const dm = new EmbedBuilder()
      .setColor(0x6C5CE7)
      .setTitle('Welcome to the Revenium community!')
      .setDescription(
        `Hey ${member.displayName} -- glad you're here.\n\n` +
        `This is a community for developers who care about **AI economics**: how AI gets priced, metered, billed, and monetized.\n\n` +
        `A few things to get started:`
      )
      .addFields(
        {
          name: 'Introduce yourself',
          value: `Drop a note in <#${process.env.CHANNEL_INTRODUCTIONS}> -- what you build and what brought you here.`,
        },
        {
          name: 'Join the conversation',
          value: `<#${process.env.CHANNEL_AI_ECONOMICS}> is where the interesting discussions happen.`,
        },
        {
          name: 'Building with Revenium?',
          value: `<#${process.env.CHANNEL_BUILDING}> is the place for technical questions, show-and-tell, and implementation help.`,
        },
        {
          name: 'Useful links',
          value: [
            '[Docs](https://docs.revenium.io)',
            '[GitHub](https://github.com/revenium)',
            '[MCP Server](https://github.com/revenium/revenium-mcp)',
            '[Get API Key](https://ai.revenium.io)',
          ].join(' | '),
        }
      )
      .setFooter({ text: 'Revvie | Type /help in any channel to see what I can do' });

    await member.send({ embeds: [dm] });
  } catch (err) {
    // User has DMs disabled -- that's fine
    console.log(`Could not DM ${member.user.tag} (DMs likely disabled)`);
  }

  // --- Public mention in #introductions ---
  const introChannel = member.guild.channels.cache.get(process.env.CHANNEL_INTRODUCTIONS);
  if (introChannel) {
    await introChannel.send(
      `${member} just joined! Welcome to the AI economics community. ` +
      `Tell us -- what are you building and what brought you here?`
    );
  }
}
