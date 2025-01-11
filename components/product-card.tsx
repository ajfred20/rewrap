import Image from "next/image"
import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string
  price: number
  image: string
  sizes: string[]
}

export function ProductCard({ name, price, image, sizes }: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-4">
      <div className="relative aspect-square mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white">{name}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">In stock</p>
          </div>
          <p className="font-semibold text-zinc-900 dark:text-white">${price}</p>
        </div>
        <div className="flex gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className="w-10 h-10 rounded border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-sm font-medium text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800"
            >
              {size}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <Button className="flex-1 bg-purple-600 hover:bg-purple-700">Buy now</Button>
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

