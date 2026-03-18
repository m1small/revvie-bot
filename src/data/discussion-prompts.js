/**
 * Curated discussion prompts for #ai-economics.
 * Revvie cycles through these on schedule (default: weekly).
 * Add new prompts to the end. The scheduler tracks which index was last posted.
 */
export const prompts = [
  {
    topic: "Pricing models",
    question: "If inference costs drop 90% in 2 years, what happens to usage-based API pricing? Does it even matter anymore?",
  },
  {
    topic: "Metering complexity",
    question: "What's harder: metering AI usage accurately, or explaining the bill to customers?",
  },
  {
    topic: "Pricing units",
    question: "Should API providers charge per token, per request, per session, or per outcome? Defend your position.",
  },
  {
    topic: "The Netflix problem",
    question: "Users want flat-rate AI pricing, but costs are wildly variable per user. How do you bridge that gap without losing money?",
  },
  {
    topic: "Creative pricing",
    question: "What's the most creative API pricing model you've seen in the wild? Bonus points if it actually worked.",
  },
  {
    topic: "Free tiers",
    question: "Free tier or no free tier? What's the right developer acquisition strategy for an AI API?",
  },
  {
    topic: "Revenue attribution",
    question: "Revenue attribution for AI features is a mess. How are you solving it in your stack?",
  },
  {
    topic: "Undercharging",
    question: "Hot take: most companies are undercharging for AI because they can't measure what it costs them. Agree or disagree?",
  },
  {
    topic: "Metrics",
    question: "What metrics should an AI API product track besides requests and latency? What's the one metric nobody watches but should?",
  },
  {
    topic: "Build vs. buy",
    question: "Build vs. buy for API monetization infrastructure -- where's the line for your team?",
  },
  {
    topic: "Cost transparency",
    question: "Should AI providers give customers real-time cost dashboards? Or does full transparency create more problems than it solves?",
  },
  {
    topic: "Multi-model costs",
    question: "When your app uses 3+ different AI models per request, how do you even begin to price that to customers?",
  },
  {
    topic: "Agent economics",
    question: "AI agents can spawn sub-tasks, call APIs, retry on failure -- the cost of a single 'request' is unbounded. How do you price agent-based products?",
  },
  {
    topic: "Chargebacks",
    question: "Internal AI chargebacks: does your company know which team is spending what on AI? How are you tracking it?",
  },
  {
    topic: "Cost spikes",
    question: "You wake up to a 10x cost spike on your AI bill. What's your incident response? What alerting do you wish you had?",
  },
  {
    topic: "Token economics",
    question: "Token prices vary 100x between providers and models. How do you make pricing decisions that survive the next model release?",
  },
  {
    topic: "Margin math",
    question: "If your AI feature costs $0.02 per call and you charge $0.05 -- is that healthy margin or a ticking time bomb at scale?",
  },
  {
    topic: "SaaS evolution",
    question: "Traditional SaaS had predictable COGS. AI SaaS has variable inference costs. Does that fundamentally change how we think about gross margin?",
  },
  {
    topic: "Open source economics",
    question: "Self-hosted open-source models vs. API providers: when does the TCO math actually favor running your own?",
  },
  {
    topic: "Billing UX",
    question: "Usage-based billing is powerful but terrifying for customers. How do you make unpredictable bills feel safe?",
  },
  {
    topic: "Developer experience",
    question: "What's the worst AI billing/metering developer experience you've encountered? What made it bad?",
  },
  {
    topic: "Rate limiting economics",
    question: "Rate limits exist for technical reasons, but they're also a pricing lever. Is that honest product design or dark pattern?",
  },
  {
    topic: "The middleman question",
    question: "AI gateways, routers, and proxy layers all add cost. At what point does the optimization they provide pay for itself?",
  },
  {
    topic: "Enterprise vs. startup",
    question: "Enterprise AI buyers want predictable costs. Startups want pay-as-you-go. Can one pricing model serve both?",
  },
];
