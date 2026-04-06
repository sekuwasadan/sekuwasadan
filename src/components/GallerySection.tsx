import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Restaurant interior with fire", tall: true },
  { src: g2, alt: "Nepali spices", tall: false },
  { src: g3, alt: "Glowing charcoal embers", tall: false },
  { src: g4, alt: "Chef grilling sekuwa", tall: true },
  { src: g5, alt: "Table spread with grilled dishes", tall: false },
  { src: g6, alt: "Skewering meat by hand", tall: false },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-4">
            Visual Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            From Our <span className="text-primary">Kitchen</span>
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.2, 0, 0, 1] }}
              className="break-inside-avoid overflow-hidden rounded-[16px] card-shadow"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.2,0,0,1)]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
