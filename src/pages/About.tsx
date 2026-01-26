import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { motion } from "framer-motion";
import { Award, Users, Target, Rocket, Heart } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl mx-auto text-center"
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">A Rapimed</h1>
                            <p className="text-xl text-primary-foreground/90">
                                Inovação e excelência na gestão de saúde.
                            </p>
                        </motion.div>
                    </div>
                    <div className="absolute inset-0 bg-black/10" />
                </section>

                {/* History Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6 text-lg text-muted-foreground leading-relaxed"
                            >
                                <h2 className="text-3xl font-bold text-foreground mb-6">Nossa História</h2>
                                <p>
                                    Nossa história começou em 2020 como Sulzbach Serviços Médicos, uma empresa fundada por um médico e uma administradora de empresas que tinham o anseio de inovar na saúde e solucionar problemas antigos da área.
                                </p>
                                <p>
                                    Facilitar a captação, integração e retenção de talentos médicos nas instituições de saúde. Percebemos a dificuldade enfrentada por essas instituições em encontrar profissionais qualificados e alinhados com seus protocolos e isso nos motivou a criar uma rede de profissionais treinados e capacitados para atender às demandas do setor.
                                </p>
                                <p>
                                    Inseridos no universo das instituições de saúde, identificamos que poderíamos entregar uma experiência ainda mais completa e aumentar o nosso leque de serviços. Expandir nossos horizontes e elevar nossos serviços a um novo patamar: e assim surgiu a Rapimed – Gestão em Saúde.
                                </p>
                                <p className="font-medium text-foreground">
                                    Mantendo sempre o compromisso com a excelência e a segurança, nesta nova fase temos o objetivo superar expectativas e oferecer soluções ainda mais ágeis e inovadoras.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative rounded-2xl overflow-hidden shadow-xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2070"
                                    alt="História Rapimed"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Pillars Section */}
                <section className="py-20 bg-secondary/30">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Mission */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-background p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 cursor-pointer relative group overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2a6365] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                                    <Rocket className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Missão</h3>
                                <p className="text-muted-foreground">
                                    Levar equipes seguras e soluções em saúde de forma rápida e qualificada para as regiões Sul e Sudeste do Brasil.
                                </p>
                            </motion.div>

                            {/* Vision */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-background p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 cursor-pointer relative group overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2a6365] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                                    <Target className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Visão</h3>
                                <p className="text-muted-foreground">
                                    Triplicar o número de horas de atendimento até dezembro de 2026.
                                </p>
                            </motion.div>

                            {/* Values */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-background p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 cursor-pointer relative group overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2a6365] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                                    <Award className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Valores</h3>
                                <p className="text-muted-foreground">
                                    Responsabilidade, agilidade, qualidade, ética e senso de dono.
                                </p>
                            </motion.div>

                            {/* Purpose */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="bg-background p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 cursor-pointer relative group overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2a6365] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                                    <Heart className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Propósito</h3>
                                <p className="text-muted-foreground">
                                    Levar saúde de qualidade a milhares de pessoas, assim como entregar inteligência estratégica para os gestores públicos e privados, com segurança, tranquilidade, agilidade e organização.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <StatsSection />

                {/* Testimonials/Google Reviews Section */}
                <TestimonialsSection />

            </main>
            <Footer />
        </div >
    );
}
