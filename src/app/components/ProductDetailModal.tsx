import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/app/components/ui/dialog';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description?: string;
  benefits?: string[];
}

interface ProductDetailModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  const defaultDescription = `Premium ${product.name.toLowerCase()} designed for superior performance and lasting beauty. Perfect for both residential and commercial applications.`;
  
  const defaultBenefits = [
    'Superior durability and long-lasting finish',
    'Excellent coverage and smooth application',
    'Weather-resistant and fade-proof',
    'Low VOC and eco-friendly formula',
    'Easy to clean and maintain',
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Product Image */}
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Category Badge */}
          <div className="inline-block">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
              {product.category}
            </span>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg mb-2">Description</h3>
            <p className="text-gray-600">
              {product.description || defaultDescription}
            </p>
          </div>

          {/* Key Benefits */}
          <div>
            <h3 className="text-lg mb-3">Key Benefits</h3>
            <ul className="space-y-2">
              {(product.benefits || defaultBenefits).map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
              Get Quote
            </Button>
            <Button variant="outline" className="flex-1" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
