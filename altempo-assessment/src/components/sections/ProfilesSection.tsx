const ProfilesSection = () => {
    return (
        <section id="profiles" className="py-20 bg-bg-primary">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-4xl font-black text-white mb-6 font-montserrat">
                        Una plataforma para cualquier tipo de perfil
                    </h1>
                    <p className="text-xl text-white max-w-4xl mx-auto">
                        Puedes seleccionar cualquiera de los 3 perfiles de musico en el que te encuentres y empezar a generar ganancias junto a nosotros.
                    </p>
                </div>

                {/* cards stacked */}
                <div className="hidden md:flex justify-center mb-12">
                    <div className="relative w-full max-w-4xl">
                        <div className="absolute left-15 top-0 w-70 h-80 transform -rotate-6 z-10">
                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                                <div className="w-full h-full flex items-center justify-center">
                                    <img 
                                        src="/profesional.png" 
                                        alt="músico profesional" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="absolute left-15 top-[21rem] w-70 z-20 flex justify-center">
                            <h3 className="text-xl font-bold text-white text-center mt-2">Músico Profesional</h3> 
                        </div>

                        <div className="absolute left-1/2 top-0 w-70 h-80 transform -translate-x-1/2 z-30">
                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                                <div className="w-full h-full flex items-center justify-center">
                                    <img 
                                        src="/educacional.png" 
                                        alt="músico educacional" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white text-center mt-8">Músico Educacional</h3>
                        </div>

                        <div className="absolute right-15 top-0 w-70 h-80 transform rotate-6 z-10">
                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                                <div className="w-full h-full flex items-center justify-center">
                                    <img 
                                        src="/premium.png" 
                                        alt="músico premium" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="absolute right-15 top-[21rem] w-70 z-20 flex justify-center">
                            <h3 className="text-xl font-bold text-white text-center mt-2">Músico Premium</h3>
                        </div>

                        <div className="h-80"></div>
                    </div>
                </div>

                {/* for mobile layout - cards in column */}
                <div className="md:hidden space-y-8 mb-12">
                    <div className="text-center">
                        <div className="w-full max-w-sm mx-auto h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="w-full h-full flex items-center justify-center">
                                <img 
                                    src="/profesional.png" 
                                    alt="músico profesional" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white text-center mt-4">Músico Profesional</h3>
                    </div>

                    <div className="text-center">
                        <div className="w-full max-w-sm mx-auto h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="w-full h-full flex items-center justify-center">
                                <img 
                                    src="/educacional.png" 
                                    alt="músico educacional" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white text-center mt-4">Músico Educacional</h3>
                    </div>

                    <div className="text-center">
                        <div className="w-full max-w-sm mx-auto h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="w-full h-full flex items-center justify-center">
                                <img 
                                    src="/premium.png" 
                                    alt="músico premium" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white text-center mt-4">Músico Premium</h3>
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-[rgb(54,220,220)] rounded-full px-7 py-4 mt-10 text-lg transition-colors backdrop-filter-none opacity-100 font-inter font-medium tracking-[0px] leading-[120%] text-center text-[rgb(2,56,56)]">
                        Regístrate ahora
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProfilesSection 