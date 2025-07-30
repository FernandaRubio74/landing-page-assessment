const TalentHuntersSection = () => {
    return (
        <section id="talent-hunters" className="py-6 bg-white">
            <div className="max-w-full mx-10 px-6">
                <div className="flex flex-col lg:flex-row items-start gap-12 mb-10">
                    {/* Talent hunters section, info*/}
                    <div className="w-full lg:w-3/5 order-1 lg:order-1">
                        <h3 className="mb-2 font-medium text-[14px] leading-[22px] tracking-[0px] text-text-secondary font-inter">
                            Talent Hunters
                        </h3>
                        <h2 className="text-3xl lg:text-4xl text-text-primary mb-6">
                            ¿Buscas profesionales de la música de 
                            <br />
                            <span className="font-bold">alta calidad y trayectoria</span>?
                        </h2>
                        <p className="text-text-muted mb-8 text-lg lg:text-xl">
                            Como Talent Hunter puedes buscar en nuestra plataforma músicos de primer nivel que puedan ayudarte a realizar eventos o compartir su conocimiento contigo.
                        </p>

                        {/* list of benefits*/}
                        {/**example of icons, not the real ones*/}
                        <div className="space-y-0.5">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-bg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"> 
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 text-md font-medium">Talento curado</span>
                                </div>

                                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-bg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 text-md font-medium">Propuestas Personalizadas</span>
                                </div>
                            </div>

                            {/* Segunda fila - 2 columnas en desktop, 1 en móvil */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-bg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 text-md font-medium">Plataforma Multilingüe</span>
                                </div>

                                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-bg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 text-md font-medium">Ecosistema de Apoyo</span>
                                </div>
                            </div>

                            {/* Tercera fila - 2 columnas en desktop, 1 en móvil */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-bg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 text-md font-medium">Soporte Continuo</span>
                                </div>

                                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-bg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 text-md font-medium">Gestión Eficaz</span>
                                </div>
                            </div>

                            {/* Cuarta fila - 2 columnas en desktop, 1 en móvil */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-bg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 text-md font-medium">Optimización de Proyectos</span>
                                </div>

                                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-bg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 text-md font-medium">Integración Tecnológica</span>
                                </div>
                            </div>

                            {/* Quinta fila - 2 columnas en desktop, 1 en móvil */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-bg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 text-md font-medium">Innovación Constante</span>
                                </div>

                                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-bg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 text-md font-medium">Experiencias Memorables</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*image align to the right*/}
                    <div className="w-full lg:w-2/5 order-2 lg:order-2">
                        <div className="w-full h-96 lg:h-150 bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900 rounded-2xl overflow-hidden shadow-2xl">
                            <img src="hunters.png" alt="Talent Hunter" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TalentHuntersSection 