import BlogPostLayout from "./BlogPostLayout";
import type { Post } from "./types";

export const post: Post = {
  slug: "what-to-drink-with-sekuwa",
  title: "What to Drink with Your Sekuwa",
  category: "Guides",
  date: "Aug 02, 2026",
  readTime: "4 min read",
  excerpt:
    "Whether it's tongba, chyang or a cold drink, here's what pairs best with a platter of charcoal-grilled meat.",
  intro:
    "Spicy, smoky and savoury — sekuwa deserves a drink that keeps up. Whether you prefer something traditional or a simple refreshment, the right choice makes the meal complete. Here is our guide to pairing.",
  sections: [
    {
      heading: "Traditional Pairs",
      blocks: [
        {
          type: "paragraph",
          text: "Nepal has its own drinks that have accompanied grill food for generations.",
        },
        {
          type: "list",
          items: [
            "Tongba — warm millet beer with a gentle sweetness",
            "Chyang — a light, slightly tangy rice beer",
            "Raksi — a slow, strong finish for bold palates",
          ],
        },
      ],
    },
    {
      heading: "Modern & Refreshing",
      blocks: [
        {
          type: "paragraph",
          text: "If you are keeping it cool, choose something that cuts through the richness.",
        },
        {
          type: "list",
          items: [
            "Lassi or buttermilk to soothe the spice",
            "Fresh lime soda for a citrusy lift",
            "A crisp cold beer to complement the smoke",
          ],
        },
      ],
    },
    {
      heading: "The Golden Rule",
      blocks: [
        {
          type: "paragraph",
          text: "There are no strict rules — the best pairing is the one you enjoy. But if you are unsure, a cold drink that is light and slightly sweet is rarely a wrong answer.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is tongba?",
      answer:
        "Tongba is a traditional millet beer served warm in a wooden mug. It has a gentle sweetness and a slow, comforting release of flavour.",
    },
    {
      question: "What helps with the spice?",
      answer:
        "Lassi, buttermilk or a squeeze of lime all help tame the warmth and cool the palate between bites.",
    },
    {
      question: "Can children enjoy sekuwa too?",
      answer:
        "Absolutely. We can prepare a milder version on request, and juice or cold drinks make great companions for younger guests.",
    },
  ],
};

const DrinkGuidePage = () => <BlogPostLayout post={post} />;

export default DrinkGuidePage;