import { ShoppingBag, Phone } from 'lucide-react'
import Container from '../ui/Container'
import heroBg from '../../assets/grand-physios-hero-pic2.png'
import Button from '../ui/Button'

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden flex items-center">
      {/* TŁO DESKTOP: Pojawia się płynnie jako całość */}
      <div 
        className="hidden lg:flex absolute inset-0 justify-end"
        data-aos="fade"
        data-aos-duration="800"
      >
        <div className="relative w-1/2 h-full">
          <img
            src={heroBg}
            alt="Grand Physios consultation background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>
      </div>

      <Container className="relative z-10 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-16">
          
          {/* CAŁA LEWA STRONA: Wchodzi płynnie jako JEDEN blok */}
          <div data-aos="fade-up" data-aos-duration="600">
            <span className="inline-flex items-center rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 mb-6">
              Online Physiotherapy • UK Wide
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] text-slate-900">
              Move Better.
              <br />
              Live Stronger.
            </h1>

            {/* Zdjęcie mobilne */}
            <div className="w-full my-6 block lg:hidden rounded-2xl overflow-hidden shadow-lg">
              <img
                src={heroBg}
                alt="Grand Physios consultation"
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>

            <p className="mt-6 lg:mt-8 text-lg sm:text-xl leading-8 sm:leading-9 text-slate-600 max-w-xl">
              Professional physiotherapy consultations by phone together with
              premium rehabilitation products to help you recover faster, reduce
              pain and stay active.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-10">
              <Button to="/contact" size="lg" className="justify-center">
                <Phone size={20} />
                Book Consultation
              </Button>

              <Button to="/shop" variant="secondary" size="lg" className="justify-center">
                <ShoppingBag size={20} />
                Shop Products
              </Button>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </Container>
    </section>
  )
}

export default HeroSection