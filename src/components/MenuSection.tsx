import { motion } from "framer-motion";
import muttonImg from "@/assets/mutton-sekuwa.jpg";
import chickenImg from "@/assets/chicken-sekuwa.jpg";
import porkImg from "@/assets/pork-sekuwa.jpg";
import setImg from "@/assets/sekuwa-set.jpg";
import buffImg from "@/assets/buff-sekuwa.jpg";

const dishes = [
  {
    name: "Mutton Sekuwa",
    description: "Tender goat marinated in timur and mustard oil, grilled over hardwood charcoal until perfectly charred.",
    price: "Rs. 650",
    image: muttonImg,
  },
  {
    name: "Chicken Sekuwa",
    description: "Free-range chicken thighs coated in our signature spice paste, kissed by open flame.",
    price: "Rs. 450",
    image: chickenImg,
  },
  {
    name: "Pork Sekuwa (Bandel)",
    description: "Succulent pork belly chunks with crispy edges, marinated in ginger, garlic, and wild herbs.",
    price: "Rs. 500",
    image: porkImg,
  },
  {
    name: "Sekuwa Set",
    description: "A complete platter with grilled meat, beaten rice (chiura), spicy pickles, and roasted tomato chutney.",
    price: "Rs. 750",
    image: setImg,
  },
  {
    name: "Buff Sekuwa",
    description: "Lean buffalo meat rubbed with cumin, chili, and turmeric — bold, smoky, and incredibly tender.",
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
