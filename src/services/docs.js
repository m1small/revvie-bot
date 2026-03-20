/**
 * Documentation fetcher -- retrieves and caches Revenium llms.txt
 * for use as context in LLM-powered /ask responses.
 */

const LLMS_TXT_URL = 'https://revenium.readme.io/llms.txt';
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes

let cache = { content: null, fetchedAt: 0 };

export async function getDocsContext() {
  const now = Date.now();
  if (cache.content && now - cache.fetchedAt < CACHE_TTL_MS) {
    return cache.content;
  }

  const res = await fetch(LLMS_TXT_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch llms.txt: ${res.status}`);
  }

  const content = await res.text();
  cache = { content, fetchedAt: now };
  return content;
}
