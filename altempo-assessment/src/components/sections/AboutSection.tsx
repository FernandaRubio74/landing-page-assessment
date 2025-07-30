const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-full mx-10 px-6">
                {/* About section, top part*/}
                <div className="text-center mb-10 relative">
                    {/*Team avatars */}
                    <div className="w-full max-w-xs md:max-w-md grid grid-cols-4 gap-4 absolute z-10 -top-10 left-1/2 -translate-x-1/2">
                        <div className="flex items-center justify-center">
                            <img src="/about/2.png" alt="about-1" className="w-full h-full md:w-20 md:h-20 rounded-xl" />
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="/about/1.png" alt="about-2" className="w-full h-full md:w-20 md:h-20 rounded-xl" />
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="/about/3.png" alt="about-3" className="w-full h-full md:w-20 md:h-20 rounded-xl" />
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="/about/4.png" alt="about-4" className="w-full h-full md:w-20 md:h-20 rounded-xl" />
                        </div>
                    </div>

                    {/* mission */}
                    <div className="bg-bg-secondary rounded-2xl p-8 max-w-full">
                        <h3 className="text-sm font-semibold text-text-muted mt-10 mb-2">¿Quiénes somos?</h3>
                        <h2 className="text-4xl font-bold text-text-primary mb-6">
                            ¿Qué queremos lograr como Altempo?
                        </h2>

                        <div className="text-text-muted space-y-5  w-4/5 mx-auto text-lg text-center mb-5">
                            <p>
                                Queremos liberar el potencial artístico de cualquier rincón del planeta mediante plataformas innovadoras, permitiéndoles tener control sobre sus carreras, permitiéndoles encontrar su voz, conectar con sus audiencias y con ellos mismos.
                            </p>
                            <p>
                                Creemos en la autenticidad de la expresión musical y en su capacidad para unir a las personas en un nivel profundo y significativo. Queremos construir un legado de unión a través de la música, empoderando a músicos y oyentes por igual para explorar, expresar, conectar y crecer.
                            </p>
                        </div>
                    </div>
                </div>

                {/* cards section */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 w-full mx-auto">
                    <div className="bg-bg-secondary rounded-lg p-6 border">
                        <div className="flex items-start mb-1 mt-1">
                            <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center mr-1">
                                <svg className="w-7 h-7 text-bg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                        </div>
                            <h4 className="text-xl font-bold text-text-primary mb-1 mt-1   ">
                            Apoyo a una nueva era
                        </h4>
                            <p className="text-text-muted text-md">
                            Nos apasiona nuestro trabajo y lo que hacemos
                        </p>
                    </div>

             
                    <div className="bg-bg-secondary rounded-lg p-6 border">
                        <div className="flex items-start mb-1 mt-1">
                            <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center mr-1">
                                <svg className="w-7 h-7 text-bg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-text-primary mb-1 mt-1">
                            Innovación constante
                        </h4>
                        <p className="text-text-muted text-md">
                            Nos renovamos audazmente ante los retos del mañana
                        </p>
                    </div>

             
                    <div className="bg-bg-secondary rounded-lg p-6 border">
                        <div className="flex items-start mb-1 mt-1">
                            <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center mr-1">
                                <svg className="w-7 h-7 text-bg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-text-primary mb-1 mt-1">
                            Mejora constante
                        </h4>
                        <p className="text-text-muted text-md">
                            Creemos en la autodeterminación para la superación personal y colectiva.
                        </p>
                    </div>

            
                        <div className="bg-bg-secondary rounded-lg p-4 border">
                        <div className="flex items-start mb-1 mt-1">
                            <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center mr-1">
                                <svg className="w-7 h-7 text-bg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </div>
                            <h4 className="text-xl font-bold text-text-primary mb-1 mt-1">
                            Trabajo en equipo
                        </h4>
                        <p className="text-text-muted text-md">
                            Nos apoyamos a construir en conjunto una sociedad de oportunidades e integridad.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection 