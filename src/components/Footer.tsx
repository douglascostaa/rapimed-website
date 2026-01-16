import { Facebook, Instagram, Linkedin, MessageCircle, Phone, Mail } from "lucide-react";
import logo from "@/assets/rapimed-logo.png";

const footerLinks = {
  navegacao: [
    { label: "Início", href: "#" },
    { label: "A Rapimed", href: "#sobre" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ],
  acesso: [
    { label: "Portal do Sócio", href: "#" },
    { label: "Vagas Abertas", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/rapimedsaude/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/rapimedsaude/", label: "Instagram" },
  { icon: Linkedin, href: "http://br.linkedin.com/company/rapimed", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/5551998210110", label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Rapimed" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-white/80 max-w-md mb-6 leading-relaxed">
              Transformando a saúde hospitalar e municipal com gestão inteligente, 
              protocolos baseados em IA e capacitação contínua do corpo clínico.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-6">Navegação</h4>
            <ul className="space-y-3">
              {footerLinks.navegacao.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:5199524-8614"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (51) 99524-8614
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@rapimed.com.br"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  contato@rapimed.com.br
                </a>
              </li>
            </ul>
            <div className="mt-6 space-y-2">
              {footerLinks.acesso.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2024 Rapimed. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
