import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CareerCTA } from "@/components/CareerCTA";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Shield,
  GraduationCap,
  CheckCircle2,
  Award,
  Activity,
  Users,
  Calendar,
  Building2,
  Clipboard,
  UserPlus,
  FileText,
  GitBranch,
  BarChart3,
  Target,
  BookOpen,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

const servicosMedicos = [
  {
    icon: Award,
    title: "Responsabilidade Técnica",
    description: "Liderança ética e técnica presente no dia a dia.",
  },
  {
    icon: Activity,
    title: "Plantões Médicos",
    description: "Alocação de profissionais qualificados conforme demanda.",
  },
  {
    icon: Users,
    title: "Especialidades na Área da Saúde",
    description: "Provimento de médicos especialistas conforme necessidade municipal.",
  },
  {
    icon: Calendar,
    title: "Gestão de Escala",
    description: "Monitoramento integral para extinção de furos e atrasos.",
  },
  {
    icon: Building2,
    title: "Montagem de Serviços Médicos Novos",
    description: "Estruturação completa da área médica, do dimensionamento à escala.",
  },
  {
    icon: Clipboard,
    title: "Serviços Médicos em Postos de Saúde",
    description: "Gestão focada na realidade da Atenção Básica.",
  },
  {
    icon: UserPlus,
    title: "Cadastro de Contatos Médicos",
    description: "Gestão ativa de banco de talentos para reposição imediata.",
  },
];

const protocolos = [
  {
    icon: FileText,
    title: "Montagem de Protocolos de Emergência",
    description: "Institucionalização de condutas para síndromes críticas (AVC, Sepse, Dor Torácica).",
  },
  {
    icon: GitBranch,
    title: "Organização do Fluxo de Atendimento",
    description: "Desenho de processos e triagem para reduzir o tempo de espera e o abandono de pacientes.",
  },
  {
    icon: BarChart3,
    title: "Consultoria em Gestão Hospitalar",
    description: "Apoio estratégico à direção para melhorar o giro assistencial e a previsibilidade operacional.",
  },
];

const educacao = [
  {
    icon: Target,
    title: "Capacitação em Protocolos",
    description: "Treinamentos práticos para garantir que o corpo médico aplique os protocolos criados.",
  },
  {
    icon: BookOpen,
    title: "Simulações Realísticas",
    description: "Validação de competências críticas (ex: via aérea, ressuscitação) conduzidas por especialistas.",
  },
  {
    icon: HeartPulse,
    title: "Treinamento em Atendimento Humanizado",
    description: "Foco na clareza de informações e satisfação do paciente (NPS).",
  },
];

interface SolutionSectionProps {
  icon: React.ElementType;
  title: string;
  description: string;
  highlights: string[];
  subtitle: string;
  items: { icon: React.ElementType; title: string; description: string }[];
  imageUrl: string;
  reversed?: boolean;
  gradientColor: string;
}

function SolutionSection({
  icon: Icon,
  title,
  description,
  highlights,
  subtitle,
  items,
  imageUrl,
  reversed = false,
  gradientColor,
}: SolutionSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-5`} />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={reversed ? "lg:order-2" : ""}
          >
            <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${gradientColor} text-sm font-medium mb-6`}>
              <Icon className="w-5 h-5 text-white" />
              <span className="text-white">{title}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              {title}
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 text-primary">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6 italic">
              {subtitle}
            </h3>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`relative ${reversed ? "lg:order-1" : ""}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-[400px] object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${gradientColor} opacity-40`} />
            </div>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradientColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function Solucoes() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[500px] flex items-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/medicine-and-health-care-concept-2026-01-07-01-35-55-utc.jpg"
            alt="Soluções de saúde"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a6365]/95 via-[#2a6365]/80 to-[#2a6365]/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-[45%]"
          >
            <span className="font-medium text-lg mb-2 block text-white/90 italic">
              soluções
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Soluções Inteligentes para a Gestão de Saúde.
            </h1>

            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              Unimos tecnologia, gestão disciplinada de pessoas e protocolos baseados em
              evidências para garantir que sua unidade de saúde opere com máxima eficiência e
              segurança assistencial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Serviços Médicos */}
      <SolutionSection
        icon={Stethoscope}
        title="Serviços Médicos"
        description="Gestão estratégica e operacional do corpo clínico focada em assegurar a cobertura integral das escalas, o dimensionamento correto da equipe e a eficiência no giro assistencial."
        highlights={["Cobertura Integral de Escalas", "Liderança Técnica Ativa"]}
        subtitle="Principais eixos de gestão e operação médica:"
        items={servicosMedicos}
        imageUrl="/images/surgeons-and-paramedic-in-mask-and-operating-patie-2026-01-07-00-31-12-utc.jpg"
        gradientColor="from-primary to-primary-dark"
      />

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Protocolos e Governança */}
      <SolutionSection
        icon={Shield}
        title="Protocolos e Governança"
        description="Implementação de diretrizes clínicas baseadas em evidências científicas e suporte tecnológico para padronizar o atendimento, reduzir riscos assistenciais e otimizar o uso de recursos."
        highlights={["Agilidade em Casos Críticos", "Segurança e Previsibilidade Assistencial"]}
        subtitle="Eixos estratégicos de governança e fluxo:"
        items={protocolos}
        imageUrl="/images/photo-1576091160550-2173dba999ef.jfif"
        gradientColor="from-accent to-amber-600"
        reversed
      />

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Educação Continuada */}
      <SolutionSection
        icon={GraduationCap}
        title="Educação Continuada"
        description="Programa estruturado de atualização e validação de competências críticas, garantindo que o corpo médico esteja permanentemente alinhado aos protocolos institucionais e às melhores práticas do mercado."
        highlights={["Simulações Realísticas e Práticas", "Certificação de Competências Críticas"]}
        subtitle="Programas de desenvolvimento e qualificação:"
        items={educacao}
        imageUrl="/images/medical-students-studying-human-anatomy-in-univers-2026-01-09-11-08-56-utc.jpg"
        gradientColor="from-emerald-500 to-teal-600"
      />
      <CareerCTA />
      <Footer />
    </div>
  );
}
