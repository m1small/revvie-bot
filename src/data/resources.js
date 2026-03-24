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
 * Curated from Revenium MPM messaging and AI economics domain knowledge.
 * Discord allows max 25 choices per slash command option.
 */
export const concepts = {
  // --- Foundational AI Economics ---
  "ai-economics": {
    title: "AI Economics",
    explanation: "The study of costs, pricing, and value creation in AI-powered products and services. Encompasses inference cost structures, pricing model design, margin analysis, usage forecasting, and the economic impact of rapidly declining compute costs. A new discipline emerging because AI's variable cost structure breaks assumptions from traditional SaaS economics -- every request has a real, variable cost.",
    related: ["token-pricing", "agentic-capital", "tci"],
  },
  "token-pricing": {
    title: "Token Pricing",
    explanation: "The dominant pricing model for LLM APIs. Providers charge per input and output token (roughly 4 characters each). Input tokens are typically cheaper than output tokens. Prices vary 100x+ across models -- GPT-4o might cost $5/M input while a small open-source model costs $0.05/M. The challenge: token counts are invisible to end users, making cost prediction difficult. And tokens are only part of the picture -- tool costs and compliance overhead add up fast.",
    related: ["tci", "cost-per-request"],
  },
  "cost-per-request": {
    title: "Cost Per Request",
    explanation: "The fully-loaded cost of a single AI API call, including token costs, API overhead, retry costs, and infrastructure. Varies wildly -- a simple classification might cost $0.001 while a complex agent workflow with tool use could cost $2+. Knowing your cost-per-request is the foundation of AI product pricing. Revenium calls the fully-loaded version TCI (Total Cost of Interaction).",
    related: ["token-pricing", "tci"],
  },

  // --- MPM Framework ---
  "tci": {
    title: "TCI (Total Cost of Interaction)",
    explanation: "The true cost of one autonomous AI job: `TOKENCOST + TOOLCOST + AUDITCOST`. Three non-overlapping cost pools. TOKENCOST is every token consumed (including retries and verification). TOOLCOST is the external services triggered by agent decisions -- not the tokens, the downstream bill. AUDITCOST is regulatory burden. Your $1 token bill might actually cost $6 when you account for everything.",
    related: ["trust-tax", "agent-debt", "economic-proof"],
  },
  "agent-debt": {
    title: "Agent Debt",
    explanation: "The gap between what you actually invest in AI and what shows up on provider bills. Formula: `AGENTCAPITAL - CLOUDBILL`. Your cloud bill shows token costs, but agents trigger tool calls, retries, verification chains, and compliance overhead that no provider sends a receipt for. Agent Debt compounds in real time and surfaces at month-end as a surprise. Most organizations discover their Agent Debt is 2-5x their cloud bill.",
    related: ["tci", "shadow-ai", "agentic-capital"],
  },
  "agentic-capital": {
    title: "Agentic Capital",
    explanation: "Total economic input to agentic outcomes -- the AI analog to Human Capital. Not just the token bill; it's everything an organization invests in agent work across all cost pools. Estimated as `JOBVOLUME x TCI`. The shift in framing matters: 'cloud spend' is a line item; Agentic Capital is a strategic investment category that demands the same rigor as headcount planning.",
    related: ["agent-debt", "economic-proof", "ai-roi"],
  },
  "economic-proof": {
    title: "Economic Proof",
    explanation: "Mathematical proof that AI investment converts to value. Per-job: TCIOUTCOME (`TCIVALUE / TCI`) -- does this job pay for itself? >1 means yes. Portfolio: PROOF -- the evidence across all operations, accounting for error rates and lost value. This is what turns 'AI seems useful' into 'AI returned 12x on this workflow and -0.3x on that one.' Revenium computes this from attributed telemetry.",
    related: ["tci", "ai-roi", "agentic-capital"],
  },
  "ai-roi": {
    title: "AI ROI",
    explanation: "Board-ready return on AI investment: `AIGROSSROI x MARGINFACTOR x AUTONOMYFACTOR`. Three multiplicative constraints. Gross ROI alone ignores affordability (you might have 50x per-job returns but be 2x over budget). MARGINFACTOR catches budget pressure. AUTONOMYFACTOR catches agents that technically produce outcomes but spend so much on governance they lose the economic advantage of autonomy.",
    related: ["economic-proof", "agentic-capital", "margin-analysis"],
  },

  // --- Problem Space ---
  "shadow-ai": {
    title: "Shadow AI",
    explanation: "Agents running on shared API keys with no identity binding. No one knows which agent spent what. Shadow IT was unauthorized apps -- Shadow AI is unauthorized spending. It's worse because agents make autonomous economic decisions at machine speed. The fix: instrument agents with identity metadata so every dollar is attributed to a specific agent, job, team, and customer.",
    related: ["agent-debt", "agent-sprawl", "cost-attribution"],
  },
  "agent-sprawl": {
    title: "Agent Sprawl",
    explanation: "Uncontrolled proliferation of agents with no registry and no inventory. Shadow AI asks 'who spent this?' Agent Sprawl asks 'how many agents do we even have?' Teams spin up agents for experiments that never get decommissioned. Each one accumulates cost. The first step to controlling it: connect provider API keys to see the full picture.",
    related: ["shadow-ai", "agent-debt"],
  },
  "trust-tax": {
    title: "Trust Tax",
    explanation: "The fraction of your AI token spend that isn't productive work. Includes VERIFYCOST (agents checking agents, validation pipelines) and RETRYCOST (tokens spent getting it wrong and starting over). A typical agent might have a 30% productivity ratio -- meaning 70% of token spend is governance overhead. Reducing the trust tax without increasing errors is the optimization frontier.",
    related: ["tci", "economic-proof"],
  },
  "runaway-cost": {
    title: "Runaway Cost",
    explanation: "Recursive loops and cascade failures burning budget geometrically with no alert. An agent triggers a tool call that fails, retries with more context, triggers more tool calls, each one failing -- $2K in tokens and $20K in triggered API costs overnight. Happens at machine speed, 24/7/365. Without real-time cost monitoring and circuit breakers, there's no human in the loop fast enough to stop it.",
    related: ["anomaly-detection", "agentic-governance"],
  },

  // --- Operational Concepts ---
  "cost-attribution": {
    title: "Cost Attribution",
    explanation: "Mapping AI spending back to the customer, team, product, or feature that caused it. Critical for chargebacks (internal) and usage-based billing (external). Harder than it sounds when a single request spawns agent sub-tasks across multiple models. Revenium attributes costs across dimensions: provider, model, customer, product, agent, trace, and job type.",
    related: ["metering", "chargebacks"],
  },
  "metering": {
    title: "AI Metering",
    explanation: "Measuring and recording AI usage for billing, cost allocation, or analytics. Tracks which model was called, tokens consumed, latency, success/failure, and who initiated the request. Without metering, you're flying blind. Revenium's middleware libraries handle this automatically across providers -- one import statement, and every call is instrumented.",
    related: ["usage-based-billing", "cost-attribution"],
  },
  "usage-based-billing": {
    title: "Usage-Based Billing",
    explanation: "Charging customers based on actual consumption rather than flat subscriptions. For AI products: per-API-call, per-token, per-minute, or per-outcome pricing. Aligns revenue with value but introduces cost unpredictability. The key challenge: you need accurate metering and attribution before you can bill by usage. Revenium handles metering, subscription management, and billing integration.",
    related: ["token-pricing", "metering"],
  },
  "chargebacks": {
    title: "AI Chargebacks",
    explanation: "Internal billing where AI costs are allocated back to the business units that consume them. Prevents the 'tragedy of the commons' where one team's aggressive AI usage blows the company budget. Requires per-team or per-product metering. Without chargebacks, there's no incentive to optimize -- the cost is someone else's problem.",
    related: ["cost-attribution", "metering"],
  },
  "margin-analysis": {
    title: "AI Margin Analysis",
    explanation: "Calculating the gap between what you charge customers and what AI inference costs you. Unlike traditional SaaS (near-zero marginal cost), AI products have significant per-request costs. A 60% gross margin on AI features is healthy; below 40% is a warning sign. Margins shift constantly as model prices change -- a model price cut can improve your margins overnight, or a model upgrade can destroy them.",
    related: ["cost-per-request", "ai-economics"],
  },
  "anomaly-detection": {
    title: "Cost Anomaly Detection",
    explanation: "Automated monitoring that flags unusual AI spending patterns -- sudden spikes, gradual creep, or per-customer outliers. Essential because AI costs can explode without warning: a prompt injection causing infinite retries, a customer sending 1000x normal volume, or a model upgrade changing token economics. Early detection is the difference between a $50 incident and a $50,000 one.",
    related: ["runaway-cost", "cost-attribution"],
  },
  "agentic-governance": {
    title: "Agentic Governance",
    explanation: "Controls applied to agent spending: budgets, guardrails, guidance, interception, and redirection. The progression from 'agents do whatever they want' to 'agents operate within bounded authority.' Includes real-time budget enforcement (stop the agent before it overspends), model routing (redirect to cheaper models when appropriate), and policy-as-code (economic rules agents must follow).",
    related: ["runaway-cost", "agentic-capital", "ai-roi"],
  },
  "autonomous-job": {
    title: "Autonomous Job",
    explanation: "The atomic economic unit of agent work. Binds cost, context, outcome, and attribution into one trackable entity. What the ledger records. Every autonomous job has a TCI (what it cost), a TCIVALUE (what it was worth), and a TCIOUTCOME (did it pay for itself). Jobs compose into squads, traces, and portfolios -- but the per-job atom is where economics starts.",
    related: ["tci", "economic-proof"],
  },
  "finops-for-ai": {
    title: "FinOps for AI",
    explanation: "Extending cloud financial management practices to AI workloads. Traditional FinOps tracks compute, storage, and network -- but AI adds a new cost dimension: inference spending that scales with usage, not infrastructure. AI FinOps requires metering at the request level, attribution to business units, and margin-aware budgeting. The FOCUS standard is evolving to include AI cost categories.",
    related: ["cost-attribution", "chargebacks", "agentic-capital"],
  },
  "mpm": {
    title: "MPM (Measure, Prove, Monetize)",
    explanation: "Revenium's three-verb framework for AI economics maturity. **Measure**: attribute every dollar of AI spend to an agent, job, team, and customer. **Prove**: compute mathematical proof that AI investment converts to value (ROI per job, per workflow, per portfolio). **Monetize**: enforce governance so agents operate within bounded authority and economics flow to revenue. Each stage builds on the last.",
    related: ["tci", "economic-proof", "agentic-governance"],
  },
};
