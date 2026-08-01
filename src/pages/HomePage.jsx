import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Phone,
  ShoppingBag,
  ShieldCheck,
  Award,
  HeartHandshake,
  Package,
} from 'lucide-react'

import heroImg from '../assets/grand-physios-hero-pic2.png'
import Button from '../components/ui/Button'
import HeroSection from '../components/home/HeroSection'
import BenefitsSection from '../components/home/BenefitsSection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import ConsultationSection from '../components/home/ConsultationSection'
import AboutSection from '../components/home/AboutSection'
import TestimonialsSection from '../components/home/TestimonialsSection'

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <BenefitsSection />

      <FeaturedProducts />

      <ConsultationSection />

      <AboutSection />

      <TestimonialsSection />
    </>
  )
}

export default HomePage