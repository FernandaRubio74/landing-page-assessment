import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ProfilesSection from '../components/sections/ProfilesSection'
import MusiciansSection from '../components/sections/MusiciansSection'
import TalentHuntersSection from '../components/sections/TalentHuntersSection'
import AboutSection from '../components/sections/AboutSection'
import EnterpriseBanner from '../components/sections/EnterpriseBanner'
import ArtistsSection from '../components/sections/ArtistsSection'
import ContactSection from '../components/sections/ContactSection'
import Footer from '../components/Footer'
import PartnersSection from '../components/sections/PartnersSection'
import FeaturedSection from '../components/sections/FeaturedSection'

{/**home page */}

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <HeroSection />
      <ProfilesSection />
      <MusiciansSection />
      <TalentHuntersSection />
      <PartnersSection />
      <AboutSection />
      <EnterpriseBanner />
      <FeaturedSection />
      <ArtistsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home
