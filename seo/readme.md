# SEO content system

How content on dubaijunkremovalservices.com is planned, written, checked and kept free of keyword cannibalization. These eight files work as one system. Read this one first.

## The files

| File | Answers | Kind | Updated when |
|---|---|---|---|
| [readme.md](readme.md) | How the system works | Rules | The process changes |
| [keyword-map.md](keyword-map.md) | Which URL owns which keyword? | **Decisions** | Any page is added, retitled or retargeted |
| [registry.md](registry.md) | What exists, and in what state? | **Inventory** | Any page is added, changed or planned |
| [cannibalization-report.md](cannibalization-report.md) | Where do pages compete? | Findings | After each audit, and when Search Console shows overlaps |
| [content-structure.md](content-structure.md) | How must each page type be built? | Standards | The templates or schema change |
| [style-guide.md](style-guide.md) | How do we write? | Standards | Rarely |
| [content-plan.md](content-plan.md) | What do we create next, and why? Holds the 30-day calendar. | Plan | Weekly during the 30-day plan, then monthly |
| [qa-checklist.md](qa-checklist.md) | Is this page ready to publish? | Gate | The standards change |

### Source of truth

1. **The site's code is the truth about what is live.** Page content lives in `src/data/services.ts`, `src/data/areas.ts`, `src/data/posts.ts` and `src/data/faqs.ts`. Metadata is built in `src/lib/seo.ts`, structured data in `src/lib/schema.ts`, and photos are listed in `src/data/images.ts`.
2. **[keyword-map.md](keyword-map.md) is the truth about intent.** It records which URL owns which keyword. Code changes must follow it, not the other way round.
3. **[registry.md](registry.md) is the truth about inventory.** It mirrors the live site and lists planned work. If it disagrees with the live site, re-audit. Don't edit it by hand to match.
4. **[cannibalization-report.md](cannibalization-report.md) lists open problems.** IDs (C-1, C-2…) are referenced from the registry and keyword map.

```
content-plan.md ──▶ keyword-map.md ──▶ write (style-guide + content-structure)
      ▲                  │                          │
      │                  ▼                          ▼
cannibalization ◀── registry.md ◀────────── qa-checklist.md ──▶ publish
   -report.md          (re-audit)
```

## The 30-day plan

From 16 November to 15 December 2026, the site publishes **60 guides, two a day**, from the *30-Day SEO Keyword & Content Plan* (PDF, 13 November 2026). The PDF holds each guide's full brief: intent, audience, outline and link plan. These files hold the decisions:
- the calendar, the checks before writing, and the changes made to the PDF: [content-plan.md](content-plan.md#phase-2--30-day-publishing-calendar)
- the reserved URLs and keywords: [keyword-map.md](keyword-map.md#reserved-for-planned-guides-30-day-plan)
- the status of each guide: [registry.md](registry.md#planned-articles)
- the risks: [cannibalization-report.md](cannibalization-report.md) (C-8 to C-11)

Where the PDF and these files disagree, these files win. The PDF is saved as [30-day-seo-keyword-plan.pdf](30-day-seo-keyword-plan.pdf).

## Workflow: new article

1. **Pick a topic** from [content-plan.md](content-plan.md), or propose one there first. During the 30-day plan, take the next guide in the calendar that is ready.
2. **Check ownership.** Search [keyword-map.md](keyword-map.md) for the keyword and its variants. Search [registry.md](registry.md) for the subject. If a page already covers it, improve that page instead.
3. **Check for conflicts.** Run the four checks at the end of [cannibalization-report.md](cannibalization-report.md).
4. **Reserve it.** Add the keyword to [keyword-map.md](keyword-map.md) and a row to [registry.md](registry.md) with status `In progress`.
5. **Write it** to [content-structure.md](content-structure.md) (guide template) and [style-guide.md](style-guide.md). Add it to `src/data/posts.ts` and add its photo to `src/data/images.ts` and the R2 bucket (see `docs/cloudflare-r2-images.md`).
6. **Pass every item** in [qa-checklist.md](qa-checklist.md).
7. **Publish** (push to `main`), check the live page, then set the registry row to `Live` with its date.

## Workflow: update an existing page

1. Find its row in [registry.md](registry.md) and its keyword in [keyword-map.md](keyword-map.md).
2. Keep the URL. Never change a live URL without a 301 redirect and a reason recorded here.
3. If the title, H1 or description changes, confirm the primary keyword is still the one recorded, and that the new wording doesn't overlap another page.
4. For guides, set `updated` in `src/data/posts.ts`. For other content, update `contentUpdated` in `src/config/site.ts`, which feeds the sitemap dates.
5. Run [qa-checklist.md](qa-checklist.md), then update the registry row.

## Workflow: new service or area page

The service and area templates generate the page from data, so the rules in [content-structure.md](content-structure.md) apply automatically. You supply:
- original content that meets the minimums there
- a unique, licensed photo
- a primary keyword checked in [keyword-map.md](keyword-map.md)

Area pages must be one per community, at one level only. See keyword map rule 3.

## Rules that never bend

- **One primary keyword per URL, and one URL per primary keyword.**
- **No fabricated data:** no search volumes, rankings, review counts, ratings, customer numbers, prices or claims that the business hasn't confirmed.
- **No content written to hit a word count,** no keyword stuffing, and no near-duplicate pages (body similarity under 30% after template text is removed; the site is currently under 16%).
- **No service-plus-area combination pages.**
- **No live URL changes without a 301.** Preserve canonicals, titles and structured data unless a documented decision changes them.

## Using this system with Claude Code

Claude reads these files as context. Useful prompts:

- *"Read seo/readme.md, then plan a guide about <topic>. Check keyword-map.md, registry.md and cannibalization-report.md first, and stop if it conflicts with an existing page."*
- *"Write guide #06 from the 30-day plan. Use its brief in the PDF and its row in seo/content-plan.md, follow seo/content-structure.md and seo/style-guide.md, then run seo/qa-checklist.md against it."*
- *"Re-audit the live site as described in seo/readme.md#re-auditing and update registry.md and cannibalization-report.md. Don't change any website content."*
- *"Resolve cannibalization finding C-2 as recommended. Show me the title and description changes before editing anything."*

Claude must not invent keyword volumes, rankings or business facts. If data is missing, it should say so and leave the field marked "not measured".

## Re-auditing

Run this quarterly, and after any batch of 5 or more page changes. The audit is read-only.

1. Fetch `https://dubaijunkremovalservices.com/sitemap.xml` and every URL in it.
2. For each page, record:
   - title, meta description, canonical, H1 and H2s
   - structured data types
   - the main content's word count, excluding the header, footer, navigation and link cards
   - contextual internal links in and out
3. **Similarity:** compare main-content text between every pair of pages using 5-word shingles, after dropping shingles that appear on more than 15% of pages. Flag pairs above 2%, investigate above 10%, and treat above 30% as near-duplicate.
4. **Title overlap:** flag pairs of titles that share 2 or more meaningful words.
5. **Coverage:** confirm every sitemap URL has exactly one row in the keyword map and the registry.
6. Regenerate the tables in [registry.md](registry.md) and add new findings to [cannibalization-report.md](cannibalization-report.md) with new IDs. Close resolved findings, and keep their IDs for reference.

The first audit (2026-11-13) used exactly this method. Turning it into a project script (`npm run seo:check`) would make it one command and a pre-push gate. That's a recommended next step, not yet done.

## Measurement

There is **no search performance data yet.** Every keyword in this system is a target, not a measured result.

1. **Verify the site in Google Search Console** (HTML tag method). Put the code in `googleSiteVerification` in `src/config/site.ts`, then submit the sitemap. Do the same for Bing Webmaster Tools if wanted.
2. **After about 4–6 weeks of data:**
   - add real query data to [keyword-map.md](keyword-map.md), such as impressions, clicks and average position for each owned keyword
   - retarget pages that get no impressions for their keyword
   - record any multi-URL queries in [cannibalization-report.md](cannibalization-report.md)
3. **Keep a Google Business Profile** with the same name, phone (+971 55 356 3316) and area as the site. For local searches this matters as much as the website.

## E-E-A-T status

Google's guidance asks whether content shows experience, expertise, authoritativeness and trust. The site is honest, but it is **thin on proof**:

| Signal | Current state | To strengthen |
|---|---|---|
| Experience | Stock photos, with crews shown as models | Real job photos from each area, with permission |
| Reviews | None shown, and the reviews section is hidden | Add genuine reviews to `reviews` in `src/config/site.ts` |
| Business identity | Name, phone, email and area shown; no trade licence | Add `tradeLicence` and Google Business Profile links (`profiles`) |
| Authorship | "By the Dubai Junk Removal Services team" | A named person with real experience, if the owner wants one |
| Accuracy | Guides cite sources where facts matter | Keep doing this. See [style-guide.md](style-guide.md). |

Never fill these gaps with invented reviews, credentials or authors.
