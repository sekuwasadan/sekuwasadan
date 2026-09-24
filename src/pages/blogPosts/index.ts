import type { ComponentType } from "react";
import MuttonSekuwaPage, { post as muttonSekuwaPost } from "./what-makes-sekuwa-sadan-special";
import NepaliSpicesPage, { post as nepaliSpicesPost } from "./nepali-spices";
import HardwoodCharcoalPage, { post as hardwoodCharcoalPost } from "./hardwood-charcoal";
import StoryPage, { post as storyPost } from "./story-of-sekuwa-sadan";
import BeatenRicePage, { post as beatenRicePost } from "./beaten-rice-and-smoke";
import DrinkGuidePage, { post as drinkGuidePost } from "./what-to-drink-with-sekuwa";
import type { Post } from "./types";

export interface BlogEntry {
  post: Post;
  Page: ComponentType;
}

export const blogEntries: BlogEntry[] = [
  { post: muttonSekuwaPost, Page: MuttonSekuwaPage },
  { post: nepaliSpicesPost, Page: NepaliSpicesPage },
  { post: hardwoodCharcoalPost, Page: HardwoodCharcoalPage },
  { post: storyPost, Page: StoryPage },
  { post: beatenRicePost, Page: BeatenRicePage },
  { post: drinkGuidePost, Page: DrinkGuidePage },
];

export const blogPosts: Post[] = blogEntries.map(({ post }) => post);

export const pagesBySlug: Record<string, ComponentType> = Object.fromEntries(
  blogEntries.map(({ post, Page }) => [post.slug, Page]),
);