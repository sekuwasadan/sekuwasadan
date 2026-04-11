import { motion } from "framer-motion";
import aboutImg from "@/assets/about-bg.jpg";

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
              Born from a 48-year legacy of Nepali BBQ culture, Sekuwa House is
              more than a restaurant — it's a living tradition. Every cut of meat
              is hand-marinated with our secret spice blend of Himalayan Timur
              (Szechuan pepper), roasted cumin, turmeric, and wild mountain herbs.
            </p>
            <p>
              We grill exclusively over hardwood charcoal, the way it's been done
              in the hills of Nepal for generations. The result is a flavor that
              no gas grill or modern oven can replicate — smoky, aromatic, and
              deeply primal.
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
