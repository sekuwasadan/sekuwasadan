import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", href: "#reservation" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">
        <Link to="/" className="font-heading text-xl font-bold text-foreground">
          Sekuwa House
        </Link>

        <div className="hidden md:flex gap-8 font-body text-sm uppercase tracking-widest text-muted-foreground">
          {links.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.label}
                to={onHome ? link.href : `/${link.href}`}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden p-2 -mr-2 text-foreground transition-colors"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b border-border px-6 pb-6 pt-2 flex flex-col gap-4 font-body text-sm uppercase tracking-widest text-muted-foreground">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to ?? (onHome ? link.href : `/${link.href}`)}
              onClick={() => setOpen(false)}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;