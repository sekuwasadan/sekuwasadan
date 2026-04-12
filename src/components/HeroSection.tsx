import { motion } from "framer-motion";
import heroImg from "@/assets/hero-grill.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed">
        {/* <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroImg})` }}
        /> */}
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            src="https://www.youtube.com/embed/9vChfQbJgm0?autoplay=1&mute=1&loop=1&playlist=9vChfQbJgm0&controls=0&showinfo=0&modestbranding=1"
            title="Background Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
          ></iframe>
        </div>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-6"
        >
          Authentic Nepali BBQ
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground drop-shadow-2xl mb-6"
        >
          The Taste of Nepal,{" "}
          <span className="text-primary">Grilled</span> to Perfection
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1] }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Forty-eight years of wood-fire tradition, seasoned with the wild heat
          of Himalayan Timur and the soul of Kathmandu.
        </motion.p>

        <motion.a
          href="#reservation"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 0, 0, 1] }}
          className="inline-block bg-primary hover:bg-accent text-primary-foreground transition-colors duration-300 px-8 py-4 rounded-full font-body font-bold uppercase tracking-widest text-sm ember-pulse"
        >
          Reserve a Table
        </motion.a>
      </div>

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <span className="font-heading text-xl font-bold text-foreground">
          Sekuwa House
        </span>
        <div className="hidden md:flex gap-8 font-body text-sm uppercase tracking-widest text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#reservation" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </nav>
    </section>
  );
};

export default HeroSection;
