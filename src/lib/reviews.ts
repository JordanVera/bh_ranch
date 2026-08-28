export type Review = {
  author: string;
  date: string;
  rating: number;
  text: string;
};

export const GOOGLE_REVIEWS = {
  rating: 4.5,
  count: 266,
  url: 'https://search.google.com/local/reviews?placeid=ChIJ2_rWwbDrQIYRoqlezVhJeTw',
};

export const FEATURED_REVIEWS: Review[] = [
  {
    author: 'Juliet P.',
    date: 'Houston, TX',
    rating: 5,
    text: "Our wedding at BH Ranch was beyond my expectations. Iris and her husband made everything go smooth. Tables, chairs, chair covers, table covers, sashes, parking, security, bartender, catering, and cleanup — very affordable and stress-free.",
  },
  {
    author: 'Elizabeth S.',
    date: 'Houston, TX',
    rating: 5,
    text: "It\'s a very nice place. They were very nice. The price was great. I loved the fireplace!",
  },
  {
    author: 'Janet S.',
    date: 'Houston, TX',
    rating: 5,
    text: "We celebrated my daughter\'s Sweet 16. Samuel and Iris Harris made her dream come true with the best warming, blessing, and organized event. Special thanks to Iris for coordination.",
  },
  {
    author: 'Barbara Boudreaux Deas',
    date: 'Houston, TX',
    rating: 5,
    text: "Exceptional place for an event. Love the cleanliness and space of the entire place. If I have an event it will be there.",
  },
  {
    author: 'Shuna W.',
    date: 'Houston, TX',
    rating: 5,
    text: "We had our family reunion at this venue with about 150 family members and there was still room for more. The grounds are huge, the pavilion is huge and has an attached well-equipped kitchen.",
  },
  {
    author: 'Robert Zahn',
    date: 'Houston, TX',
    rating: 5,
    text: "It is very a blessed place. U must book your next event at the ranch. I love and enjoy it.",
  },
];
