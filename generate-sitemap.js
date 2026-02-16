const fs = require('fs');
const path = require('path');

const BLOGS_DIR = path.join(__dirname, 'public', 'content', 'blogs');
const SITEMAP_PATH = path.join(__dirname, 'public', 'sitemap.xml');
const BASE_URL = 'https://koushik.cloud';

function generateSitemap() {
  console.log('Generating sitemap...');
  
  const files = fs.readdirSync(BLOGS_DIR).filter(file => file.endsWith('.md'));
  const today = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <priority>1.0</priority>
  </url>`;

  files.forEach(file => {
    const id = file.replace('.md', '');
    xml += `
  <url>
    <loc>${BASE_URL}/#/blog/${id}</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  fs.writeFileSync(SITEMAP_PATH, xml);
  console.log(`Sitemap generated with ${files.length} blog posts.`);
}

generateSitemap();
