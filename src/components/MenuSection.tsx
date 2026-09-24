import { motion } from "framer-motion";
import muttonImg from "@/assets/mutton-sekuwa.jpg";
import chickenImg from "@/assets/chicken-sekuwa.jpg";
import porkImg from "@/assets/pork-sekuwa.jpg";
import setImg from "@/assets/sekuwa-set.jpg";
import buffImg from "@/assets/buff-sekuwa.jpg";

const dishes = [
  {
    name: "Mutton Sekuwa",
    description: "Best mutton sekuwa in Pokhara, made with juicy goat meat, Nepali spices, timur, and mustard oil, then charcoal-grilled. Book your table at Sekuwa Sadan.",
    price: "Rs. 650",
    image: muttonImg,
  },
  {
    name: "Chicken Sekuwa",
    description: "Juicy free-range chicken thighs, seasoned with Nepali spices and fire-grilled for a smoky taste. Try the best chicken sekuwa in Pokhara at Sekuwa Sadan.",
    price: "Rs. 450",
    image: chickenImg,
  },
  {
    name: "Pork Sekuwa ",
    description: "Juicy pork belly marinated with ginger, garlic, and wild herbs, then fire-grilled for crispy edges. Try the best pork sekuwa in Pokhara at Sekuwa Sadan.",
    price: "Rs. 500",
    image: porkImg,
  },
  {
    name: "Sekuwa Set",
    description: "A hearty mix of grilled meat, chiura, achar, and tomato chutney. Try the best khaja set in Pokhara at Sekuwa Sadan.",
    price: "Rs. 750",
    image: setImg,
  },
  {
    name: "Buff Sekuwa",
    description: "Buffalo meat seasoned with cumin, chili, and turmeric, then fire-grilled for a bold, smoky flavor. Try the best buff sekuwa in Pokhara at Sekuwa Sadan.",
    price: "Rs. 550",
    image: buffImg,
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 md:py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-4">
            From Our Grill
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Signature <span className="text-primary">Menu</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
              className="bg-card p-4 rounded-[24px] card-shadow group hover:card-shadow-hover transition-all duration-500"
            >
              <div className="aspect-square rounded-[16px] overflow-hidden mb-4">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)]"
                />
              </div>
              <div className="px-2 pb-2">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-heading font-bold text-foreground">{dish.name}</h3>
                  <span className="text-primary font-body font-semibold text-sm">{dish.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{dish.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
