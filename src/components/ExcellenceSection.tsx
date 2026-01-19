import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ExcellenceSection() {
    const benefits = [
        "escala inteligente",
        "apoio à decisão",
        "equipe qualificada",
        "atendimento em todo o brasil",
        "suporte total a sua empresa"
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-[#e6f7f5] to-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#2a6365] font-medium text-lg italic mb-2 block">
                            sobre nós
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Excelência em Gestão que Eleva o Padrão da Saúde.
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            A rapimed atua como parceira estratégica de gestores, resolvendo falhas de cobertura,
                            eliminando atrasos e padronizando o cuidado para reduzir riscos jurídicos e elevar o NPS
                            do paciente.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {benefits.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="bg-[#2a6365] rounded-full p-1">
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="font-bold text-gray-800 text-sm md:text-base">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="w-full h-px bg-[#2a6365]/30 mb-8" />

                        <Link to="/sobre">
                            <Button
                                size="lg"
                                className="bg-[#2a6365] hover:bg-[#1f4e50] text-white font-bold px-8 text-sm uppercase tracking-wider"
                            >
                                Saiba Mais
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gray-200">
                            <img
                                src="/images/smiling-mature-doctor-with-stethoscope-portraying-2025-02-25-12-49-22-utc.jpg"
                                alt="Médico experiente"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Floating '5 Anos' Card */}
                        <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 bg-[#2a6365] p-6 lg:p-8 rounded-2xl shadow-2xl max-w-xs">
                            <div className="flex items-center gap-4">
                                <div className="text-center border-r border-white/30 pr-4">
                                    <span className="block text-4xl lg:text-5xl font-bold text-white">5</span>
                                    <span className="block text-sm lg:text-base text-white/90">Anos</span>
                                </div>
                                <div>
                                    <p className="text-sm text-white font-medium leading-snug">
                                        De experiência consolidada no mercado clínico e hospitalar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
