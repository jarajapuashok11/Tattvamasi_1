import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Corporate() {
  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h1>
        <p className="text-gray-500 mb-8">Our corporate wellness page is being updated.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all">
          Back to Home <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
