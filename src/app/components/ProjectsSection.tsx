import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'Modern Kitchen Renovation',
    image: '/images/projects/project1.jpg',
  },
  {
    id: 2,
    title: 'Bathroom Interior Design',
    image: '/images/projects/project2.jpg',
  },
  {
    id: 3,
    title: 'Living Room Makeover',
    image: '/images/projects/project1.jpg',
  },
  {
    id: 4,
    title: 'False Ceiling Installation',
    image: '/images/projects/project2.jpg',
  },
];

export function ProjectsSection() {
  return (
    <section id="work" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl">OUR RECENT PROJECTS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-lg">{project.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
