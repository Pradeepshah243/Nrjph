import { useState } from 'react';
import { ProductDetailModal } from '@/app/components/ProductDetailModal';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description?: string;
  benefits?: string[];
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div className="aspect-square overflow-hidden">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-blue-600 mb-1">{product.category}</p>
          <h3 className="text-lg">{product.name}</h3>
        </div>
      </div>

      <ProductDetailModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
