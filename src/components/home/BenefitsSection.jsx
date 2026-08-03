import React from 'react'
import Container from '../ui/Container.jsx'
import { Phone, Award, HeartHandshake, Package } from 'lucide-react'

const BenefitsSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-gray-200">
        {/* Element 1 */}
        <div className="flex items-start gap-4 pt-4 sm:pt-0 lg:px-4 lg:first:pl-0">
          <Award className="text-teal-600 w-6 h-6 shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-slate-900">Expert Care</h4>
            <p className="text-sm text-slate-500 mt-0.5">
              Qualified MSK physiotherapists
            </p>
          </div>
        </div>

        {/* Element 2 */}
        <div className="flex items-start gap-4 pt-4 sm:pt-0 lg:px-4">
          <Phone className="text-teal-600 w-6 h-6 shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-slate-900">By Phone</h4>
            <p className="text-sm text-slate-500 mt-0.5">
              Convenient consultations
            </p>
          </div>
        </div>

        {/* Element 3 */}
        <div className="flex items-start gap-4 pt-4 sm:pt-0 lg:px-4">
          <Package className="text-teal-600 w-6 h-6 shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-slate-900">Premium Products</h4>
            <p className="text-sm text-slate-500 mt-0.5">
              Carefully selected supports
            </p>
          </div>
        </div>

        {/* Element 4 */}
        <div className="flex items-start gap-4 pt-4 sm:pt-0 lg:px-4 lg:last:pr-0">
          <HeartHandshake className="text-teal-600 w-6 h-6 shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-slate-900">Trusted</h4>
            <p className="text-sm text-slate-500 mt-0.5">
              Hundreds of happy patients
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default BenefitsSection

