import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-gradient flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-brand-gold text-8xl font-bold font-heading mb-4">404</p>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
