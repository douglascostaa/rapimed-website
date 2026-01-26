import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactPageHero } from "@/components/ContactPageHero";
import { WhatsAppCards } from "@/components/WhatsAppCards";

export default function Contact() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 w-full">
                <ContactPageHero />
                <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-[#2a6365]">
                            Canais de Atendimento Exclusivos
                        </h2>
                        <WhatsAppCards />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
