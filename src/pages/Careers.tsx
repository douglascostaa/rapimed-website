import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Careers() {
    const benefits = [
        "educação continuada",
        "escalas inteligentes",
        "gestão humanizada",
        "apoio à decisão com ia"
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Helper anchor for contact form scrolling */}
                <div id="contact-form" className="sr-only"></div>

                {/* Hero Section */}
                <section className="relative min-h-[600px] flex items-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/diverse-medical-team-of-doctors-looking-at-camera-UW9F7DT.webp"
                            alt="Equipe médica"
                            className="w-full h-full object-cover object-left-top"
                            onError={(e) => {
                                e.currentTarget.src = "diverse-medical-team-of-doctors-looking-at-camera-UW9F7DT.webp"
                            }}
                        />
                        {/* Teal Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2a6365]/90 via-[#2a6365]/70 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 py-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-2xl text-white"
                        >
                            <span className="font-medium text-lg mb-2 block text-white/90 italic">vagas abertas</span>
                            <h1 className="text-4xl md:text-5xl lg:text-4,5xl font-bold mb-6 leading-tight">
                                Junte-se ao corpo clínico
                                de elite da Rapimed.
                            </h1>
                            <p className="text-lg text-white/90 mb-8 max-w-xl leading-relaxed">
                                Buscamos profissionais comprometidos com a excelência. Oferecemos suporte
                                tecnológico, trilhas de capacitação e escalas organizadas para que você foque no que
                                realmente importa: o cuidado com o paciente.
                            </p>

                            <Button
                                size="xl"
                                className="bg-[#009999] hover:bg-[#008080] text-white font-bold px-8 py-6 text-lg rounded shadow-lg uppercase tracking-wide"
                                onClick={() => {
                                    window.open("https://portal.rapimed.com.br/vagas", "_blank");
                                }}
                            >
                                Quero me candidatar
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 bg-gray-50/50">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Content Side */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                    Transforme a saúde com soluções ágeis e inovadoras.
                                </h2>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    Faça parte de uma equipe multidisciplinar que contribui para a transformação da saúde por
                                    meio de gestão inteligente e suporte contínuo.
                                </p>

                                <h3 className="text-xl font-bold text-gray-800 mb-6">Diferenciais para o Profissional:</h3>

                                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                                    {benefits.map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-[#008080] shrink-0" />
                                            <span className="font-bold text-gray-800">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    size="xl"
                                    className="bg-[#009999] hover:bg-[#008080] text-white font-bold px-8 py-6 text-lg rounded shadow-lg uppercase tracking-wide"
                                    onClick={() => {
                                        window.open("https://portal.rapimed.com.br/vagas", "_blank");
                                    }}
                                >
                                    Consulte as vagas disponíveis
                                </Button>
                            </motion.div>

                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {/* Decorative background shape */}
                                <div className="absolute -inset-4 bg-gray-100/50 rounded-[40px] -z-10 transform rotate-2" />

                                <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
                                    <img
                                        src="/images/bearded-serious-doctor-or-intern-in-uniform-making-2026-01-08-23-52-44-utc.JPG"
                                        alt="Equipe reunida"
                                        className="w-full h-auto object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = "bearded-serious-doctor-or-intern-in-uniform-making-2026-01-08-23-52-44-utc.JPG"
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
