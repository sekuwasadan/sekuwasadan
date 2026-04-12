import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";

const ReservationSection = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "eb35f289-187f-4ff0-a44b-90b756db8f17");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("✓ Reservation Received!");
      (event.target as HTMLFormElement).reset();
      setTimeout(() => setResult(""), 3000);
    } else {
      setResult("Something went wrong. Please try again.");
    }
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
            Contact<span className="text-primary"> Info</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
            className="space-y-6"
          >
            {[
              { label: "Full Name", type: "text", name: "name", placeholder: "Your name" },
              { label: "Phone Number", type: "tel", name: "phone", placeholder: "+977 98X-XXXXXXX" },
              { label: "Preferred Date", type: "date", name: "date", placeholder: "" },
              { label: "Number of Guests", type: "number", name: "guests", placeholder: "2" },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-xs uppercase tracking-widest text-primary mb-2 font-body">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
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
                result === "✓ Reservation Received!"
                  ? "bg-green-600 text-foreground scale-105"
                  : "bg-primary text-primary-foreground hover:bg-accent ember-pulse"
              }`}
            >
              {result || "Contact"}
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
                  Shivalaya Marga<br />
                  Pokhara 33700, Nepal
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground text-sm">+977 985-6081831</p>
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