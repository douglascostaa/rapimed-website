import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Shield,
  GraduationCap,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const solutions = [
  {
    icon: Stethoscope,
    title: "Escala 100% Coberta",
    description: "Nunca mais sofra com ausências de última hora. Nossa gestão inteligente elimina furos e garante plantões sempre completos.",
    color: "from-primary to-primary-dark",
  },
  {
    icon: Shield,
    title: "ROI de até 250%",
    description: "Reduza gastos com horas extras emergenciais e desperdícios operacionais. Economia previsível para o seu orçamento.",
    color: "from-accent to-amber-600",
  },
  {
    icon: GraduationCap,
    title: "Corpo Clínico de Elite",
    description: "Profissionais rigorosamente selecionados e capacitados, garantindo segurança e excelência no atendimento ao paciente.",
    color: "from-emerald-500 to-teal-600",
  },
];

export function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="solucoes" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              Nossas soluções
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Por que escolher a{" "}
              <span className="gradient-text">Rapimed?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Unimos tecnologia de ponta, gestão disciplinada e corpo clínico
              qualificado para elevar o padrão assistencial da sua unidade de saúde.
            </p>

            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop"
                alt="Equipe médica profissional"
                className="w-full h-[300px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Conheça nossas soluções
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right - Accordion Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`bg-card rounded-2xl border border-border overflow-hidden relative group transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 ${expandedIndex === index ? "shadow-lg border-primary/30" : "hover:shadow-md"
                  }`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2a6365] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full p-6 flex items-center gap-4 text-left"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center flex-shrink-0`}>
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{solution.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    {expandedIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-secondary-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-secondary-foreground" />
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
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed pl-[4.5rem]">
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
