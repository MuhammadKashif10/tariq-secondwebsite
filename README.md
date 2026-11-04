# Dubai Junk Removal Services

Marketing site for dubaijunkremovalservices.com. Built with Next.js 16 (App Router), TypeScript and Tailwind CSS 4. Every page is prerendered, and there is no database or backend to run.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build, prints [launch check] warnings
npm run start
npm run lint
```

## Before launch

Business details live in `src/config/site.ts`.

**Required**

- [x] `phone`, `phoneDisplay`, `whatsapp`, `streetAddress`, `hoursLabel` and `hours`: taken from fastjunkservicedubai.com.
- [x] `email`: supplied by the owner.

**Check the copy matches how you operate.** It was written without your input:

- [ ] Fixed price before work starts, and payment after the job
- [ ] Free quotes with no call-out fee
- [ ] Crews dismantle furniture, sweep up, and send completion photos
- [ ] Reuse, recycling and disposal claims ("Where it goes" on the homepage, the About page, service pages)
- [ ] Same-day, evening and weekend availability
- [ ] All 27 listed areas and all 12 services
- [ ] Privacy and Terms pages: have these reviewed for your business

**Recommended**

- [ ] `priceTiers[].fromAed`: add real prices to show "From AED x". Neither competitor publishes prices.
- [ ] `reviews`: add genuine reviews and the section appears on the homepage and About page.
- [ ] `tradeLicence`, `profiles`: these add trust and feed the structured data.
- [ ] Replace the stock photos with real photos of your crew and truck. The current ones show models, not your team. Swap the files in `public/images` or change the paths in `src/data/images.ts`.
- [ ] Set up a Google Business Profile and verify the site in Search Console, then submit `/sitemap.xml`.

The structured data has no star rating. Do not add ratings unless they come from real reviews.

## Editing content

| What | Where |
| --- | --- |
| Business details, prices, reviews | `src/config/site.ts` |
| Services | `src/data/services.ts` |
| Areas | `src/data/areas.ts` |
| FAQs | `src/data/faqs.ts` |
| Guides | `src/data/posts.ts` |
| Load builder items and sizes | `src/components/LoadBuilder.tsx` |
| Photos and which page uses them | `src/data/images.ts` |

New entries in the data files get their own page and sitemap entry automatically.

## Photo licences

Photos in `public/images` come from Unsplash and Pexels. Both licences allow free commercial use without attribution. Do not resell the photos on their own, and do not suggest that people shown in them endorse the business.

## Deploying

This is a standard Next.js app, so it runs on Vercel or any Node host. On Vercel, import the project and add both `dubaijunkremovalservices.com` and `www.dubaijunkremovalservices.com`. The `www` host redirects to the apex in `next.config.ts`.
