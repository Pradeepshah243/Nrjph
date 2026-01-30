import { Link } from 'react-router';
import { Home } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
