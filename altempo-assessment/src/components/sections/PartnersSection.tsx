import BrandsCarousel from './BrandsCarousel'
{/**partners section, use the carousel component */}

const PartnersSection = () => {
  return (
    <div className="w-full px-6 py-20">
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-text-primary mb-1">
            Empresas que creen en nuestro proyecto
        </h2>
    </div>
    <BrandsCarousel />
    </div>
  )
}

export default PartnersSection
