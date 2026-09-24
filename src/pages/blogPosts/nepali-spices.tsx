import BlogPostLayout from "./BlogPostLayout";
import type { Post } from "./types";

export const post: Post = {
  slug: "guide-to-nepali-spices",
  title: "A Guide to Nepali Spices You'll Find in Our Kitchen",
  category: "Culture",
  date: "Sep 05, 2026",
  readTime: "6 min read",
  excerpt:
    "Timur, cumin, coriander and more — get to know the spices that give Nepali BBQ its signature kick.",
  intro:
    "Timur, cumin, coriander and more — the spices of Nepal carry centuries of flavour. At Sekuwa Sadan these spices are the quiet heroes behind every charcoal-grilled bite. Here is a friendly guide to the ones you will meet in our kitchen.",
  sections: [
    {
      heading: "Timur: Nepal's Signature Pepper",
      blocks: [
        {
          type: "paragraph",
          text: "Szechuan pepper's close cousin, timur gives a gentle citrusy tingle on the tongue rather than a fierce burn. It is the spice that most defines Nepali cooking.",
        },
        {
          type: "list",
          items: [
            "Tastes citrusy with a numbing, tingly finish",
            "Ground fresh just before serving for the best aroma",
            "Often dusted over sekuwa at the end",
          ],
        },
      ],
    },
    {
      heading: "Cumin and Coriander: The Warm Base",
      blocks: [
        {
          type: "paragraph",
          text: "These two form the backbone of our marinades. Toasted and freshly ground, they add warmth and depth without overpowering the meat.",
        },
      ],
    },
    {
      heading: "Ginger, Garlic and Green Chillies",
      blocks: [
        {
          type: "paragraph",
          text: "Pounded fresh every morning, this trio brings brightness and heat. In sekuwa they work together to both tenderise the meat and build layers of flavour.",
        },
      ],
    },
    {
      heading: "How We Balance the Blend",
      blocks: [
        {
          type: "paragraph",
          text: "There is no single recipe — every family has their own. Our approach is simple: keep the natural taste of the meat first, and let the spices wrap around it.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What does timur taste like?",
      answer:
        "Timur is citrusy and slightly floral, with a mild numbing tingle. It is aromatic rather than spicy-hot.",
    },
    {
      question: "Are Nepali spices very hot?",
      answer:
        "Not necessarily. Heat is balanced by aromatic spices like cumin and coriander. Green chillies add brightness more than aggressive heat.",
    },
    {
      question: "Should spices be ground fresh?",
      answer:
        "Yes. Toasting and grinding whole spices right before use dramatically improves the aroma and flavour of the final dish.",
    },
  ],
};

const NepaliSpicesPage = () => <BlogPostLayout post={post} />;

export default NepaliSpicesPage;