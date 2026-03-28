// static/js/fetch-reviews.js
// Leest open issues met label 'meter-review' uit, voegt toe aan reviews.json,
// sluit daarna de issues met een bedankcomment.

const fs   = require('fs');
const path = require('path');

const OWNER  = 'huizebruin';
const REPO   = 's0tool';
const LABEL  = 'meter-review';
const TOKEN  = process.env.GITHUB_TOKEN;

const HEADERS = {
  'Authorization': `Bearer ${TOKEN}`,
  'Accept':        'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'Content-Type':  'application/json',
};

// ── Haal veld op uit issue body (Markdown tabel) ─────────────────────────────
function parseField(body, fieldName) {
  const re = new RegExp(`\\|\\s*\\*\\*${fieldName}\\*\\*\\s*\\|\\s*([^|\\n]+)`);
  const m  = body.match(re);
  return m ? m[1].trim() : '';
}

// ── Parse de volledige issue body ─────────────────────────────────────────────
function parseIssue(issue) {
  const body = issue.body || '';

  const name    = parseField(body, 'Name')         || issue.user.login;
  const country = parseField(body, 'Country');
  const brand   = parseField(body, 'Meter brand');
  const model   = parseField(body, 'Meter model');
  const type    = parseField(body, 'Meter type');

  // Rating: tel sterren ★
  const starMatch = body.match(/(★+)/u);
  const rating    = starMatch ? starMatch[1].length : 5;

  // Review tekst na "### Review"
  const reviewMatch = body.match(/### Review\s*\n+([\s\S]*?)(?:\n---|$)/);
  const reviewText  = reviewMatch ? reviewMatch[1].trim() : body.slice(0, 300);

  return {
    id:      issue.number,
    source:  'issue',
    title:   issue.title,
    date:    issue.created_at,
    url:     issue.html_url,
    author: {
      name:   name,
      login:  issue.user.login,
      avatar: issue.user.avatar_url,
      url:    issue.user.html_url,
    },
    country,
    brand,
    model,
    type,
    rating,
    review: reviewText,
  };
}

// ── Haal alle open issues op met het label ────────────────────────────────────
async function fetchOpenIssues() {
  let issues = [];
  let page   = 1;

  while (true) {
    const res = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/issues`
        + `?labels=${encodeURIComponent(LABEL)}&state=open&per_page=100&page=${page}`,
      { headers: HEADERS }
    );
    if (!res.ok) throw new Error(`Issues ophalen mislukt: ${res.status}`);
    const data = await res.json();
    if (!data.length) break;
    issues = issues.concat(data);
    if (data.length < 100) break;
    page++;
  }

  return issues;
}

// ── Voeg bedankcomment toe en sluit issue ─────────────────────────────────────
async function closeIssue(number) {
  await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/issues/${number}/comments`,
    {
      method:  'POST',
      headers: HEADERS,
      body: JSON.stringify({
        body: '✅ **Thanks for your review!**\n\nYour review has been saved to our list on [s0tool.nl/community.html](https://s0tool.nl/community.html) and will appear there shortly.\n\nThis issue is now closed to keep things tidy — your data is safely preserved. 🙏',
      }),
    }
  );

  await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/issues/${number}`,
    {
      method:  'PATCH',
      headers: HEADERS,
      body: JSON.stringify({ state: 'closed', state_reason: 'completed' }),
    }
  );

  console.log(`  ✓ Issue #${number} gesloten`);
}

// ── Hoofdfunctie ──────────────────────────────────────────────────────────────
async function main() {
  const outDir  = path.join(__dirname, '..');   // static/js/ -> static/
  const outPath = path.join(outDir, 'reviews.json');

  // Laad bestaande reviews.json zodat al gesloten issues bewaard blijven
  let existing = [];
  if (fs.existsSync(outPath)) {
    try {
      const raw = JSON.parse(fs.readFileSync(outPath, 'utf8'));
      existing  = raw.reviews || [];
      console.log(`📂 ${existing.length} bestaande reviews geladen`);
    } catch {
      console.warn('⚠️  Kon bestaande reviews.json niet lezen, begin opnieuw.');
    }
  }

  // Welke issue-IDs zijn al opgeslagen?
  const savedIds = new Set(
    existing.filter(r => r.source === 'issue').map(r => r.id)
  );

  // Open issues ophalen
  console.log(`\n📥 Open issues ophalen met label "${LABEL}"…`);
  const openIssues = await fetchOpenIssues();
  console.log(`   ${openIssues.length} open issue(s) gevonden`);

  const newReviews = [];

  for (const issue of openIssues) {
    if (!savedIds.has(issue.number)) {
      console.log(`  📝 Verwerken: Issue #${issue.number} — "${issue.title}"`);
      newReviews.push(parseIssue(issue));
    } else {
      console.log(`  ⏭  Issue #${issue.number} al in reviews.json, enkel sluiten`);
    }
    // Sluit altijd — ook als de data al eerder was opgeslagen
    await closeIssue(issue.number);
  }

  // Nieuwe reviews bovenaan, daarna bestaande; sorteer op datum
  const allReviews = [...newReviews, ...existing]
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const output = {
    updated: new Date().toISOString(),
    total:   allReviews.length,
    reviews: allReviews,
  };

  fs.writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf8');
  console.log(`\n✅ reviews.json bijgewerkt — ${allReviews.length} reviews totaal (${newReviews.length} nieuw)`);
}

main().catch(err => {
  console.error('❌ Fout:', err.message);
  process.exit(1);
});
