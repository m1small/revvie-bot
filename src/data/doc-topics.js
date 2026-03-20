/**
 * Keyword-to-documentation topic mapping.
 * /ask matches user questions to the most relevant doc page.
 * Every topic MUST have a specific doc URL and related topics.
 *
 * For human users: links to the specific doc page.
 * For agent/developer users: points to Context7 MCP + Revenium MCP server.
 */

export const topics = [
  // === LANGUAGE & FRAMEWORK SDKS ===

  // Python SDK
  {
    keywords: ['python', 'pip', 'pypi', 'revenium-python-sdk', 'python sdk', 'python middleware', 'python application', 'python app'],
    title: 'Python SDK',
    description: 'Revenium Python middleware for automatic AI metering.\n\n' +
      '```bash\npip install revenium-python-sdk[openai]  # or [anthropic], [google-genai], [langchain], [ollama], [fal]\n```\n\n' +
      'Supports: OpenAI, Azure OpenAI, Anthropic, Google Gemini, Vertex AI, LiteLLM, Ollama, Perplexity, Fal.ai, LangChain, and Griptape.',
    url: 'https://docs.revenium.io/integration-options-for-ai-metering',
    related: ['node-sdk', 'go-sdk', 'opentelemetry', 'metering-api'],
  },
  // Node.js SDK
  {
    keywords: ['node', 'nodejs', 'node.js', 'javascript', 'typescript', 'npm', 'node sdk', 'js sdk', 'ts', 'express', 'node application', 'node app'],
    title: 'Node.js SDK',
    description: 'Revenium Node.js middleware for automatic AI metering.\n\n' +
      '```bash\nnpm install @revenium/openai  # or @revenium/anthropic, @revenium/google-vertex, @revenium/google-genai, @revenium/ollama\n```\n\n' +
      'Supports: OpenAI, Azure OpenAI, Anthropic, Google Vertex AI, Google AI SDK, Perplexity, LiteLLM, and Ollama.',
    url: 'https://docs.revenium.io/integration-options-for-ai-metering',
    related: ['python-sdk', 'go-sdk', 'opentelemetry', 'metering-api'],
  },
  // Go SDK
  {
    keywords: ['go', 'golang', 'go sdk', 'go middleware', 'go application', 'go app'],
    title: 'Go SDK',
    description: 'Revenium Go middleware for automatic AI metering. Supports OpenAI, Azure OpenAI, Anthropic, Google, Perplexity, Fal.ai, and Runway.\n\n' +
      'Available on GitHub: [github.com/revenium](https://github.com/orgs/revenium/repositories?q=middleware+go)',
    url: 'https://github.com/orgs/revenium/repositories?q=middleware+go',
    related: ['python-sdk', 'node-sdk', 'opentelemetry', 'metering-api'],
  },
  // n8n
  {
    keywords: ['n8n', 'n8n node', 'n8n integration', 'workflow automation'],
    title: 'n8n Integration',
    description: 'Revenium nodes for n8n workflow automation.\n\n' +
      '```bash\nnpm install n8n-nodes-revenium\n```\n\n' +
      'Add AI cost metering to n8n chat agent workflows.',
    url: 'https://www.npmjs.com/package/n8n-nodes-revenium',
    related: ['node-sdk', 'metering', 'getting-started'],
  },
  // LangChain
  {
    keywords: ['langchain', 'lang chain', 'langchain callback', 'langchain handler'],
    title: 'LangChain Integration',
    description: 'Revenium LangChain callback handler for automatic metering of chains, agents, and tools.\n\n' +
      '```bash\npip install revenium-python-sdk[langchain]\n```\n\n' +
      'Wraps your LangChain calls with `wrap()` to attach the callback handler automatically.',
    url: 'https://docs.revenium.io/integration-options-for-ai-metering',
    related: ['python-sdk', 'metering', 'agent-analytics'],
  },
  // Griptape
  {
    keywords: ['griptape', 'griptape driver'],
    title: 'Griptape Integration',
    description: 'Revenium driver for the Griptape AI framework. Meter Griptape agent executions automatically.',
    url: 'https://docs.revenium.io/integration-options-for-ai-metering',
    related: ['python-sdk', 'metering', 'agent-analytics'],
  },

  // === AI PROVIDER TOPICS ===

  // OpenAI
  {
    keywords: ['openai', 'gpt', 'gpt-4', 'gpt-4o', 'chatgpt', 'azure openai'],
    title: 'OpenAI Integration',
    description: 'Meter OpenAI and Azure OpenAI completions and embeddings.\n\n' +
      '**Python:** `pip install revenium-python-sdk[openai]`\n' +
      '**Node.js:** `npm install @revenium/openai`\n' +
      '**Go:** Available on GitHub',
    url: 'https://docs.revenium.io/integration-options-for-ai-metering',
    related: ['python-sdk', 'node-sdk', 'go-sdk', 'metering'],
  },
  // Anthropic
  {
    keywords: ['anthropic', 'claude api', 'claude sdk', 'claude integration'],
    title: 'Anthropic Integration',
    description: 'Meter Anthropic Claude completions (including via AWS Bedrock).\n\n' +
      '**Python:** `pip install revenium-python-sdk[anthropic]`\n' +
      '**Node.js:** `npm install @revenium/anthropic`\n' +
      '**Go:** Available on GitHub',
    url: 'https://docs.revenium.io/integration-options-for-ai-metering',
    related: ['python-sdk', 'node-sdk', 'claude-code', 'metering'],
  },
  // Google AI
  {
    keywords: ['gemini', 'google ai', 'vertex ai', 'vertex', 'google genai', 'google cloud ai'],
    title: 'Google AI Integration',
    description: 'Meter Google Gemini, Vertex AI, and Google AI SDK completions and embeddings.\n\n' +
      '**Python:** `pip install revenium-python-sdk[google-genai]` or `[google-vertex]`\n' +
      '**Node.js:** `npm install @revenium/google-genai` or `@revenium/google-vertex`',
    url: 'https://docs.revenium.io/integration-options-for-ai-metering',
    related: ['python-sdk', 'node-sdk', 'metering'],
  },
  // Ollama
  {
    keywords: ['ollama', 'local model', 'self-hosted model', 'local llm'],
    title: 'Ollama Integration',
    description: 'Meter local AI models running through Ollama.\n\n' +
      '**Python:** `pip install revenium-python-sdk[ollama]`\n' +
      '**Node.js:** `npm install @revenium/ollama`',
    url: 'https://docs.revenium.io/integration-options-for-ai-metering',
    related: ['python-sdk', 'node-sdk', 'metering'],
  },
  // LiteLLM
  {
    keywords: ['litellm', 'lite llm', 'litellm proxy', 'api gateway', 'gateway'],
    title: 'LiteLLM / API Gateway Integration',
    description: 'Meter AI calls through LiteLLM or LiteLLM Proxy (API gateway).\n\n' +
      '**Python:** `pip install revenium-python-sdk[litellm]` or `[litellm-proxy]`\n' +
      '**Node.js:** `npm install @revenium/litellm`',
    url: 'https://docs.revenium.io/integration-options-for-ai-metering',
    related: ['python-sdk', 'node-sdk', 'metering', 'opentelemetry'],
  },
  // Fal.ai / media
  {
    keywords: ['fal', 'fal.ai', 'image generation', 'video generation', 'audio', 'runway', 'media', 'diffusion'],
    title: 'Image, Video & Audio Metering',
    description: 'Meter AI-generated images, video, and audio through Fal.ai, Runway, and the metering API.\n\n' +
      '**Python:** `pip install revenium-python-sdk[fal]`\n' +
      '**Go:** Fal.ai and Runway support available',
    url: 'https://docs.revenium.io/integration-options-for-ai-metering',
    related: ['python-sdk', 'go-sdk', 'metering-api', 'metering'],
  },

  // === CORE PLATFORM TOPICS ===

  // Getting started
  {
    keywords: ['get started', 'getting started', 'quickstart', 'quick start', 'setup', 'begin', 'new to', 'first time', 'onboard', 'configure', 'configuration', 'config', 'install', 'how do i configure'],
    title: 'Getting Started',
    description: 'The quickstart guide walks you through setup in under 5 minutes.',
    url: 'https://docs.revenium.io/quick-start-guide',
    related: ['python-sdk', 'node-sdk', 'api-key', 'metering'],
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
    related: ['mcp-server', 'api-reference', 'metering'],
  },
  // Metering (general)
  {
    keywords: ['meter', 'metering', 'track', 'tracking', 'log', 'logging', 'record', 'instrument', 'middleware'],
    title: 'AI Metering',
    description: 'Revenium meters AI usage across providers -- completions, images, audio, video, tool calls, and API requests. Use middleware SDKs for automatic instrumentation or the metering API directly.',
    url: 'https://docs.revenium.io/integration-options-for-ai-metering',
    related: ['python-sdk', 'node-sdk', 'go-sdk', 'opentelemetry', 'metering-api'],
  },
  // Metering API (direct)
  {
    keywords: ['metering api', 'meter api', 'rest metering', 'direct api', 'meter_ai_completion', 'meter_event'],
    title: 'AI Metering API',
    description: 'Submit AI completion, image, audio, video, tool call, and generic metering events directly via REST API.',
    url: 'https://revenium.readme.io/reference/meter_ai_completion',
    related: ['metering', 'api-reference', 'python-sdk', 'node-sdk'],
  },
  // Cost analytics
  {
    keywords: ['cost', 'costs', 'spending', 'spend', 'analytics', 'dashboard', 'report', 'breakdown', 'expensive', 'budget', 'how much'],
    title: 'AI Analytics Dashboard',
    description: 'Track AI costs by model, provider, agent, team, customer, product, and API key. Real-time dashboards with summary, customer, product, and agent views.',
    url: 'https://docs.revenium.io/ai-analytics',
    related: ['alerts', 'charts', 'profit', 'teams'],
  },
  // Anomaly detection & alerts
  {
    keywords: ['anomaly', 'anomalies', 'alert', 'alerts', 'spike', 'unusual', 'notification', 'slack alert', 'budget alert', 'threshold', 'warning'],
    title: 'Cost & Performance Alerts',
    description: 'Configure anomaly detection to catch cost spikes, budget overruns, and unusual patterns. Supports Slack and email notifications with configurable thresholds.',
    url: 'https://docs.revenium.io/cost-and-performance-alerts',
    related: ['cost-analytics', 'slack', 'traces'],
  },
  // Billing & subscriptions
  {
    keywords: ['billing', 'bill', 'invoice', 'subscription', 'subscribe', 'charge', 'payment', 'monetize', 'monetization', 'usage-based', 'usage based'],
    title: 'Building a Usage-Based Product',
    description: 'Create products, assign subscribers, manage invoices, and implement usage-based billing for AI services.',
    url: 'https://docs.revenium.io/ai-and-api-monetization/getting-started/building-a-usage-based-product-in-revenium',
    related: ['metering', 'profit', 'pricing'],
  },
  // Pricing
  {
    keywords: ['pricing', 'price', 'plan', 'plans', 'free', 'tier', 'enterprise', 'how much does revenium cost', 'starter', 'business'],
    title: 'Revenium Pricing',
    description: 'See available plans and pricing. Get your API key at ai.revenium.io.',
    url: 'https://revenium.io/pricing',
    related: ['api-key', 'getting-started', 'mcp-server'],
  },
  // API key & credentials
  {
    keywords: ['api key', 'apikey', 'credential', 'credentials', 'authenticate', 'authentication', 'sign up', 'signup', 'register'],
    title: 'Get Your API Key',
    description: 'Sign up and get your Revenium API key to start tracking AI costs.',
    url: 'https://app.revenium.ai/sign-up',
    related: ['getting-started', 'python-sdk', 'node-sdk'],
  },
  // GitHub & open source
  {
    keywords: ['github', 'open source', 'opensource', 'repo', 'repository', 'source code', 'contribute'],
    title: 'Revenium on GitHub',
    description: 'Open-source repos including the MCP server, SDKs, and middleware libraries.',
    url: 'https://github.com/revenium',
    related: ['python-sdk', 'node-sdk', 'go-sdk', 'mcp-server'],
  },
  // MCP server
  {
    keywords: ['mcp server', 'revenium-mcp', 'revenium mcp', 'uvx revenium', 'mcp install', 'mcp setup'],
    title: 'Revenium MCP Server',
    description: 'Connect AI agents to Revenium for cost tracking, alerting, and billing.\n\n' +
      '```\nclaude mcp add revenium -e REVENIUM_API_KEY=your_key -- uvx revenium-mcp\n```\n\n' +
      '**Starter** (7 tools): Cost monitoring, alerts, AI metering\n**Business** (15 tools): + product management, subscriptions, billing',
    url: 'https://github.com/revenium/revenium-mcp',
    related: ['for-ai-agents', 'api-key', 'metering'],
  },
  // Traces
  {
    keywords: ['trace', 'traces', 'tracing', 'distributed trace', 'call chain', 'critical path', 'circular', 'anomalous trace'],
    title: 'AI Traces',
    description: 'Distributed tracing for AI operations. View the full call chain of any request, identify critical paths, detect circular agent patterns, and find anomalous traces that exceed performance thresholds.',
    url: 'https://docs.revenium.io/ai-analytics',
    related: ['squads', 'agent-analytics', 'opentelemetry'],
  },
  // Squads
  {
    keywords: ['squad', 'squads', 'multi-agent', 'multiagent', 'agent group', 'agent workflow', 'execution group'],
    title: 'Squads',
    description: 'Group related agent executions into squads. Track squad-level metrics, view execution timelines, and monitor agent-to-agent interactions across complex workflows.',
    url: 'https://docs.revenium.io/ai-analytics',
    related: ['traces', 'agent-analytics', 'cost-analytics'],
  },
  // Agent activity & interactions
  {
    keywords: ['agent activity', 'agent interaction', 'agent performance', 'agent cost', 'agent metric'],
    title: 'Agent Analytics',
    description: 'Monitor individual agent performance -- costs, task completion rates, response times, and interaction patterns. View the agent interaction matrix to understand how agents communicate.',
    url: 'https://docs.revenium.io/ai-analytics',
    related: ['traces', 'squads', 'cost-analytics'],
  },
  // Profit & margin
  {
    keywords: ['profit', 'margin', 'revenue', 'roi', 'return', 'p&l', 'profitability'],
    title: 'Profit & Margin Analysis',
    description: 'Analyze profit margins per customer and per product. Compare AI costs against revenue to track profitability across your portfolio.',
    url: 'https://docs.revenium.io/ai-analytics',
    related: ['cost-analytics', 'billing', 'charts'],
  },
  // Team & org management
  {
    keywords: ['team', 'teams', 'organization', 'org', 'chargeback', 'chargebacks', 'department', 'allocate', 'allocation'],
    title: 'Teams & Cost Allocation',
    description: 'Allocate AI costs across teams and organizations for internal chargebacks. Track spending by team, set budgets, and compare usage across departments.',
    url: 'https://docs.revenium.io/ai-analytics',
    related: ['cost-analytics', 'alerts', 'billing'],
  },
  // Claude Code specific
  {
    keywords: ['claude code', 'claude-code', 'claudecode', 'workspace', 'workspaces', 'ai coding', 'gemini cli'],
    title: 'AI Coding Dashboard',
    description: 'Track Claude Code and AI coding tool usage across workspaces, models, users, and organizations. Monitor call counts, token throughput, and costs.',
    url: 'https://docs.revenium.io/ai-coding-dashboard',
    related: ['opentelemetry', 'cost-analytics', 'anthropic'],
  },
  // Model pricing
  {
    keywords: ['model pricing', 'model cost', 'token cost', 'token pricing', 'input token', 'output token', 'per token'],
    title: 'AI Model Pricing',
    description: 'Configure and track pricing dimensions for AI models. Revenium maintains a global model pricing database and supports custom tenant-specific overrides.',
    url: 'https://revenium.readme.io/reference/get_ai_model_pricing',
    related: ['cost-analytics', 'metering', 'api-reference'],
  },
  // Charts
  {
    keywords: ['chart', 'charts', 'custom chart', 'visualization', 'graph', 'visualize'],
    title: 'Custom Chart Builder',
    description: 'Build custom charts and save them for reuse. Choose from available metrics, entity types, and grouping options to visualize your AI data.',
    url: 'https://docs.revenium.io/ai-analytics/building-and-managing-charts',
    related: ['cost-analytics', 'profit', 'slack'],
  },
  // OpenTelemetry
  {
    keywords: ['opentelemetry', 'otel', 'otlp', 'otlp integration', 'telemetry'],
    title: 'OpenTelemetry Integration',
    description: 'Ingest AI metrics via OpenTelemetry (OTLP). Send logs, metrics, and traces from any OTLP-compatible source. Works with Claude Code, Gemini CLI, and custom applications.',
    url: 'https://docs.revenium.io/opentelemetry-integration',
    related: ['metering', 'claude-code', 'traces', 'python-sdk'],
  },
  // Slack integration
  {
    keywords: ['slack', 'slack integration', 'slack notification', 'slack channel'],
    title: 'Slack Integration',
    description: 'Connect Revenium to Slack for cost alerts, anomaly notifications, and chart sharing. Configure channels and notification rules.',
    url: 'https://docs.revenium.io/cost-and-performance-alerts',
    related: ['alerts', 'charts', 'cost-analytics'],
  },
  // API reference
  {
    keywords: ['api reference', 'api docs', 'api documentation', 'endpoint', 'endpoints', 'rest api'],
    title: 'API Reference',
    description: 'Complete REST API reference with request/response schemas for all Revenium endpoints.',
    url: 'https://revenium.readme.io/reference/getting-started-with-your-api',
    related: ['metering-api', 'for-ai-agents', 'api-key'],
  },
  // Data export
  {
    keywords: ['export', 's3', 'aws', 'data export', 'download'],
    title: 'Data Export (S3)',
    description: 'Schedule automated exports of your AI metrics to Amazon S3. Configure destinations, test connections, and trigger manual exports.',
    url: 'https://revenium.readme.io/reference/create_s3_export_destination',
    related: ['cost-analytics', 'api-reference'],
  },
];

// Build a lookup map for related topic resolution
const topicBySlug = new Map();
for (const t of topics) {
  // Generate a slug from the title
  const slug = t.title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  topicBySlug.set(slug, t);
}

// Common aliases for related topic resolution
const slugAliases = {
  'python-sdk': 'python-sdk',
  'node-sdk': 'node-js-sdk',
  'go-sdk': 'go-sdk',
  'metering': 'ai-metering',
  'metering-api': 'ai-metering-api',
  'getting-started': 'getting-started',
  'for-ai-agents': 'for-ai-agents',
  'mcp-server': 'revenium-mcp-server',
  'api-key': 'get-your-api-key',
  'api-reference': 'api-reference',
  'cost-analytics': 'ai-analytics-dashboard',
  'alerts': 'cost-performance-alerts',
  'billing': 'building-a-usage-based-product',
  'pricing': 'revenium-pricing',
  'traces': 'ai-traces',
  'squads': 'squads',
  'agent-analytics': 'agent-analytics',
  'profit': 'profit-margin-analysis',
  'teams': 'teams-cost-allocation',
  'claude-code': 'ai-coding-dashboard',
  'opentelemetry': 'opentelemetry-integration',
  'slack': 'slack-integration',
  'charts': 'custom-chart-builder',
  'openai': 'openai-integration',
  'anthropic': 'anthropic-integration',
  'n8n': 'n8n-integration',
  'langchain': 'langchain-integration',
};

/**
 * Resolve related topic references to actual topic objects.
 */
function resolveRelated(relatedSlugs) {
  if (!relatedSlugs) return [];
  return relatedSlugs
    .map(slug => {
      const resolved = slugAliases[slug];
      return resolved ? topicBySlug.get(resolved) : topicBySlug.get(slug);
    })
    .filter(Boolean);
}

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

  // Resolve related topics for the top match
  const results = scored.slice(0, maxResults);
  for (const r of results) {
    r.resolvedRelated = resolveRelated(r.related);
  }
  return results;
}
