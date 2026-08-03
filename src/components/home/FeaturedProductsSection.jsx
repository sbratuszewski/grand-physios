import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { ShoppingBag, ArrowRight } from 'lucide-react'
import products from '../../data/products.js'

const FeaturedProductsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Accent Blob */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-200/30 blur-3xl rounded-full pointer-events-none z-0" />

      <Container className="relative z-10">
        <SectionTitle
          badge="Shop Our"
          title="Premium Support Products"
          description="Carefully selected rehabilitation gear to support your recovery journey."
          center
          className="mb-12"
          data-aos="fade-up"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div key={product.id} data-aos="fade-up" data-aos-delay={idx * 100}>
              <Card className="flex flex-col justify-between h-full p-4 bg-white/90 backdrop-blur-sm">
                <div>
                  <div className="w-full h-48 rounded-xl overflow-hidden bg-slate-100 mb-4 group relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {product.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-lg font-black text-slate-900">
                    {product.price}
                  </span>
                  <Button
                    to={`/shop/${product.id}`}
                    variant="secondary"
                    size="sm"
                  >
                    <ShoppingBag size={16} />
                    Add to Cart
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <Button to="/shop" variant="outline" size="lg" className="group">
            View All Products
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProductsSection