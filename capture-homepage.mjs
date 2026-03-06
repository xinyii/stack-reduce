import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

mkdirSync('docs', { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 900 });

await page.goto('http://127.0.0.1:3001', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(2000);
await page.screenshot({ path: 'docs/screenshot.png', fullPage: true });

await browser.close();
console.log('Saved docs/screenshot.png');
