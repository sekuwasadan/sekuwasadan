import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Shrestha",
    text: "The mutton sekuwa here is unlike anything I've had. You can taste the charcoal, the spices, the tradition. It's not just food — it's an experience.",
    rating: 5,
  },
  {
    name: "Priya Maharjan",
    text: "Took my family here for the sekuwa set and we were blown away. The beaten rice with that smoky tomato chutney? Absolutely addictive.",
    rating: 5,
  },
  {
    name: "James Walker",
    text: "As a traveler, this was the highlight of my Pokhara trip. Real fire-grilled meat with incredible Nepali spices. A must-visit for any food lover.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
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
            What People Say
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Guest <span className="text-primary">Reviews</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
              className="p-8 rounded-[24px] bg-surface card-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-6 italic">"{t.text}"</p>
              <p className="font-heading font-bold text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
