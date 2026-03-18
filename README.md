# Revvie -- The Revenium Discord Bot

Revvie is the Revenium community's always-on AI economics companion. Part mascot, part utility, part conversation catalyst. Built on discord.js with the Revenium API as its authoritative backend.

## What Revvie Does

**Welcome greeter** -- DMs new members with community context and posts a prompt in #introductions.

**Resource commands** -- Slash commands for docs, quickstart, GitHub, MCP server setup, and all resources in one place.

**AI economics explainer** -- `/explain <concept>` delivers curated (not AI-generated) explanations of token pricing, metering, chargebacks, anomaly detection, and more.

**Discussion prompts** -- Automated weekly posts in #ai-economics with curated discussion starters about AI pricing, cost modeling, and monetization.

**Live Revenium data** -- `/costs` and `/anomalies` pull live data from the Revenium API (the same surface the MCP server exposes), demonstrating the product in-community.

## Setup

### 1. Create a Discord Application

1. Go to [discord.com/developers/applications](https://discord.com/developers/applications)
2. Click **New Application**, name it "Revvie"
3. Go to **Bot** tab, click **Reset Token**, copy the token
4. Enable these **Privileged Gateway Intents**:
   - Server Members Intent
   - Message Content Intent
5. Go to **OAuth2 > URL Generator**:
   - Scopes: `bot`, `applications.commands`
   - Permissions: `Send Messages`, `Embed Links`, `Read Message History`, `Use Slash Commands`
6. Copy the generated URL and open it to invite Revvie to your server

### 2. Configure Environment

```bash
cp .env.example .env
```

Fill in:
- `DISCORD_TOKEN` -- from step 1
- `DISCORD_CLIENT_ID` -- from the application's General Information page
- `DISCORD_GUILD_ID` -- right-click your server name > Copy Server ID (enable Developer Mode in Discord settings)
- `REVENIUM_API_KEY` -- from [ai.revenium.io](https://ai.revenium.io)
- Channel IDs -- create channels first, then right-click each > Copy Channel ID

### 3. Install & Run

```bash
npm install
node src/deploy-commands.js   # Register slash commands (run once, or after adding new commands)
npm start                      # Start Revvie
```

For development with auto-reload:
```bash
npm run dev
```

### 4. Set Up Welcome Channel

After Revvie is online and channel IDs are configured:
```bash
node src/setup-welcome.js     # Posts the welcome embeds to #welcome (run once)
```

## Project Structure

```
revvie-bot/
  src/
    index.js                 # Bot entry point, loads commands and events
    deploy-commands.js       # Register slash commands with Discord
    setup-welcome.js         # One-time: post welcome embeds
    commands/
      help.js                # /help -- what Revvie can do
      docs.js                # /docs -- documentation link
      quickstart.js          # /quickstart -- getting started
      github.js              # /github -- repos and SDKs
      mcp.js                 # /mcp -- MCP server install guide
      resources.js           # /resources -- all links
      explain.js             # /explain <concept> -- AI economics concepts
      costs.js               # /costs -- live cost summary from Revenium API
      anomalies.js           # /anomalies -- live anomaly detection
    events/
      ready.js               # Bot online confirmation
      guildMemberAdd.js      # Welcome greeter (DM + #introductions)
    services/
      revenium.js            # Revenium API client
      scheduler.js           # Cron-based discussion prompt posting
    data/
      discussion-prompts.js  # 24 curated discussion starters
      resources.js           # Resource links + AI economics concept definitions
```

## Adding Content

**New discussion prompts:** Add to `src/data/discussion-prompts.js`. The scheduler cycles through them in order.

**New concepts:** Add to the `concepts` object in `src/data/resources.js`. They automatically appear in `/explain` choices.

**New resource links:** Add to the `resources` object in `src/data/resources.js`.

## Deployment

Revvie is a single Node.js process. Any hosting that supports Node 18+ works:

- **Railway** -- `npm start` as the start command
- **Fly.io** -- `fly launch`, configure with Dockerfile or buildpack
- **VPS** -- PM2 or systemd to keep it running: `pm2 start src/index.js --name revvie`

Expected cost: $5-10/month.

## Phase Roadmap

This is Phase 1. Future phases per the community strategy doc:

**Phase 2:** Link previews for Revenium content, thread summarizer, role self-assignment

**Phase 3:** RAG-powered "Ask Revvie" (natural language Q&A over Revenium docs), weekly digest, builder spotlight, feedback collector, event reminders

## License

MIT
