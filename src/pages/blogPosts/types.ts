export interface Block {
  type: "heading" | "paragraph" | "list" | "orderedList";
  text?: string;
  items?: string[];
}

export interface Section {
  heading: string;
  blocks: Block[];
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  intro: string;
  sections: Section[];
  faqs: Faq[];
}