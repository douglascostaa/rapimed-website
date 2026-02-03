import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    Stethoscope, Baby, Scissors, Users, Syringe,
    Bone, Briefcase, Heart, Eye, ScanLine,
    Brain, Activity, Ear, Star, Plus
} from "lucide-react";

// Top 15 Medical Specialties in Brazil
const specialties = [
    {
        name: "Clínica Médica",
        description: "Atendimento integral a pacientes adultos, com foco em diagnóstico e tratamento.",
        icon: Stethoscope
    },
    {
        name: "Pediatria",
        description: "Cuidado dedicado à saúde de crianças e adolescentes, do nascimento à juventude.",
        icon: Baby
    },
    {
        name: "Cirurgia Geral",
        description: "Tratamento cirúrgico de diversas patologias, com foco em segurança e precisão.",
        icon: Scissors
    },
    {
        name: "Ginecologia e Obstetrícia",
        description: "Saúde da mulher e acompanhamento completo durante a gestação e parto.",
        icon: Users
    },
    {
        name: "Anestesiologia",
        description: "Segurança e monitoramento em procedimentos cirúrgicos e diagnósticos.",
        icon: Syringe
    },
    {
        name: "Ortopedia e Traumatologia",
        description: "Diagnóstico e tratamento de lesões e doenças do sistema musculoesquelético.",
        icon: Bone
    },
    {
        name: "Medicina do Trabalho",
        description: "Prevenção e promoção da saúde do trabalhador em diversos ambientes.",
        icon: Briefcase
    },
    {
        name: "Cardiologia",
        description: "Cuidado especializado com a saúde do coração e sistema cardiovascular.",
        icon: Heart
    },
    {
        name: "Oftalmologia",
        description: "Diagnóstico e tratamento de doenças oculares e da visão.",
        icon: Eye
    },
    {
        name: "Radiologia e Imagem",
        description: "Diagnóstico preciso através de tecnologias avançadas de imagem.",
        icon: ScanLine
    },
    {
        name: "Psiquiatria",
        description: "Atenção à saúde mental, prevenindo e tratando transtornos psíquicos.",
        icon: Brain
    },
    {
        name: "Dermatologia",
        description: "Cuidados clínicos e estéticos com a pele, cabelos e unhas.",
        icon: Star
    },
    {
        name: "Medicina Intensiva",
        description: "Suporte avançado à vida para pacientes em estado crítico.",
        icon: Activity
    },
    {
        name: "Otorrinolaringologia",
        description: "Tratamento de doenças do ouvido, nariz, garganta e estruturas relacionadas.",
        icon: Ear
    },
    {
        name: "Cirurgia Plástica",
        description: "Procedimentos reparadores e estéticos com foco na recuperação e autoestima.",
        icon: Plus
    }
];

export default function Careers() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative min-h-[450px] md:min-h-[600px] flex items-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/diverse-medical-team-of-doctors-looking-at-camera-UW9F7DT.webp"
                            alt="Equipe médica"
                            className="w-full h-full object-cover object-top"
                            style={{ objectPosition: 'center top' }}
                            onError={(e) => {
                                e.currentTarget.src = "diverse-medical-team-of-doctors-looking-at-camera-UW9F7DT.webp"
                            }}
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2a6365] via-[#2a6365]/90 via-60% to-[#2a6365]/40 md:from-[#2a6365]/90 md:via-[#2a6365]/70 md:via-50% md:to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 py-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-2xl text-white"
                        >
                            <span className="font-medium text-lg mb-2 block text-white/90 italic">vagas abertas</span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Junte-se ao corpo clínico de elite da Rapimed.
                            </h1>
                            <p className="text-lg text-white/90 mb-8 max-w-xl leading-relaxed">
                                Buscamos profissionais comprometidos com a excelência. Oferecemos suporte
                                tecnológico, trilhas de capacitação e escalas organizadas.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Specialties Grid Section */}
                <section className="py-20 bg-gray-50/50">
                    <div className="container mx-auto px-4">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Especialidades com Oportunidades
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Encontre a sua área de atuação e faça parte da nossa rede.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {specialties.map((specialty, index) => (
                                <motion.div
                                    key={specialty.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-start border border-gray-100"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                                        <specialty.icon className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {specialty.name}
                                    </h3>

                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                                        {specialty.description}
                                    </p>

                                    <Button
                                        variant="outline"
                                        className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors uppercase text-sm font-semibold tracking-wide"
                                        onClick={() => window.open("https://portal.rapimed.com.br/vagas", "_blank")}
                                    >
                                        Ver vagas
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
