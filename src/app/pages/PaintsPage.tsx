import { useState } from 'react';
import { Link } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { ProductCard } from '@/app/components/ProductCard';

const interiorProducts = [
  {
    id: 'interior-wall-putty',
    name: 'Interior Wall Putty',
    category: 'Wall Putty',
    image: 'https://images.unsplash.com/photo-1765816629754-1ad4f4f79f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNhbnMlMjBjb2xvcmZ1bCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTY1NTU3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'bpcp-cement-primer',
    name: 'BPCP Cement Primer',
    category: 'Primers',
    image: 'https://images.unsplash.com/photo-1765816629754-1ad4f4f79f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNhbnMlMjBjb2xvcmZ1bCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTY1NTU3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'bp-primer',
    name: 'BP Primer',
    category: 'Primers',
    image: 'https://images.unsplash.com/photo-1765816629754-1ad4f4f79f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNhbnMlMjBjb2xvcmZ1bCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTY1NTU3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'silk-luxury-emulsion',
    name: 'Silk Luxury Emulsion',
    category: 'Luxury Interior Emulsions',
    image: 'https://images.unsplash.com/photo-1765816629754-1ad4f4f79f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNhbnMlMjBjb2xvcmZ1bCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTY1NTU3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'silk-glamour',
    name: 'Silk Glamour',
    category: 'Luxury Interior Emulsions',
    image: 'https://images.unsplash.com/photo-1765816629754-1ad4f4f79f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNhbnMlMjBjb2xvcmZ1bCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTY1NTU3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'easy-clean',
    name: 'Easy Clean (No Daag, No Dhaba)',
    category: 'Premium Interior Emulsions',
    image: 'https://images.unsplash.com/photo-1765816629754-1ad4f4f79f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNhbnMlMjBjb2xvcmZ1bCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTY1NTU3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'bison-super',
    name: 'Bison Super Emulsion',
    category: 'Economy Interior Emulsions',
    image: 'https://images.unsplash.com/photo-1765816629754-1ad4f4f79f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNhbnMlMjBjb2xvcmZ1bCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTY1NTU3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'bison-lite',
    name: 'Bison Lite',
    category: 'Economy Interior Emulsions',
    image: 'https://images.unsplash.com/photo-1765816629754-1ad4f4f79f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNhbnMlMjBjb2xvcmZ1bCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTY1NTU3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'glamart-metallica',
    name: 'Silk Glamart Metallica',
    category: 'Designer Finishes',
    image: 'https://images.unsplash.com/photo-1765816629754-1ad4f4f79f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNhbnMlMjBjb2xvcmZ1bCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTY1NTU3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'glamart-non-metallic',
    name: 'Silk Glamart Non-Metallic',
    category: 'Designer Finishes',
    image: 'https://images.unsplash.com/photo-1765816629754-1ad4f4f79f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNhbnMlMjBjb2xvcmZ1bCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTY1NTU3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const exteriorProducts = [
  {
    id: 'exterior-wall-putty',
    name: 'Exterior Wall Putty',
    category: 'Wall Putty',
    image: 'https://images.unsplash.com/photo-1759406066673-f76869a4e6db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVyaW9yJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY5NTk1NTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'bpcp-cement-exterior-primer',
    name: 'BPCP Cement Exterior Primer',
    category: 'Primers',
    image: 'https://images.unsplash.com/photo-1759406066673-f76869a4e6db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVyaW9yJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY5NTk1NTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'weathercoat-primer',
    name: 'Weathercoat Primer',
    category: 'Primers',
    image: 'https://images.unsplash.com/photo-1759406066673-f76869a4e6db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVyaW9yJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY5NTk1NTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'long-life-12',
    name: 'Weathercoat Long Life 12',
    category: 'Luxury Exterior Emulsions',
    image: 'https://images.unsplash.com/photo-1759406066673-f76869a4e6db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVyaW9yJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY5NTk1NTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'all-guard-10',
    name: 'Weathercoat All Guard 10',
    category: 'Luxury Exterior Emulsions',
    image: 'https://images.unsplash.com/photo-1759406066673-f76869a4e6db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVyaW9yJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY5NTk1NTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'flexo-8',
    name: 'Weathercoat Flexo 8',
    category: 'Premium Exterior Emulsions',
    image: 'https://images.unsplash.com/photo-1759406066673-f76869a4e6db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVyaW9yJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY5NTk1NTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'all-guard-7',
    name: 'Weathercoat All Guard 7',
    category: 'Premium Exterior Emulsions',
    image: 'https://images.unsplash.com/photo-1759406066673-f76869a4e6db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVyaW9yJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY5NTk1NTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'walmasta-classic',
    name: 'Walmasta Classic',
    category: 'Economy Exterior Emulsions',
    image: 'https://images.unsplash.com/photo-1759406066673-f76869a4e6db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVyaW9yJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY5NTk1NTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'walmasta-lite',
    name: 'Walmasta Lite',
    category: 'Economy Exterior Emulsions',
    image: 'https://images.unsplash.com/photo-1759406066673-f76869a4e6db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVyaW9yJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY5NTk1NTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const enamelProducts = [
  {
    id: 'wood-primer',
    name: 'Wood Primer',
    category: 'Primers',
    image: 'https://images.unsplash.com/photo-1735203619041-2f67ba946b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmFtZWwlMjBwYWludCUyMGdsb3NzeXxlbnwxfHx8fDE3Njk2NTU1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'white-primer',
    name: 'White Primer',
    category: 'Primers',
    image: 'https://images.unsplash.com/photo-1735203619041-2f67ba946b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmFtZWwlMjBwYWludCUyMGdsb3NzeXxlbnwxfHx8fDE3Njk2NTU1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'red-oxide-primer',
    name: 'Red Oxide Primer',
    category: 'Primers',
    image: 'https://images.unsplash.com/photo-1735203619041-2f67ba946b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmFtZWwlMjBwYWludCUyMGdsb3NzeXxlbnwxfHx8fDE3Njk2NTU1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'brolac',
    name: 'Brolac',
    category: 'Enamel Paints',
    image: 'https://images.unsplash.com/photo-1735203619041-2f67ba946b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmFtZWwlMjBwYWludCUyMGdsb3NzeXxlbnwxfHx8fDE3Njk2NTU1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'umbrella',
    name: 'Umbrella',
    category: 'Enamel Paints',
    image: 'https://images.unsplash.com/photo-1735203619041-2f67ba946b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmFtZWwlMjBwYWludCUyMGdsb3NzeXxlbnwxfHx8fDE3Njk2NTU1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'luxol-gold',
    name: 'Luxol Gold Hi-Gloss',
    category: 'Enamel Paints',
    image: 'https://images.unsplash.com/photo-1735203619041-2f67ba946b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmFtZWwlMjBwYWludCUyMGdsb3NzeXxlbnwxfHx8fDE3Njk2NTU1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function PaintsPage() {
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
            All Kinds of Paints
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium quality paints for every surface and style. From interior elegance to exterior durability.
          </p>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="interior" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="interior">Interior</TabsTrigger>
            <TabsTrigger value="exterior">Exterior</TabsTrigger>
            <TabsTrigger value="enamels">Enamels</TabsTrigger>
          </TabsList>

          <TabsContent value="interior">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {interiorProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="exterior">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {exteriorProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="enamels">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {enamelProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}