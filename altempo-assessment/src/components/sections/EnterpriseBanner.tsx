const EnterpriseBanner = () => {
    return (
        <section className="py-15 w-[95vw] mx-auto">
            <div className="max-w-full mx-auto px-10">
                <div className="bg-[url('/background-2.png')] bg-cover bg-center rounded-4xl p-6 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        {/* left side - text content */}
                        <div className="mb-8 md:mb-0">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Altempo para empresas
                            </h2>
                            <p className="text-lg text-white/90 ">
                                Soluciones personalizadas para la gestión y contratación de talento musical en tu empresa.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 mt-5">
                        <button className="bg-white/15 backdrop-blur-sm text-white font-medium rounded-full px-6 py-3 text-lg hover:bg-white/20 transition-colors cursor-pointer">
                            Descubre más
                        </button>
                        <button className="bg-primary rounded-full px-5 py-3 text-lg transition-colors backdrop-filter-none opacity-100 font-inter font-medium tracking-[0px] leading-[120%] text-center text-primary-text">
                         Contáctanos
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EnterpriseBanner 