import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  // Replace with your actual WhatsApp number (include country code, no + or spaces)
  // Example: For +1 234 567 8900, use: 12345678900
  const phoneNumber = '9779812148801'; // Update this with your WhatsApp number
  const message = 'Namaste! I would like to know more about your Berger Paints, false ceiling designs, and waterproofing solutions. Please share the details.';

  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-pulse hover:animate-none"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
