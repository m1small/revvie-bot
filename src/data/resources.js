/**
 * Curated resource links for slash commands.
 * Update these as Revenium docs evolve.
 */
export const resources = {
  docs: {
    title: "Revenium Documentation",
    url: "https://docs.revenium.io",
    description: "Full platform docs -- API reference, guides, and tutorials.",
  },
  quickstart: {
    title: "Quickstart Guide",
    url: "https://docs.revenium.io/getting-started",
    description: "Get up and running with Revenium in under 5 minutes.",
  },
  github: {
    title: "Revenium on GitHub",
    url: "https://github.com/revenium",
    description: "Open-source repos including the MCP server, SDKs, and middleware.",
  },
  mcp: {
    title: "Revenium MCP Server",
    url: "https://github.com/revenium/revenium-mcp",
    description: "Connect AI agents to Revenium for cost tracking, alerting, and billing. Install: `claude mcp add revenium -e REVENIUM_API_KEY=your_key -- uvx revenium-mcp`",
  },
  pricing: {
    title: "Revenium Pricing",
    url: "https://revenium.io/pricing",
    description: "Plans and pricing for Revenium's AI economics platform.",
  },
  signup: {
    title: "Get Your API Key",
    url: "https://ai.revenium.io",
    description: "Sign up and get your Revenium API key to start tracking AI costs.",
  },
  middleware: {
    title: "Middleware Libraries",
    url: "https://github.com/revenium",
    description: "Pre-built SDKs for Python (OpenAI, Anthropic, Google AI, Ollama, Griptape) and more.",
  },
};

/**
 * AI economics concept explainers for /explain command.
 * Phase 1-2: curated, not LLM-generated. Accuracy > breadth.
 */
export const concepts = {
  "token-pricing": {
    title: "Token Pricing",
    explanation: "The dominant pricing model for LLM APIs. Providers charge per input and output token (roughly 4 characters each). Input tokens are typically cheaper than output tokens. Prices vary 100x+ across models -- GPT-4o might cost $5/M input tokens while a small open-source model costs $0.05/M. The challenge: token counts are invisible to end users, making cost prediction difficult.",
    related: ["usage-based-billing", "cost-per-request"],
  },
  "usage-based-billing": {
    title: "Usage-Based Billing",
    explanation: "Charging customers based on what they actually consume rather than flat subscription fees. For AI products, this could mean per-API-call, per-token, per-minute, or per-outcome pricing. Aligns revenue with value delivered but introduces cost unpredictability for customers. Revenium helps you implement this by metering AI usage and managing subscriptions.",
    related: ["token-pricing", "metering"],
  },
  "metering": {
    title: "AI Metering",
    explanation: "The practice of measuring and recording AI usage for billing, cost allocation, or analytics. Includes tracking: which model was called, how many tokens were consumed, latency, success/failure, and which customer or team initiated the request. Without metering, you're flying blind on AI costs. Revenium's middleware libraries handle this automatically across providers.",
    related: ["usage-based-billing", "cost-attribution"],
  },
  "cost-attribution": {
    title: "Cost Attribution",
    explanation: "Mapping AI spending back to the customer, team, product, or feature that caused it. Critical for chargebacks (internal cost allocation) and usage-based billing (external monetization). Harder than it sounds when a single user request might call multiple models, trigger retries, or spawn agent sub-tasks. Revenium attributes costs across dimensions: provider, model, customer, product, agent, and API key.",
    related: ["metering", "chargebacks"],
  },
  "chargebacks": {
    title: "AI Chargebacks",
    explanation: "Internal billing where AI costs are allocated back to the business units that consume them. Prevents the 'tragedy of the commons' where one team's aggressive AI usage blows the company's budget. Requires metering per-team or per-product. Revenium supports chargeback models that invoice AI costs to the correct department.",
    related: ["cost-attribution", "metering"],
  },
  "cost-per-request": {
    title: "Cost Per Request",
    explanation: "The fully-loaded cost of a single AI API call, including: token costs, API overhead, retry costs, and infrastructure. Varies wildly -- a simple classification might cost $0.001 while a complex agent workflow with tool use could cost $2+. Knowing your cost-per-request is the foundation of AI product pricing.",
    related: ["token-pricing", "margin-analysis"],
  },
  "anomaly-detection": {
    title: "Cost Anomaly Detection",
    explanation: "Automated monitoring that flags unusual spending patterns -- sudden spikes, gradual creep, or per-customer outliers. Essential because AI costs can explode without warning (a prompt injection causing infinite retries, a customer sending 1000x normal volume, a model upgrade changing token economics). Revenium's MCP server includes anomaly detection with configurable sensitivity.",
    related: ["cost-attribution", "alerting"],
  },
  "ai-economics": {
    title: "AI Economics",
    explanation: "The study of costs, pricing, and value creation in AI-powered products and services. Encompasses: inference cost structures, pricing model design, margin analysis, usage forecasting, and the economic impact of rapidly declining compute costs. A new discipline emerging because AI's variable cost structure breaks assumptions from traditional SaaS economics.",
    related: ["token-pricing", "usage-based-billing", "margin-analysis"],
  },
  "margin-analysis": {
    title: "AI Margin Analysis",
    explanation: "Calculating the difference between what you charge customers and what AI inference costs you. Unlike traditional SaaS (near-zero marginal cost), AI products have significant per-request costs. A 60% gross margin on AI features is considered healthy; below 40% is a warning sign. Margins shift constantly as model prices change.",
    related: ["cost-per-request", "ai-economics"],
  },
  "alerting": {
    title: "AI Cost Alerting",
    explanation: "Proactive notifications when AI spending crosses thresholds or exhibits unusual patterns. Types include: budget alerts (daily/monthly caps), spike detection (sudden increases), per-transaction alerts (individual calls exceeding a cost limit), and trend alerts (gradual cost creep). Revenium supports Slack and email notifications with configurable thresholds.",
    related: ["anomaly-detection", "metering"],
  },
};
