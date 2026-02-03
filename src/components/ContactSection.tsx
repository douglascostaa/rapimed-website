import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendMail } from "@/lib/mail";
import { toast } from "sonner";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      await sendMail("contact", data);
      setIsSuccess(true);
      toast.success("Mensagem enviada com sucesso!");
    } catch (error) {
      toast.error("Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/20 -skew-x-12 translate-x-1/4 -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-0 rounded-2xl overflow-hidden shadow-2xl bg-card">

          {/* Contact Info Side */}
          <div className="lg:col-span-2 bg-primary text-primary-foreground p-10 flex flex-col justify-between">
            <div>
              <span className="text-white/100 font-medium text-lg italic mb-4 block">
                fale conosco
              </span>
              <h2 className="text-3xl font-bold mb-4">Entre em contato</h2>
              <p className="text-primary-foreground/80 mb-8">
                Estamos prontos para atender sua demanda. Utilize o formulário ou nossos canais diretos.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="p-3 rounded-lg bg-white/10 shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Phone className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg">Telefone</h3>
                  <p className="text-primary-foreground/80">(51) 93300-1875</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="p-3 rounded-lg bg-white/10 shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Mail className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg">E-mail</h3>
                  <p className="text-primary-foreground/80">contato@rapimed.com.br</p>
                </div>
              </motion.div>


              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  className="p-3 rounded-lg bg-white/10 shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <MapPin className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg">Endereço</h3>
                  <p className="text-primary-foreground/80">Atendimento em todo o Brasil</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 p-10 bg-white dark:bg-zinc-900">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mensagem Enviada!</h3>
                <p className="text-gray-500 max-w-md">
                  Obrigado pelo contato. Retornaremos em breve.
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-6">
                  Enviar nova mensagem
                </Button>
              </div>
            ) : (
              <form className="space-y-6 h-full flex flex-col justify-center" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nome Completo
                  </label>
                  <Input id="name" name="name" required placeholder="Digite seu nome" className="bg-secondary/50" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-mail Profissional
                  </label>
                  <Input id="email" name="email" type="email" required placeholder="Digite seu e-mail" className="bg-secondary/50" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Como podemos ajudar?"
                    className="min-h-[80px] bg-secondary/50 resize-none"
                  />
                </div>

                <Button size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Enviando... <Loader2 className="w-4 h-4 ml-2 animate-spin" /></>
                  ) : (
                    <>Enviar Mensagem <Send className="w-4 h-4 ml-2" /></>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
