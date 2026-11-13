/**
 * Where each area photo came from. Unsplash and Pexels licences allow free
 * commercial use without attribution. `showsActualArea` is false where the
 * photo shows a matching property type rather than the named area.
 */
export type AreaPhotoCredit = {
  slug: string;
  file: string;
  source: "pexels" | "unsplash";
  sourceUrl: string;
  photographer: string;
  licence: string;
  showsActualArea: boolean;
};

export const areaPhotoCredits: AreaPhotoCredit[] = [
  {
    "slug": "dubai-marina",
    "file": "/images/dubai-marina.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/aerial-view-of-dubai-marina-skyline-and-towers-31033420/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": true
  },
  {
    "slug": "jumeirah-beach-residence",
    "file": "/images/areas/jumeirah-beach-residence.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/skyscrapers-on-sea-shore-in-dubai-17877178/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": true
  },
  {
    "slug": "jumeirah-lakes-towers",
    "file": "/images/areas/jumeirah-lakes-towers.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/blue-train-in-a-railway-between-buildings-and-palm-trees-4502690/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "palm-jumeirah",
    "file": "/images/areas/palm-jumeirah.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/villas-in-front-of-skyscapers-in-dubai-10514386/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": true
  },
  {
    "slug": "jumeirah",
    "file": "/images/areas/jumeirah.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/people-on-the-beach-1645605/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": true
  },
  {
    "slug": "umm-suqeim",
    "file": "/images/areas/umm-suqeim.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/burj-al-arab-dubai-2044434/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": true
  },
  {
    "slug": "downtown-dubai",
    "file": "/images/areas/downtown-dubai.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/city-at-waterfront-337932/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": true
  },
  {
    "slug": "business-bay",
    "file": "/images/areas/business-bay.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/dubai-downtown-at-night-15693277/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": true
  },
  {
    "slug": "difc",
    "file": "/images/areas/difc.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/drone-photography-of-city-during-dawn-5577701/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "al-barsha",
    "file": "/images/areas/al-barsha.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/31771219/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "jumeirah-village-circle",
    "file": "/images/areas/jumeirah-village-circle.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/31771228/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "jumeirah-village-triangle",
    "file": "/images/areas/jumeirah-village-triangle.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/34188579/",
    "photographer": "AJ Ahamad",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "dubai-hills-estate",
    "file": "/images/areas/dubai-hills-estate.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/34188580/",
    "photographer": "AJ Ahamad",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "arabian-ranches",
    "file": "/images/areas/arabian-ranches.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/31771226/",
    "photographer": "Subbu Rayan",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "al-furjan",
    "file": "/images/areas/al-furjan.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/34188582/",
    "photographer": "AJ Ahamad",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "motor-city",
    "file": "/images/areas/motor-city.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/luxurious-rooftop-pool-in-dubai-with-city-view-29149087/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "dubai-sports-city",
    "file": "/images/areas/dubai-sports-city.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/31771240/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "damac-hills",
    "file": "/images/areas/damac-hills.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/1642125/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "town-square",
    "file": "/images/areas/town-square.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/34188578/",
    "photographer": "AJ Ahamad",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "mirdif",
    "file": "/images/areas/mirdif.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/9510718/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "deira",
    "file": "/images/deira-creek.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/deira-twin-towers-on-sea-coast-in-dubai-19913932/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": true
  },
  {
    "slug": "bur-dubai",
    "file": "/images/areas/bur-dubai.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/rustic-wall-with-lanterns-in-dubai-s-historic-area-33098967/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": true
  },
  {
    "slug": "al-karama",
    "file": "/images/areas/al-karama.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/minimalist-houses-on-city-street-8481173/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "al-qusais",
    "file": "/images/areas/al-qusais.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/8481164/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "al-quoz",
    "file": "/images/areas/al-quoz.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/string-of-lights-hanging-across-the-street-in-alserkal-avenue-dubai-9383822/",
    "photographer": "Myka Vergara",
    "licence": "Pexels License",
    "showsActualArea": true
  },
  {
    "slug": "dubai-investments-park",
    "file": "/images/areas/dubai-investments-park.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/32390903/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "jebel-ali",
    "file": "/images/areas/jebel-ali.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/industrial-facility-in-desert-landscape-29183619/",
    "photographer": "Joba Adewumi",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "dubai-silicon-oasis",
    "file": "/images/areas/dubai-silicon-oasis.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/31771214/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": true
  },
  {
    "slug": "international-city",
    "file": "/images/areas/international-city.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/8481168/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "al-warqa",
    "file": "/images/areas/al-warqa.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/11014817/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "al-nahda",
    "file": "/images/areas/al-nahda.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/31771220/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "muhaisnah",
    "file": "/images/areas/muhaisnah.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/9510736/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "al-rashidiya",
    "file": "/images/areas/al-rashidiya.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/8481178/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "al-mizhar",
    "file": "/images/areas/al-mizhar.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/9510721/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "nad-al-sheba",
    "file": "/images/areas/nad-al-sheba.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/31771223/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "meydan",
    "file": "/images/areas/meydan.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/the-meydan-bridge-in-dubai-8309120/",
    "photographer": "Miguel Cuenca",
    "licence": "Pexels License",
    "showsActualArea": true
  },
  {
    "slug": "dubai-creek-harbour",
    "file": "/images/areas/dubai-creek-harbour.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/dubai-creek-harbour-at-sunset-19845370/",
    "photographer": "Yassen Kounchev",
    "licence": "Pexels License",
    "showsActualArea": true
  },
  {
    "slug": "dubai-festival-city",
    "file": "/images/areas/dubai-festival-city.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/night-buildings-reflections-dubai-91628/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": true
  },
  {
    "slug": "al-garhoud",
    "file": "/images/areas/al-garhoud.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/8481177/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "al-satwa",
    "file": "/images/areas/al-satwa.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/illuminated-streets-and-buildings-in-dubai-uae-at-night-17914746/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "al-safa",
    "file": "/images/areas/al-safa.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/31771210/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "arjan",
    "file": "/images/areas/arjan.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/15131322/",
    "photographer": "Diego F. Parra",
    "licence": "Pexels License",
    "showsActualArea": true
  },
  {
    "slug": "dubai-south",
    "file": "/images/areas/dubai-south.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/sustainability-pavilion-in-dubai-15177911/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": true
  },
  {
    "slug": "jumeirah-golf-estates",
    "file": "/images/areas/jumeirah-golf-estates.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/34188581/",
    "photographer": "AJ Ahamad",
    "licence": "Pexels License",
    "showsActualArea": false
  },
  {
    "slug": "emirates-living",
    "file": "/images/areas/emirates-living.jpg",
    "source": "pexels",
    "sourceUrl": "https://www.pexels.com/photo/31771213/",
    "photographer": "",
    "licence": "Pexels License",
    "showsActualArea": false
  }
];
