export function TestimonialsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#2a6365] font-medium text-lg italic mb-2 block">
                        avaliações
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold italic text-gray-900 mb-4">
                        O que dizem sobre a Rapimed
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Veja as avaliações reais de nossos parceiros e profissionais no Google.
                    </p>
                </div>

                {/* Elfsight Google Reviews Widget */}
                <div className="max-w-5xl mx-auto">
                    <div
                        className="elfsight-app-2e3235db-2211-4e98-b026-cc8ee4e1e331"
                        data-elfsight-app-lazy
                    ></div>
                </div>
            </div>
        </section>
    );
}
