import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  CalendarClock,
  UserCog,
  AlertTriangle,
  Users,
  Building2,
  Workflow,
  BadgeCheck,
  HeartPulse,
  LineChart,
  Wrench,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: CalendarClock,
    title: "Gestão de Escala",
    description: "Monitoramento em tempo real para extinção de atrasos e furos injustificados.",
  },
  {
    icon: UserCog,
    title: "Plantões Médicos",
    description: "Dimensionamento estratégico para evitar sobrecarga e garantir giro de leitos.",
  },
  {
    icon: AlertTriangle,
    title: "Protocolos de Emergência",
    description: "Padronização rigorosa para atendimentos críticos em UTI e Pronto Atendimento.",
  },
  {
    icon: Users,
    title: "Cadastro de Contatos",
    description: "Comunicação fluida e banco de talentos qualificado para reposições imediatas.",
  },
  {
    icon: Building2,
    title: "Serviços em Postos de Saúde",
    description: "Reorganização de agendas e foco em humanização na Atenção Básica.",
  },
  {
    icon: Workflow,
    title: "Organização do Fluxo",
    description: "Triagem e processos desenhados para reduzir filas e abandono de pacientes.",
  },
  {
    icon: BadgeCheck,
    title: "Responsabilidade Técnica",
    description: "Liderança ética e técnica ativa para garantir conformidade e qualidade assistencial.",
  },
  {
    icon: HeartPulse,
    title: "Especialidades na Saúde",
    description: "Acesso a pediatria, ortopedia, ginecologia e outros conforme a demanda local.",
  },
  {
    icon: LineChart,
    title: "Consultoria em Gestão",
    description: "Monitoramento de indicadores essenciais para apoio estratégico à tomada de decisão.",
  },
  {
    icon: Wrench,
    title: "Montagem de Serviços Novos",
    description: "Estruturação completa de novas áreas médicas do zero com foco em eficiência.",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="servicos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Especialistas em{" "}
            <span className="gradient-text">Transformar Operações de Saúde.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Oferecemos uma ampla gama de serviços modulares que garantem previsibilidade
            financeira, segurança jurídica e satisfação total do paciente.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </motion.div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-1">
                Saiba mais
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
