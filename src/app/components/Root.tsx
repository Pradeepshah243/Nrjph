import { Outlet } from 'react-router';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { WhatsAppButton } from '@/app/components/WhatsAppButton';

export default function Root() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
