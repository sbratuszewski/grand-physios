import { ShoppingCart } from 'lucide-react'
import { Button, Card } from '../ui'

const ProductCard = ({ product }) => {
  const { image, name, price, description, featured = false } = product

  return (
    <Card
      className="
      overflow-hidden
      group
      hover:-translate-y-2
      duration-300
      "
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="
          aspect-square
          w-full
          object-cover
          duration-500
          group-hover:scale-105
          "
        />
      </div>

      <div className="p-6">
        {featured && (
          <span className="inline-flex rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
            Best Seller
          </span>
        )}

        <h3 className="mt-4 text-xl font-semibold">{name}</h3>

        <p className="mt-3 text-slate-600">{description}</p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold">£{price}</span>

          <Button size="sm">
            <ShoppingCart size={18} />
            Buy
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default ProductCard
