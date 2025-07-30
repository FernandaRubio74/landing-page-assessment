const ArtistsSection = () => {
    {/**artists data, examples */ }
    const artists = [
        { name: "Camila Torres", role: "Vocalista", image: "/artists/brooklyn.png" },
        { name: "Lucas Martínez", role: "DJ", image: "/artists/david.png" },
        { name: "Sofía Ramírez", role: "Cantante", image: "/artists/devon.png" },
        { name: "Mateo Gómez", role: "Productor", image: "/artists/john.png" },
        { name: "Valentina Ruiz", role: "Saxofonista", image: "/artists/brooklyn.png" },
        { name: "Julián Herrera", role: "Tecno Deep", image: "/artists/henry.png" },
        { name: "Isabella Castro", role: "House Music", image: "/artists/john.png" },
        { name: "Emilia Fernández", role: "Cantante", image: "/artists/devon.png" },
        { name: "Tomás Ríos", role: "DJ", image: "/artists/theresa.png" },
        { name: "Martina López", role: "Vocalista", image: "/artists/katerin.png" },
        { name: "Gabriel Díaz", role: "Productor", image: "/artists/brooklyn.png" },
        { name: "Renata Morales", role: "Tecno Deep", image: "/artists/henry.png" },
        { name: "Santiago Vega", role: "Saxofonista", image: "/artists/david.png" },
        { name: "Paula Méndez", role: "DJ", image: "/artists/devon.png" },
        { name: "Daniela Paredes", role: "Cantante", image: "/artists/theresa.png" }
    ]

    const columns = [
        artists.slice(0, 3),
        artists.slice(3, 6),
        artists.slice(6, 9),
        artists.slice(9, 12),
        artists.slice(12, 15)
    ]

    {/**render artist card */ }
    const renderArtistCard = (artist: any, index: any) => (
        <div
            key={index}
            className="relative rounded-2xl overflow-hidden mb-4"
            style={{
                height: '220px',
                width: '180px',
                minWidth: '160px',
                maxWidth: '200px'
            }}
        >
            <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
                <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <h3 className="font-bold text-sm mb-1">{artist.name}</h3>
                    <p className="text-xs text-text-light leading-tight">{artist.role}</p>
                </div>
            </div>
        </div>
    )


    {/**section for artists, info and cards*/ }
    return (
        <section className="relative bg-bg-primary min-h-screen py-20">
            <div className="absolute blur-sm bg-bg-primary z-0"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
                <h3 className="mb-2 font-medium text-[14px] leading-[22px] tracking-[0px] text-primary font-inter">
                    Nuestros profesionales
                </h3>
                <div className="mb-16 text-left">
                    <h2 className="text-4xl font-bold text-primary mb-2 ">
                        Los mejores artistas para contratar
                    </h2>
                    <p className="text-text-light max-w-2xl text-lg font-medium text-left">
                        Encuentra a los mejores artistas para tus eventos, recibe cientos musicales y
                        proyectos personales que necesitan que viva o entretenimiento destacado.
                    </p>
                </div>

                <div className="relative flex justify-center">
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#18243e] via-[#18243e]/90 to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#18243e] via-[#18243e]/90 to-transparent z-20 pointer-events-none"></div>


                    <div className="hidden lg:block relative z-10">
                        <div className="grid grid-cols-5 gap-15 relative overflow-hidden" style={{ height: '700px' }}>
                            {columns.map((column, colIndex) => (
                                <div
                                    key={colIndex}
                                    className="space-y-4"
                                    style={{
                                        marginTop: colIndex % 2 === 0 ? '-80px' : '80px'
                                    }}
                                >
                                    {column.map((artist, index) => renderArtistCard(artist, `${colIndex}-${index}`))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block lg:hidden relative z-10">
                        <div className="grid grid-cols-3 gap-6 relative overflow-hidden" style={{ height: '600px' }}>
                            {artists.slice(0, 9).map((artist, index) => (
                                <div key={index} className="flex justify-center">
                                    {renderArtistCard(artist, index)}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden relative z-10">
                        <div className="grid grid-cols-2 gap-3">
                            {artists.slice(0, 8).map((artist, index) => (
                                <div key={index} className="flex justify-center">
                                    {renderArtistCard(artist, index)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <button className="bg-primary hover:bg-primary-dark text-primary-text font-semibold px-6 py-3 rounded-full text-lg">
                        Quiero afiliarme
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ArtistsSection