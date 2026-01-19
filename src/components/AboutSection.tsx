import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Escala inteligente",
  "Apoio à decisão",
  "Equipe qualificada",
  "Atendimento em todo o Brasil",
  "Suporte total a sua empresa",
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="smiling-mature-doctor-with-stethoscope-portraying-2025-02-25-12-49-22-utc.jpg"
                alt="Equipe médica rapimed"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full blur-2xl opacity-50" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent rounded-full blur-3xl opacity-30" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
              Nossas Soluções
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Por que escolher a Rapimed?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Unimos tecnologia de ponta, gestão disciplinada e corpo clínico
              qualificado para elevar o padrão assistencial da sua unidade de saúde.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground/80">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="group">
              Saiba Mais
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
