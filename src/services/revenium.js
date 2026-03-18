/**
 * Revenium API client -- the same API surface that the Revenium MCP server wraps.
 * Revvie calls this directly for Discord interactions. Community members who want
 * the same capabilities in their AI agents use the MCP server.
 */

const BASE_URL = process.env.REVENIUM_BASE_URL || 'https://api.revenium.io';
const API_KEY = process.env.REVENIUM_API_KEY;

async function reveniumFetch(path, options = {}) {
  const url = `${BASE_URL}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      'x-api-key': API_KEY,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Revenium API ${res.status}: ${body}`);
  }

  return res.json();
}

/**
 * Get a cost summary for a time period.
 * Mirrors the MCP server's cost analytics tool.
 */
export async function getCostSummary(period = '24h') {
  const periodMap = { '1h': 1, '24h': 24, '7d': 168, '30d': 720 };
  const hours = periodMap[period] || 24;
  return reveniumFetch(`/v1/analytics/costs?hours=${hours}`);
}

/**
 * Detect anomalies in spending.
 * Mirrors the MCP server's anomaly detection tool.
 */
export async function getAnomalies(period = '7d', threshold = 50) {
  const periodMap = { '24h': 24, '7d': 168, '30d': 720 };
  const hours = periodMap[period] || 168;
  return reveniumFetch(`/v1/analytics/anomalies?hours=${hours}&threshold=${threshold}`);
}

/**
 * Get integration guide content for a language.
 * Used by the /integrate command.
 */
export async function getIntegrationGuide(language = 'python') {
  return reveniumFetch(`/v1/metering/guide?language=${language}`);
}

/**
 * Health check -- verify API connectivity.
 */
export async function healthCheck() {
  try {
    await reveniumFetch('/v1/users/me');
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}
