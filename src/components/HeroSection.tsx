import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Stethoscope, Users } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background with image positioned to the right */}
      <div className="absolute inset-0 z-0">
        {/* Solid color background on left side */}
        <div className="absolute inset-0 bg-[#f5f9f9]" />

        {/* Image positioned to the right */}
        <div
          className="absolute top-0 right-0 bottom-0 w-full lg:w-[75%] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/medical-face-and-woman-or-doctor-with-crossed-arm-2025-04-05-22-52-25-utc.jpg")',
          }}
        />

        {/* Gradient overlay: solid teal until 30%, then fading to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a6365] from-30% via-[#2a6365]/50 via-50% to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12">
        {/* White Card Container */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl border border-gray-100"
        >
          {/* Rapimed Logo */}
          <div className="flex items-center gap-2 mb-8">
            <img src="/images/NOVA-RAPIMED.png" alt="Rapimed" className="h-8" />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold italic text-gray-900 mb-4 leading-tight">
            Gestão médica inteligente
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-medium italic text-gray-800 mb-6">
            Eficiência operacional e Segurança assistencial.
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-base md:text-lg mb-10 leading-relaxed">
            Atuamos em todo o Brasil transformando a saúde hospitalar e municipal com
            escalas 100% cobertas, protocolos baseados em IA e capacitação contínua do corpo
            clínico.
          </p>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card 1 - Soluções */}
            <Link to="/solucoes" className="group">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-200/50 hover:shadow-lg hover:border-[#2a6365]/30 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2a6365]/10 flex items-center justify-center group-hover:bg-[#2a6365]/20 transition-colors">
                  <Stethoscope className="w-6 h-6 text-[#2a6365]" />
                </div>
                <div>
                  <h3 className="font-bold italic text-gray-900 mb-1 group-hover:text-[#2a6365] transition-colors">
                    Conheça as Soluções
                  </h3>
                  <p className="text-sm text-gray-500 leading-snug">
                    Descubra como eliminamos furos em escalas e reduzimos custos operacionais.
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 2 - Carreira */}
            <Link to="/vagas" className="group">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-200/50 hover:shadow-lg hover:border-[#2a6365]/30 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2a6365]/10 flex items-center justify-center group-hover:bg-[#2a6365]/20 transition-colors">
                  <Users className="w-6 h-6 text-[#2a6365]" />
                </div>
                <div>
                  <h3 className="font-bold italic text-gray-900 mb-1 group-hover:text-[#2a6365] transition-colors">
                    Carreira Médica
                  </h3>
                  <p className="text-sm text-gray-500 leading-snug">
                    Venha fazer parte de um corpo clínico de elite com suporte tecnológico e gestão eficiente.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
