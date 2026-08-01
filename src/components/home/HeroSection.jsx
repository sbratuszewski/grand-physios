import { NavLink } from 'react-router-dom'
import {
  Phone,
  ShoppingBag,
  Award,
  HeartHandshake,
  Package,
} from 'lucide-react'

import heroImg from '../../assets/grand-physios-hero-pic2.png'
import Button from '../ui/Button'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
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
              <NavLink to="/contact">
                <Button className="flex items-center gap-3 px-8 py-4">
                  <Phone size={20} />
                  Book a Consultation
                </Button>
              </NavLink>

              <NavLink
                to="/shop"
                className="flex items-center justify-center gap-3 rounded-xl border border-teal-600 px-8 py-4 font-semibold text-teal-700 hover:bg-teal-50 transition"
              >
                <ShoppingBag size={20} />
                Shop Products
              </NavLink>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-16">
              <div className="flex gap-4">
                <Award className="text-teal-600" />
                <div>
                  <h4 className="font-semibold">Expert Care</h4>
                  <p className="text-sm text-slate-500">
                    Qualified MSK physiotherapists
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-teal-600" />
                <div>
                  <h4 className="font-semibold">By Phone</h4>
                  <p className="text-sm text-slate-500">
                    Convenient consultations
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Package className="text-teal-600" />
                <div>
                  <h4 className="font-semibold">Premium Products</h4>
                  <p className="text-sm text-slate-500">
                    Carefully selected supports
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <HeartHandshake className="text-teal-600" />
                <div>
                  <h4 className="font-semibold">Trusted</h4>
                  <p className="text-sm text-slate-500">
                    Hundreds of happy patients
                  </p>
                </div>
              </div>
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
      </div>
      <div className="border-y bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 py-8">
          Reduce Pain Improve Performance Prevent Injuries Trusted by Patients
        </div>
      </div>
    </section>
  )
}

export default HeroSection
