import { HeroSlider } from '@/app/components/HeroSlider';
import { AboutSection } from '@/app/components/AboutSection';
import { ServicesSection } from '@/app/components/ServicesSection';
import { ProjectsSection } from '@/app/components/ProjectsSection';
import { TestimonialsSection } from '@/app/components/TestimonialsSection';
import { ContactSection } from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
