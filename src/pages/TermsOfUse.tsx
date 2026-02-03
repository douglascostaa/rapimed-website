import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfUse = () => {
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
                        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Termos de Uso</h1>

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8 text-gray-700">
                            <section>
                                <h2 className="text-xl font-bold text-primary mb-4">1. Aceitação dos Termos</h2>
                                <p className="leading-relaxed">
                                    Ao acessar e usar este site, você aceita e concorda em estar vinculado aos termos e provisões deste acordo.
                                    Além disso, ao usar os serviços particulares deste site, você estará sujeito a quaisquer regras ou diretrizes
                                    postadas aplicáveis a tais serviços.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-primary mb-4">2. Serviços da Rapimed</h2>
                                <p className="leading-relaxed">
                                    A Rapimed fornece serviços de gestão de escalas médicas, consultoria em saúde e soluções de governança clínica.
                                    O conteúdo presente neste site é informativo e não substitui aconselhamento médico profissional, diagnóstico ou tratamento.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-primary mb-4">3. Propriedade Intelectual</h2>
                                <p className="leading-relaxed">
                                    Todo o conteúdo deste site, incluindo mas não se limitando a textos, gráficos, logotipos, ícones, imagens e software,
                                    é propriedade da Rapimed ou de seus fornecedores de conteúdo e é protegido pelas leis de direitos autorais internacionais e do Brasil.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-primary mb-4">4. Limitação de Responsabilidade</h2>
                                <p className="leading-relaxed">
                                    A Rapimed não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes
                                    que resultem do uso ou da incapacidade de usar nossos serviços ou acessar nosso site.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-primary mb-4">5. Modificações dos Termos</h2>
                                <p className="leading-relaxed">
                                    Reservamo-nos o direito de alterar estes termos de tempos em tempos a nosso exclusivo critério.
                                    O uso contínuo do site após quaisquer alterações constitui sua aceitação dos novos termos.
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

export default TermsOfUse;
