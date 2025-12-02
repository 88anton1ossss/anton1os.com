export interface Package {
  id: string;
  name: string;
  idealFor: string;
  price: number;
  pricePer: string;
  isFeatured?: boolean;
  features: string[];
}

export const packagesData: Package[] = [
  {
    id: "solo",
    name: "The Solo Adventurer",
    idealFor: "Individuals, content creators, or skiers/boarders needing epic action shots.",
    price: 450,
    pricePer: "session",
    features: [
      "60-minute session (1 hour)",
      "1 person",
      "Focus on action & portraits",
      "20 final retouched photos",
      "72-hour gallery delivery",
    ],
  },
  {
    id: "adventure",
    name: "The Adventure Session",
    idealFor: "Couples (engagement, anniversary) or families wanting a fun adventure.",
    price: 700,
    pricePer: "session",
    isFeatured: true,
    features: [
      "90-minute session (1.5 hours)",
      "Up to 5 people",
      "2-3 locations on-mountain",
      "70+ final retouched photos",
      "72-hour gallery delivery",
    ],
  },
  {
    id: "proposal",
    name: "The Secret Proposal",
    idealFor: "The perfectly planned surprise proposal.",
    price: 950,
    pricePer: "package",
    features: [
      "30-min 'Mission Planning' Zoom call",
      "30-min 'stealth' proposal capture",
      "30-min engagement session after",
      "50+ final retouched photos",
      "Priority 48-hour gallery",
    ],
  },
];

export interface Addon {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  max: number;
}

export const addonsData: Addon[] = [
  { id: 'time', name: 'Add 30 Minutes', description: '(Includes 15 extra photos)', price: 150, quantity: 0, max: 4 },
  { id: 'video', name: '4K Cinematic Video Reel', description: '(1-min edited video for social media)', price: 400, quantity: 0, max: 1 },
  { id: 'gallery', name: 'The Full Gallery (RAW)', description: '(All 200+ unedited photos from the session)', price: 250, quantity: 0, max: 1 },
  { id: 'rush', name: '24-Hour Rush Delivery', description: '(Get your final gallery the next day)', price: 200, quantity: 0, max: 1 },
  { id: 'stealth', name: 'Secret Proposal Stealth Fee', description: '(For surprise planning & \'hiding\')', price: 200, quantity: 0, max: 1 }
];
