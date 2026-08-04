import { ShoppingBag, Phone, Star } from 'lucide-react'
import Container from '../ui/Container'
import heroBg from '../../assets/grand-physios-hero-pic2.png'
import Button from '../ui/Button'
import CspBadge from '../ui/CspBadge'

const HeroSection = () => {
  return (
    <section className="relative w-full bg-slate-50 overflow-hidden flex items-center min-h-[90vh]">
      {/* BACKGROUND ACCENT: Soft glowing radial blob behind the text */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-200/40 blur-3xl rounded-full pointer-events-none z-0" />

      {/* DESKTOP BACKGROUND: Occupies 3/5 (60vw) of the screen */}
      <div
        className="hidden lg:flex absolute inset-0 justify-end pointer-events-none"
        data-aos="fade"
        data-aos-duration="1000"
      >
        <div className="relative w-[60vw] h-full pointer-events-auto">
          <img
            src={heroBg}
            alt="Grand Physios consultation background"
            className="w-full h-full object-cover object-center"
          />
          {/* Smooth multi-stop gradient overlay from white to transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 via-30% to-transparent" />

          {/* FLOATING GLASS CARD: Social proof badge over the image (visible on xl screens) */}
          <div className="absolute bottom-24 right-16 hidden xl:flex items-center gap-4 p-4 rounded-2xl bg-white/70 backdrop-blur-md shadow-2xl border border-white/50 max-w-xs animate-[bounce_3s_ease-in-out_infinite]">
            <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-inner">
              5.0
            </div>
            <div>
              <div className="flex text-amber-400 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm font-medium text-slate-800">
                Trusted by 500+ patients
              </p>
            </div>
          </div>
        </div>
      </div>

      <Container className="relative z-10 py-12 lg:py-24">
        <div className="grid lg:grid-cols-12 items-center gap-10 lg:gap-16">
          {/* LEFT COLUMN: Text content takes 5/12 of the space */}
          <div
            className="lg:col-span-6 xl:col-span-5"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            {/* Animated pulsing badge */}
            <div className="inline-flex items-center rounded-full bg-teal-100/50 border border-teal-200 px-4 py-2 text-sm font-semibold text-teal-800 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-teal-500 mr-2 animate-pulse"></span>
              Online Physiotherapy • UK Wide
            </div>

            {/* Main Heading with a gradient text highlight */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] text-slate-900">
              Move Better.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
                Live Stronger.
              </span>
            </h1>

            {/* Mobile Image with embedded rating */}
            <div className="w-full my-8 block lg:hidden rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src={heroBg}
                alt="Grand Physios consultation"
                className="w-full h-72 sm:h-80 object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-xl border border-white/50 shadow-sm flex items-center justify-between">
                <p className="text-sm font-bold text-slate-800">
                  Patient Rating
                </p>
                <div className="flex text-amber-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
            </div>

            <p className="mt-6 lg:mt-8 text-lg sm:text-xl leading-8 sm:leading-9 text-slate-600 max-w-xl">
              Professional physiotherapy consultations by phone together with
              premium rehabilitation products to help you recover faster, reduce
              pain, and stay active.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-10">
              <Button to="/contact" size="lg">
                <Phone size={20} />
                Book Consultation
              </Button>

              <Button to="/shop" variant="secondary" size="lg">
                <ShoppingBag size={20} />
                Shop Products
              </Button>
            </div>

            {/* Trust Indicators below buttons */}
            <div className="mt-10 pt-8 border-t border-slate-200/60 flex items-center gap-6 sm:gap-8">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900">24h</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Response
                </span>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900">HCPC</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Registered
                </span>
              </div>
            </div>
          </div>

          {/* Empty column reserving space for the background image on desktop */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7" />
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
