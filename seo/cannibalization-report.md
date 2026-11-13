# Cannibalization report

Pages on this site that compete, or could compete, for the same search. Each finding has an ID that [registry.md](registry.md) and [keyword-map.md](keyword-map.md) refer to.

- **Audit date:** 2026-11-13, from a crawl of all 73 live URLs.
- **Changes made:** none. Every recommendation below needs the site owner's approval before anyone edits a page.
- **Planned-content check:** the 60 guides from the 30-day plan were checked on 2026-11-13 (C-8 to C-11).

## Method

| Check | How | Threshold |
|---|---|---|
| Keyword ownership | Every URL is assigned one primary keyword in [keyword-map.md](keyword-map.md). The map is generated with a check that fails on duplicates. | 0 duplicates allowed |
| Title overlap | Meaningful words shared between two titles. Brand words and generic words ("dubai", "junk", "removal", "service") are excluded. | 2 or more shared words that make up at least half of the shorter title |
| Body text similarity | 5-word shingle overlap (Jaccard) between pages' main content, after removing text shared by more than 15% of pages (template text) and link cards | Flagged above 2%. Above 30% is near-duplicate. |
| Intent | Manual review of title, H1, description and headings: commercial or informational | Same intent and same subject = conflict |
| Link support | Contextual internal links pointing to each page | The keyword owner should have more support than the competing page |

Body similarity results:
- **No two service pages share more than 2% of their text.**
- **No two of the 45 area pages share more than 2%.**
- The highest cross-page figures are homepage vs `/faq` at 15.6%, because the homepage reuses 6 FAQ answers, and homepage vs `/pricing` at 9.2%, from the shared price-tier block.
- Guide-to-guide overlap is 8–10%, which comes from the shared guide template (sidebar quote box, share block), not from repeated content.

There are no near-duplicate pages.

## Findings

| ID | Severity | Pages | Problem | Recommendation |
|---|---|---|---|---|
| C-1 | **High** | `/` vs `/services/junk-removal` | Both target "junk removal dubai" with near-identical titles | Retitle the service page around mixed loads |
| C-2 | **High** | `/pricing` vs `/blog/how-junk-removal-is-priced-in-dubai` | Same keyword ("junk removal price/cost dubai") and same promise. The guide has more internal links than the page that should own the keyword. | Move the guide to the "how to lower your cost" angle and link it to /pricing |
| C-3 | Medium | `/services/mattress-removal` vs `/blog/how-to-dispose-of-a-mattress-in-dubai` | Both titles use "old mattress"/"disposal" | Remove "Old Mattress Disposal" from the service title |
| C-4 | Medium | `/` vs `/faq` | 6 identical Q&As, each with FAQPage structured data on both URLs | Keep the full set on /faq only, or vary the homepage set |
| C-5 | Low–medium | `/services/e-waste-removal` vs `/blog/e-waste-disposal-dubai` | "e-waste removal" vs "e-waste disposal" are close variants | Keep both, sharpen the intent and add a link from the service to the guide |
| C-6 | Low | `/` vs `/services` | The brand name contains "junk removal services", and /services is titled "Junk Removal Services in Dubai" | No change. Keep /services as a catalogue (keyword map, rule 5). |
| C-7 | Low (monitor) | `/services/move-out-clearance` vs `/blog/dubai-move-out-junk-checklist` | Same subject, different intent (hire a service vs plan a move) | No change. Monitor in Search Console. |
| C-8 | Medium (planned) | 7 service titles vs the item guides in the 30-day plan | Service titles use the subjects of planned guides, for example "Fridge and Washer Disposal" vs #06 and #19 | Keep guide titles on how-to wording. Consider shorter service titles when C-1 to C-3 are fixed. |
| C-9 | Medium (planned) | `/pricing`, `/contact`, `/faq`, `/services` vs guides #03, #13, #34, #40, #53 | Planned guides sit close to core pages: quote, choosing a company, what's included, load size, what can't be taken | Proceed, with the angle limits below |
| C-10 | Medium (planned) | 4 existing guides vs the new guides that go deeper | Existing guides cover topics that new guides will own | Trim each existing section to a summary plus a link once the deeper guide is live |
| C-11 | Low (planned) | Planned guide pairs | Some planned guides are close to each other | Keep the separations in [content-plan.md](content-plan.md#planned-guides-that-must-stay-distinct) |

### C-1 · Homepage vs general junk removal service (High)

| | `/` | `/services/junk-removal` |
|---|---|---|
| Title | Dubai Junk Removal Services: Fixed Price from a Photo | Junk Removal Dubai: Fixed Price from a Photo |
| Description | Junk removal in Dubai, priced from one WhatsApp photo… | General junk removal anywhere in Dubai. Send a WhatsApp photo, get a fixed price… |
| Inbound links | 72 | 35 |

Both titles lead with the head term and share the same benefit phrase, and both descriptions describe the same offer. Google has two equally plausible answers for "junk removal dubai" and may alternate between them. That usually holds both pages back.

**Recommendation.** The homepage keeps "junk removal dubai", since it has the strongest link support and is the brand page. Reposition the service page on what it actually describes, which is **mixed loads** (its own copy says "the mixed load is exactly what this service is for"):
- **Title idea:** "Mixed Junk Collection in Dubai: Bags, Boxes and Bulky Items"
- **Description:** lead with the mixed load, not the generic phrase
- **URL:** keep it. Changing the URL loses the page's history and needs a redirect, and the title change alone resolves the conflict.

### C-2 · Pricing page vs pricing guide (High)

| | `/pricing` | `/blog/how-junk-removal-is-priced-in-dubai` |
|---|---|---|
| Title | Junk Removal Prices in Dubai | How junk removal is priced in Dubai, and how to pay less |
| Description | How junk removal is priced in Dubai: truck space, weight, access and timing… how to lower it. | What really moves the price… volume, weight, access and timing. Plus five simple ways to bring your quote down. |
| Contextual inbound links | **1** (homepage only) | **4** (blog listing and three guides' related cards) |

The two descriptions list the same four price factors. The guide's own headings, "The four things that set the price" and "Five ways to lower your quote", repeat the pricing page's "Four things set your price". The guide also gets more internal links than the commercial page. This is the most likely pair to cannibalise, with the wrong page winning.

**Recommendation.**
1. **Reposition the guide on the money-saving angle only.** Change its title to something like "How to lower your junk removal quote in Dubai". Cut the price-factors section to two sentences that link to `/pricing` ("what sets the price is explained on our pricing page").
2. **Strengthen `/pricing`:** link to it from the guide, from the FAQ pricing answers and from service pages. See [content-structure.md](content-structure.md#internal-linking).
3. **Merge the guide into /pricing** only if the owner prefers fewer pages. If so, 301 the guide to `/pricing` and remove it from the sitemap.

### C-3 · Mattress service vs mattress guide (Medium)

The service title "Mattress Removal Dubai: **Old Mattress Disposal**" uses the guide's subject, "How to get rid of an **old mattress**". The intents differ, since one is hiring a crew and the other compares options including free ones. The title words blur that difference.

**Recommendation.**
- Change the service title to "Mattress Removal Dubai: Collected from Your Bedroom", or similar, so it stays on the hiring intent.
- The guide keeps "how to dispose of a mattress in dubai".
- Add a link from the service page to the guide. Right now the link runs only from guide to service.

### C-4 · Homepage FAQ vs FAQ page (Medium)

The homepage shows 6 FAQ answers that also appear word-for-word on `/faq`, and both pages emit `FAQPage` structured data for them. That's the source of the 15.6% body overlap.

Google has limited FAQ rich results to a small set of authoritative government and health sites since 2023, so the duplicated markup brings no rich-result benefit, only duplication.

**Recommendation** (owner's choice):
- **(a)** Keep the homepage questions visible but drop the homepage `FAQPage` markup, so `/faq` is the single marked-up source.
- **(b)** Show a shorter, different set on the homepage that links to `/faq`.

### C-5 · E-waste service vs e-waste guide (Low–medium)

"E-Waste Removal Dubai" vs "E-waste in Dubai: what to do with old TVs…". The intents are already different, collection service vs recycling options. The guide's URL uses "e-waste-disposal", a close variant of the service term.

**Recommendation.**
- Keep both. The service owns "e-waste collection dubai", and the guide owns "how to recycle e-waste in dubai".
- Add a link from the service page to the guide.
- Don't change the guide's URL.

### C-6 · Homepage vs services hub (Low)

The brand name, "Dubai Junk Removal Services", is an exact-match phrase. `/services` is titled "Junk Removal Services in Dubai" and has only 59 words of its own text, because it's a grid of service cards.

This is normal for a hub, so no change is needed. Just don't retitle or expand `/services` to target the head term. It should stay the catalogue.

### C-7 · Move-out service vs move-out checklist (Low, monitor)

The subject is the same, but the intents are different, and their body text overlaps by less than 2%. No action needed. Watch Search Console for queries where both URLs get impressions.

## Findings from the 30-day plan (2026-11-13)

The *30-Day SEO Keyword & Content Plan* (PDF) adds 60 guides. Each planned keyword was checked against the live keyword map: **no primary keyword duplicates.** Three secondary keywords overlapped with live pages and were moved to the new guide (listed in [keyword-map.md](keyword-map.md#reserved-for-planned-guides-30-day-plan)). These findings are about risk once the guides are live.

**Where the PDF disagrees with this report:**
- It treats the pricing guide as the owner of "price" and "cost", and its briefs link to it. This report gives that to `/pricing` (C-2). Planned guides link to `/pricing` first.
- It treats `/services/junk-removal` as the owner of "junk removal dubai". This report gives the head term to `/` (C-1). This affects titles only. Guides can still use the service as their pillar.

### C-8 · Service titles vs planned item guides (Medium, planned)

| Service title | Planned guides on the same subject |
|---|---|
| Appliance Removal Dubai: **Fridge and Washer Disposal** | #06 fridge, #19 washing machine |
| Sofa Removal Dubai: Couch Pickup and **Disposal** | #12 sofa |
| Office Clearance Dubai: **Furniture and IT** Removal | #16 office furniture, #14 IT assets |
| Garden Waste Removal Dubai: **Palm and Green Waste** | #30 palm fronds, #08 garden waste |
| Renovation Debris Removal Dubai: **Rubble** Clearance | #38 bagging rubble |
| Villa Clearance Dubai: **Full House Clearance** Service | #09 house clearance checklist |
| Mattress Removal Dubai: Old Mattress Disposal | #31 bed frames (and C-3) |

The intents differ (hire a crew vs how to deal with it yourself), so this isn't a conflict yet. **Recommendation:** guide titles always lead with "How to…", rules, checklist or comparison wording, never "<item> removal dubai". When C-1 to C-3 are fixed, consider moving these service titles to benefit wording ("collected from any floor") rather than item lists. Check Search Console for shared queries 4–6 weeks after the guides go live.

### C-9 · Planned guides near core pages (Medium, planned)

| Guide | Near | Angle limit |
|---|---|---|
| #03 junk removal quote | `/pricing`, `/contact` | How to photograph and describe a job. No prices, no price factors. Links to `/pricing` and `/contact`. |
| #13 how to choose a company | `/` | A neutral checklist. No "best", no self-ranking, no claims the business can't prove (licence, insurance, reviews). |
| #34 what junk removal includes | `/services`, `/faq` | Step by step: what the crew does on the day. Doesn't repeat `/faq` answers word for word. `/services` dropped "what junk removal includes" as a secondary keyword. |
| #40 truck load size | `/pricing` | Volume only, with no AED figures. Links to `/pricing` for cost. |
| #53 hazardous waste | `/faq` | Where hazardous items go instead. Expands the FAQ answer without copying it, and links to `/faq`. |

### C-10 · Existing guides vs new guides that go deeper (Medium)

| Existing guide | Section | New owner | Action when the new guide is live |
|---|---|---|---|
| `/blog/e-waste-disposal-dubai` | Data wiping, batteries | #27, #33 | Cut to two sentences plus a link |
| `/blog/junk-pickup-from-a-dubai-tower` | Move permits | #02 | Keep lifts and on-the-day logistics. Link to #02 for permits. |
| `/blog/dubai-move-out-junk-checklist` | Permits, deposit | #02, #29 | Keep the checklist. Link out for the details. |
| `/blog/dubai-municipality-free-bulky-waste-vs-private-junk-removal` | Leaving items by the bin | #18 | Keeps "dubai municipality bulky waste pickup". #01 and #18 summarise it in two lines and link to it. |
| `/blog/how-to-dispose-of-a-mattress-in-dubai` | Bed bugs | #41 | The mattress guide keeps mattresses. #41 covers sofas and frames only, and both link to the mattress guide. |

Each trim changes live content, so it needs the owner's approval, and the guide gets an `updated` date.

### C-11 · Planned guide pairs (Low, planned)

Ten groups of planned guides are close to each other, for example #17 donate vs #21 sell, or #28 recycling centres vs #43 appliance drop-off. Each pair has a different primary keyword and a written separation in [content-plan.md](content-plan.md#planned-guides-that-must-stay-distinct). Before writing a guide, read its neighbours' briefs, and don't reuse their H2s.

## Other issues found during the audit (not cannibalization)

| Issue | Pages | Fix |
|---|---|---|
| Pillar pages don't link to their supporting guides. Links only go from guide to service. | All service pages with a matching guide | Add a "Related guide" link to the service template |
| Few contextual links to `/pricing` (1), `/about` (1) and `/faq` (1) | Those pages | Link from relevant copy. See [content-structure.md](content-structure.md#internal-linking). |
| One title is over 60 characters | `/blog/e-waste-disposal-dubai` (61) | Shorten by a word if retitling |
| Descriptions slightly under 120 characters | `/contact` (118), `/faq` (113) | Extend when next edited |
| All six guides share one publish date (2026-11-04), so the "latest" order is alphabetical | All guides | Set an `updated` date when a guide is revised |

## Monitoring (once Search Console has data)

1. In **Performance › Search results**, filter by query and open the **Pages** tab. Any query where two URLs get impressions is a live cannibalization case. Record it here with a new ID.
2. Re-check C-1 and C-2 four to six weeks after any title change. Confirm the intended owner receives the impressions.
3. Re-run the crawl-based audit after every batch of 5 or more new or changed pages. See [readme.md](readme.md#re-auditing).

## Checking a new article against this report

Before writing, confirm all four:
1. Its primary keyword isn't owned in [keyword-map.md](keyword-map.md), including close variants and synonyms such as removal / disposal / collection, or price / cost.
2. Its intent differs from any existing page on the same subject.
3. Its title shares fewer than two meaningful words with any existing title on the same subject.
4. It names the pillar it supports and the links it adds in both directions.

If any check fails, update the existing page instead.
