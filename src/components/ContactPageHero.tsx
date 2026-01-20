import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/rapimedsaude/", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com/rapimedsaude/", label: "Instagram" },
    { icon: FaLinkedinIn, href: "http://br.linkedin.com/company/rapimed", label: "LinkedIn" },
    { icon: FaWhatsapp, href: "https://wa.me/5551998210110", label: "WhatsApp" },
    { icon: FaPhone, href: "tel:5199524-8614", label: "Telefone" },
    { icon: FaEnvelope, href: "mailto:contato@rapimed.com.br", label: "Email" },
];

export function ContactPageHero() {
    return (
        <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden pt-20">
            {/* Background with image positioned to the left */}
            <div className="absolute inset-0 z-0">
                {/* Solid color background */}
                <div className="absolute inset-0 bg-[#f5f9f9]" />

                {/* Image positioned to the left */}
                <div
                    className="absolute top-0 left-0 bottom-0 w-full lg:w-[80%] bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("/images/close-up-of-business-woman-hands-using-touching-o-2026-01-07-00-50-36-utc.jpg")',
                    }}
                />

                {/* Gradient overlay: transparent on left fading to solid teal on right */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2a6365]/80 via-[50%] to-[#2a6365]" />
            </div>

            <div className="container mx-auto px-4 relative z-10 py-16">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left side - Empty (image shows through) */}
                    <div className="hidden lg:block" />

                    {/* Right side - Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Entre em contato
                        </h2>
                        <p className="text-gray-500 mb-6">
                            Entre em contato conosco para <span className="underline">quaisquer dúvidas</span>,{" "}
                            <span className="underline">agendamentos ou solicitações</span>. Nossa equipe está{" "}
                            <span className="underline">pronta</span> para te atender.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3 mb-8">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-[#2a6365] flex items-center justify-center text-white hover:bg-[#1f4e50] transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>

                        {/* Form */}
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Input
                                    placeholder="Nome"
                                    className="bg-white border-gray-200 rounded-lg h-12"
                                />
                                <Input
                                    placeholder="Telefone"
                                    className="bg-white border-gray-200 rounded-lg h-12"
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Input
                                    type="email"
                                    placeholder="E-mail"
                                    className="bg-white border-gray-200 rounded-lg h-12"
                                />
                                <Input
                                    placeholder="Cidade"
                                    className="bg-white border-gray-200 rounded-lg h-12"
                                />
                            </div>
                            <Textarea
                                placeholder="Mensagem"
                                className="min-h-[120px] bg-white border-gray-200 rounded-lg resize-none"
                            />
                            <Button
                                size="lg"
                                className="w-full bg-[#2a6365] hover:bg-[#1f4e50] text-white font-bold uppercase tracking-wider h-12"
                            >
                                Enviar
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
