import { Link } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import { ProductCard } from '@/app/components/ProductCard';

const waterproofingProducts = [
  {
    id: 'homeshield-2k',
    name: 'Homeshield 2K',
    category: 'Premium Waterproofing',
    image: 'https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcnByb29maW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2OTY1NTY2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Advanced two-component waterproofing system for superior protection against water damage.',
    benefits: [
      'Excellent crack bridging properties',
      'Superior adhesion to concrete and masonry',
      'Flexible and durable membrane',
      'Resistant to chemicals and weathering',
      'Suitable for terraces, balconies, and bathrooms',
    ],
  },
  {
    id: 'dampstop',
    name: 'Dampstop',
    category: 'Damp Proofing',
    image: 'https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcnByb29maW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2OTY1NTY2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Effective damp proofing solution to prevent moisture ingress in walls and foundations.',
    benefits: [
      'Prevents rising damp in walls',
      'Easy to apply and quick drying',
      'Long-lasting protection',
      'Suitable for interior and exterior use',
      'Compatible with plaster and paint',
    ],
  },
  {
    id: 'seal-o-primer',
    name: 'Homeshield Seal-O-Primer',
    category: 'Sealing Primer',
    image: 'https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcnByb29maW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2OTY1NTY2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'High-performance sealing primer for concrete and masonry surfaces before waterproofing.',
    benefits: [
      'Excellent penetration and sealing',
      'Reduces porosity of substrates',
      'Improves adhesion of waterproofing systems',
      'Quick drying formulation',
      'Ideal for roofs, walls, and foundation',
    ],
  },
];

export default function WaterproofingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">
            Waterproofing Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional-grade waterproofing products to protect your property from moisture and water damage.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {waterproofingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Usage Areas Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl mb-6 text-center">Application Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-blue-600 text-4xl mb-2">🏠</div>
              <h3 className="font-medium mb-1">Roofs</h3>
              <p className="text-sm text-gray-600">Flat and sloped roofs</p>
            </div>
            <div>
              <div className="text-blue-600 text-4xl mb-2">🧱</div>
              <h3 className="font-medium mb-1">Walls</h3>
              <p className="text-sm text-gray-600">Interior & exterior walls</p>
            </div>
            <div>
              <div className="text-blue-600 text-4xl mb-2">🚿</div>
              <h3 className="font-medium mb-1">Bathrooms</h3>
              <p className="text-sm text-gray-600">Wet areas & showers</p>
            </div>
            <div>
              <div className="text-blue-600 text-4xl mb-2">🏗️</div>
              <h3 className="font-medium mb-1">Foundation</h3>
              <p className="text-sm text-gray-600">Basements & foundations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
