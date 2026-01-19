import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    Stethoscope,
    Shield,
    GraduationCap,
    ChevronDown,
    ChevronUp
} from "lucide-react";

const solutions = [
    {
        icon: Stethoscope,
        title: "Serviços Médicos",
        description: "Dimensionamento de equipe conforme demanda real, gestão de escalas e liderança de turno para garantir fluidez operacional.",
        color: "from-primary to-primary-dark",
    },
    {
        icon: Shield,
        title: "Protocolos e Governança",
        description: "Implementação de diretrizes clínicas para síndromes tempo-sensíveis (AVC, Sepse, Infarto), garantindo agilidade e racionalização de custos.",
        color: "from-accent to-amber-600",
    },
    {
        icon: GraduationCap,
        title: "Educação Continuada",
        description: "Programas de atualização e simulações realísticas para validar competências críticas e reduzir eventos adversos.",
        color: "from-emerald-500 to-teal-600",
    },
];

export function WhyChooseSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    return (
        <section id="solucoes" className="py-24 bg-[#f8fcfc] relative overflow-hidden">
            {/* Decorative background curve */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#e6f7f5] rounded-l-full opacity-50 -z-10 translate-x-1/3" />

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-stretch" ref={ref}>

                    {/* Image Side (Left) - Altura ajustada para acompanhar o conteúdo */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative h-full"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
                            <img
                                src="/images/medical-healthcare-doctor-woman-worker-or-employe-2026-01-09-09-42-28-utc.jpg"
                                alt="Médica profissional de saúde"
                                className="w-full h-full object-cover object-[center_right]"
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000"
                                }}
                            />
                            {/* Icon Badge */}
                            <div className="absolute top-6 right-6 bg-[#4ed1c5] p-4 rounded-full shadow-lg">
                                <Stethoscope className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col"
                    >
                        {/* Title and Description */}
                        <span className="text-[#2a6365] font-medium text-lg italic mb-2 block">
                            nossas soluções
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Por que escolher a Rapimed?
                        </h2>
                        <p className="text-gray-500 mb-8">
                            Unimos tecnologia de ponta, gestão disciplinada e corpo clínico qualificado
                            para elevar o padrão assistencial da sua unidade de saúde.
                        </p>

                        {/* Accordion Cards */}
                        <div className="space-y-4 mb-8 flex-1">
                            {solutions.map((solution, index) => (
                                <motion.div
                                    key={solution.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className={`bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${expandedIndex === index ? "shadow-lg border-[#2a6365]/30" : "hover:shadow-md"
                                        }`}
                                >
                                    <button
                                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                        className="w-full p-5 flex items-center gap-4 text-left"
                                    >
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center flex-shrink-0`}>
                                            <solution.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-gray-900">{solution.title}</h3>
                                        </div>
                                        <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${expandedIndex === index ? "bg-[#2a6365] text-white" : "bg-gray-100 text-gray-600"
                                            }`}>
                                            {expandedIndex === index ? (
                                                <ChevronUp className="w-5 h-5" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5" />
                                            )}
                                        </div>
                                    </button>

                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: expandedIndex === index ? "auto" : 0,
                                            opacity: expandedIndex === index ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5 pt-0">
                                            <p className="text-gray-500 leading-relaxed pl-16">
                                                {solution.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Button */}
                        <Link to="/solucoes">
                            <Button
                                size="lg"
                                className="bg-[#2a6365] hover:bg-[#1f4e50] text-white font-bold px-8 text-sm uppercase tracking-wider"
                            >
                                Conheça Nossas Soluções
                            </Button>
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
