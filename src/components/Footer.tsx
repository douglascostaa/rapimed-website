import { Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "@/assets/rapimed-logo.png";

const menuLinks = [
  { label: "início", href: "/" },
  { label: "a rapimed", href: "/sobre" },
  { label: "soluções", href: "/solucoes" },
  { label: "contato", href: "/contato" },
  { label: "portal do sócio", href: "#" },
  { label: "vagas abertas", href: "/vagas" },
];

const solucoesLinks = [
  { label: "serviços médicos", href: "/solucoes" },
  { label: "protocolos e governança", href: "/solucoes" },
  { label: "educação continuada", href: "/solucoes" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "https://www.facebook.com/rapimedsaude/", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/rapimedsaude/", label: "Instagram" },
  { icon: FaLinkedinIn, href: "http://br.linkedin.com/company/rapimed", label: "LinkedIn" },
  { icon: FaWhatsapp, href: "https://wa.me/5551998210110", label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="bg-[#2a6365] text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <img src={logo} alt="Rapimed" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-white/80 text-base leading-relaxed mb-4">
              Especialistas em gestão de escalas, protocolos clínicos e educação continuada. Referência em governança clínica para municípios e hospitais.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div className="lg:justify-self-center">
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wide">Menu</h4>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <span className="text-white/50">›</span>
                  <Link
                    to={link.href}
                    className="text-white/90 hover:text-white transition-colors text-base font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wide">Soluções</h4>
            <ul className="space-y-2">
              {solucoesLinks.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <span className="text-white/50">›</span>
                  <Link
                    to={link.href}
                    className="text-white/90 hover:text-white transition-colors text-base font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wide">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:5199524-8614"
                  className="flex items-start gap-3 text-white hover:opacity-80 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-white">Telefone</span>
                    <span className="font-light text-white">(51) 99524-8614</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@rapimed.com.br"
                  className="flex items-start gap-3 text-white hover:opacity-80 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-white">Email</span>
                    <span className="font-light text-white">contato@rapimed.com.br</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/60">
            {/* Left - Bahtech Logo */}
            <a
              href="https://bahtech.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/bahtech_logotipo_negativo.png"
                alt="Bahtech"
                className="h-5 w-auto"
              />
            </a>

            {/* Center - Copyright */}
            <p className="text-center text-white">© 2026 Rapimed — Gestão em Saúde. Todos os direitos reservados.</p>

            {/* Right - Links */}
            <div className="flex gap-4">
              <a href="#" className="text-white hover:opacity-80 transition-colors">Política de Privacidade</a>
              <a href="#" className="text-white hover:opacity-80 transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
