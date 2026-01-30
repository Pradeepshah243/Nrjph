import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top section with logos */}
        <div className="flex justify-between items-center mb-8">
          {/* Left Logo */}
          <div className="w-18 md:w-20">
            <ImageWithFallback
              src="/images/general/berger_logo.png"
              alt="Company Logo"
              className="w-full h-auto"
            />
          </div>

          {/* Right Logo */}
          {/* <div className="w-24 md:w-60">
            <ImageWithFallback
              src="/images/general/logo-right.png"
              alt="Company Logo"
              className="w-full h-auto"
            />
          </div> */}
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 mb-6">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-blue-400 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-blue-400 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-blue-400 transition-colors"
          >
            Our Services
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="hover:text-blue-400 transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            className="hover:text-blue-400 transition-colors"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-blue-400 transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.facebook.com/newramjanki"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-3 rounded-full hover:bg-blue-600 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.facebook.com/newramjanki"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-3 rounded-full hover:bg-pink-600 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/newramjanki"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-3 rounded-full hover:bg-blue-400 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://www.facebook.com/newramjanki"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-3 rounded-full hover:bg-blue-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.facebook.com/newramjanki"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-3 rounded-full hover:bg-red-600 transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
        </div>

        <div className="text-center text-gray-400">
          <p>
            &copy; 2026 New Ram Janki Paint House. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}