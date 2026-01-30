import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

const awards = [
  {
    id: 1,
    title: 'Excellence in Design 2025',
    image: 'https://images.unsplash.com/photo-1764874299025-d8b2251f307d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhd2FyZCUyMHRyb3BoeSUyMGFjaGlldmVtZW50JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY5NjUxMTE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Best Home Improvement Service',
    image: 'https://images.unsplash.com/photo-1761178334145-76c3d8ac30dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGFjaGlldmVtZW50JTIwZXhjZWxsZW5jZXxlbnwxfHx8fDE3Njk2NTExMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Customer Choice Award 2024',
    image: 'https://images.unsplash.com/photo-1759688983881-0742f416a4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbWVkYWwlMjBhd2FyZCUyMHdpbm5lcnxlbnwxfHx8fDE3Njk2NTExMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Happy Clients',
  },
  {
    icon: Clock,
    value: '15+',
    label: 'Years Experience',
  },
  {
    icon: ThumbsUp,
    value: '1000+',
    label: 'Projects Completed',
  },
  {
    icon: Award,
    value: '25+',
    label: 'Awards Won',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">ABOUT US</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transforming spaces with excellence and expertise
          </p>
        </div>

        {/* Company Overview with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
            <ImageWithFallback
              src="/images/team/1.jpg"
              alt="Our Professional Team"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl mb-4">
  Trusted Home Improvement & Interior Design Partner
</h3>
<p className="text-gray-700 mb-4 leading-relaxed">
  For over 12 years, New Ram Janki Paint House has been a trusted name in paints 
  and interior solutions in Janakpurdham. As an authorized dealer of Berger Paints, 
  we bring world-class products that help you “Paint Your Imagination” with quality, 
  durability, and vibrant colors. Our team of experienced painters, designers, and 
  craftsmen are dedicated to bringing your vision to life.
</p>
<p className="text-gray-700 mb-4 leading-relaxed">
  We specialize in premium painting services, waterproofing solutions, false ceiling 
  designs, and complete interior design projects. Our commitment to quality, attention 
  to detail, and customer satisfaction has earned us the Berger Silver Club Award for 
  the last 10 consecutive years, along with the trust of hundreds of satisfied clients.
</p>
<p className="text-gray-700 leading-relaxed">
  Every project we undertake is executed with precision, using premium materials and 
  the latest techniques to ensure lasting results that exceed expectations. Whether 
  you’re renovating, building, or upgrading interiors, we’re here to help you paint 
  your imagination into reality.
</p>

          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <Icon size={32} className="text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Awards Section */}
        <div>
          <h3 className="text-2xl md:text-3xl text-center mb-8">
            Our Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award) => (
              <div
                key={award.id}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <ImageWithFallback
                  src={award.image}
                  alt={award.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-center text-gray-800">{award.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
