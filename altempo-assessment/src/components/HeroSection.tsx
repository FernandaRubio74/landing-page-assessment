{/**hero section */}
const HeroSection = () => {
    {/**scroll to profiles section */}
    const scrollToProfiles = () => {
        const profilesSection = document.getElementById('profiles')
        if (profilesSection) {
            profilesSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="relative h-screen flex items-center justify-center px-6">
            <div className="absolute inset-0 z-0">
                <img 
                    src="/background.png" 
                    alt="Background" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/**logo from github */}
            <div className="relative z-15 text-center max-w-7xl mx-auto">
                <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-sm bg-white-1 border border-white/20 rounded-full px-4 py-2 mb-2">
                    <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6668 15.834C11.6668 18.1352 9.80135 20.0007 7.50016 20.0007C5.19898 20.0007 3.3335 18.1352 3.3335 15.834C3.3335 13.5328 5.19898 11.6673 7.50016 11.6673C9.80135 11.6673 11.6668 13.5328 11.6668 15.834ZM11.6668 15.834V3.33398C12.2224 4.16732 12.6668 7.66732 16.6668 8.33398" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.5002 36.6673C19.8013 36.6673 21.6668 34.8018 21.6668 32.5007C21.6668 30.1995 19.8013 28.334 17.5002 28.334C15.199 28.334 13.3335 30.1995 13.3335 32.5007C13.3335 34.8018 15.199 36.6673 17.5002 36.6673Z" stroke="white" strokeWidth="2.2" />
                        <path d="M33.3333 33.3327C35.1743 33.3327 36.6667 31.8403 36.6667 29.9993C36.6667 28.1584 35.1743 26.666 33.3333 26.666C31.4924 26.666 30 28.1584 30 29.9993C30 31.8403 31.4924 33.3327 33.3333 33.3327Z" stroke="white" strokeWidth="2.2" />
                        <path d="M21.6665 32.5006V18.3339C21.6665 16.8172 21.6665 16.0589 22.0775 15.588C22.4885 15.1171 23.3228 15.0033 24.9913 14.7756C30.014 14.0903 33.6687 11.9972 35.6158 10.7162C36.0828 10.4091 36.3162 10.2555 36.4913 10.3499C36.6665 10.4444 36.6665 10.7202 36.6665 11.272V29.8771" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.6665 21.666C29.6665 21.666 34.9998 17.7772 36.6665 16.666" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-white font-medium">The Global Music Booster. AI Powered</span>
                </div>
                
                {/**title */}
                <p className="md:text-[75px] text-[40px] font-black tracking-[0px] leading-[105%] text-center text-white mb-5 font-montserrat-bold">
                    Empowering
                    <br />
                    Music Talent
                    <br />
                    Worldwide
                </p>

                {/**buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button 
                        onClick={scrollToProfiles}
                        className="bg-white/15 backdrop-blur-sm text-light font-medium rounded-full px-8 py-3 text-lg hover:bg-white/20 transition-colors cursor-pointer"
                    >
                        Descubre más
                    </button>
                    <button className="bg-primary rounded-full px-7 py-4 text-lg transition-colors backdrop-filter-none opacity-100 font-inter font-medium tracking-[0px] leading-[120%] text-center text-primary-text">
                        Regístrate ahora
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection 