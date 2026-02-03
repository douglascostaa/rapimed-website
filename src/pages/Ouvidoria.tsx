import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquareQuote, ShieldCheck, HeartHandshake, Loader2, CheckCircle2 } from "lucide-react";
import { sendMail } from "@/lib/mail";
import { toast } from "sonner"; // Assuming sonner is available based on App.tsx

export default function Ouvidoria() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            city: formData.get("city") as string,
            message: formData.get("message") as string,
        };

        try {
            await sendMail("ouvidoria", data);
            setIsSuccess(true);
            toast.success("Manifestação enviada com sucesso!");
        } catch (error) {
            toast.error("Erro ao enviar. Tente novamente.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 w-full">
                {/* Hero / Intro Section */}
                <section className="relative bg-primary text-primary-foreground py-24 md:py-32 overflow-hidden">
                    {/* Abstract Shapes Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-8">

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-6xl font-bold tracking-tight"
                            >
                                Ouvidoria Rapimed
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-lg md:text-2xl text-primary-foreground/90 font-light leading-relaxed max-w-2xl mx-auto"
                            >
                                Valorizamos a transparência e a comunicação efetiva com nossos parceiros e beneficiários.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Content & Form Section */}
                <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                            {/* Info Column */}
                            <div className="lg:col-span-5 space-y-10">
                                <div className="prose prose-lg text-muted-foreground">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                            <HeartHandshake className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground mb-2">Compromisso com você</h3>
                                            <p className="text-base leading-relaxed">
                                                Nossa Ouvidoria tem como objetivo garantir que todas as manifestações sejam recebidas, registradas e tratadas de forma imparcial e confidencial. Disponibilizamos este canal exclusivo para ouvir suas opiniões, sugestões, elogios ou reclamações.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full h-px bg-border my-8" />

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-accent/10 text-accent-foreground">
                                            <MessageSquareQuote className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground mb-2">Como proceder?</h3>
                                            <p className="text-base leading-relaxed mb-4">
                                                Ao acessar este canal, você encontrará nosso formulário oficial. Preencha as informações solicitadas e descreva detalhadamente a sua manifestação.
                                            </p>
                                            <p className="text-base leading-relaxed bg-secondary/30 p-4 rounded-lg text-foreground border-l-4 border-primary">
                                                Após receber sua mensagem, nossa equipe realizará uma análise cuidadosa e providenciará uma resposta objetiva dentro do prazo estabelecido.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form Column */}
                            <div className="lg:col-span-7">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-[2rem] shadow-2xl shadow-primary/5 p-8 md:p-12 border border-gray-100"
                                >
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900">Registre sua manifestação</h3>
                                        <p className="text-gray-500 mt-2">Preencha o formulário abaixo para entrar em contato com nossa equipe.</p>
                                    </div>

                                    {isSuccess ? (
                                        <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                                <CheckCircle2 className="w-8 h-8" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900">Mensagem Enviada!</h3>
                                            <p className="text-gray-500 max-w-md">
                                                Recebemos sua manifestação com sucesso. Nossa equipe analisará seu caso e entrará em contato em breve.
                                            </p>
                                            <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-6">
                                                Enviar nova mensagem
                                            </Button>
                                        </div>
                                    ) : (
                                        <form className="space-y-6" onSubmit={handleSubmit}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label htmlFor="name" className="text-sm font-medium text-gray-700 ml-1">Nome Completo</label>
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        required
                                                        placeholder="Digite seu nome"
                                                        className="h-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-primary transition-all rounded-xl"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label htmlFor="city" className="text-sm font-medium text-gray-700 ml-1">Cidade</label>
                                                    <Input
                                                        id="city"
                                                        name="city"
                                                        required
                                                        placeholder="Sua cidade"
                                                        className="h-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-primary transition-all rounded-xl"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label htmlFor="email" className="text-sm font-medium text-gray-700 ml-1">E-mail</label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        required
                                                        placeholder="seu@email.com"
                                                        className="h-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-primary transition-all rounded-xl"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700 ml-1">Telefone</label>
                                                    <Input
                                                        id="phone"
                                                        name="phone"
                                                        required
                                                        placeholder="(00) 00000-0000"
                                                        className="h-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-primary transition-all rounded-xl"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-sm font-medium text-gray-700 ml-1">Sua Manifestação</label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    required
                                                    placeholder="Descreva detalhadamente sua solicitação, dúvida ou reclamação..."
                                                    className="min-h-[160px] bg-gray-50 border-gray-200 focus:bg-white focus:border-primary transition-all resize-none p-4 rounded-xl text-base"
                                                />
                                            </div>

                                            <div className="pt-4">
                                                <Button
                                                    size="lg"
                                                    disabled={isSubmitting}
                                                    className="w-full bg-primary hover:bg-primary-dark text-white h-14 text-lg font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all rounded-xl"
                                                >
                                                    {isSubmitting ? (
                                                        <>Enviando... <Loader2 className="ml-2 w-5 h-5 animate-spin" /></>
                                                    ) : (
                                                        <>Enviar Manifestação <ArrowRight className="ml-2 w-5 h-5" /></>
                                                    )}
                                                </Button>
                                            </div>

                                            <p className="text-xs text-gray-400 text-center mt-6">
                                                Ao enviar este formulário, você concorda com nossa Política de Privacidade e com o tratamento dos seus dados para fins de atendimento.
                                            </p>
                                        </form>
                                    )}
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
