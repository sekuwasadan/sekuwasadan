import BlogPostLayout from "./BlogPostLayout";
import type { Post } from "./types";

export const post: Post = {
  slug: "story-of-sekuwa-sadan",
  title: "The Story of Sekuwa Sadan",
  category: "Story",
  date: "Aug 19, 2026",
  readTime: "7 min read",
  excerpt:
    "From a small family stall in Pokhara to the grill house it is today. A short history of how it all began.",
  intro:
    "Every restaurant has a beginning. Ours started with a family, a small charcoal grill and a deep belief that food tastes best when it comes from the heart. This is the story of how Sekuwa Sadan came to be.",
  sections: [
    {
      heading: "A Small Stall in Pokhara",
      blocks: [
        {
          type: "paragraph",
          text: "Years ago, our founders began grilling sekuwa on a modest stall in the streets of Pokhara. Word spread quickly — people travelled across town for the smell of mutton hitting hardwood coals.",
        },
      ],
    },
    {
      heading: "From Street Grill to Grill House",
      blocks: [
        {
          type: "paragraph",
          text: "As the crowd grew, so did our little kitchen. We kept everything that made the stall special: the same charcoal, the same spice blend, the same hands that had been shaping sekuwa for years.",
        },
        {
          type: "list",
          items: [
            "The same family recipes, kept unchanged",
            "The same hardwood charcoal cooking",
            "A bigger hall, but the same warmth",
          ],
        },
      ],
    },
    {
      heading: "Why We Stay Traditional",
      blocks: [
        {
          type: "paragraph",
          text: "Modern kitchens are faster, but faster is not better. We stayed with fire and time because that is where the flavour lives.",
        },
      ],
    },
    {
      heading: "The Journey Continues",
      blocks: [
        {
          type: "paragraph",
          text: "Today, new faces sit beside the same fire, and every plate carries the story of that Pokhara street stall. We hope you will be part of the next chapter.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Where did Sekuwa Sadan start?",
      answer:
        "It began as a small family street grill in Pokhara before growing into the grill house it is today.",
    },
    {
      question: "Are the original recipes still used?",
      answer:
        "Yes. The spice blends and grilling method remain true to our founding family recipes.",
    },
    {
      question: "What makes Sekuwa Sadan different?",
      answer:
        "We still cook over traditional hardwood charcoal, using the same techniques that made our street stall famous.",
    },
  ],
};

const StoryPage = () => <BlogPostLayout post={post} />;

export default StoryPage;