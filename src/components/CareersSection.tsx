import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CareersSection() {
    return (
        <section className="relative min-h-[500px] lg:min-h-[550px] flex items-center overflow-hidden">
            {/* Background with image positioned to the right */}
            <div className="absolute inset-0 z-0">
                {/* Solid color background on left side */}
                <div className="absolute inset-0 bg-[#f5f9f9]" />

                {/* Image positioned to the right */}
                <div
                    className="absolute top-0 right-0 bottom-0 w-full lg:w-[75%] bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("/images/medical-concept-the-medical-team-is-meeting-the-w-2025-10-16-05-57-39-utc.jpg")',
                    }}
                />

                {/* Gradient overlay: solid teal until 30%, then fading to transparent */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2a6365] from-30% via-[#2a6365]/50 via-50% to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10 py-16">
                <div className="max-w-2xl text-white">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-white/80 font-medium text-lg italic mb-4"
                    >
                        carreiras
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Junte-se ao corpo clínico de elite da Rapimed.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed"
                    >
                        Buscamos profissionais comprometidos com a excelência. Oferecemos suporte
                        tecnológico, trilhas de capacitação e escalas organizadas.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button size="xl" variant="secondary" className="group">
                            Consulte as vagas disponíveis
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
