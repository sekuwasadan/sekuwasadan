import BlogPostLayout from "./BlogPostLayout";
import type { Post } from "./types";

export const post: Post = {
  slug: "beaten-rice-and-smoke",
  title: "Beaten Rice & Smoke: Our Take on a Classic Combo",
  category: "Culture",
  date: "Aug 10, 2026",
  readTime: "5 min read",
  excerpt:
    "Chiura, smoky tomato chutney and fire-grilled meat — the trio that defines a Nepali feast.",
  intro:
    "Chiura, smoky tomato chutney and fire-grilled meat — the trio that defines a Nepali feast. Simple ingredients, prepared well, become something unforgettable. Here is how this classic combination comes together at our table.",
  sections: [
    {
      heading: "What Is Beaten Rice?",
      blocks: [
        {
          type: "paragraph",
          text: "Beaten rice, or chiura, is rice that has been hulled and flattened. It is light, chewy and the perfect canvas for the bold flavours of sekuwa and chutney.",
        },
      ],
    },
    {
      heading: "The Smoky Tomato Chutney",
      blocks: [
        {
          type: "paragraph",
          text: "Tomatoes are charred over the same fire as the meat, then pounded with garlic, chillies and timur. The smoke binds everything together.",
        },
        {
          type: "orderedList",
          items: [
            "Char tomatoes over the embers until blistered",
            "Pound with garlic, green chillies and salt",
            "Finish with roasted timur and mustard oil",
          ],
        },
      ],
    },
    {
      heading: "Building the Perfect Plate",
      blocks: [
        {
          type: "list",
          items: [
            "A bed of beaten rice underneath",
            "Fresh sekuwa on top, still sizzling",
            "Smoky chutney on the side",
            "Garnish with onions, coriander and lime",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is chiura?",
      answer:
        "Chiura is beaten rice — hulled rice that is flattened, making it quick to serve without cooking.",
    },
    {
      question: "Is the chutney very spicy?",
      answer:
        "It is smoky and tangy with a mild chilli warmth. Ask us when you visit and we are happy to adjust the heat.",
    },
    {
      question: "What meat goes best with chiura?",
      answer:
        "Mutton sekuwa is the classic pairing, but chicken and pork work beautifully too.",
    },
  ],
};

const BeatenRicePage = () => <BlogPostLayout post={post} />;

export default BeatenRicePage;