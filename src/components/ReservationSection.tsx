import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";

const ReservationSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="reservation" className="py-24 md:py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-4">
            Join Us
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Reserve Your <span className="text-primary">Table</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
            className="space-y-6"
          >
            {[
              { label: "Full Name", type: "text", placeholder: "Your name" },
              { label: "Phone Number", type: "tel", placeholder: "+977 9800000000" },
              { label: "Preferred Date", type: "date", placeholder: "" },
              { label: "Number of Guests", type: "number", placeholder: "2" },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-xs uppercase tracking-widest text-primary mb-2 font-body">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className="w-full bg-transparent border-b border-foreground/20 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary outline-none transition-all font-body"
                />
              </div>
            ))}

            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className={`w-full py-4 rounded-full font-body font-bold uppercase tracking-widest text-sm transition-all duration-300 ${
                submitted
                  ? "bg-green-600 text-foreground scale-105"
                  : "bg-primary text-primary-foreground hover:bg-accent ember-pulse"
              }`}
            >
              {submitted ? "✓ Reservation Received!" : "Book Now"}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="space-y-8"
          >
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground text-sm">
                  Thamel Marg, Ward No. 26<br />
                  Kathmandu 44600, Nepal
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground text-sm">+977 01-4700123</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground mb-1">Hours</h4>
                <p className="text-muted-foreground text-sm">
                  Sun – Thu: 11:00 AM – 10:00 PM<br />
                  Fri – Sat: 11:00 AM – 11:00 PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
