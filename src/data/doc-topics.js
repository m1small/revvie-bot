/**
 * Keyword-to-documentation topic mapping.
 * /ask matches user questions to the most relevant doc page.
 *
 * For human users: links to the specific doc page.
 * For agent/developer users: points to Context7 MCP + Revenium MCP server.
 */

export const topics = [
  // Getting started
  {
    keywords: ['get started', 'getting started', 'quickstart', 'quick start', 'setup', 'install', 'begin', 'new to', 'first time', 'onboard'],
    title: 'Getting Started',
    description: 'The quickstart guide walks you through setup in under 5 minutes.',
    url: 'https://docs.revenium.io/getting-started',
  },
  // AI agent integration
  {
    keywords: ['agent', 'ai agent', 'llm', 'context7', 'llms.txt', 'openapi', 'mcp', 'model context protocol', 'claude', 'cursor', 'windsurf', 'copilot', 'cline', 'continue'],
    title: 'For AI Agents',
    description: 'Agent-optimized documentation access via Context7 MCP, llms.txt, and OpenAPI specs.\n\n' +
      '**Context7 MCP** (recommended for coding agents):\n```json\n{ "context7": { "command": "npx", "args": ["-y", "@upstash/context7-mcp@latest"] } }\n```\n\n' +
      '**Revenium MCP Server** (cost tracking + billing tools):\n```\nclaude mcp add revenium -e REVENIUM_API_KEY=your_key -- uvx revenium-mcp\n```\n\n' +
      '**llms.txt** (paste into any AI chat): `https://revenium.readme.io/llms.txt`',
    url: 'https://docs.revenium.io/for-ai-agents',
  },
  // Metering
  {
    keywords: ['meter', 'metering', 'track', 'tracking', 'log', 'logging', 'record', 'instrument', 'middleware', 'sdk', 'otlp', 'opentelemetry'],
    title: 'AI Metering',
    description: 'Revenium meters AI usage across providers -- completions, images, audio, video, tool calls, and API requests. Use middleware SDKs for automatic instrumentation or the metering API directly.\n\n' +
      'SDKs: Python (OpenAI, Anthropic, Google AI, Ollama, Griptape), npm, and OTLP.',
    url: 'https://docs.revenium.io/ai-metering',
  },
  // Cost analytics
  {
    keywords: ['cost', 'costs', 'spending', 'spend', 'analytics', 'dashboard', 'report', 'breakdown', 'expensive', 'budget', 'how much'],
    title: 'Cost Analytics',
    description: 'Track AI costs by model, provider, agent, team, customer, product, and API key. Revenium provides real-time dashboards and API endpoints for cost breakdowns across every dimension.',
    url: 'https://docs.revenium.io',
  },
  // Anomaly detection & alerts
  {
    keywords: ['anomaly', 'anomalies', 'alert', 'alerts', 'spike', 'unusual', 'notification', 'slack alert', 'budget alert', 'threshold', 'warning'],
    title: 'Alerts & Anomaly Detection',
    description: 'Configure anomaly detection to catch cost spikes, budget overruns, and unusual patterns. Supports Slack and email notifications with configurable thresholds.\n\nMonitor budget consumption with portfolio-level risk assessment.',
    url: 'https://docs.revenium.io',
  },
  // Billing & subscriptions
  {
    keywords: ['billing', 'bill', 'invoice', 'subscription', 'subscribe', 'charge', 'payment', 'monetize', 'monetization', 'usage-based', 'usage based'],
    title: 'Billing & Subscriptions',
    description: 'Manage subscriptions, invoices, and usage-based billing. Create products, assign subscribers, and track billed amounts and quota consumption.',
    url: 'https://docs.revenium.io',
  },
  // Pricing
  {
    keywords: ['pricing', 'price', 'plan', 'plans', 'free', 'tier', 'enterprise', 'how much does revenium cost', 'starter', 'business'],
    title: 'Revenium Pricing',
    description: 'See available plans and pricing at revenium.io/pricing. Get your API key at ai.revenium.io.',
    url: 'https://revenium.io/pricing',
  },
  // API key & credentials
  {
    keywords: ['api key', 'apikey', 'key', 'credential', 'credentials', 'authenticate', 'authentication', 'token', 'sign up', 'signup', 'register'],
    title: 'API Key & Authentication',
    description: 'Get your Revenium API key at [ai.revenium.io](https://ai.revenium.io). Manage credentials through the platform or API.',
    url: 'https://ai.revenium.io',
  },
  // GitHub & open source
  {
    keywords: ['github', 'open source', 'opensource', 'repo', 'repository', 'source code', 'contribute'],
    title: 'Revenium on GitHub',
    description: 'Open-source repos including the MCP server, SDKs, and middleware libraries.',
    url: 'https://github.com/revenium',
  },
  // MCP server specifically
  {
    keywords: ['mcp server', 'revenium-mcp', 'revenium mcp', 'uvx revenium', 'mcp install', 'mcp setup'],
    title: 'Revenium MCP Server',
    description: 'Connect AI agents to Revenium for cost tracking, alerting, and billing.\n\n' +
      '```\nclaude mcp add revenium -e REVENIUM_API_KEY=your_key -- uvx revenium-mcp\n```\n\n' +
      '**Starter** (7 tools): Cost monitoring, alerts, AI metering\n**Business** (15 tools): + product management, subscriptions, billing',
    url: 'https://github.com/revenium/revenium-mcp',
  },
  // Squads & traces
  {
    keywords: ['squad', 'squads', 'trace', 'traces', 'distributed', 'execution', 'workflow', 'chain', 'multi-agent', 'multiagent'],
    title: 'Squads & Traces',
    description: 'Track multi-agent workflows with distributed tracing. Squads group related executions; traces show the full call chain with critical path analysis and circular pattern detection.',
    url: 'https://docs.revenium.io',
  },
  // Profit & margin
  {
    keywords: ['profit', 'margin', 'revenue', 'roi', 'return', 'p&l', 'profitability'],
    title: 'Profit & Margin Analysis',
    description: 'Analyze profit margins per customer and per product. Compare AI costs against revenue to track profitability across your portfolio.',
    url: 'https://docs.revenium.io',
  },
  // Team & org management
  {
    keywords: ['team', 'teams', 'organization', 'org', 'chargeback', 'chargebacks', 'department', 'allocate', 'allocation'],
    title: 'Teams & Cost Allocation',
    description: 'Allocate AI costs across teams and organizations for internal chargebacks. Track spending by team, set budgets, and compare usage across departments.',
    url: 'https://docs.revenium.io',
  },
  // Claude Code specific
  {
    keywords: ['claude code', 'claude-code', 'claudecode', 'workspace', 'workspaces'],
    title: 'Claude Code Dashboard',
    description: 'Track Claude Code usage across workspaces, models, users, and organizations. Monitor call counts, token throughput, and costs with dedicated Claude Code analytics.',
    url: 'https://docs.revenium.io',
  },
  // Model pricing
  {
    keywords: ['model pricing', 'model cost', 'token cost', 'token pricing', 'input token', 'output token', 'per token'],
    title: 'AI Model Pricing',
    description: 'Configure and track pricing dimensions for AI models. Revenium maintains a global model pricing database and supports custom tenant-specific overrides.',
    url: 'https://docs.revenium.io',
  },
  // Export & S3
  {
    keywords: ['export', 's3', 'aws', 'data export', 'download'],
    title: 'Data Export (S3)',
    description: 'Schedule automated exports of your AI metrics to Amazon S3. Configure destinations, test connections, and trigger manual exports.',
    url: 'https://docs.revenium.io',
  },
];

/**
 * Match a question to the best topic(s).
 * Returns top matches sorted by keyword hit count.
 */
export function matchTopics(question, maxResults = 3) {
  const q = question.toLowerCase();
  const scored = topics.map(topic => {
    const hits = topic.keywords.filter(kw => q.includes(kw)).length;
    return { ...topic, hits };
  }).filter(t => t.hits > 0);

  scored.sort((a, b) => b.hits - a.hits);
  return scored.slice(0, maxResults);
}
