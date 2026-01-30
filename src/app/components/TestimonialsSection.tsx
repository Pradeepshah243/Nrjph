import { Star } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1610387694365-19fafcc86d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY5NjAyMjcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'Exceptional work! The team transformed our home beautifully. Their attention to detail and professionalism exceeded our expectations. Highly recommend their services!',
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2OTU3MzU2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'Outstanding quality and service. The false ceiling design they created is stunning, and the waterproofing work was done perfectly. Very satisfied with the results!',
  },
];

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl">TESTIMONIALS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}