# QA checklist

Every new or changed page must pass this before it's pushed to `main`. Tick every box or write down why an item doesn't apply.

Related: [content-structure.md](content-structure.md), [style-guide.md](style-guide.md), [cannibalization-report.md](cannibalization-report.md).

## 1. Strategy (before writing)

- [ ] The topic is in [content-plan.md](content-plan.md), or has been added with a reason.
- [ ] The primary keyword, and its close variants, are **not owned by another URL** in [keyword-map.md](keyword-map.md).
- [ ] No page in [registry.md](registry.md) already covers the subject with the same intent.
- [ ] All four checks at the end of [cannibalization-report.md](cannibalization-report.md) pass.
- [ ] The keyword is reserved in the keyword map, and the page is listed in the registry as `In progress`.

## 2. Content

- [ ] The opening answers the question or states the page's purpose.
- [ ] Every section adds something specific. Nothing is written to reach a length.
- [ ] **Facts are verified.** Rules, organisations and numbers outside the business's control cite a source in `sources`.
- [ ] No invented reviews, ratings, customer counts, prices, licences or statistics.
- [ ] Business claims match the confirmed list in [style-guide.md](style-guide.md#claims-that-need-the-owners-confirmation).
- [ ] Written in the voice and British English of [style-guide.md](style-guide.md). Spelling and grammar checked.
- [ ] **Area pages:** at least 250 unique words, and no sentence repeated from another area page.
- [ ] **Guides:** the first two sentences answer the question. 900–1,600 words for 30-day plan guides, with nothing written to reach the range.
- [ ] **Guides:** every "Verify" and "Owner" item in the guide's [content-plan.md](content-plan.md#phase-2--30-day-publishing-calendar) row is resolved, with a source or the owner's confirmation. Otherwise the claim is removed.
- [ ] **Guides:** any job example is real and came from the owner or crew. Any FAQ is unique to the guide.
- [ ] **Guides:** H2s don't repeat those of the neighbouring planned guides (see [content-plan.md](content-plan.md#planned-guides-that-must-stay-distinct)).
- [ ] The text is original. It's not paraphrased from a competitor or another page on this site.

## 3. On-page SEO

- [ ] The title contains the primary keyword, is about 60 characters or fewer, is unique, and isn't a keyword string.
- [ ] The meta description is 120–160 characters and unique.
- [ ] Exactly one H1. H2 and H3 levels are in order, with no skipped levels.
- [ ] The primary keyword appears naturally in the title, the H1 or opening, and the description. It isn't repeated beyond that.
- [ ] The URL is lowercase, hyphenated and descriptive. **Existing URLs are unchanged**, or a 301 is in place.
- [ ] The page uses `pageMetadata()`, and the canonical is the page's own non-www URL.

## 4. Links

- [ ] Guides: `relatedService` is set to the correct pillar.
- [ ] The pillar or hub links back where the template allows.
- [ ] Anchor text is descriptive. No "click here".
- [ ] Links point only to live pages. Links to planned guides are added once those guides are live.
- [ ] Price and cost links go to `/pricing`, not to the pricing guide.
- [ ] Every internal link works, and every external link opens and points to an authoritative source.
- [ ] Area pages: the `nearby` slugs exist and are real neighbours.

## 5. Images

- [ ] The photo is unique to the page, licensed, and recorded (area photos go in `area-photo-credits.ts`).
- [ ] Alt text describes only what is visible and doesn't claim a place the photo doesn't show.
- [ ] No readable number plates, close-up identifiable faces, watermarks or prominent third-party logos.
- [ ] The file is in `public/images` **and** uploaded to R2 (`npm run upload:remote`), and `npm run verify` passes.

## 6. Structured data

- [ ] The expected types are present: service/area → `Service`, `FAQPage`, `BreadcrumbList`; guide → `BlogPosting`, `BreadcrumbList`.
- [ ] The markup matches the visible content. FAQ answers are identical to what the page shows.
- [ ] No `Review` or `AggregateRating` unless genuine reviews are shown.
- [ ] Passes the Rich Results Test or the Schema.org validator.

## 7. Technical

- [ ] `npx tsc --noEmit`, `npm run lint` and `npm run build` all pass.
- [ ] The page appears in `/sitemap.xml` with the correct `lastmod`. For guides, `updated` is set when revised.
- [ ] No console errors and no broken images (check desktop and mobile).
- [ ] No horizontal scroll at 390px width.
- [ ] Lighthouse SEO and Accessibility stay at 100, and Performance stays at 90 or above on mobile.

## 8. Accessibility

- [ ] Headings form a logical outline, and link text makes sense out of context.
- [ ] Every image has meaningful alt text. Decorative images use empty alt.
- [ ] Interactive elements work by keyboard and show a visible focus state.
- [ ] Text on photos has enough contrast. The template overlays are designed for this, so check any new photo that is unusually bright.

## 9. After publishing

- [ ] The live URL returns 200, and the share preview shows the right title and image (test by pasting the link into WhatsApp).
- [ ] [registry.md](registry.md): the row is set to `Live`, with its date and final title.
- [ ] On Friday, the guide is added to its service page's "Related guides" block, and to the area pages its brief names, at most 2 guides per area page.
- [ ] If this guide takes over a section of an existing guide (C-10), that section is trimmed, with the owner's approval.
- [ ] Once Search Console is verified, request indexing with URL Inspection.
- [ ] After 4–6 weeks, check the page's queries. If another URL shares them, log it in [cannibalization-report.md](cannibalization-report.md).
