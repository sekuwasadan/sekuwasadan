import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { blogPosts } from "./blogPosts";

const blogs = blogPosts;

const Blog = () => {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
            className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-4"
          >
            From the Grill House
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="text-5xl md:text-6xl font-heading font-bold text-foreground"
          >
            Our <span className="text-primary">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1] }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6"
          >
            Stories, recipes and everything about authentic Nepali BBQ —
            straight from the kitchen at Sekuwa Sadan.
          </motion.p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
              className="group p-8 rounded-[24px] bg-surface card-shadow card-shadow-hover transition-transform duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-body uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                  <Tag className="w-3 h-3" />
                  {post.category}
                </span>
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-sm font-body font-bold uppercase tracking-widest text-primary group-hover:gap-2 transition-all"
              >
                <h2 className="font-heading font-bold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-muted-foreground text-sm mb-6 flex-1">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between border-t border-border pt-5">
                <div className="flex items-center gap-4 text-xs text-muted-foreground font-body">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-body font-bold uppercase tracking-widest text-primary group-hover:gap-2 transition-all"
                >
                  Read
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default Blog;