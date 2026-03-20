/**
 * Keyword-to-documentation topic mapping.
 * /ask matches user questions to the most relevant doc page.
 * Every topic MUST have a specific doc URL -- never a generic homepage link.
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
    url: 'https://docs.revenium.io/quick-start-guide',
  },
  // AI agent integration
  {
    keywords: ['ai agent', 'llm', 'context7', 'llms.txt', 'openapi', 'model context protocol', 'cursor', 'windsurf', 'copilot', 'cline', 'continue', 'for ai agents', 'agent integration', 'agent docs'],
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
    url: 'https://docs.revenium.io/integration-options-for-ai-metering',
  },
  // Cost analytics
  {
    keywords: ['cost', 'costs', 'spending', 'spend', 'analytics', 'dashboard', 'report', 'breakdown', 'expensive', 'budget', 'how much'],
    title: 'AI Analytics Dashboard',
    description: 'Track AI costs by model, provider, agent, team, customer, product, and API key. Real-time dashboards with summary, customer, product, and agent views.',
    url: 'https://docs.revenium.io/ai-analytics',
  },
  // Anomaly detection & alerts
  {
    keywords: ['anomaly', 'anomalies', 'alert', 'alerts', 'spike', 'unusual', 'notification', 'slack alert', 'budget alert', 'threshold', 'warning'],
    title: 'Cost & Performance Alerts',
    description: 'Configure anomaly detection to catch cost spikes, budget overruns, and unusual patterns. Supports Slack and email notifications with configurable thresholds.',
    url: 'https://docs.revenium.io/cost-and-performance-alerts',
  },
  // Billing & subscriptions
  {
    keywords: ['billing', 'bill', 'invoice', 'subscription', 'subscribe', 'charge', 'payment', 'monetize', 'monetization', 'usage-based', 'usage based'],
    title: 'Building a Usage-Based Product',
    description: 'Create products, assign subscribers, manage invoices, and implement usage-based billing for AI services.',
    url: 'https://docs.revenium.io/ai-and-api-monetization/getting-started/building-a-usage-based-product-in-revenium',
  },
  // Pricing
  {
    keywords: ['pricing', 'price', 'plan', 'plans', 'free', 'tier', 'enterprise', 'how much does revenium cost', 'starter', 'business'],
    title: 'Revenium Pricing',
    description: 'See available plans and pricing. Get your API key at ai.revenium.io.',
    url: 'https://revenium.io/pricing',
  },
  // API key & credentials
  {
    keywords: ['api key', 'apikey', 'credential', 'credentials', 'authenticate', 'authentication', 'sign up', 'signup', 'register'],
    title: 'Get Your API Key',
    description: 'Sign up and get your Revenium API key to start tracking AI costs.',
    url: 'https://app.revenium.ai/sign-up',
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
  // Traces
  {
    keywords: ['trace', 'traces', 'tracing', 'distributed trace', 'call chain', 'critical path', 'circular', 'anomalous trace'],
    title: 'AI Traces',
    description: 'Distributed tracing for AI operations. View the full call chain of any request, identify critical paths, detect circular agent patterns, and find anomalous traces that exceed performance thresholds.',
    url: 'https://docs.revenium.io/ai-analytics',
  },
  // Squads
  {
    keywords: ['squad', 'squads', 'multi-agent', 'multiagent', 'agent group', 'agent workflow', 'execution group'],
    title: 'Squads',
    description: 'Group related agent executions into squads. Track squad-level metrics, view execution timelines, and monitor agent-to-agent interactions across complex workflows.',
    url: 'https://docs.revenium.io/ai-analytics',
  },
  // Agent activity & interactions
  {
    keywords: ['agent activity', 'agent interaction', 'agent performance', 'agent cost', 'agent metric'],
    title: 'Agent Analytics',
    description: 'Monitor individual agent performance -- costs, task completion rates, response times, and interaction patterns. View the agent interaction matrix to understand how agents communicate.',
    url: 'https://docs.revenium.io/ai-analytics',
  },
  // Profit & margin
  {
    keywords: ['profit', 'margin', 'revenue', 'roi', 'return', 'p&l', 'profitability'],
    title: 'Profit & Margin Analysis',
    description: 'Analyze profit margins per customer and per product. Compare AI costs against revenue to track profitability across your portfolio.',
    url: 'https://docs.revenium.io/ai-analytics',
  },
  // Team & org management
  {
    keywords: ['team', 'teams', 'organization', 'org', 'chargeback', 'chargebacks', 'department', 'allocate', 'allocation'],
    title: 'Teams & Cost Allocation',
    description: 'Allocate AI costs across teams and organizations for internal chargebacks. Track spending by team, set budgets, and compare usage across departments.',
    url: 'https://docs.revenium.io/ai-analytics',
  },
  // Claude Code specific
  {
    keywords: ['claude code', 'claude-code', 'claudecode', 'workspace', 'workspaces', 'ai coding'],
    title: 'AI Coding Dashboard',
    description: 'Track Claude Code and AI coding tool usage across workspaces, models, users, and organizations. Monitor call counts, token throughput, and costs.',
    url: 'https://docs.revenium.io/ai-coding-dashboard',
  },
  // Model pricing
  {
    keywords: ['model pricing', 'model cost', 'token cost', 'token pricing', 'input token', 'output token', 'per token'],
    title: 'AI Model Pricing',
    description: 'Configure and track pricing dimensions for AI models. Revenium maintains a global model pricing database and supports custom tenant-specific overrides.',
    url: 'https://revenium.readme.io/reference/get_ai_model_pricing',
  },
  // Charts
  {
    keywords: ['chart', 'charts', 'custom chart', 'visualization', 'graph', 'visualize'],
    title: 'Custom Chart Builder',
    description: 'Build custom charts and save them for reuse. Choose from available metrics, entity types, and grouping options to visualize your AI data.',
    url: 'https://docs.revenium.io/ai-analytics/building-and-managing-charts',
  },
  // OpenTelemetry
  {
    keywords: ['opentelemetry', 'otel', 'otlp integration', 'telemetry'],
    title: 'OpenTelemetry Integration',
    description: 'Ingest AI metrics via OpenTelemetry (OTLP). Send logs, metrics, and traces from any OTLP-compatible source.',
    url: 'https://docs.revenium.io/opentelemetry-integration',
  },
  // Slack integration
  {
    keywords: ['slack', 'slack integration', 'slack notification', 'slack channel'],
    title: 'Slack Integration',
    description: 'Connect Revenium to Slack for cost alerts, anomaly notifications, and chart sharing. Configure channels and notification rules.',
    url: 'https://docs.revenium.io/cost-and-performance-alerts',
  },
  // API reference
  {
    keywords: ['api reference', 'api docs', 'api documentation', 'endpoint', 'endpoints', 'rest api'],
    title: 'API Reference',
    description: 'Complete REST API reference with request/response schemas for all Revenium endpoints.',
    url: 'https://revenium.readme.io/reference/getting-started-with-your-api',
  },
];

/**
 * Match a question to the best topic(s).
 * Multi-word keyword matches score higher than single-word matches
 * to prefer specific topics over broad ones.
 */
export function matchTopics(question, maxResults = 3) {
  const q = question.toLowerCase();
  const scored = topics.map(topic => {
    let score = 0;
    for (const kw of topic.keywords) {
      if (q.includes(kw)) {
        // Multi-word phrases score higher (word count as weight)
        score += kw.split(/\s+/).length;
      }
    }
    return { ...topic, score };
  }).filter(t => t.score > 0);

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, maxResults);
}
