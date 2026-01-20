import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Suporte tecnológico de ponta",
  "Trilhas de capacitação contínua",
  "Escalas organizadas e flexíveis",
  "Ambiente de excelência profissional",
];

export function CareerCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8"
          >
            <Briefcase className="w-10 h-10 text-primary" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Junte-se ao corpo clínico{" "}
            <span className="text-white font-bold">de elite</span> da Rapimed.
          </h2>

          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Buscamos profissionais comprometidos com a excelência.
          </p>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.03, x: 5 }}
                className="flex items-center gap-3 text-left bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 cursor-pointer"
              >
                <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white/90 text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <Button variant="hero" size="xl">
              Consulte as vagas disponíveis
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
