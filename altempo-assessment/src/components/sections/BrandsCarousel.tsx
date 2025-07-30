import { useState, useEffect } from 'react'

{/**brands carousel */ }
const PartnersSection = () => {
    const brandLogos = [
        'tcs.png',
        'elmundo.png',
        'elsalvadorcom.png',
        'esen.png',
        'aws.png',
        'banco-atlantida.png',
        'asg.png'
    ]

    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setScrollPosition(prev => {
                // calculate the total width of all logos (duplicated for infinite loop)
                const logoWidth = 160; // estimated width of each logo + margin (h-40 w-40 + mx-8)
                const totalWidth = brandLogos.length * logoWidth;
                // when the scroll reaches the middle (one set of logos), reset for infinite loop
                return prev >= totalWidth ? 0 : prev + 2;
            });
        }, 20); // scroll speed

        return () => clearInterval(interval);
    }, [brandLogos.length]);

    return (

        <div className="relative overflow-hidden w-full">
            <div
                className="flex items-center"
                style={{
                    transform: `translateX(-${scrollPosition}px)`,
                    transition: 'transform 0.01s linear infinite'
                }}
            >
                {/* first set of logos */}
                {brandLogos.map((logo, index) => (
                    <div key={`first-${index}`} className="flex-shrink-0 mx-8">
                        <img
                            src={`/brands/${logo}`}
                            alt={`Logo ${logo}`}
                            className="h-40 w-40 object-contain hover:grayscale-0 transition-all duration-300"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.style.display = 'none'
                            }}
                        />
                    </div>
                ))}

                {/* second set for infinite loop */}
                {brandLogos.map((logo, index) => (
                    <div key={`second-${index}`} className="flex-shrink-0 mx-8">
                        <img
                            src={`/brands/${logo}`}
                            alt={`Logo ${logo}`}
                            className="h-40 w-40 object-contain hover:grayscale-0 transition-all duration-300"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.style.display = 'none'
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PartnersSection