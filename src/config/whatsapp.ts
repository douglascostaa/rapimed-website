import { Building2, Stethoscope, Landmark } from 'lucide-react';

export const WHATSAPP_CONFIG = {
    gestorHospitalar: {
        // Fallback seguro apenas para desenvolvimento/demo. Em prod, deve vir do ENV.
        phone: import.meta.env.VITE_WHATSAPP_GESTOR || '5551933001875',
        message: 'Olá! Sou gestor hospitalar e gostaria de eliminar furos na minha escala e reduzir custos.',
        icon: Building2,
        label: 'Gestor de Saúde Hospitalar',
        description: 'Para diretores e gerentes'
    },
    medicos: {
        phone: import.meta.env.VITE_WHATSAPP_MEDICOS || '5551933001875',
        message: 'Olá! Sou médico(a) e tenho interesse em fazer parte do corpo clínico de elite da Rapimed.',
        icon: Stethoscope,
        label: 'Médicos',
        description: 'Para vagas e plantões'
    },
    gestorPublico: {
        phone: import.meta.env.VITE_WHATSAPP_PUBLICO || '5551933001875',
        message: 'Olá! Represento o setor público e busco soluções de eficiência para gestão de saúde municipal.',
        icon: Landmark,
        label: 'Gestor de Saúde Pública',
        description: 'Para secretarias de saúde'
    }
};
