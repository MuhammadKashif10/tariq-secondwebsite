# Content plan

What to create or improve next, and in what order. The new-article schedule comes from the *30-Day SEO Keyword & Content Plan* (PDF, prepared 13 November 2026), checked against [keyword-map.md](keyword-map.md) and [cannibalization-report.md](cannibalization-report.md). Planned articles also appear in [registry.md](registry.md#planned-articles).

**There is no search data yet.** The PDF marks every volume and difficulty "Not verified". Its demand signals come from Google Autocomplete (UAE). A spot-check on 2026-11-13 confirmed all six phrases tested. Priorities are based on business value, buying intent and coverage gaps. Revisit the order once Google Search Console has 4–6 weeks of data (see [readme.md](readme.md#measurement)).

## Strategy

- **Pillars are the 12 service pages plus the homepage.** Guides answer the questions people have before hiring, and send qualified readers to a pillar.
- **Cadence: two guides a day for 30 days** (owner's decision, 13 November 2026). That is 60 guides from Monday 16 November to Tuesday 15 December 2026.
- **The pace never overrides the gate.** Every guide must pass [qa-checklist.md](qa-checklist.md) before it goes live. If a guide isn't ready, publish the next one that is, and move the late one to the end of the calendar. Never publish an unverified fact or an unconfirmed business claim to keep the schedule.
- **Hubs before spokes.** High-priority hubs go out first, so later guides can link to live URLs. A guide may only link to a planned guide once that guide is live.
- **Fix before you add.** Resolve C-1 and C-2 in week 1, because 15 planned guides use `/services/junk-removal` as their pillar and two link to the pricing pages.

### Coverage after the plan

| Cluster | Guides now | Planned | Total |
|---|---|---|---|
| C0 Core | 1 (pricing guide, see C-2) | 0. #03, #13, #34 and #40 support C0 pages but sit under the junk removal pillar. | 1 |
| C1 Furniture | 1 | 10 | 11 |
| C2 Appliances & e-waste | 1 | 8 | 9 |
| C3 Property clearances | 2 | 20 | 22 |
| C4 Outdoor & renovation | 0 | 7 | 7 |
| C5 General junk | 1 | 15 | 16 |

By the PDF's topic groups: Furniture 12, Appliances & e-waste 7, Moving 7, Property clearance 10, Office & commercial 8, Renovation & garden 7, Waste rules 4, Hiring & process 5. Priorities: 16 High, 33 Medium, 11 Low.

## Phase 1 · Before and during week 1

These change live content or code, so each needs the owner's approval before editing.

| Priority | Task | Why | When |
|---|---|---|---|
| 1 | Resolve **C-2**: reposition the pricing guide and strengthen links to `/pricing` | Guides #03 and #40 link to the pricing pages, so they must support the right owner | Before Day 2 |
| 2 | Resolve **C-1**: retitle `/services/junk-removal` around mixed loads | 15 planned guides use it as their pillar | Before Day 2 |
| 3 | **Code:** add a "Related guides" block to service pages | The PDF asks every service page to link to its guides. The template can't yet. | Week 1 |
| 4 | **Code:** allow links inside guide text. The `Block` type has no inline links. | Every brief lists 3–6 contextual links | Week 1. Until then, guides rely on `relatedService` and the related-guides cards. |
| 5 | **Code:** add an author (`Person`) to guides, if the owner names one | E-E-A-T: the PDF recommends a named author or reviewer | When a name is confirmed. Never invent one. |
| 6 | **Photos:** one unique, licensed photo per guide, uploaded to R2 | 60 guides need 60 new photos | Source them a week ahead of the calendar |
| 7 | Verify Google Search Console and Bing, then submit the sitemap | Without data, nothing here can be measured | Before Day 1 |
| 8 | Resolve **C-3** and **C-4** | Medium-risk overlaps | Week 2 |
| 9 | Trim the existing guides that the new ones go deeper on (see [C-10](cannibalization-report.md#c-10--existing-guides-vs-new-guides-that-go-deeper-medium)) | Keeps one owner per topic | When the deeper guide goes live |
| 10 | Owner-supplied proof: real reviews, trade licence, Google Business Profile link, job photos | The main E-E-A-T gap (see [readme.md](readme.md#e-e-a-t-status)) | Ongoing |

Every Friday, add that week's live guides to the "Related guides" block of their service page, and to any area page the brief names.

## Phase 2 · 30-day publishing calendar

Two guides a day. Dates follow the PDF and can be shifted as a block. Each guide's full brief (search intent, audience, outline, link plan) is in the PDF. The URL and keywords are in [keyword-map.md](keyword-map.md#reserved-for-planned-guides-30-day-plan).

- **Verify:** facts outside the business's control. Each needs a primary source (dm.gov.ae, dlp.dubai.gov.ae, or the developer's or organisation's own page) in the guide's `sources`. If a fact can't be verified, leave it out or write "check with…".
- **Owner:** business claims the owner must confirm before the guide makes them (see [style-guide.md](style-guide.md#claims-that-need-the-owners-confirmation)).

| Day | Date | ID | Working title | Primary keyword | Pillar | Priority | Check before writing |
|---|---|---|---|---|---|---|---|
| 1 | Mon 16 Nov | #01 | How to dispose of old furniture in Dubai: every option | how to dispose old furniture in dubai | `/services/furniture-removal` | High | Verify: DM bulky waste pickup lead time and how to book (800900) |
| 1 | Mon 16 Nov | #02 | Move-out permits in Dubai: how the NOC and gate pass work | move out permit dubai | `/services/move-out-clearance` | High | Verify: each developer's current move-out permit process |
| 2 | Tue 17 Nov | #03 | How to get a junk removal quote in Dubai from one photo | junk removal quote dubai | `/services/junk-removal` | High | – |
| 2 | Tue 17 Nov | #04 | Construction waste disposal in Dubai: rules for residents | construction waste disposal dubai | `/services/construction-debris-removal` | High | Verify: Law No. 18 of 2024 (Art. 6) and the debris fine schedule |
| 3 | Wed 18 Nov | #05 | Office relocation checklist for a Dubai lease handover | office relocation checklist dubai | `/services/office-clearance` | High | – |
| 3 | Wed 18 Nov | #06 | How to dispose of an old fridge or freezer in Dubai | how to dispose of a fridge in dubai | `/services/appliance-removal` | High | Verify: refrigerant handling rules; retailer take-back offers |
| 4 | Thu 19 Nov | #07 | Leaving Dubai for good: what to do with your furniture | leaving dubai for good | `/services/move-out-clearance` | High | – |
| 4 | Thu 19 Nov | #08 | Garden waste collection in Dubai: what the bins take | garden waste collection dubai | `/services/garden-waste-removal` | High | Verify: Dubai Municipality garden waste service; community bin rules |
| 5 | Fri 20 Nov | #09 | House clearance checklist for a Dubai villa, room by room | house clearance checklist | `/services/house-villa-clearance` | High | – |
| 5 | Fri 20 Nov | #10 | Skip hire or a junk removal truck in Dubai: which fits? | skip hire dubai | `/services/construction-debris-removal` | High | Owner: we don't supply skips |
| 6 | Sat 21 Nov | #11 | Warehouse clearance in Dubai: racking, pallets and stock | warehouse clearance dubai | `/services/office-clearance` | High | Owner: racking dismantling |
| 6 | Sat 21 Nov | #12 | How to dispose of a sofa in Dubai, L-shapes included | how to dispose sofa in dubai | `/services/sofa-removal` | High | – |
| 7 | Sun 22 Nov | #13 | How to choose a junk removal company in Dubai: 10 checks | how to choose a junk removal company in dubai | `/services/junk-removal` | High | – |
| 7 | Sun 22 Nov | #14 | IT asset disposal in Dubai: a guide for office IT teams | it asset disposal dubai | `/services/e-waste-removal` | High | Owner: no data-destruction certificates |
| 8 | Mon 23 Nov | #15 | How to clear a Dubai property remotely from overseas | clear property remotely dubai | `/services/house-villa-clearance` | High | Owner: remote booking and payment |
| 8 | Mon 23 Nov | #16 | Office furniture disposal in Dubai: reuse, resell or remove | office furniture disposal dubai | `/services/office-clearance` | High | – |
| 9 | Tue 24 Nov | #17 | Where to donate furniture in Dubai, and what's accepted | donate furniture dubai | `/services/furniture-removal` | Medium | Verify: each charity's current acceptance list and pickup |
| 9 | Tue 24 Nov | #18 | Dumping fines in Dubai: can you leave furniture by the bin? | dumping fine dubai | `/services/junk-removal` | Medium | Verify: Executive Council Resolution No. 14 of 2015 fine amounts |
| 10 | Wed 25 Nov | #19 | How to dispose of a washing machine in Dubai | how to dispose washing machine in dubai | `/services/appliance-removal` | Medium | – |
| 10 | Wed 25 Nov | #20 | Moving-out sale in Dubai: what sells and what doesn't | moving out sale dubai | `/services/move-out-clearance` | Medium | – |
| 11 | Thu 26 Nov | #21 | Where to sell used furniture in Dubai, and when to skip it | where to sell used furniture in dubai | `/services/move-out-clearance` | Medium | – |
| 11 | Thu 26 Nov | #22 | Free zone office clearance in Dubai: passes and handover | free zone office clearance dubai | `/services/office-clearance` | Medium | Verify: free zone access-pass process per zone |
| 12 | Fri 27 Nov | #23 | Wardrobe disposal in Dubai: getting it out of an apartment | wardrobe disposal dubai | `/services/furniture-removal` | Medium | – |
| 12 | Fri 27 Nov | #24 | Garage clearance in Dubai villas and townhouses | garage clearance dubai | `/services/house-villa-clearance` | Medium | – |
| 13 | Sat 28 Nov | #25 | Movers vs junk removal in Dubai: which do you need? | movers vs junk removal dubai | `/services/move-out-clearance` | Medium | – |
| 13 | Sat 28 Nov | #26 | Kitchen removal in Dubai: who strips it out, who takes it | kitchen removal dubai | `/services/construction-debris-removal` | Medium | Owner: whether crews strip kitchens or only take them away |
| 14 | Sun 29 Nov | #27 | Laptop recycling in Dubai: how to wipe it first | laptop recycling dubai | `/services/e-waste-removal` | Medium | Verify: data-wiping steps per OS (manufacturer docs) |
| 14 | Sun 29 Nov | #28 | Recycling centres in Dubai: what each one accepts | recycling centre dubai | `/services/e-waste-removal` | Medium | Verify: Smart Sustainability Oasis locations and accepted materials |
| 15 | Mon 30 Nov | #29 | Dubai move-out security deposit: items left behind | security deposit dubai move out | `/services/move-out-clearance` | Medium | – |
| 15 | Mon 30 Nov | #30 | Palm fronds in Dubai: how to bundle and dispose of them | palm fronds dubai | `/services/garden-waste-removal` | Medium | – |
| 16 | Tue 01 Dec | #31 | Bed frame disposal in Dubai: dismantle, prepare, collect | bed frame disposal dubai | `/services/furniture-removal` | Medium | – |
| 16 | Tue 01 Dec | #32 | Shop clearance in Dubai before a refit or handover | shop clearance dubai | `/services/junk-removal` | Medium | – |
| 17 | Wed 02 Dec | #33 | Where to dispose of batteries in Dubai, swollen ones too | where to dispose batteries in dubai | `/services/e-waste-removal` | Medium | Verify: battery drop-off points |
| 17 | Wed 02 Dec | #34 | What does junk removal include? From lifting to sweep-up | what does junk removal include | `/services/junk-removal` | Medium | – |
| 18 | Thu 03 Dec | #35 | Furniture removal without a lift in Dubai walk-ups | furniture removal without lift dubai | `/services/furniture-removal` | Medium | – |
| 18 | Thu 03 Dec | #36 | Landlord property clearance between tenants in Dubai | landlord property clearance dubai | `/services/move-out-clearance` | Medium | – |
| 19 | Fri 04 Dec | #37 | Cardboard box disposal in Dubai after a move | cardboard box disposal dubai | `/services/junk-removal` | Medium | Verify: cardboard recycling points |
| 19 | Fri 04 Dec | #38 | How to bag rubble and tiles for collection in Dubai | how to bag rubble for collection dubai | `/services/construction-debris-removal` | Medium | – |
| 20 | Sat 05 Dec | #39 | AC disposal in Dubai: after the technician removes it | ac disposal dubai | `/services/appliance-removal` | Medium | Verify: refrigerant recovery rules |
| 20 | Sat 05 Dec | #40 | Junk removal truck load size: quarter, half or full? | junk removal truck load size | `/services/junk-removal` | Medium | – |
| 21 | Sun 06 Dec | #41 | Bed bug furniture disposal in Dubai: before and after | bed bug furniture disposal dubai | `/services/sofa-removal` | Medium | Owner: whether infested items are taken, and how |
| 21 | Sun 06 Dec | #42 | Restaurant equipment disposal in Dubai: café clear-outs | restaurant equipment disposal dubai | `/services/junk-removal` | Medium | Owner: commercial kitchen equipment (grease, gas) |
| 22 | Mon 07 Dec | #43 | Where to drop off used appliances in Dubai | where to drop off used appliances dubai | `/services/appliance-removal` | Medium | Verify: appliance drop-off and retailer take-back (e.g. ACE Festival Plaza) |
| 22 | Mon 07 Dec | #44 | How to prepare a villa for sale in Dubai: what to clear | prepare villa for sale dubai | `/services/house-villa-clearance` | Medium | – |
| 23 | Tue 08 Dec | #45 | Downsizing in Dubai: from a villa to an apartment | downsizing dubai | `/services/house-villa-clearance` | Medium | – |
| 23 | Tue 08 Dec | #46 | What happens to junk after collection in Dubai? | what happens to junk after collection | `/services/junk-removal` | Medium | – |
| 24 | Wed 09 Dec | #47 | Treadmill disposal in Dubai: getting rid of a home gym | treadmill disposal dubai | `/services/junk-removal` | Medium | – |
| 24 | Wed 09 Dec | #48 | Deceased estate clearance in Dubai: a gentle guide | deceased estate clearance dubai | `/services/house-villa-clearance` | Medium | Owner: sensitive-clearance process |
| 25 | Thu 10 Dec | #49 | Balcony junk removal in Dubai towers: what can stay | balcony junk removal dubai | `/services/junk-removal` | Medium | – |
| 25 | Thu 10 Dec | #50 | Commercial waste rules in Dubai for small companies | commercial waste rules dubai | `/services/office-clearance` | Low | Verify: approved waste collector rules for businesses |
| 26 | Fri 11 Dec | #51 | Outdoor furniture disposal in Dubai: sun and sea-air damage | outdoor furniture disposal dubai | `/services/furniture-removal` | Low | – |
| 26 | Fri 11 Dec | #52 | Soil removal in Dubai: old sand and turf after landscaping | soil removal dubai | `/services/garden-waste-removal` | Low | Owner: soil, sand and turf loads |
| 27 | Sat 12 Dec | #53 | Hazardous waste disposal in Dubai: paint, chemicals, gas | hazardous waste disposal dubai | `/services/junk-removal` | Low | Verify: hazardous household waste drop-off points |
| 27 | Sat 12 Dec | #54 | Holiday home furniture replacement in Dubai | holiday home furniture replacement dubai | `/services/furniture-removal` | Low | – |
| 28 | Sun 13 Dec | #55 | Dining table disposal in Dubai: glass, marble and wood | dining table disposal dubai | `/services/furniture-removal` | Low | – |
| 28 | Sun 13 Dec | #56 | Waste segregation in Dubai: the bin system explained | waste segregation dubai | `/services/junk-removal` | Low | Verify: current Dubai segregation scheme and where it applies |
| 29 | Mon 14 Dec | #57 | Trampoline disposal in Dubai, plus outgrown kids' furniture | trampoline disposal dubai | `/services/house-villa-clearance` | Low | Owner: above-ground pools and play sets |
| 29 | Mon 14 Dec | #58 | Exhibition stand disposal in Dubai: booths and props | exhibition stand disposal dubai | `/services/junk-removal` | Low | Owner: event and exhibition jobs |
| 30 | Tue 15 Dec | #59 | Hoarder house clearance in Dubai: helping a family member | hoarder house clearance dubai | `/services/house-villa-clearance` | Low | Owner: sensitive-clearance process |
| 30 | Tue 15 Dec | #60 | Carpet disposal in Dubai: rugs, curtains and flooring | carpet disposal dubai | `/services/junk-removal` | Low | – |

### Changes from the PDF

| PDF item | Change | Why |
|---|---|---|
| Titles | Shortened to 60 characters or fewer, in sentence case, each containing its primary keyword | A guide's `title` is also its page title and H1. The style guide uses sentence case. |
| #38 primary keyword | "how to bag rubble for collection dubai" instead of "rubble removal dubai" | "rubble removal dubai" belongs to the renovation debris service |
| #13 secondary keywords | Removed "best junk removal dubai", "junk removal dubai reviews" and "near me" | Unprovable, competes with `/`, and the site shows no reviews yet |
| #11 title | No area names in the title. The PDF had "Al Quoz, DIP and Jebel Ali". | Too close to a service-plus-area page. Areas go in the body, with links. |
| #22 secondary keywords | Removed the DMCC, DIFC and JLT "office clearance" phrases | Area pages own those (keyword map, rule 3) |
| Links to the pricing guide | Link to `/pricing` first. Link to the pricing guide only for "how to pay less". | `/pricing` owns price and cost (C-2) |
| Links in from area pages | Only where the area page genuinely covers the topic, and at most 2 guide links per area page | Keeps area pages local, not lists of links |
| 900–1,600 words per guide | Kept as a range, not a target | Length follows the question. Never pad. |

### Planned guides that must stay distinct

| Guides | How they stay apart |
|---|---|
| #01 hub vs #12 sofa, #23 wardrobe, #31 bed frame, #55 dining table | The hub compares disposal routes. Item guides cover dismantling, handling and access for one item. |
| #17 donate vs #21 sell vs #20 moving-out sale | Charity vs selling to buyers vs a time-boxed whole-home sale |
| #08 garden waste vs #30 palm fronds vs #52 soil and turf | General green waste vs palm-specific handling vs heavy landscaping spoil |
| #04 renovation rules vs #10 skip vs truck vs #38 bagging rubble vs #26 kitchen | Rules and responsibility vs choosing a provider vs a bagging how-to vs a kitchen strip-out sequence |
| #05 office relocation vs #16 office furniture vs #22 free zone vs #14 IT disposal | Project checklist vs the furniture reuse decision vs free-zone access vs IT data and logistics |
| #09 villa checklist vs #45 downsizing vs #24 garage vs #44 villa for sale | Emptying a whole property vs moving smaller vs one room type vs preparing for buyers |
| #28 recycling centres vs #43 appliance drop-off vs #33 batteries | Where to recycle in general vs appliances and small electricals vs batteries only |
| #49 balcony clear-outs vs #51 outdoor furniture | Tower balcony rules and clutter vs disposing of the outdoor furniture itself |
| #07 leaving the UAE vs #29 deposit vs the existing move-out checklist | Leaving the country vs avoiding deductions vs the general move-out plan. Don't use "checklist" in the #07 or #29 titles. |
| #36 landlord between tenants vs #54 holiday home vs #15 clearing from overseas | Long-let turnaround vs short-let refresh vs an absent owner |

## Do not create

These would compete with existing or planned pages, or add nothing:

| Idea | Why not |
|---|---|
| "Junk removal cost in Dubai 2026" or any new pricing article | Owned by `/pricing`, already in conflict (C-2), and the site publishes no prices |
| "Best junk removal company in Dubai" or "cheap junk removal" | Self-serving and unprovable. Competes with `/`. #13 covers how to choose. |
| Service-plus-area pages (e.g. "Sofa removal JVC") | Cannibalizes both the service and the area page (keyword map, rule 3) |
| Separate pages for sub-communities already covered (Springs, Meadows, Lakes) | Owned by `/areas/emirates-living` |
| A second mattress, e-waste, TV or move-out guide | Existing guides own those topics. Update them instead. |
| "Dubai Municipality bulky waste collection" (number, WhatsApp) | Owned by the municipality guide. Refresh it instead. |
| Same-day junk removal guides | Owned by `/services/same-day-junk-removal` |
| Move-out cleaning, balcony cleaning, decluttering services, skip supply, tree cutting, AC uninstallation, scrap buying, data-destruction certificates | Not offered. Covered only as honest comparisons (#10, #08, #39, #27). |
| Abu Dhabi or Sharjah pages | Outside the service area |
| Thin "junk removal in <tiny community>" pages | Must meet the area page standard: genuinely local and at least 250 unique words |

## After day 30

1. Pull Search Console queries for each new URL and record real impressions in [keyword-map.md](keyword-map.md). Replace "Not verified" only with measured data.
2. Merge or 301 any guide that ranks for the same queries as another page, and log it in [cannibalization-report.md](cannibalization-report.md).
3. Re-run the site audit. 60 new URLs is far over the 5-page trigger in [readme.md](readme.md#re-auditing).
4. Plan the next month from the queries the new guides actually attract.

## Refresh cycle

| Content | Review every | Check |
|---|---|---|
| Guides with `sources` (rules, fines, drop-off points, charities) | 6 months | Links still work and facts are still current. Set `updated`. |
| Area pages | 12 months | New buildings or access changes, and the photo |
| Service pages | 12 months, or when the service changes | Inclusions, FAQs, claims and the "Related guides" block |
| This plan | Weekly during the 30 days, then monthly | Slipped guides, verification status, and Search Console data once available |
