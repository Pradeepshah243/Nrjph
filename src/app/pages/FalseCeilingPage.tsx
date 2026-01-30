import { Link } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import { ProductCard } from '@/app/components/ProductCard';

const ceilingDesigns = [
  {
    id: 'corner-cornice',
    name: 'Corner Cornices',
    category: 'Malaysia Cornices',
    image: 'https://images.unsplash.com/photo-1742861673295-2ec9acfbb92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWlsaW5nJTIwZ3lwc3VtJTIwZGVzaWdufGVufDF8fHx8MTc2OTY1NTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'bead-cornice',
    name: 'Bead Cornices',
    category: 'Malaysia Cornices',
    image: 'https://images.unsplash.com/photo-1742861673295-2ec9acfbb92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWlsaW5nJTIwZ3lwc3VtJTIwZGVzaWdufGVufDF8fHx8MTc2OTY1NTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'circle-design',
    name: 'Circle Cornices',
    category: 'Malaysia Cornices',
    image: 'https://images.unsplash.com/photo-1742861673295-2ec9acfbb92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWlsaW5nJTIwZ3lwc3VtJTIwZGVzaWdufGVufDF8fHx8MTc2OTY1NTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'cove-ceiling',
    name: 'Cove Cornices',
    category: 'Malaysia Cornices',
    image: 'https://images.unsplash.com/photo-1742861673295-2ec9acfbb92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWlsaW5nJTIwZ3lwc3VtJTIwZGVzaWdufGVufDF8fHx8MTc2OTY1NTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'step-ceiling',
    name: 'Step Cornices',
    category: 'Malaysia Cornices',
    image: 'https://images.unsplash.com/photo-1742861673295-2ec9acfbb92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWlsaW5nJTIwZ3lwc3VtJTIwZGVzaWdufGVufDF8fHx8MTc2OTY1NTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'classic-ceiling',
    name: 'Classic Cornices',
    category: 'Malaysia Cornices',
    image: 'https://images.unsplash.com/photo-1742861673295-2ec9acfbb92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWlsaW5nJTIwZ3lwc3VtJTIwZGVzaWdufGVufDF8fHx8MTc2OTY1NTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'modern-ceiling',
    name: 'Modern Cornices',
    category: 'Malaysia Cornices',
    image: 'https://images.unsplash.com/photo-1742861673295-2ec9acfbb92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWlsaW5nJTIwZ3lwc3VtJTIwZGVzaWdufGVufDF8fHx8MTc2OTY1NTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'ornamental-design',
    name: 'Ornamental Cornices',
    category: 'Malaysia Cornices',
    image: 'https://images.unsplash.com/photo-1742861673295-2ec9acfbb92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWlsaW5nJTIwZ3lwc3VtJTIwZGVzaWdufGVufDF8fHx8MTc2OTY1NTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'plain-ceiling',
    name: 'Plain Cornices',
    category: 'Malaysia Cornices',
    image: 'https://images.unsplash.com/photo-1742861673295-2ec9acfbb92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWlsaW5nJTIwZ3lwc3VtJTIwZGVzaWdufGVufDF8fHx8MTc2OTY1NTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'decorative-ceiling',
    name: 'Decorative Cornices',
    category: 'Malaysia Cornices',
    image: 'https://images.unsplash.com/photo-1742861673295-2ec9acfbb92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWlsaW5nJTIwZ3lwc3VtJTIwZGVzaWdufGVufDF8fHx8MTc2OTY1NTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'curved-ceiling',
    name: 'Curved Cornices',
    category: 'Malaysia Cornices',
    image: 'https://images.unsplash.com/photo-1742861673295-2ec9acfbb92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWlsaW5nJTIwZ3lwc3VtJTIwZGVzaWdufGVufDF8fHx8MTc2OTY1NTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'straight-ceiling',
    name: 'Straight Cornices',
    category: 'Malaysia Cornices',
    image: 'https://images.unsplash.com/photo-1742861673295-2ec9acfbb92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWlsaW5nJTIwZ3lwc3VtJTIwZGVzaWdufGVufDF8fHx8MTc2OTY1NTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'layered-ceiling',
    name: 'Layered Cornices',
    category: 'Malaysia Cornices',
    image: 'https://images.unsplash.com/photo-1742861673295-2ec9acfbb92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWlsaW5nJTIwZ3lwc3VtJTIwZGVzaWdufGVufDF8fHx8MTc2OTY1NTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'edge-ceiling',
    name: 'Edge Cornices',
    category: 'Malaysia Cornices',
    image: 'https://images.unsplash.com/photo-1742861673295-2ec9acfbb92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWlsaW5nJTIwZ3lwc3VtJTIwZGVzaWdufGVufDF8fHx8MTc2OTY1NTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'gypsum-board',
    name: 'Gypsum Board',
    category: 'Additional Materials',
    image: 'https://images.unsplash.com/photo-1742861673295-2ec9acfbb92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWlsaW5nJTIwZ3lwc3VtJTIwZGVzaWdufGVufDF8fHx8MTc2OTY1NTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '2x2-board',
    name: '2x2 Board',
    category: 'Additional Materials',
    image: 'https://images.unsplash.com/photo-1742861673295-2ec9acfbb92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWlsaW5nJTIwZ3lwc3VtJTIwZGVzaWdufGVufDF8fHx8MTc2OTY1NTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function FalseCeilingPage() {
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
            False Ceiling & Cornices
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your space with elegant ceiling designs. From classic cornices to modern false ceilings.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ceilingDesigns.map((design) => (
            <ProductCard key={design.id} product={design} />
          ))}
        </div>

        {/* Installation Notes */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl mb-6 text-center">Installation Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="text-blue-600 text-3xl mr-4">✓</div>
              <div>
                <h3 className="font-medium mb-1">Professional Installation</h3>
                <p className="text-sm text-gray-600">Expert team with years of experience in ceiling design and installation.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-blue-600 text-3xl mr-4">✓</div>
              <div>
                <h3 className="font-medium mb-1">Premium Materials</h3>
                <p className="text-sm text-gray-600">High-quality gypsum boards and finishing materials for lasting beauty.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-blue-600 text-3xl mr-4">✓</div>
              <div>
                <h3 className="font-medium mb-1">Custom Designs</h3>
                <p className="text-sm text-gray-600">Tailored ceiling designs to match your aesthetic preferences and space requirements.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-blue-600 text-3xl mr-4">✓</div>
              <div>
                <h3 className="font-medium mb-1">Quick Installation</h3>
                <p className="text-sm text-gray-600">Efficient installation process with minimal disruption to your space.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}