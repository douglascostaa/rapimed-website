export const mailConfig = {
    contact: {
        to: "contato@rapimed.com.br", // Configurar email de destino do formulário de contato
        subjectPrefix: "[Site Contato]"
    },
    ouvidoria: {
        to: "ouvidoria@rapimed.com.br", // Configurar email de destino da ouvidoria
        subjectPrefix: "[Site Ouvidoria]"
    }
} as const;
