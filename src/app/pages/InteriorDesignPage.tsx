import { useState } from 'react';
import { Link } from 'react-router';
import { ChevronLeft, X } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Button } from '@/app/components/ui/button';

const interiorProjects = [
  {
    id: 'living-room-1',
    title: 'Luxury Living Room',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1669387448840-610c588f003d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGx1eHVyeSUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY5NjU1NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Modern luxury living room with custom furniture and elegant lighting.',
    materials: ['Premium Fabric', 'Marble Flooring', 'Designer Lighting', 'Custom Woodwork'],
  },
  {
    id: 'bedroom-1',
    title: 'Contemporary Bedroom',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzY5NjEwMzk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Sleek and modern bedroom design with ambient lighting and minimalist aesthetics.',
    materials: ['Engineered Wood', 'LED Lighting', 'Luxury Bedding', 'Designer Curtains'],
  },
  {
    id: 'office-1',
    title: 'Professional Office Space',
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1765371512992-843e6a92d7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBpbnRlcmlvciUyMGRlc2lnbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njk2NTU3MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Functional and stylish office interior with ergonomic furniture and modern finishes.',
    materials: ['Laminate Flooring', 'Glass Partitions', 'Ergonomic Furniture', 'Cable Management'],
  },
  {
    id: 'kitchen-1',
    title: 'Modern Kitchen Design',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwaW50ZXJpb3IlMjBtb2Rlcm4lMjBkZXNpZ258ZW58MXx8fHwxNzY5NjU1NzMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Contemporary kitchen with modular cabinets and premium appliances.',
    materials: ['Quartz Countertop', 'Modular Cabinets', 'Premium Fixtures', 'Smart Appliances'],
  },
  {
    id: 'dining-1',
    title: 'Elegant Dining Room',
    category: 'Dining Room',
    image: 'https://images.unsplash.com/photo-1758977245854-b0ea036e0ce2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjByb29tJTIwZWxlZ2FudCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTYwNjc1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Sophisticated dining space with custom table and statement lighting.',
    materials: ['Wooden Flooring', 'Designer Chandelier', 'Custom Furniture', 'Accent Walls'],
  },
  {
    id: 'living-room-2',
    title: 'Classic Living Space',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1669387448840-610c588f003d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGx1eHVyeSUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY5NjU1NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Timeless living room design with comfortable seating and warm ambiance.',
    materials: ['Wooden Panels', 'Soft Furnishings', 'Ambient Lighting', 'Art Pieces'],
  },
];

export default function InteriorDesignPage() {
  const [selectedProject, setSelectedProject] = useState<typeof interiorProjects[0] | null>(null);

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
            Interior Design Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of stunning interior designs. From residential to commercial spaces.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {interiorProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-blue-600 mb-1">{project.category}</p>
                <h3 className="text-lg">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            <div
              className="max-w-6xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm mb-3">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-3xl mb-4">{selectedProject.title}</h2>
                    <p className="text-gray-600 mb-6">{selectedProject.description}</p>

                    <div className="mb-6">
                      <h3 className="text-lg mb-3">Materials Used</h3>
                      <ul className="grid grid-cols-2 gap-2">
                        {selectedProject.materials.map((material, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            {material}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Book Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md p-8 text-center text-white">
          <h2 className="text-3xl mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg mb-6 opacity-90">
            Our experienced designers are here to bring your vision to life.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}
