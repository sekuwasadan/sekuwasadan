import BlogPostLayout from "./BlogPostLayout";
import type { Post } from "./types";

export const post: Post = {
  slug: "why-hardwood-charcoal",
  title: "Why We Grill Over Hardwood Charcoal",
  category: "Food Science",
  date: "Aug 28, 2026",
  readTime: "4 min read",
  excerpt:
    "Charcoal isn't just fuel — it's flavour. We explain why traditional hardwood grilling beats everything else.",
  intro:
    "Charcoal isn't just fuel — it is flavour. The difference between a gas grill and a hardwood coal fire is the difference between cooking a meal and making a memory. Here is why we will never grill any other way.",
  sections: [
    {
      heading: "Real Smoke, Real Flavour",
      blocks: [
        {
          type: "paragraph",
          text: "Hardwood charcoal burns at a higher, steadier temperature and releases complex smoky compounds that gently kiss the surface of the meat. This is what gives sekuwa its unmistakable aroma.",
        },
      ],
    },
    {
      heading: "Heat That Beats Gas",
      blocks: [
        {
          type: "paragraph",
          text: "Coals radiate heat from every angle, not just from below. The result is an even crust and a juicy interior that grills with burners simply cannot achieve.",
        },
        {
          type: "list",
          items: [
            "Higher, more consistent temperature",
            "Radiant heat seals in juices quickly",
            "A deeper, smoky crust",
          ],
        },
      ],
    },
    {
      heading: "A Slow, Ritual Process",
      blocks: [
        {
          type: "orderedList",
          items: [
            "Light the coals and wait for them to ash over",
            "Wait — never rush the fire",
            "Grill, turning steadily, until perfectly charred",
          ],
        },
      ],
    },
    {
      heading: "Tradition Preserved",
      blocks: [
        {
          type: "paragraph",
          text: "Our ancestors grilled over open fire. Keeping that process alive is not nostalgia — it is how the food tastes best.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is charcoal grilling healthier?",
      answer:
        "Moderation matters, but charcoal grilling allows fat to drip away instead of pooling, and produces a leaner finished dish.",
    },
    {
      question: "Why not gas?",
      answer:
        "Gas adds no flavour and heats unevenly. Charcoal gives radiant heat and real smoke that gas simply cannot replicate.",
    },
    {
      question: "How long does the charcoal fire take?",
      answer:
        "The coals need about 20 to 30 minutes to ash over before they are ready — patience is part of the recipe.",
    },
  ],
};

const HardwoodCharcoalPage = () => <BlogPostLayout post={post} />;

export default HardwoodCharcoalPage;