import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-8">Sorry, the page you are looking for does not exist.</p>
        <Button asChild>
          <Link href="/">Go back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
