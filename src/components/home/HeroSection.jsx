import { ShoppingBag, Phone } from 'lucide-react'
import Container from '../ui/Container'
import heroImg from '../../assets/grand-physios-hero-pic2.png'
import Button from '../ui/Button'

const HeroSection = () => {
  return (
    <section className="bg-white">
      <Container className="py-24">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          {/* LEFT */}

          <div>
            <span className="inline-flex items-center rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 mb-6">
              Online Physiotherapy • UK Wide
            </span>

            <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] text-slate-900">
              Move Better.
              <br />
              Live Stronger.
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-600 max-w-xl">
              Professional physiotherapy consultations by phone together with
              premium rehabilitation products to help you recover faster, reduce
              pain and stay active.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button to="/contact" size="lg">
                <Phone size={20} />
                Book Consultation
              </Button>

              <Button to="/shop" variant="secondary" size="lg">
                <ShoppingBag size={20} />
                Shop Products
              </Button>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />

            <img
              src={heroImg}
              alt="Grand Physios consultation"
              className="w-full h-[650px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
