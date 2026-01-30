import { useState } from 'react';
import { Paintbrush, Droplets, Home, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface ServiceCategory {
  id: number;
  title: string;
  description: string;
  icon: any;
  link: string; // Add link property
  details: {
    category?: string;
    items: string[];
  }[];
  gallery?: string[];
}

const services: ServiceCategory[] = [
  {
    id: 1,
    title: 'All Kinds of Paints',
    description: 'Professional painting services for interior and exterior spaces',
    icon: Paintbrush,
    link: '/paints',
    details: [
      {
        category: 'Interior Wall Coatings',
        items: [
          'Wall Putty',
          'Interior Wall Putty',
          'Primers',
          'BPCP Cement Primer',
          'BP Primer',
          'Luxury Interior Emulsions',
          'Silk Luxury Emulsion',
          'Silk Glamour',
          'Premium Interior Emulsions',
          'Easy Clean (No Daag, No Dhaba)',
          'Economy Interior Emulsions',
          'Bison Super Emulsion',
          'Bison Lite',
          'Designer Finishes',
          'Silk Glamart Metallica',
          'Silk Glamart Non-Metallic',
        ],
      },
      {
        category: 'Exterior Wall Coatings',
        items: [
          'Wall Putty',
          'Exterior Wall Putty',
          'Primers',
          'BPCP Cement Exterior Primer',
          'Weathercoat Primer',
          'Luxury Exterior Emulsions',
          'Weathercoat Long Life 12',
          'Weathercoat All Guard 10',
          'Premium Exterior Emulsions',
          'Weathercoat Flexo 8',
          'Weathercoat All Guard 7',
          'Economy Exterior Emulsions',
          'Walmasta Classic',
          'Walmasta Lite',
        ],
      },
      {
        category: 'Enamels Section',
        items: [
          'Primers',
          'Wood Primers',
          'White Primers',
          'Red Oxide Primers (for metals)',
          'Paints',
          'Brolac Paints',
          'Umbrella Paints',
          'Luxol Gold Hi-Gloss',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Waterproofing',
    description: 'Complete waterproofing solutions to protect your property',
    icon: Droplets,
    link: '/waterproofing',
    details: [
      {
        items: [
          'Homeshield 2K',
          'Dampstop',
          'Homeshield Seal-O-Primer',
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'False Ceiling Design',
    description: 'Modern and elegant false ceiling designs for any space',
    icon: Home,
    link: '/false-ceiling',
    details: [
      {
        category: 'Malaysia Cornices Types',
        items: [
          'Corner Cornices',
          'Bead Cornices',
          'Circle Cornices',
          'Cove Cornices',
          'Step Cornices',
          'Classic Cornices',
          'Modern Cornices',
          'Ornamental Cornices',
          'Plain Cornices',
          'Decorative Cornices',
          'Curved Cornices',
          'Straight Cornices',
          'Layered Cornices',
          'Edge Cornices',
        ],
      },
      {
        category: 'Additional Materials',
        items: [
          'Gypsum Board',
          '2x2 Board',
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Interior Design',
    description: 'Complete interior design solutions with expert execution',
    icon: Sparkles,
    link: '/interior-design',
    details: [
      {
        items: [
          'Showcase of design pictures',
          'Gallery layout for completed projects',
        ],
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1672927936377-97d1be3976cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGx1eHVyeSUyMG1vZGVybnxlbnwxfHx8fDE3Njk2NTM5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
];

export function ServicesSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 text-lg mb-2">FIND WHAT YOU'RE LOOKING FOR</p>
          <h2 className="text-3xl md:text-4xl">OUR SERVICES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedService === service.id;

            return (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Service Header - Clickable */}
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full p-6 text-left flex items-start justify-between hover:bg-gray-50 transition-colors rounded-t-lg"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                      <Icon size={32} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {isExpanded ? (
                      <ChevronUp size={24} className="text-blue-600" />
                    ) : (
                      <ChevronDown size={24} className="text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-200">
                    {/* {service.details.map((detail, index) => (
                      <div key={index} className="mt-4">
                        {detail.category && (
                          <h4 className="text-lg mb-3 text-blue-600">
                            {detail.category}
                          </h4>
                        )}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {detail.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="text-gray-700 text-sm flex items-center"
                            >
                              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))} */}

                    {/* Gallery for Interior Design */}
                    {service.gallery && service.gallery.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-lg mb-3 text-blue-600">Our Work Gallery</h4>
                        <div className="grid grid-cols-1 gap-4">
                          {service.gallery.map((image, idx) => (
                            <ImageWithFallback
                              key={idx}
                              src={image}
                              alt={`${service.title} example ${idx + 1}`}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                          <p className="text-center text-blue-800">
                            ⭐ <strong>Experienced and Skilled Painters</strong> - Quality Guaranteed
                          </p>
                        </div>
                      </div>
                    )}

                    {/* View All Button */}
                    <div className="mt-6">
                      <Link
                        to={service.link}
                        className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
                      >
                        View All {service.title}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}