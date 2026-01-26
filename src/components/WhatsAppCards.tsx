import { useState } from "react";
import { motion } from "framer-motion";
import { WHATSAPP_CONFIG } from "@/config/whatsapp";
import { ExternalLink, Loader2, MessageCircle } from "lucide-react";
import { toast } from "sonner"; // Assuming sonner is installed as per package.json

export function WhatsAppCards() {
    const [loading, setLoading] = useState<string | null>(null);

    const isValidPhone = (phone: string) => /^55\d{10,11}$/.test(phone);

    const createWhatsAppLink = (phone: string, message: string) => {
        const cleanPhone = phone.replace(/\D/g, "");
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    };

    const handleCardClick = (
        key: string,
        config: { phone: string; message: string }
    ) => {
        // 1. Validation
        if (!config.phone || !isValidPhone(config.phone)) {
            console.error(`Invalid phone number for ${key}: ${config.phone}`);
            toast.error("Configuração de contato indisponível no momento.");
            return;
        }

        // 2. Loading State
        setLoading(key);

        // 3. Simulate redirect delay for UX (optional, but requested "Feedback Visual")
        setTimeout(() => {
            const link = createWhatsAppLink(config.phone, config.message);
            window.open(link, "_blank", "noopener,noreferrer");
            setLoading(null);
            toast.success("Redirecionando para o WhatsApp...");
        }, 800);
    };

    return (
        <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(WHATSAPP_CONFIG).map(([key, config]) => {
                const Icon = config.icon;
                const isLoading = loading === key;

                return (
                    <motion.button
                        key={key}
                        onClick={() => handleCardClick(key, config)}
                        className={`group relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 
              hover:shadow-xl hover:border-[#2a6365]/20 hover:-translate-y-1 transition-all duration-300 text-center w-full
              ${isLoading ? "cursor-wait opacity-80" : "cursor-pointer"}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={!!loading}
                    >
                        {/* Top Border Accent */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2a6365] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        {/* Icon Wrapper */}
                        <div className="mb-6 p-4 rounded-full bg-[#2a6365]/5 text-[#2a6365] group-hover:bg-[#2a6365] group-hover:text-white transition-colors duration-300">
                            {isLoading ? (
                                <Loader2 className="w-8 h-8 animate-spin" />
                            ) : (
                                <Icon className="w-8 h-8" />
                            )}
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2a6365] transition-colors">
                            {config.label}
                        </h3>

                        {/* Description (added to config in step 104) */}
                        {'description' in config && (
                            <p className="text-sm text-gray-500 mb-6 max-w-[200px]">
                                {config.description as string}
                            </p>
                        )}

                        {/* CTA Indicator */}
                        <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-[#2a6365]/80 group-hover:text-[#2a6365]">
                            <MessageCircle className="w-4 h-4" />
                            <span>Iniciar conversa</span>
                            <ExternalLink className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </div>
                    </motion.button>
                );
            })}
        </div>
    );
}
