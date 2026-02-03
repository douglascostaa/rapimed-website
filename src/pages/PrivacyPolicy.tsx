import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Header />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Política de Privacidade</h1>

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8 text-gray-700">
                            <section>
                                <h2 className="text-xl font-bold text-primary mb-4">1. Coleta de Informações</h2>
                                <p className="leading-relaxed">
                                    A Rapimed valoriza a sua privacidade. Coletamos informações que você nos fornece diretamente,
                                    por exemplo, quando preenche nossos formulários de contato, ouvidoria ou candidatura a vagas.
                                    Essas informações podem incluir nome, e-mail, telefone e currículo.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-primary mb-4">2. Uso das Informações</h2>
                                <p className="leading-relaxed">
                                    Utilizamos as informações coletadas para:
                                </p>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>Responder a suas solicitações e perguntas;</li>
                                    <li>Processar candidaturas a vagas de emprego;</li>
                                    <li>Melhorar nossos serviços e a experiência no site;</li>
                                    <li>Enviar comunicações institucionais, quando autorizado.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-primary mb-4">3. Proteção de Dados</h2>
                                <p className="leading-relaxed">
                                    Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger seus dados pessoais
                                    contra acesso não autorizado, alteração, divulgação ou destruição.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-primary mb-4">4. Cookies</h2>
                                <p className="leading-relaxed">
                                    Nosso site utiliza cookies para melhorar a navegação e entender como os visitantes interagem com nosso conteúdo.
                                    Você pode configurar seu navegador para recusar todos ou alguns cookies, se preferir.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-primary mb-4">5. Compartilhamento de Dados</h2>
                                <p className="leading-relaxed">
                                    Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros externos, exceto quando necessário
                                    para cumprir a lei, executar nossas políticas de site ou proteger nossos direitos, propriedade ou segurança.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-secondary mb-4">6. Contato</h2>
                                <p className="leading-relaxed">
                                    Se tiver dúvidas sobre esta política de privacidade, você pode entrar em contato conosco através do e-mail: <a href="mailto:contato@rapimed.com.br" className="text-primary hover:underline">contato@rapimed.com.br</a>.
                                </p>
                            </section>

                            <section className="pt-4 border-t border-gray-100">
                                <p className="text-sm text-gray-500">Última atualização: Fevereiro de 2026</p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
