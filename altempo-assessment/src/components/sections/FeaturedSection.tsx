import BrandsCarousel from './BrandsCarousel'
{/**featured section, use the carousel component */}

const PartnersSection = () => {
  return (
    <div className="w-full px-6 py-20">
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#18243e] mb-1">
            Featured in
        </h2>
    </div>
    <BrandsCarousel />
    </div>
  )
}

export default PartnersSection
