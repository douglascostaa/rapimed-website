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
    { icon: FaWhatsapp, href: "https://wa.me/5551933001875", label: "WhatsApp" },
    { icon: FaPhone, href: "tel:5193300-1875", label: "Telefone" },
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
                <div className="w-full max-w-5xl mx-auto">
                    {/* Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 w-full max-w-2xl mx-auto"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 text-center">
                            Transforme a Gestão do seu Hospital Hoje
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-8 text-center leading-relaxed">
                            Agende um <span className="underline font-medium">diagnóstico gratuito</span> com nossos especialistas e descubra onde você está <span className="underline font-medium">perdendo dinheiro</span>.
                        </p>

                        {/* Social Icons */}
                        <div className="grid grid-cols-3 gap-4 md:flex md:gap-4 justify-center justify-items-center mb-10">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#2a6365] flex items-center justify-center text-white hover:bg-[#1f4e50] transition-all touch-manipulation shadow-sm hover:scale-110"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                                </a>
                            ))}
                        </div>

                        {/* Form */}
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <Input
                                    placeholder="Nome"
                                    className="bg-white border-gray-200 rounded-lg h-12 md:h-14 text-base px-4 focus:ring-[#2a6365]/20 focus:border-[#2a6365]"
                                />
                                <Input
                                    placeholder="Telefone"
                                    className="bg-white border-gray-200 rounded-lg h-12 md:h-14 text-base px-4 focus:ring-[#2a6365]/20 focus:border-[#2a6365]"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <Input
                                    type="email"
                                    placeholder="E-mail"
                                    className="bg-white border-gray-200 rounded-lg h-12 md:h-14 text-base px-4 focus:ring-[#2a6365]/20 focus:border-[#2a6365]"
                                />
                                <Input
                                    placeholder="Cidade"
                                    className="bg-white border-gray-200 rounded-lg h-12 md:h-14 text-base px-4 focus:ring-[#2a6365]/20 focus:border-[#2a6365]"
                                />
                            </div>
                            <Textarea
                                placeholder="Mensagem"
                                className="min-h-[140px] bg-white border-gray-200 rounded-lg resize-none text-base p-4 focus:ring-[#2a6365]/20 focus:border-[#2a6365]"
                            />
                            <Button
                                size="lg"
                                className="w-full bg-[#2a6365] hover:bg-[#1f4e50] text-white font-bold uppercase tracking-wider h-14 md:text-lg shadow-lg hover:shadow-xl transition-all"
                            >
                                Solicitar Diagnóstico Gratuito
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
