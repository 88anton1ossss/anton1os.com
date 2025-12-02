export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  snippet: string;
  content: string;
}

export const blogPostsData: BlogPost[] = [
  { 
    id: 1, 
    slug: '7-best-proposal-spots-winter-park', 
    title: "The 7 Best (And Easiest) Proposal Spots at Winter Park", 
    category: "Proposal Guides", 
    date: "October 28, 2025", 
    imageUrl: 'https://images.unsplash.com/photo-1549216666-be38740d26e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 
    snippet: "As an insider, I'm sharing my favorite *secret* spots that don't require a 3-hour hike...", 
    content: "<p>This is the full blog post content. As an insider, I'm sharing my favorite *secret* spots that don't require a 3-hour hike. The key to a great proposal spot is balancing an epic view with accessibility.</p><h3>1. Parsenn Bowl Summit</h3><p>At 12,060 feet, the view from the top of Parsenn Bowl is a 360-degree panorama. It feels like the top of the world, and it's easily accessible from the lift.</p><h3>2. Lunch Rock</h3><p>A classic for a reason. The modern lodge has incredible views, but the *real* spot is just off to the side, looking out over Mary Jane. Best at golden hour.</p>" 
  },
  { 
    id: 2, 
    slug: 'how-to-propose-on-skis', 
    title: "How to Propose on a Ski Trip (And Not Drop the Ring)", 
    category: "Tips & Tricks", 
    date: "October 22, 2025", 
    imageUrl: 'https://images.unsplash.com/photo-1517042562200-a6a3aba4004c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', 
    snippet: "The ring, the gloves, the speech... it's a lot. Here's my step-by-step guide...", 
    content: "<p>This is the full blog post content for 'How to Propose on a Ski Trip'.</p>" 
  },
  { 
    id: 3, 
    slug: 'what-to-wear-winter-engagement', 
    title: "What to Wear for Your Winter Engagement Photos", 
    category: "Tips & Tricks", 
    date: "October 15, 2025", 
    imageUrl: 'https://images.unsplash.com/photo-1611043739598-a006c09a835a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', 
    snippet: "Hint: It's all about layers, texture, and NOT freezing. Here's my pro guide...", 
    content: "<p>This is the full blog post content for 'What to Wear'.</p>" 
  },
  { 
    id: 4, 
    slug: 'why-you-need-a-photographer-who-skis', 
    title: "Why You NEED a Photographer Who Skis (or Snowboards)", 
    category: "USP", 
    date: "October 10, 2025", 
    imageUrl: 'https://images.unsplash.com/photo-1518023243164-67c133cf3c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', 
    snippet: "Any photographer can stand at the base. Only a true mountain-goer can get *the* shot...", 
    content: "<p>This is the full blog post content for 'Why You Need a Photographer Who Skis'.</p>" 
  }
];
