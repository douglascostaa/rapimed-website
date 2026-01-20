import { motion } from "framer-motion";
import { Calendar, Stethoscope, MapPin, ClipboardCheck } from "lucide-react";

const stats = [
    {
        icon: Calendar,
        value: "100%",
        label: "Cobertura integral de escalas (OTIF) sem furos ou atrasos.",
    },
    {
        icon: Stethoscope,
        value: "+700",
        label: "Médicos qualificados e ativos em nossa rede assistencial.",
    },
    {
        icon: MapPin,
        value: "+50",
        label: "Cidades atendidas em todo o país",
    },
    {
        icon: ClipboardCheck,
        value: "98%",
        label: "Taxa de adesão aos protocolos clínicos e segurança assistencial.",
    },
];

export function StatsSection() {
    return (
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="text-center flex flex-col items-center gap-4 cursor-pointer"
                        >
                            <motion.div
                                className="p-4 rounded-full bg-white/10 mb-2"
                                whileHover={{ scale: 1.15, rotate: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <stat.icon className="w-8 h-8" />
                            </motion.div>
                            <h3 className="text-4xl font-bold">{stat.value}</h3>
                            <p className="text-sm md:text-base text-primary-foreground/80 font-medium max-w-[200px]">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
