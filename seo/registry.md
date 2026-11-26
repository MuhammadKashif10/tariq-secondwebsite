# Content registry

The master list of every URL on the site, plus planned articles. **Check this file before creating any page.** If a topic or keyword is already here, update that page instead of creating a new one.

- **Source:** crawled from the live sitemap on 2026-11-13 (73 URLs), joined with keyword ownership from [keyword-map.md](keyword-map.md).
- **Words** count the page's main content, including FAQ answers but excluding the header, footer, navigation and link cards.
- **Inbound** counts links from other pages' main content. Header and footer links are not counted, because every page has them.
- **Page schema** lists structured data beyond the site-wide `LocalBusiness` and `WebSite`.
- **Status:** `Live` means no issues. `Live, CONFLICT C-n` and `Live, watch C-n` refer to findings in [cannibalization-report.md](cannibalization-report.md).

No search volumes, rankings or traffic are recorded here. They have not been measured. Add them from Google Search Console once it has data. See [readme.md](readme.md#measurement).

## Summary

| Type | Pages | Words (min / median / max) |
|---|---|---|
| home | 1 | 808 / 808 / 808 |
| hub | 9 | 59 / 155 / 473 |
| service | 12 | 264 / 310 / 348 |
| area | 45 | 437 / 452 / 482 |
| guide | 6 | 294 / 336 / 383 |

## Live URLs

### Core and hub pages (10)

| # | URL | Cluster | Primary keyword | Intent | Title (chars) | H1 | Words | Inbound | Page schema | Lastmod | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `/` | C0 Core | junk removal dubai | Commercial | Dubai Junk Removal Services: Fixed Price from a Photo (53) | Dubai junk removal, priced from one photo. | 808 | 72 | FAQPage | 2026-11-13 | Live, owner in C-1, C-4, C-6 |
| 2 | `/about` | C0 Core | (no target keyword) | Navigational | About Us \| Dubai Junk Removal (29) | Getting rid of junk in Dubai should take one message. | 254 | 1 | BreadcrumbList | 2026-11-13 | Live |
| 3 | `/areas` | C6 Local | junk removal areas dubai | Navigational | Areas We Cover Across Dubai \| Dubai Junk Removal (48) | A tower in the Marina and a villa in Mirdif need different plans. | 122 | 46 | ItemList, BreadcrumbList | 2026-11-13 | Live |
| 4 | `/blog` | C7 Guides | dubai junk removal guides | Informational | Dubai Junk Removal Guides \| Dubai Junk Removal (46) | Useful things to know about clearing out in Dubai. | 63 | 6 | Blog, ItemList, BreadcrumbList | 2026-11-13 | Live |
| 5 | `/contact` | C0 Core | (no target keyword) | Navigational | Contact Us for a Quote \| Dubai Junk Removal (43) | Tell us what's going. | 188 | 0 | BreadcrumbList | 2026-11-13 | Live |
| 6 | `/faq` | C0 Core | junk removal questions dubai | Informational | Junk Removal FAQs \| Dubai Junk Removal (38) | Straight answers before you book. | 473 | 1 | FAQPage, BreadcrumbList | 2026-11-13 | Live, overlap C-4 |
| 7 | `/pricing` | C0 Core | junk removal price dubai | Commercial | Junk Removal Prices in Dubai \| Dubai Junk Removal (49) | One price, agreed before anything moves. | 278 | 1 | BreadcrumbList | 2026-11-13 | Live, CONFLICT C-2 |
| 8 | `/privacy` | C0 Core | (no target keyword) | Navigational | Privacy Policy \| Dubai Junk Removal (35) | Privacy policy | 150 | 0 | BreadcrumbList | 2026-11-13 | Live |
| 9 | `/services` | C0 Core | junk removal services list dubai | Commercial / navigational | Junk Removal Services in Dubai \| Dubai Junk Removal (51) | Everything we'll carry out, load up and take away. | 59 | 13 | ItemList, BreadcrumbList | 2026-11-13 | Live, watch C-6 |
| 10 | `/terms` | C0 Core | (no target keyword) | Navigational | Terms of Service \| Dubai Junk Removal (37) | Terms of service | 155 | 0 | BreadcrumbList | 2026-11-13 | Live |

### Service pages (12)

| # | URL | Cluster | Primary keyword | Intent | Title (chars) | H1 | Words | Inbound | Page schema | Lastmod | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 11 | `/services/appliance-removal` | C2 Appliances & e-waste | appliance removal dubai | Commercial / transactional | Appliance Removal Dubai: Fridge and Washer Disposal (51) | Heavy, awkward and past it. That's our kind of appliance. | 283 | 9 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 12 | `/services/construction-debris-removal` | C4 Outdoor & renovation | renovation debris removal dubai | Commercial / transactional | Renovation Debris Removal Dubai: Rubble Clearance (49) | The new kitchen looks great. The old one's still in the garage. | 285 | 8 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 13 | `/services/e-waste-removal` | C2 Appliances & e-waste | e-waste collection dubai | Commercial / transactional | E-Waste Removal Dubai: TV and Computer Recycling (48) | That drawer of dead electronics has a better place to go. | 264 | 10 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live, watch C-5 |
| 14 | `/services/furniture-removal` | C1 Furniture | furniture removal dubai | Commercial / transactional | Furniture Removal Dubai: Old Furniture Collected (48) | That wardrobe came in somehow. We'll get it out. | 316 | 35 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 15 | `/services/garden-waste-removal` | C4 Outdoor & renovation | garden waste removal dubai | Commercial / transactional | Garden Waste Removal Dubai: Palm and Green Waste (48) | Palm fronds don't fit in the bin. They fit on our truck. | 283 | 20 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 16 | `/services/house-villa-clearance` | C3 Property clearances | villa clearance dubai | Commercial / transactional | Villa Clearance Dubai: Full House Clearance Service (51) | A whole villa, cleared to a plan instead of a panic. | 337 | 18 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 17 | `/services/junk-removal` | C5 General junk | junk collection dubai (proposed, see C-1) | Commercial / transactional | Junk Removal Dubai: Fixed Price from a Photo (44) | Whatever's in the way, gone in one visit. | 348 | 35 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live, CONFLICT C-1 |
| 18 | `/services/mattress-removal` | C1 Furniture | mattress removal dubai | Commercial / transactional | Mattress Removal Dubai: Old Mattress Disposal (45) | Don't leave it by the bins. We'll take it from the bedroom. | 285 | 11 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live, watch C-3 |
| 19 | `/services/move-out-clearance` | C3 Property clearances | move out junk removal dubai | Commercial / transactional | Move-Out Junk Removal Dubai: End of Tenancy Clearance (53) | Handover's on Friday. The flat will be empty by then. | 310 | 22 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 20 | `/services/office-clearance` | C3 Property clearances | office clearance dubai | Commercial / transactional | Office Clearance Dubai: Furniture and IT Removal (48) | Your lease ends on the 30th. Your desks won't still be there. | 327 | 14 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 21 | `/services/same-day-junk-removal` | C5 General junk | same day junk removal dubai | Commercial / transactional | Same-Day Junk Removal Dubai: Urgent Pickup (42) | Need it gone today? Ask now and get a straight answer. | 292 | 6 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 22 | `/services/sofa-removal` | C1 Furniture | sofa removal dubai | Commercial / transactional | Sofa Removal Dubai: Couch Pickup and Disposal (45) | Your new sofa arrives Thursday. The old one leaves first. | 334 | 13 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |

### Guides (articles) (6)

| # | URL | Cluster | Primary keyword | Intent | Title (chars) | H1 | Words | Inbound | Page schema | Lastmod | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 23 | `/blog/dubai-move-out-junk-checklist` | C3 Property clearances | dubai move out checklist | Informational | The Dubai move-out checklist for what you're not taking (55) | The Dubai move-out checklist for what you're not taking | 310 | 6 | BlogPosting, BreadcrumbList | 2026-11-04 | Live |
| 24 | `/blog/dubai-municipality-free-bulky-waste-vs-private-junk-removal` | C5 General junk | dubai municipality bulky waste pickup | Informational | Free municipal pickup or paid junk removal in Dubai? (52) | Free municipal pickup or paid junk removal in Dubai? | 383 | 7 | BlogPosting, BreadcrumbList | 2026-11-04 | Live |
| 25 | `/blog/e-waste-disposal-dubai` | C2 Appliances & e-waste | how to recycle e-waste in dubai | Informational | E-waste in Dubai: what to do with old TVs, laptops and cables (61) | E-waste in Dubai: what to do with old TVs, laptops and cables | 333 | 6 | BlogPosting, BreadcrumbList | 2026-11-04 | Live, watch C-5 |
| 26 | `/blog/how-junk-removal-is-priced-in-dubai` | C0 Core | how to lower junk removal cost (proposed, see C-2) | Informational | How junk removal is priced in Dubai, and how to pay less (56) | How junk removal is priced in Dubai, and how to pay less | 336 | 4 | BlogPosting, BreadcrumbList | 2026-11-04 | Live, CONFLICT C-2 |
| 27 | `/blog/how-to-dispose-of-a-mattress-in-dubai` | C1 Furniture | how to dispose of a mattress in dubai | Informational | How to get rid of an old mattress in Dubai (42) | How to get rid of an old mattress in Dubai | 338 | 3 | BlogPosting, BreadcrumbList | 2026-11-04 | Live, watch C-3 |
| 28 | `/blog/junk-pickup-from-a-dubai-tower` | C3 Property clearances | service lift booking dubai | Informational | Getting bulky junk out of a Dubai tower without the drama (57) | Getting bulky junk out of a Dubai tower without the drama | 294 | 3 | BlogPosting, BreadcrumbList | 2026-11-04 | Live |

### Area pages (45)

| # | URL | Cluster | Primary keyword | Intent | Title (chars) | H1 | Words | Inbound | Page schema | Lastmod | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 29 | `/areas/al-barsha` | C6 Local · City Centre | junk removal al barsha | Commercial (local) | Junk Removal Al Barsha, Dubai \| Dubai Junk Removal (50) | Junk removal in Al Barsha | 468 | 12 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 30 | `/areas/al-furjan` | C6 Local · Villa & Family Communities | junk removal al furjan | Commercial (local) | Junk Removal Al Furjan, Dubai \| Dubai Junk Removal (50) | Junk removal in Al Furjan | 460 | 10 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 31 | `/areas/al-garhoud` | C6 Local · Established Neighbourhoods | junk removal al garhoud | Commercial (local) | Junk Removal Al Garhoud, Dubai \| Dubai Junk Removal (51) | Junk removal in Al Garhoud | 446 | 8 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 32 | `/areas/al-karama` | C6 Local · Established Neighbourhoods | junk removal al karama | Commercial (local) | Junk Removal Al Karama, Dubai \| Dubai Junk Removal (50) | Junk removal in Al Karama | 450 | 8 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 33 | `/areas/al-mizhar` | C6 Local · Villa & Family Communities | junk removal al mizhar | Commercial (local) | Junk Removal Al Mizhar, Dubai \| Dubai Junk Removal (50) | Junk removal in Al Mizhar | 447 | 6 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 34 | `/areas/al-nahda` | C6 Local · Established Neighbourhoods | junk removal al nahda | Commercial (local) | Junk Removal Al Nahda, Dubai \| Dubai Junk Removal (49) | Junk removal in Al Nahda | 443 | 6 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 35 | `/areas/al-quoz` | C6 Local · Industrial & Commercial | junk removal al quoz | Commercial (local) | Junk Removal Al Quoz, Dubai \| Dubai Junk Removal (48) | Junk removal in Al Quoz | 461 | 6 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 36 | `/areas/al-qusais` | C6 Local · Established Neighbourhoods | junk removal al qusais | Commercial (local) | Junk Removal Al Qusais, Dubai \| Dubai Junk Removal (50) | Junk removal in Al Qusais | 450 | 7 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 37 | `/areas/al-rashidiya` | C6 Local · Established Neighbourhoods | junk removal al rashidiya | Commercial (local) | Junk Removal Al Rashidiya, Dubai \| Dubai Junk Removal (53) | Junk removal in Al Rashidiya | 447 | 7 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 38 | `/areas/al-safa` | C6 Local · Villa & Family Communities | junk removal al safa | Commercial (local) | Junk Removal Al Safa, Dubai \| Dubai Junk Removal (48) | Junk removal in Al Safa | 447 | 9 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 39 | `/areas/al-satwa` | C6 Local · Established Neighbourhoods | junk removal al satwa | Commercial (local) | Junk Removal Al Satwa, Dubai \| Dubai Junk Removal (49) | Junk removal in Al Satwa | 449 | 8 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 40 | `/areas/al-warqa` | C6 Local · Villa & Family Communities | junk removal al warqa | Commercial (local) | Junk Removal Al Warqa, Dubai \| Dubai Junk Removal (49) | Junk removal in Al Warqa | 448 | 10 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 41 | `/areas/arabian-ranches` | C6 Local · Villa & Family Communities | junk removal arabian ranches | Commercial (local) | Junk Removal Arabian Ranches, Dubai \| Dubai Junk Removal (56) | Junk removal in Arabian Ranches | 467 | 8 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 42 | `/areas/arjan` | C6 Local · Villa & Family Communities | junk removal arjan | Commercial (local) | Junk Removal Arjan, Dubai \| Dubai Junk Removal (46) | Junk removal in Arjan | 441 | 7 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 43 | `/areas/bur-dubai` | C6 Local · Established Neighbourhoods | junk removal bur dubai | Commercial (local) | Junk Removal Bur Dubai, Dubai \| Dubai Junk Removal (50) | Junk removal in Bur Dubai | 459 | 8 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 44 | `/areas/business-bay` | C6 Local · City Centre | junk removal business bay | Commercial (local) | Junk Removal Business Bay, Dubai \| Dubai Junk Removal (53) | Junk removal in Business Bay | 455 | 9 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 45 | `/areas/damac-hills` | C6 Local · Villa & Family Communities | junk removal damac hills | Commercial (local) | Junk Removal DAMAC Hills, Dubai \| Dubai Junk Removal (52) | Junk removal in DAMAC Hills | 454 | 10 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 46 | `/areas/deira` | C6 Local · Established Neighbourhoods | junk removal deira | Commercial (local) | Junk Removal Deira, Dubai \| Dubai Junk Removal (46) | Junk removal in Deira | 451 | 10 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 47 | `/areas/difc` | C6 Local · City Centre | junk removal difc | Commercial (local) | Junk Removal DIFC, Dubai \| Dubai Junk Removal (45) | Junk removal in DIFC | 443 | 8 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 48 | `/areas/downtown-dubai` | C6 Local · City Centre | junk removal downtown dubai | Commercial (local) | Junk Removal Downtown Dubai, Dubai \| Dubai Junk Removal (55) | Junk removal in Downtown Dubai | 465 | 9 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 49 | `/areas/dubai-creek-harbour` | C6 Local · City Centre | junk removal dubai creek harbour | Commercial (local) | Junk Removal Dubai Creek Harbour \| Dubai Junk Removal (53) | Junk removal in Dubai Creek Harbour | 451 | 9 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 50 | `/areas/dubai-festival-city` | C6 Local · City Centre | junk removal dubai festival city | Commercial (local) | Junk Removal Dubai Festival City \| Dubai Junk Removal (53) | Junk removal in Dubai Festival City | 452 | 9 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 51 | `/areas/dubai-hills-estate` | C6 Local · Villa & Family Communities | junk removal dubai hills estate | Commercial (local) | Junk Removal Dubai Hills Estate \| Dubai Junk Removal (52) | Junk removal in Dubai Hills Estate | 471 | 6 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 52 | `/areas/dubai-investments-park` | C6 Local · Industrial & Commercial | junk removal dubai investments park | Commercial (local) | Junk Removal Dubai Investments Park \| Dubai Junk Removal (56) | Junk removal in Dubai Investments Park | 462 | 8 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 53 | `/areas/dubai-marina` | C6 Local · Marina & Coast | junk removal dubai marina | Commercial (local) | Junk Removal Dubai Marina, Dubai \| Dubai Junk Removal (53) | Junk removal in Dubai Marina | 474 | 9 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 54 | `/areas/dubai-silicon-oasis` | C6 Local · Industrial & Commercial | junk removal dubai silicon oasis | Commercial (local) | Junk Removal Dubai Silicon Oasis \| Dubai Junk Removal (53) | Junk removal in Dubai Silicon Oasis | 450 | 6 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 55 | `/areas/dubai-south` | C6 Local · Industrial & Commercial | junk removal dubai south | Commercial (local) | Junk Removal Dubai South, Dubai \| Dubai Junk Removal (52) | Junk removal in Dubai South | 450 | 7 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 56 | `/areas/dubai-sports-city` | C6 Local · Villa & Family Communities | junk removal dubai sports city | Commercial (local) | Junk Removal Dubai Sports City \| Dubai Junk Removal (51) | Junk removal in Dubai Sports City | 472 | 9 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 57 | `/areas/emirates-living` | C6 Local · Villa & Family Communities | junk removal emirates living | Commercial (local) | Junk Removal Emirates Living, Dubai \| Dubai Junk Removal (56) | Junk removal in Emirates Living | 453 | 7 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 58 | `/areas/international-city` | C6 Local · Established Neighbourhoods | junk removal international city | Commercial (local) | Junk Removal International City \| Dubai Junk Removal (52) | Junk removal in International City | 455 | 8 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 59 | `/areas/jebel-ali` | C6 Local · Industrial & Commercial | junk removal jebel ali | Commercial (local) | Junk Removal Jebel Ali, Dubai \| Dubai Junk Removal (50) | Junk removal in Jebel Ali | 451 | 9 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 60 | `/areas/jumeirah` | C6 Local · Marina & Coast | junk removal jumeirah | Commercial (local) | Junk Removal Jumeirah, Dubai \| Dubai Junk Removal (49) | Junk removal in Jumeirah | 457 | 8 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 61 | `/areas/jumeirah-beach-residence` | C6 Local · Marina & Coast | junk removal jbr | Commercial (local) | Junk Removal JBR, Dubai \| Dubai Junk Removal (44) | Junk removal in JBR | 482 | 8 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 62 | `/areas/jumeirah-golf-estates` | C6 Local · Villa & Family Communities | junk removal jumeirah golf estates | Commercial (local) | Junk Removal Jumeirah Golf Estates \| Dubai Junk Removal (55) | Junk removal in Jumeirah Golf Estates | 453 | 5 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 63 | `/areas/jumeirah-lakes-towers` | C6 Local · Marina & Coast | junk removal jlt | Commercial (local) | Junk Removal JLT, Dubai \| Dubai Junk Removal (44) | Junk removal in JLT | 469 | 9 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 64 | `/areas/jumeirah-village-circle` | C6 Local · Villa & Family Communities | junk removal jvc | Commercial (local) | Junk Removal JVC, Dubai \| Dubai Junk Removal (44) | Junk removal in JVC | 449 | 8 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 65 | `/areas/jumeirah-village-triangle` | C6 Local · Villa & Family Communities | junk removal jvt | Commercial (local) | Junk Removal JVT, Dubai \| Dubai Junk Removal (44) | Junk removal in JVT | 452 | 7 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 66 | `/areas/meydan` | C6 Local · City Centre | junk removal meydan | Commercial (local) | Junk Removal Meydan, Dubai \| Dubai Junk Removal (47) | Junk removal in Meydan | 441 | 8 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 67 | `/areas/mirdif` | C6 Local · Villa & Family Communities | junk removal mirdif | Commercial (local) | Junk Removal Mirdif, Dubai \| Dubai Junk Removal (47) | Junk removal in Mirdif | 446 | 11 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 68 | `/areas/motor-city` | C6 Local · Villa & Family Communities | junk removal motor city | Commercial (local) | Junk Removal Motor City, Dubai \| Dubai Junk Removal (51) | Junk removal in Motor City | 444 | 8 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 69 | `/areas/muhaisnah` | C6 Local · Established Neighbourhoods | junk removal muhaisnah | Commercial (local) | Junk Removal Muhaisnah, Dubai \| Dubai Junk Removal (50) | Junk removal in Muhaisnah | 437 | 8 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 70 | `/areas/nad-al-sheba` | C6 Local · Villa & Family Communities | junk removal nad al sheba | Commercial (local) | Junk Removal Nad Al Sheba, Dubai \| Dubai Junk Removal (53) | Junk removal in Nad Al Sheba | 458 | 7 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 71 | `/areas/palm-jumeirah` | C6 Local · Marina & Coast | junk removal palm jumeirah | Commercial (local) | Junk Removal Palm Jumeirah, Dubai \| Dubai Junk Removal (54) | Junk removal in Palm Jumeirah | 481 | 7 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 72 | `/areas/town-square` | C6 Local · Villa & Family Communities | junk removal town square | Commercial (local) | Junk Removal Town Square, Dubai \| Dubai Junk Removal (52) | Junk removal in Town Square | 453 | 6 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |
| 73 | `/areas/umm-suqeim` | C6 Local · Marina & Coast | junk removal umm suqeim | Commercial (local) | Junk Removal Umm Suqeim, Dubai \| Dubai Junk Removal (51) | Junk removal in Umm Suqeim | 461 | 7 | Service, FAQPage, BreadcrumbList | 2026-11-13 | Live |

## Planned articles

These are not live. They are the 60 guides from the *30-Day SEO Keyword & Content Plan* (PDF, 13 November 2026), published two a day from Monday 16 November to Tuesday 15 December 2026. Each keyword is reserved in [keyword-map.md](keyword-map.md#reserved-for-planned-guides-30-day-plan) and was checked for duplicates. The order, dates and pre-writing checks are in [content-plan.md](content-plan.md#phase-2--30-day-publishing-calendar).

They replace the earlier planned articles P-01 to P-07, which the PDF covers: P-01 → #09, P-02 → #05, P-03 → #06 and #39, P-04 → #08, P-05 → #04, P-06 → #17, P-07 → #53.

Titles are working titles in sentence case, at most 60 characters, because a guide's `title` is used as both its page title and its H1. The character count is in brackets.

| ID | Day | Working title (chars) | URL | Primary keyword | Cluster | Links to | Status |
|---|---|---|---|---|---|---|---|
| #01 | 1 | How to dispose of old furniture in Dubai: every option (54) | `/blog/how-to-dispose-of-old-furniture-in-dubai` | how to dispose old furniture in dubai | C1 Furniture | /services/furniture-removal, municipality guide | Live 2026-11-13 |
| #02 | 1 | Move-out permits in Dubai: how the NOC and gate pass work (57) | `/blog/move-out-permit-dubai` | move out permit dubai | C3 Property clearances | /services/move-out-clearance | Live 2026-11-13 |
| #03 | 2 | How to get a junk removal quote in Dubai from one photo (55) | `/blog/junk-removal-quote-from-photo` | junk removal quote dubai | C5 General junk | /services/junk-removal, /pricing, /contact | Live 2026-11-14 (updated 2026-11-26) |
| #04 | 2 | Construction waste disposal in Dubai: rules for residents (57) | `/blog/renovation-waste-rules-dubai` | construction waste disposal dubai | C4 Outdoor & renovation | /services/construction-debris-removal | Live 2026-11-14 (updated 2026-11-26) |
| #05 | 3 | Office relocation checklist for a Dubai lease handover (54) | `/blog/office-relocation-clearance-checklist-dubai` | office relocation checklist dubai | C3 Property clearances | /services/office-clearance | Live 2026-11-15 |
| #06 | 3 | How to dispose of an old fridge or freezer in Dubai (51) | `/blog/how-to-dispose-of-a-fridge-in-dubai` | how to dispose of a fridge in dubai | C2 Appliances & e-waste | /services/appliance-removal | Live 2026-11-15 |
| #07 | 4 | Leaving Dubai for good: what to do with your furniture (54) | `/blog/leaving-dubai-for-good-furniture-and-appliances` | leaving dubai for good | C3 Property clearances | /services/move-out-clearance | Live 2026-11-16 |
| #08 | 4 | Garden waste collection in Dubai: what the bins take (52) | `/blog/garden-waste-collection-dubai` | garden waste collection dubai | C4 Outdoor & renovation | /services/garden-waste-removal | Live 2026-11-16 |
| #09 | 5 | House clearance checklist for a Dubai villa, room by room (57) | `/blog/villa-clearance-checklist-dubai` | house clearance checklist | C3 Property clearances | /services/house-villa-clearance | Live 2026-11-17 |
| #10 | 5 | Skip hire or a junk removal truck in Dubai: which fits? (55) | `/blog/skip-hire-vs-junk-removal-dubai` | skip hire dubai | C4 Outdoor & renovation | /services/construction-debris-removal | Live 2026-11-17 |
| #11 | 6 | Warehouse clearance in Dubai: racking, pallets and stock (56) | `/blog/warehouse-clearance-dubai` | warehouse clearance dubai | C3 Property clearances | /services/office-clearance | Live 2026-11-18 |
| #12 | 6 | How to dispose of a sofa in Dubai, L-shapes included (52) | `/blog/how-to-dispose-sofa-in-dubai` | how to dispose sofa in dubai | C1 Furniture | /services/sofa-removal | Live 2026-11-18 |
| #13 | 7 | How to choose a junk removal company in Dubai: 10 checks (56) | `/blog/how-to-choose-junk-removal-company-dubai` | how to choose a junk removal company in dubai | C5 General junk | /services/junk-removal, /about | Live 2026-11-19 |
| #14 | 7 | IT asset disposal in Dubai: a guide for office IT teams (55) | `/blog/it-asset-disposal-dubai` | it asset disposal dubai | C2 Appliances & e-waste | /services/e-waste-removal | Live 2026-11-19 |
| #15 | 8 | How to clear a Dubai property remotely from overseas (52) | `/blog/clear-dubai-property-from-abroad` | clear property remotely dubai | C3 Property clearances | /services/house-villa-clearance | Live 2026-11-20 |
| #16 | 8 | Office furniture disposal in Dubai: reuse, resell or remove (59) | `/blog/office-furniture-disposal-dubai` | office furniture disposal dubai | C3 Property clearances | /services/office-clearance | Live 2026-11-20 |
| #17 | 9 | Where to donate furniture in Dubai, and what's accepted (55) | `/blog/donate-furniture-dubai` | donate furniture dubai | C1 Furniture | /services/furniture-removal | Live 2026-11-21 |
| #18 | 9 | Dumping fines in Dubai: can you leave furniture by the bin? (59) | `/blog/dumping-furniture-next-to-bin-dubai-rules` | dumping fine dubai | C5 General junk | /services/junk-removal, municipality guide | Live 2026-11-21 |
| #19 | 10 | How to dispose of a washing machine in Dubai (44) | `/blog/how-to-dispose-washing-machine-in-dubai` | how to dispose washing machine in dubai | C2 Appliances & e-waste | /services/appliance-removal | Live 2026-11-22 |
| #20 | 10 | Moving-out sale in Dubai: what sells and what doesn't (53) | `/blog/moving-out-sale-dubai` | moving out sale dubai | C3 Property clearances | /services/move-out-clearance | Live 2026-11-22 |
| #21 | 11 | Where to sell used furniture in Dubai, and when to skip it (58) | `/blog/sell-used-furniture-dubai` | where to sell used furniture in dubai | C3 Property clearances | /services/move-out-clearance | Live 2026-11-23 |
| #22 | 11 | Free zone office clearance in Dubai: passes and handover (56) | `/blog/free-zone-office-clearance-dubai` | free zone office clearance dubai | C3 Property clearances | /services/office-clearance | Live 2026-11-23 |
| #23 | 12 | Wardrobe disposal in Dubai: getting it out of an apartment (58) | `/blog/wardrobe-disposal-dubai` | wardrobe disposal dubai | C1 Furniture | /services/furniture-removal | Live 2026-11-24 |
| #24 | 12 | Garage clearance in Dubai villas and townhouses (47) | `/blog/garage-clearance-dubai` | garage clearance dubai | C3 Property clearances | /services/house-villa-clearance | Live 2026-11-24 |
| #25 | 13 | Movers vs junk removal in Dubai: which do you need? (51) | `/blog/movers-vs-junk-removal-dubai` | movers vs junk removal dubai | C3 Property clearances | /services/move-out-clearance | Live 2026-11-25 |
| #26 | 13 | Kitchen removal in Dubai: who strips it out, who takes it (57) | `/blog/old-kitchen-removal-dubai` | kitchen removal dubai | C4 Outdoor & renovation | /services/construction-debris-removal | Live 2026-11-25 |
| #27 | 14 | Laptop recycling in Dubai: how to wipe it first (47) | `/blog/wipe-laptop-before-recycling-dubai` | laptop recycling dubai | C2 Appliances & e-waste | /services/e-waste-removal, e-waste guide | Planned |
| #28 | 14 | Recycling centres in Dubai: what each one accepts (49) | `/blog/dubai-recycling-centres-guide` | recycling centre dubai | C2 Appliances & e-waste | /services/e-waste-removal, e-waste guide | Planned |
| #29 | 15 | Dubai move-out security deposit: items left behind (50) | `/blog/security-deposit-dubai-move-out-items` | security deposit dubai move out | C3 Property clearances | /services/move-out-clearance | Planned |
| #30 | 15 | Palm fronds in Dubai: how to bundle and dispose of them (55) | `/blog/palm-frond-disposal-dubai` | palm fronds dubai | C4 Outdoor & renovation | /services/garden-waste-removal | Planned |
| #31 | 16 | Bed frame disposal in Dubai: dismantle, prepare, collect (56) | `/blog/bed-frame-disposal-dubai` | bed frame disposal dubai | C1 Furniture | /services/furniture-removal, mattress guide | Planned |
| #32 | 16 | Shop clearance in Dubai before a refit or handover (50) | `/blog/shop-clearance-dubai` | shop clearance dubai | C5 General junk | /services/junk-removal | Planned |
| #33 | 17 | Where to dispose of batteries in Dubai, swollen ones too (56) | `/blog/where-to-dispose-batteries-in-dubai` | where to dispose batteries in dubai | C2 Appliances & e-waste | /services/e-waste-removal, e-waste guide | Planned |
| #34 | 17 | What does junk removal include? From lifting to sweep-up (56) | `/blog/what-does-junk-removal-include` | what does junk removal include | C5 General junk | /services/junk-removal, /faq | Planned |
| #35 | 18 | Furniture removal without a lift in Dubai walk-ups (50) | `/blog/heavy-furniture-removal-without-lift-dubai` | furniture removal without lift dubai | C1 Furniture | /services/furniture-removal | Planned |
| #36 | 18 | Landlord property clearance between tenants in Dubai (52) | `/blog/landlord-property-clearance-dubai` | landlord property clearance dubai | C3 Property clearances | /services/move-out-clearance | Planned |
| #37 | 19 | Cardboard box disposal in Dubai after a move (44) | `/blog/moving-boxes-packing-waste-dubai` | cardboard box disposal dubai | C5 General junk | /services/junk-removal | Planned |
| #38 | 19 | How to bag rubble and tiles for collection in Dubai (51) | `/blog/how-to-bag-rubble-for-collection` | how to bag rubble for collection dubai | C4 Outdoor & renovation | /services/construction-debris-removal | Planned |
| #39 | 20 | AC disposal in Dubai: after the technician removes it (53) | `/blog/ac-unit-disposal-dubai` | ac disposal dubai | C2 Appliances & e-waste | /services/appliance-removal | Planned |
| #40 | 20 | Junk removal truck load size: quarter, half or full? (52) | `/blog/junk-removal-truck-load-size-guide` | junk removal truck load size | C5 General junk | /services/junk-removal, /pricing | Planned |
| #41 | 21 | Bed bug furniture disposal in Dubai: before and after (53) | `/blog/bed-bug-furniture-disposal-dubai` | bed bug furniture disposal dubai | C1 Furniture | /services/sofa-removal, mattress guide | Planned |
| #42 | 21 | Restaurant equipment disposal in Dubai: café clear-outs (55) | `/blog/restaurant-equipment-disposal-dubai` | restaurant equipment disposal dubai | C5 General junk | /services/junk-removal | Planned |
| #43 | 22 | Where to drop off used appliances in Dubai (42) | `/blog/where-to-drop-off-used-appliances-dubai` | where to drop off used appliances dubai | C2 Appliances & e-waste | /services/appliance-removal | Planned |
| #44 | 22 | How to prepare a villa for sale in Dubai: what to clear (55) | `/blog/prepare-villa-for-sale-dubai-clearance` | prepare villa for sale dubai | C3 Property clearances | /services/house-villa-clearance | Planned |
| #45 | 23 | Downsizing in Dubai: from a villa to an apartment (49) | `/blog/downsizing-villa-to-apartment-dubai` | downsizing dubai | C3 Property clearances | /services/house-villa-clearance | Planned |
| #46 | 23 | What happens to junk after collection in Dubai? (47) | `/blog/what-happens-to-junk-after-collection-dubai` | what happens to junk after collection | C5 General junk | /services/junk-removal | Planned |
| #47 | 24 | Treadmill disposal in Dubai: getting rid of a home gym (54) | `/blog/treadmill-disposal-dubai` | treadmill disposal dubai | C5 General junk | /services/junk-removal | Planned |
| #48 | 24 | Deceased estate clearance in Dubai: a gentle guide (50) | `/blog/estate-clearance-dubai` | deceased estate clearance dubai | C3 Property clearances | /services/house-villa-clearance | Planned |
| #49 | 25 | Balcony junk removal in Dubai towers: what can stay (51) | `/blog/balcony-junk-removal-dubai` | balcony junk removal dubai | C5 General junk | /services/junk-removal | Planned |
| #50 | 25 | Commercial waste rules in Dubai for small companies (51) | `/blog/dubai-business-waste-rules` | commercial waste rules dubai | C3 Property clearances | /services/office-clearance | Planned |
| #51 | 26 | Outdoor furniture disposal in Dubai: sun and sea-air damage (59) | `/blog/outdoor-furniture-disposal-dubai` | outdoor furniture disposal dubai | C1 Furniture | /services/furniture-removal | Planned |
| #52 | 26 | Soil removal in Dubai: old sand and turf after landscaping (58) | `/blog/soil-turf-removal-dubai` | soil removal dubai | C4 Outdoor & renovation | /services/garden-waste-removal | Planned |
| #53 | 27 | Hazardous waste disposal in Dubai: paint, chemicals, gas (56) | `/blog/hazardous-household-waste-dubai` | hazardous waste disposal dubai | C5 General junk | /services/junk-removal, /faq | Planned |
| #54 | 27 | Holiday home furniture replacement in Dubai (43) | `/blog/holiday-home-furniture-replacement-dubai` | holiday home furniture replacement dubai | C1 Furniture | /services/furniture-removal | Planned |
| #55 | 28 | Dining table disposal in Dubai: glass, marble and wood (54) | `/blog/dining-table-disposal-dubai` | dining table disposal dubai | C1 Furniture | /services/furniture-removal | Planned |
| #56 | 28 | Waste segregation in Dubai: the bin system explained (52) | `/blog/dubai-waste-segregation-rules` | waste segregation dubai | C5 General junk | /services/junk-removal | Planned |
| #57 | 29 | Trampoline disposal in Dubai, plus outgrown kids' furniture (59) | `/blog/trampoline-kids-furniture-disposal-dubai` | trampoline disposal dubai | C3 Property clearances | /services/house-villa-clearance | Planned |
| #58 | 29 | Exhibition stand disposal in Dubai: booths and props (52) | `/blog/exhibition-event-leftovers-dubai` | exhibition stand disposal dubai | C5 General junk | /services/junk-removal | Planned |
| #59 | 30 | Hoarder house clearance in Dubai: helping a family member (57) | `/blog/hoarder-house-clearance-dubai` | hoarder house clearance dubai | C3 Property clearances | /services/house-villa-clearance | Planned |
| #60 | 30 | Carpet disposal in Dubai: rugs, curtains and flooring (53) | `/blog/carpet-rug-disposal-dubai` | carpet disposal dubai | C5 General junk | /services/junk-removal | Planned |

**Status values:** `Planned` → `In progress` (being written) → `Live` (published and checked; then move the row to the live tables) or `Dropped` (with a reason).

## Maintenance

- **When a page is added or retitled:** add or update its row here and in [keyword-map.md](keyword-map.md) in the same change.
- **When an article is published:** move it from *Planned* to the live table, then record its date and URL.
- **Quarterly, or after any batch of changes:** regenerate the live tables from a fresh crawl. See [readme.md](readme.md#re-auditing).
