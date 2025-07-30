const ContactSection = () => {
    return (
        <section id="contact">
            {/* top section - hero with saxophone */}
            <div className="relative bg-[url('/background-contact.png')] bg-cover bg-top py-40">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>

                        </div>
                        <div className="text-white text-right">
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                                Estás a un paso de
                                <br />
                                cambiar la industria
                                <br />
                                musical
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* bottom section - contact form */}
            <div className="bg-bg-accent py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* left column - call to action */}
                        <div className="text-text-light">
                            <h3 className="text-5xl font-bold mb-6 text-primary">
                                ¿Quiéres compartirnos un comentario?
                            </h3>
                            <p className="text-xl text-text-light">
                                O si deseas conocer más de nosotros puedes enviamos un mensaje cuando gustes.
                            </p>
                        </div>

                        {/* right column - contact form */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-text-secondary font-medium text-sm  mb-2">
                                    Tu Nombre
                                </label>
                                <div className="border-b-[0.2px] border-text-light pb-0.5">
                                    <input 
                                        type="text" 
                                        className="w-full bg-transparent text-text-light text-lg placeholder-text-muted focus:outline-none"
                                        placeholder="Escribe tu nombre"
                                        defaultValue="Escribe tu nombre"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-text-secondary font-medium text-sm mb-2">
                                    Correo electrónico
                                </label>
                                <div className="border-b-[0.2px] border-text-light pb-0.5">
                                    <input 
                                        type="email" 
                                        className="w-full bg-transparent text-text-light text-lg placeholder-text-muted focus:outline-none"
                                        placeholder="Escribe tu correo electrónico"
                                        defaultValue="Escribe tu correo electrónico"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-text-secondary font-medium text-sm mb-2">
                                    Tu mensaje
                                </label>
                                <div className="border-b-[0.2px] border-text-light pb-0.5">
                                    <textarea 
                                        rows={4}
                                        className="w-full bg-transparent text-text-light text-lg placeholder-text-muted focus:outline-none resize-none"
                                        placeholder="Escribe tu mensaje"
                                        defaultValue="Escribe tu mensaje"
                                    ></textarea>
                                </div>
                            </div>

                            <button 
                                type="submit"
                                className="bg-primary text-primary-text font-medium py-3 px-6 rounded-full hover:bg-primary-dark transition-colors mt-2 cursor-pointer"
                            >
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection 