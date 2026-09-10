# SEO setup

The static site is served from `dist/`. No build or dependencies are required.

## Implemented

- Descriptive title, description and visible HR service wording.
- Absolute canonical URL, Open Graph and Twitter sharing metadata.
- Organization, WebSite, WebPage and four Service entities in JSON-LD, matching visible content.
- Crawlable robots.txt and a sitemap containing the one canonical page (section anchors are not separate pages).
- High-priority preload for the hero background and reserved dimensions for client images.

## Production address

Configured for the user-confirmed domain https://293consulting.com/ and worldwide service coverage. Confirm this domain serves this revised implementation before submitting the sitemap.
When a custom domain is confirmed, update absolute URLs in dist/index.html, dist/robots.txt and dist/sitemap.xml together. Redirect old domain URLs to the equivalent new URLs using permanent server redirects. Keep the same trailing slash convention. Hosting must return real 404 statuses for missing pages and serve the canonical page with a 200 status. Avoid indexing staging copies by controlling staging at the host; do not add noindex to the production source.

## Remaining launch actions

1. Publish this revised implementation. Localhost changes cannot be indexed by public search engines.
2. Confirm the business email, phone, official social profiles and any physical business address. Add confirmed details to visible content and matching Organization schema. The current contact section still needs real contact details. Do not invent a LocalBusiness address, ratings, reviews or business claims.
3. Verify ownership in Google Search Console for the final URL (DNS verification for a domain property, or the supplied HTML verification tag/file for a URL-prefix property). No account verification token is currently provided. Submit sitemap.xml and inspect the homepage after publishing. Repeat in Bing Webmaster Tools if desired.
4. Run Google's Rich Results Test and PageSpeed Insights on the published URL. The local checks validate syntax and references, not Google eligibility or measured Core Web Vitals. The existing PNG hero and remote client logos remain performance opportunities; consider optimized image formats with visual review.
5. Review Search Console indexing, search queries, clicks, impressions and Core Web Vitals after data becomes available. Add useful, distinct service pages when there is sufficient original service detail; keep sitemap.xml current and update lastmod only for meaningful content changes.

No analytics, verification tokens, invented locations or generated reviews have been added. Metadata and schema help discovery and interpretation; they do not guarantee indexing or rankings.

## References

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
