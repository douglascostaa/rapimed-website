import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

interface CookieConsentProps {
    privacyPolicyUrl?: string;
    termsUrl?: string;
    zIndex?: number;
}

export function CookieConsent({
    privacyPolicyUrl = "/politica-privacidade",
    termsUrl = "/termos-uso",
    zIndex = 9999,
}: CookieConsentProps) {
    const [show, setShow] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);

    // Safe storage helper with debugging and cookie fallback
    const storage = {
        getItem: (key: string) => {
            try {
                return localStorage.getItem(key);
            } catch (e) {
                console.warn("LocalStorage blocked, trying cookies");
                const match = document.cookie.match(new RegExp('(^| )' + key + '=([^;]+)'));
                return match ? match[2] : null;
            }
        },
        setItem: (key: string, value: string) => {
            try {
                localStorage.setItem(key, value);
            } catch (e) {
                console.warn("LocalStorage blocked, setting cookie");
                document.cookie = `${key}=${value}; max-age=31536000; path=/`;
            }
        },
    };

    useEffect(() => {
        // Debugging for user
        console.log("CookieConsent: Checking status...");
        const consent = storage.getItem("rapimed_cookie_consent");
        console.log("CookieConsent: Current value =", consent);

        if (!consent) {
            console.log("CookieConsent: No consent found, showing banner.");
            setShow(true);
        } else {
            console.log("CookieConsent: Consent already given.");
        }
    }, []);

    const handleAcceptAll = () => {
        storage.setItem("rapimed_cookie_consent", "true");
        storage.setItem("rapimed_cookie_consent_level", "all");
        storage.setItem("rapimed_cookie_consent_date", new Date().toISOString());
        setShow(false);
        toast.success("Preferências de privacidade salvas.");
    };

    const handleRejectNonEssential = () => {
        storage.setItem("rapimed_cookie_consent", "true");
        storage.setItem("rapimed_cookie_consent_level", "essential");
        storage.setItem("rapimed_cookie_consent_date", new Date().toISOString());
        setShow(false);
        toast.info("Apenas cookies essenciais habilitados.");
    };

    if (!show) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-white/10 shadow-2xl p-4 md:p-6"
                style={{ zIndex }}
            >
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex items-start gap-4 max-w-3xl">
                        <div className="p-3 bg-white/5 rounded-full shrink-0 hidden md:block">
                            <ShieldCheck className="w-6 h-6 text-[#2a6365]" />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-white font-semibold mb-1 flex items-center justify-center md:justify-start gap-2">
                                <Cookie className="w-4 h-4 md:hidden" />
                                Sua privacidade é prioridade
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Utilizamos cookies para personalizar conteúdo, fornecer
                                funcionalidades de redes sociais e analisar nosso tráfego. Ao
                                continuar, você concorda com nossa{" "}
                                <a
                                    href={privacyPolicyUrl}
                                    className="text-white underline hover:text-[#2a6365] transition-colors"
                                >
                                    Política de Privacidade
                                </a>{" "}
                                e{" "}
                                <a
                                    href={termsUrl}
                                    className="text-white underline hover:text-[#2a6365] transition-colors"
                                >
                                    Termos de Uso
                                </a>.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                        <Button
                            variant="outline"
                            onClick={() => setShowPreferences(!showPreferences)} // In a real implementation this would open a modal
                            className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                        >
                            Preferências
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={handleRejectNonEssential}
                            className="bg-white/10 text-white hover:bg-white/20"
                        >
                            Rejeitar não essenciais
                        </Button>
                        <Button
                            onClick={handleAcceptAll}
                            className="bg-[#2a6365] text-white hover:bg-[#204d4f] font-semibold"
                        >
                            Aceitar Todos
                        </Button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
