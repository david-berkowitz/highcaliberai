/**
 * Ensures a URL has a proper protocol prefix.
 * e.g. "www.example.com" → "https://www.example.com"
 *      "https://example.com" → "https://example.com"
 */
export function normalizeUrl(url) {
  if (!url) return url;
  const trimmed = url.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  return `https://${trimmed}`;
}

/**
 * Returns a website URL with the HCA referral parameter appended.
 */
export function withReferral(url) {
  if (!url) return url;
  const normalized = normalizeUrl(url);
  return `${normalized}${normalized.includes("?") ? "&" : "?"}ref=highcaliberai`;
}