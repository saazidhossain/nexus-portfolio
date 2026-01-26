// src/pages/rss.xml.js
import config from '../../src/document/config.json';

export async function get() {
  const site = config.site_meta;
  const projects = config.projects || [];

  const items = projects
    .filter(p => p.pubDate)
    .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
    .map(p => `
      <item>
        <title><![CDATA[${p.title}]]></title>
        <link>${site.external_asset_host}${p.slug}</link>
        <pubDate>${new Date(p.pubDate).toUTCString()}</pubDate>
        <description><![CDATA[${p.summary}]]></description>
        <guid isPermaLink="false">${p.id}</guid>
        <media:content url="${p.cover_image}" medium="image" />
      </item>
    `).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">
    <channel>
      <title>${site.title} Projects</title>
      <link>${site.external_asset_host}</link>
      <description>${site.description}</description>
      ${items}
    </channel>
  </rss>`;

  return new Response(rss, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  });
}