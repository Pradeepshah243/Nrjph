import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {/* <Link to="/" className="text-2xl font-bold text-blue-600">
            NRJPH
          </Link> */}
      <Link to="/" className="flex items-center py-0 my-0">
    <img
    src="/images/general/logo.png"
    alt="Logo"
    className="w-15 h-15 rounded-full object-cover ml-[-5px]"
  />
</Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors text-left"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-gray-700 hover:text-blue-600 transition-colors text-left"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-gray-700 hover:text-blue-600 transition-colors text-left"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors text-left"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
