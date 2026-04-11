import { motion } from "framer-motion";
import { Flame, Leaf, Mountain } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Wood-Fire Grilled",
    description: "Every dish is grilled over natural hardwood charcoal — never gas, never electric. Pure flame, pure flavor.",
  },
  {
    icon: Leaf,
    title: "Traditional Nepali Spices",
    description: "Our secret blend of Himalayan Timur, roasted cumin, turmeric, and wild mountain herbs is passed down through generations.",
  },
  {
    icon: Mountain,
    title: "Authentic Himalayan Flavors",
    description: "Recipes rooted in the hills of Nepal, brought to your table with the same soul and fire as the original sekuwa stalls.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-4">
            Why Sekuwa House
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            What Sets Us <span className="text-primary">Apart</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
              className="text-center p-8 rounded-[24px] bg-surface card-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <feat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{feat.title}</h3>
              <p className="text-muted-foreground text-sm mx-auto">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
