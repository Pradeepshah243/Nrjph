// import { useState } from 'react';
// import { Button } from '@/app/components/ui/button';
// import { Input } from '@/app/components/ui/input';
// import { Textarea } from '@/app/components/ui/textarea';
// import { Label } from '@/app/components/ui/label';

// export function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message! We will get back to you soon.');
//     setFormData({ name: '', email: '', phone: '', message: '' });
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section id="contact" className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl">CONTACT</h2>
//           <p className="text-gray-600 mt-2">Get in touch with us</p>
//         </div>

//         <div className="max-w-2xl mx-auto">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <Label htmlFor="name">Name</Label>
//               <Input
//                 id="name"
//                 name="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="mt-1"
//               />
//             </div>

//             <div>
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="mt-1"
//               />
//             </div>

//             <div>
//               <Label htmlFor="phone">Phone</Label>
//               <Input
//                 id="phone"
//                 name="phone"
//                 type="tel"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 className="mt-1"
//               />
//             </div>

//             <div>
//               <Label htmlFor="message">Message</Label>
//               <Textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={5}
//                 className="mt-1"
//               />
//             </div>

//             <Button type="submit" className="w-full">
//               Send Message
//             </Button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs.sendForm(
        'service_k3xx5xn',      // ✅ Your Service ID
        'template_iqn7qxh',     // ✅ Your Template ID
        formRef.current,
        'Ha6Uc6-SbYF2TvbgC'     // ✅ Your Public Key
      ).then(
        (result) => {
          console.log('Message sent:', result.text);
          alert('Thank you for your message! We will get back to you soon.');
          setFormData({ name: '', email: '', phone: '', message: '' });
        },
        (error) => {
          console.error('Error:', error.text);
          alert('Oops! Something went wrong. Please try again.');
        }
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Map EmailJS field names to local state keys
    const fieldMap: Record<string, keyof typeof formData> = {
      user_name: 'name',
      user_email: 'email',
      user_phone: 'phone',
      message: 'message',
    };

    setFormData({
      ...formData,
      [fieldMap[name]]: value,
    });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl">CONTACT</h2>
          <p className="text-gray-600 mt-2">Get in touch with us</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="user_name"   // ✅ EmailJS expects this
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="user_email"  // ✅ EmailJS expects this
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="user_phone"  // ✅ EmailJS expects this
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"     // ✅ EmailJS expects this
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="mt-1"
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
