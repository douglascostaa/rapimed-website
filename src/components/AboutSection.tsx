import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Stethoscope, 
  MapPin, 
  FileCheck, 
  Clock,
  CheckCircle2,
  ArrowRight 
} from "lucide-react";

const stats = [
  { icon: Clock, value: 10, suffix: "", label: "Anos de experiência", description: "Consolidada no mercado clínico e hospitalar" },
  { icon: Calendar, value: 100, suffix: "%", label: "Cobertura de escalas", description: "OTIF sem furos ou atrasos" },
  { icon: Stethoscope, value: 700, prefix: "+", suffix: "", label: "Médicos qualificados", description: "Ativos em nossa rede assistencial" },
  { icon: MapPin, value: 150, prefix: "+", suffix: "", label: "Cidades atendidas", description: "Em todo o país" },
  { icon: FileCheck, value: 98, suffix: "%", label: "Adesão aos protocolos", description: "Clínicos e segurança assistencial" },
];

const features = [
  "Escala Inteligente",
  "Apoio à Decisão",
  "Equipe Qualificada",
  "Atendimento em todo o Brasil",
  "Suporte total a sua empresa",
];

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              Sobre nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Excelência em Gestão que{" "}
              <span className="gradient-text">Eleva o Padrão da Saúde.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A Rapimed atua como parceira estratégica de gestores, resolvendo falhas 
              de cobertura, eliminando atrasos e padronizando o cuidado para reduzir 
              riscos jurídicos e elevar o NPS do paciente.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button size="lg">
              Saiba mais
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 gradient-primary opacity-20" />
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop"
                alt="Médico profissional"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl bg-primary/10 -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-accent/10 -z-10" />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-semibold text-foreground mb-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
