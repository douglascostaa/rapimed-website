import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/rapimed-logo.png";

const navLinks = [
  { label: "A Rapimed", href: "/sobre" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Contato", href: "/contato" },
  { label: "Vagas Abertas", href: "/vagas" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    // Scroll to top if navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderNavLink = (link: { label: string; href: string }) => {
    const isActive = location.pathname === link.href;

    return (
      <Link
        key={link.label}
        to={link.href}
        className={`text-foreground/80 hover:text-primary font-medium transition-colors relative group ${isActive ? "text-primary" : ""
          }`}
        onClick={() => handleNavClick(link.href)}
      >
        {link.label}
        <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
          }`} />
      </Link>
    );
  };

  return (
    <>
      {/* Top Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block bg-primary text-primary-foreground py-2"
      >
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <motion.a
              href="mailto:contato@rapimed.com.br"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              whileHover={{ x: 3 }}
            >
              <Mail className="w-4 h-4" />
              contato@rapimed.com.br
            </motion.a>
            <motion.a
              href="tel:5199821-0110"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              whileHover={{ x: 3 }}
            >
              <Phone className="w-4 h-4" />
              (51) 99821-0110
            </motion.a>
          </div>
          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.facebook.com/rapimedsaude/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Facebook"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaFacebookF className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/rapimedsaude/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Instagram"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaInstagram className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="http://br.linkedin.com/company/rapimed"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaLinkedinIn className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-background"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <motion.img
                src={logo}
                alt="Rapimed"
                className="h-12 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => renderNavLink(link))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://portal.rapimed.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="default">
                  Portal do Sócio
                </Button>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white shadow-lg border-t border-gray-100"
            >
              <nav className="container mx-auto px-6 py-8">
                {/* Navigation Links */}
                <div className="space-y-1">
                  {navLinks.map((link, index) => {
                    const isActive = location.pathname === link.href;
                    return (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={link.href}
                          className={`flex items-center justify-between py-4 px-4 rounded-xl text-base font-semibold transition-all ${isActive
                            ? "bg-primary/10 text-primary"
                            : "text-gray-800 hover:bg-gray-50 hover:text-primary"
                            }`}
                          onClick={() => handleNavClick(link.href)}
                        >
                          <span>{link.label}</span>
                          {isActive && (
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <motion.div
                  className="mt-6 pt-6 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <a
                    href="https://portal.rapimed.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="outline"
                      className="w-full h-12 text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Portal do Sócio
                    </Button>
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
