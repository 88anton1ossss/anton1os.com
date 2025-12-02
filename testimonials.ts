export interface Testimonial {
  id: number;
  name: string;
  location: string;
  resort: string;
  type: 'Proposal' | 'Adventure' | 'Solo' | 'Family';
  rating: 5;
  review: string;
  photo: string;
  customerPhoto?: string;
  date: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah & Michael",
    location: "Chicago, IL",
    resort: "Winter Park",
    type: "Proposal",
    rating: 5,
    review: "Anton made our proposal absolutely PERFECT. He knew exactly where to take us for the best light, and I had NO IDEA he was even there until Michael got down on one knee. The photos are stunning, and we had them back before we even left Colorado. Worth every penny!",
    photo: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    customerPhoto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "February 2024"
  },
  {
    id: 2,
    name: "Jake Thompson",
    location: "Austin, TX",
    resort: "Copper Mountain",
    type: "Solo",
    rating: 5,
    review: "As a content creator, I needed killer action shots for my Instagram. Anton delivered beyond expectations. He can actually RIDE (like, really ride), so he got angles that no other photographer could. The shots of me hitting jumps in the terrain park are insane. 10/10 would book again.",
    photo: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    customerPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "January 2024"
  },
  {
    id: 3,
    name: "The Martinez Family",
    location: "Denver, CO",
    resort: "Arapahoe Basin",
    type: "Family",
    rating: 5,
    review: "We wanted professional family photos but our kids (ages 4 and 7) are... energetic. Anton was incredible with them. He made it FUN, not stressful. The photos of us laughing together in the snow are now framed in our living room. Best family photo session we've ever had.",
    photo: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    customerPhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "December 2023"
  },
  {
    id: 4,
    name: "Emily & Jordan",
    location: "Seattle, WA",
    resort: "Winter Park",
    type: "Adventure",
    rating: 5,
    review: "We booked Anton for our anniversary trip and it was hands-down the best decision. He took us to spots we never would have found on our own. The vibe was so chill—it felt like we were just hanging with a friend who happened to have a camera. The photos are magazine-quality.",
    photo: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    customerPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "March 2024"
  },
  {
    id: 5,
    name: "Marcus Chen",
    location: "San Francisco, CA",
    resort: "Copper Mountain",
    type: "Solo",
    rating: 5,
    review: "I'm not photogenic AT ALL, but Anton somehow made me look like I belong in a ski magazine. He gave me simple prompts instead of awkward poses, and the results speak for themselves. My LinkedIn headshot is now me on a snowboard. Thanks, Anton!",
    photo: "https://images.unsplash.com/photo-1605540436563-5bca919ae5cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    customerPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "February 2024"
  },
  {
    id: 6,
    name: "Amanda & Chris",
    location: "Boston, MA",
    resort: "Winter Park",
    type: "Proposal",
    rating: 5,
    review: "The secret proposal was FLAWLESS. Anton worked with Chris for weeks planning the perfect moment. I was completely shocked, and the photos captured every emotion. We got a full gallery of the proposal AND an engagement session after. Can't recommend him enough!",
    photo: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    customerPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "January 2024"
  }
];
