import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/rapimed-logo.png";

const navLinks = [
  { label: "A Rapimed", href: "/#sobre" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Contato", href: "/#contato" },
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
    
    // If it's a hash link on the current page or home page
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      
      // If we're on the same page or it's the home page
      if (path === "/" || path === "" || location.pathname === path) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const renderNavLink = (link: { label: string; href: string }) => {
    const isActive = location.pathname === link.href || 
      (link.href === "/solucoes" && location.pathname === "/solucoes");

    if (link.href.startsWith("/#")) {
      // Hash link to home page section
      if (location.pathname === "/") {
        // On home page, use anchor
        return (
          <a
            key={link.label}
            href={link.href.replace("/", "")}
            className={`text-foreground/80 hover:text-primary font-medium transition-colors relative group ${
              isActive ? "text-primary" : ""
            }`}
            onClick={() => handleNavClick(link.href)}
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        );
      } else {
        // On other page, use Link to navigate to home first
        return (
          <Link
            key={link.label}
            to={link.href}
            className="text-foreground/80 hover:text-primary font-medium transition-colors relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        );
      }
    }

    // Regular route link
    return (
      <Link
        key={link.label}
        to={link.href}
        className={`text-foreground/80 hover:text-primary font-medium transition-colors relative group ${
          isActive ? "text-primary" : ""
        }`}
      >
        {link.label}
        <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`} />
      </Link>
    );
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:contato@rapimed.com.br" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              contato@rapimed.com.br
            </a>
            <a href="tel:5199821-0110" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              (51) 99821-0110
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/rapimedsaude/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">Facebook</a>
            <a href="https://www.instagram.com/rapimedsaude/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">Instagram</a>
            <a href="http://br.linkedin.com/company/rapimed" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-background"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Rapimed" className="h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => renderNavLink(link))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="outline" size="default">
                Portal do Sócio
              </Button>
              <Button size="default">
                Vagas Abertas
              </Button>
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border"
            >
              <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link) => {
                  if (link.href.startsWith("/#")) {
                    if (location.pathname === "/") {
                      return (
                        <a
                          key={link.label}
                          href={link.href.replace("/", "")}
                          className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                          onClick={() => handleNavClick(link.href)}
                        >
                          {link.label}
                        </a>
                      );
                    } else {
                      return (
                        <Link
                          key={link.label}
                          to={link.href}
                          className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      );
                    }
                  }
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={`text-foreground/80 hover:text-primary font-medium py-2 transition-colors ${
                        location.pathname === link.href ? "text-primary" : ""
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="flex flex-col gap-3 pt-4 border-t border-border">
                  <Button variant="outline" className="w-full">
                    Portal do Sócio
                  </Button>
                  <Button className="w-full">
                    Vagas Abertas
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
