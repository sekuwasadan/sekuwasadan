import { motion } from "framer-motion";
import aboutImg from "@/assets/sekuwa-house-pokhara.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="overflow-hidden rounded-[16px] card-shadow"
        >
          <img
            src={aboutImg}
            alt="Traditional Nepali BBQ restaurant"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
        >
          <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-4">
            Our Story
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            A Legacy of <span className="text-primary">Fire & Flavor</span>
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Sekuwa is a traditional Nepali BBQ loved for its smoky aroma, bold spices, and fire-grilled flavor. At Sekuwa Sadan, we bring this tradition to the table with carefully prepared meat and authentic Nepali flavors.
            </p>
            <p>
              Every cut is hand-marinated with our signature blend of Himalayan timur (Szechuan pepper), roasted cumin, turmeric, garlic, and wild mountain herbs. We grill the meat over hardwood charcoal to create a smoky aroma, juicy texture, and lightly charred finish.
            </p>
            <p>
              Our goal is simple: to serve flavorful sekuwa that celebrates the taste and tradition of Nepali BBQ.
            </p>
          </div>
          <div className="flex gap-8 mt-8">
            <div>
              <span className="text-3xl font-heading font-bold text-primary">48+</span>
              <p className="text-sm text-muted-foreground mt-1">Years of Tradition</p>
            </div>
            <div>
              <span className="text-3xl font-heading font-bold text-primary">100%</span>
              <p className="text-sm text-muted-foreground mt-1">Wood-Fire Grilled</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
