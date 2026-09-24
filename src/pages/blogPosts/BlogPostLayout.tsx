import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Post } from "./types";

const BlogPostLayout = ({ post }: { post: Post }) => {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest text-muted-foreground border border-border rounded-full px-4 py-2 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all blogs
            </Link>

            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 font-body uppercase tracking-widest text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-muted-foreground font-body">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
            className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-12 max-w-none"
          >
            {post.intro}
          </motion.p>

          {post.sections.map((section, i) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.2, 0, 0, 1] }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-5">
                {section.heading}
              </h2>

              <div className="space-y-5">
                {section.blocks.map((block, j) => {
                  if (block.type === "heading") {
                    return (
                      <h3
                        key={j}
                        className="text-xl md:text-2xl font-heading font-bold text-foreground pt-4"
                      >
                        {block.text}
                      </h3>
                    );
                  }

                  if (block.type === "list") {
                    return (
                      <ul key={j} className="space-y-3 pl-1">
                        {block.items?.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                          >
                            <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  if (block.type === "orderedList") {
                    return (
                      <ol key={j} className="space-y-3 pl-1">
                        {block.items?.map((item, k) => (
                          <li
                            key={item}
                            className="flex items-start gap-4 text-muted-foreground leading-relaxed"
                          >
                            <span className="font-heading font-bold text-primary shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-sm">
                              {k + 1}
                            </span>
                            {item}
                          </li>
                        ))}
                      </ol>
                    );
                  }

                  return (
                    <p key={j} className="text-muted-foreground leading-relaxed max-w-none">
                      {block.text}
                    </p>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
            className="pt-6"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mb-8">
              Everything you might want to know before you fire up the grill.
            </p>

            <div className="bg-surface rounded-[24px] card-shadow px-6 md:px-8">
              <Accordion type="multiple">
                {post.faqs.map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger className="font-heading font-bold text-foreground text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default BlogPostLayout;