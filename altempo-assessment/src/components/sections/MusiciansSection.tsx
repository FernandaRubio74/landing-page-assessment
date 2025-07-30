const MusiciansSection = () => {
    return (
        <section id="musicians" className="py-20 bg-white">
            <div className="max-w-full mx-12 px-6">
                {/* section for musicians, info*/}
                <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
                    {/* image align to the left */}
                    <div className="w-full lg:w-2/5 order-1 lg:order-1">
                        <div className="w-full h-96 lg:h-130 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="w-full h-full flex items-center justify-center">
                                <img 
                                    src="musico.png" 
                                    alt="Musico" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/*information section*/}
                    <div className="w-full lg:w-3/5 order-2 lg:order-2">
                        <h3 className="mb-2 font-medium text-[14px] leading-[22px] tracking-[0px] text-text-secondary font-inter">
                            Músicos Profesionales
                        </h3>
                        <h2 className="text-3xl lg:text-4xl text-text-primary mb-6">
                            Encuentra en Altempo un mundo de
                            <br />
                            <span className="font-bold">posibilidades infinitas</span>
                        </h2>
                        <p className="text-text-muted mb-8 text-lg lg:text-xl">
                            Como musico activo dentro de nuestra plataforma tienes acceso a diferentes beneficios que te permiten alcanzar contactos con empresas y proyectos de gran escala
                        </p>

                        {/* list of benefits */}
                        <div className="space-y-0.5 w-max-767">
                            {/* icons example*/}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-bg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 text-md font-medium">Altempo learning</span>
                                </div>

                                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-bg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 text-md font-medium">Compositores</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-bg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 text-md font-medium">Desarrolladores de Jingles Publicitarios</span>
                                </div>

                                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-bg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 text-md font-medium">Productores Musicales</span>
                                </div>
                            </div>

    
                            <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg w-full lg:w-1/2">
                                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-bg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                    </svg>
                                </div>
                                <span className="text-gray-600 text-md font-medium">Ambientalistas</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* smart benefits section */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-gray-800">
                        Además cuentas con beneficios extras especiales para ti
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                    {/* Card 1 */}
                    <div className="bg-bg-accent rounded-2xl p-6 text-text-light text-center">
                        <div className="flex justify-center mb-4">
                            <div className="bg-primary px-4 py-1 rounded-full flex items-center space-x-1">
                                <svg className="w-3 h-3 text-primary-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span className="text-primary-text text-bold font-medium">Smart benefit</span>
                            </div>
                        </div>
                        <h4 className="text-lg font-bold mb-1">Smart Talent Algorithm</h4>
                        <p className="text-text-light text-lg">
                            Curación y pre-calificación de talento para prestación de servicios relacionados con la música.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-bg-accent rounded-2xl p-6 text-text-light text-center">
                        <div className="flex justify-center mb-4">
                            <div className="bg-primary px-4 py-1 rounded-full flex items-center space-x-1">
                                <svg className="w-3 h-3 text-primary-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span className="text-primary-text text-bold font-medium">Smart benefit</span>
                            </div>
                        </div>
                        <h4 className="text-lg font-bold mb-1">Personalized Growth Blueprint</h4>
                        <p className="text-text-light text-lg">
                            Planificación, acompañamiento y monitoreo cumplimiento de objetivos personalizados.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-bg-accent rounded-2xl p-6 text-text-light text-center">
                        <div className="flex justify-center mb-4">
                            <div className="bg-primary px-4 py-1 rounded-full flex items-center space-x-1">
                                <svg className="w-3 h-3 text-primary-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span className="text-primary-text text-bold font-medium">Smart benefit</span>
                            </div>
                        </div>
                        <h4 className="text-lg font-bold mb-1">Integración de herramientas corporativas</h4>
                        <p className="text-text-light text-lg">
                            Calendario, Contratos Digitales, seguridad de pagos, etc.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MusiciansSection 