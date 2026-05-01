import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Zap,
  Droplets,
  Leaf,
  Star,
  ChevronRight,
  Building2,
  CheckCircle,
} from "lucide-react";
import { supabase } from "../lib/supabase";
import { Product, Testimonial } from "../types";
import ProductCard from "../components/ProductCard";

const heroSlides = [
  {
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    label: "Orange",
    accent: "#f97316",
  },
  {
    image: "https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg",
    label: "Strawberry",
    accent: "#ef4444",
  },
  {
    image: "https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg",
    label: "Guava",
    accent: "#10b981",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Immunity Boost",
    desc: "Packed with antioxidants, Vitamin C, and phytonutrients to strengthen your natural defenses.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Droplets,
    title: "Deep Detox",
    desc: "Chlorophyll-rich spirulina binds to toxins and flushes them out, cleansing your system daily.",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: Zap,
    title: "Natural Energy",
    desc: "No caffeine, no crash. Pure plant energy from complete protein and B-vitamins.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Leaf,
    title: "100% Organic",
    desc: "Certified organic ingredients, cold-processed to preserve every nutrient in its natural form.",
    color: "bg-green-50 text-green-600",
  },
];

const stats = [
  { value: "5000+", label: "Happy Customers" },
  { value: "100%", label: "Organic Certified" },
  { value: "8", label: "Premium Products" },
  { value: "50+", label: "Corporate Clients" },
];

const products = [
  {
    name: "Orange Juice",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd5bba3f",
    category: "Citrus",
    badge: "Fresh",
  },
  {
    name: "Strawberry Smoothie",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4",
    category: "Berry",
    badge: "Popular",
  },
  {
    name: "Watermelon Juice",
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8",
    category: "Summer",
    badge: "Cool",
  },
  {
    name: "Mango Shake",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888",
    category: "Tropical",
    badge: "Sweet",
  },
  {
    name: "Kiwi Juice",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec",
    category: "Vitamin C",
    badge: null,
  },
  {
    name: "Pineapple Juice",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b",
    category: "Tropical",
    badge: "Refreshing",
  },
  {
    name: "Mixed Berry Juice",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
    category: "Antioxidant",
    badge: null,
  },
  {
    name: "Green Detox Juice",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423",
    category: "Healthy",
    badge: "Detox",
  },
];

const getFlavorColor = (category: string) => {
  const colors: Record<string, string> = {
    Citrus: "bg-orange-50",
    Berry: "bg-rose-50",
    Summer: "bg-blue-50",
    Tropical: "bg-yellow-50",
    "Vitamin C": "bg-lime-50",
    Antioxidant: "bg-purple-50",
    Healthy: "bg-emerald-50",
  };
  return colors[category] || "bg-gray-50";
};

export default function Home() {
  const [featured, setFeatured] = useState<Product[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    supabase
      .from("products")
      .select("*")
      .eq("featured", true)
      .order("sort_order")
      .then(({ data }) => {
        if (data) setFeatured(data);
      });
    supabase
      .from("testimonials")
      .select("*")
      .eq("featured", true)
      .then(({ data }) => {
        if (data) setTestimonials(data);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === activeSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide.image}
              alt={slide.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
          </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-300 text-sm font-medium mb-6">
              Premium Organic Wellness
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Nature's Power.
              <span className="block text-green-400">In Every Sip.</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-10 max-w-xl">
              60ml spirulina wellness shots and premium organic superfood
              powders — scientifically formulated for immunity, detox, and daily
              energy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-full text-lg transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full text-lg hover:bg-white/20 transition-all duration-200"
              >
                Our Story
              </Link>
            </div>

            {/* Flavour Indicators */}
            <div className="flex items-center gap-6">
              <span className="text-gray-400 text-sm">Available flavours:</span>
              {heroSlides.map((slide, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`text-sm font-medium transition-all duration-200 ${
                    i === activeSlide
                      ? "text-white border-b-2 border-green-400 pb-0.5"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {slide.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-white/30" />
          <span className="text-white/50 text-xs tracking-widest uppercase">
            Scroll
          </span>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-green-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-green-200 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-sm uppercase tracking-[0.3em] block mb-4">
              The Collection``
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pure juice, <span className="text-gray-400">nothing else.</span>
            </h2>
            <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
            {products.map((product, index) => (
              <div
                key={index}
                className="group flex flex-col items-center relative"
              >
                {/* 1. FIXED BADGE: Moved outside the overflow-hidden container */}
                {product.badge && (
                  <div className="absolute top-2 right-10 z-30">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg group-hover:opacity-0 transition-opacity duration-200">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Circular Image Container */}
                <div className="relative aspect-square w-full max-w-[280px] rounded-full overflow-hidden bg-gray-50 shadow-sm">
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* 2. FAST OVERLAY: Reduced duration and removed staggered delays */}
                  <div className="absolute inset-0 bg-green-900/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-8 text-center">
                    <h4 className="text-white text-xl font-bold mb-2">
                      {product.name}
                    </h4>

                    <p className="text-green-50 text-sm leading-relaxed mb-6 line-clamp-3">
                      Experience the raw power of {product.category} nutrients.
                      Cold-pressed and delivered fresh.
                    </p>

                    <Link
                      to="/shop"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-green-900 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-green-50 transition-colors"
                    >
                      View Product
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Persistent Product Name */}
                <div className="mt-8 text-center group-hover:opacity-0 transition-opacity duration-200">
                  <h3 className="text-xl font-display font-medium text-gray-900">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-sm uppercase tracking-[0.3em] block mb-4">
              The Tatvamasi Standard
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for Your{" "}
              <span className="text-green-600 italic">Daily Ritual</span>
            </h2>
            <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full" />
          </div>

          {/* Bento Grid with Background Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
            {/* CARD 1: Large Anchor (Immunity) */}
            <div className="md:col-span-2 md:row-span-2 relative rounded-[2.5rem] overflow-hidden group shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg"
                alt="Fresh greens"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-10 text-white z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3">{benefits[0].title}</h3>
                <p className="text-gray-200 text-lg max-w-md leading-relaxed">
                  {benefits[0].desc}
                </p>
              </div>
            </div>

            {/* CARD 2: Deep Detox (Image Card) */}
            <div className="relative rounded-[2.5rem] overflow-hidden group shadow-xl">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/070/703/841/small/botanical-infusion-clear-glass-bottle-with-fresh-green-leaves-on-aqua-background-photo.jpeg"
                alt="Clear water and botanicals"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-cyan-900/60 transition-colors duration-500" />

              <div className="relative h-full p-10 flex flex-col justify-between text-white z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 shadow-sm">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 transition-colors">
                    {benefits[1].title}
                  </h3>
                  <p className="text-gray-100 text-sm leading-relaxed opacity-90">
                    {benefits[1].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3: Natural Energy (Image Card) */}
            <div className="relative rounded-[2.5rem] overflow-hidden group shadow-xl">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20251022/pngtree-vibrant-orange-juice-splash-in-motion-with-citrus-energy-glow-image_19959097.webp"
                alt="Vibrant citrus energy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-amber-900/60 transition-colors duration-500" />

              <div className="relative h-full p-10 flex flex-col justify-between text-white z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 shadow-sm">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {benefits[2].title}
                  </h3>
                  <p className="text-gray-100 text-sm leading-relaxed opacity-90">
                    {benefits[2].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 4: Wide Feature (100% Organic - Image Card) */}
            <div className="md:col-span-3 relative rounded-[2.5rem] overflow-hidden group shadow-2xl h-[320px]">
              <img
                src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg"
                alt="Lush organic foliage"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Darkening Overlay for text contrast */}
              <div className="absolute inset-0 bg-green-950/70" />

              <div className="relative z-10 h-full flex flex-col md:flex-row md:items-center justify-between p-8 md:p-12 gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-green-300 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
                    <CheckCircle className="w-4 h-4" /> Eco-Certified
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {benefits[3].title}
                  </h3>
                  <p className="text-green-50 max-w-xl text-lg leading-relaxed opacity-90">
                    {benefits[3].desc}
                  </p>
                </div>

                <div className="hidden md:flex flex-col items-center gap-4">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center animate-spin-slow">
                    <Leaf className="w-10 h-10 text-green-400" />
                  </div>
                  <span className="text-white/50 text-[10px] uppercase tracking-widest font-bold">
                    Nature First
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flavours Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-sm uppercase tracking-[0.3em] block mb-4">
              Spirulina Shots
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              3 Flavours. 1 Daily Ritual.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg mb-6">
              Each 60ml shot is a concentrated wellness boost — crafted to taste
              as good as it works.
            </p>
            <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Orange",
                slug: "spirulina-orange-shot",
                desc: "Citrus power meets spirulina superfood for the ultimate immunity and energy boost.",
                image:
                  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
                color: "from-orange-400 to-amber-300",
                badge: "Most Popular",
              },
              {
                name: "Strawberry",
                slug: "spirulina-strawberry-shot",
                desc: "Sweet, tangy antioxidant burst with ripe strawberries and nutrient-dense spirulina.",
                image:
                  "https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg",
                color: "from-red-400 to-rose-300",
                badge: "Fan Favourite",
              },
              {
                name: "Guava Mixed Fruit",
                slug: "spirulina-guava-shot",
                desc: "Tropical immunity powerhouse packed with guava, mixed fruits, and spirulina.",
                image:
                  "https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg",
                color: "from-green-400 to-emerald-300",
                badge: "Highest Vitamin C",
              },
            ].map((flavour) => (
              <Link
                key={flavour.name}
                to={`/product/${flavour.slug}`}
                className="group relative overflow-hidden rounded-3xl h-96 block hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={flavour.image}
                  alt={flavour.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent`}
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${flavour.color}`}
                  >
                    {flavour.badge}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {flavour.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {flavour.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-green-400 text-sm font-medium group-hover:gap-2 transition-all">
                    Shop ₹120 <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Spirulina Section */}
      <section className="py-24 bg-green-950 rounded-[2.5rem] mx-4 overflow-hidden mb-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div>
              <span className="text-green-400 font-bold text-xs uppercase tracking-widest mb-4 block">
                The Science
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Why Spirulina?
              </h2>
              <p className="text-green-100/80 text-lg mb-10 leading-relaxed">
                Gram-for-gram, it is the most nutrient-dense food on the planet.
                NASA uses it for astronaut nutrition because it provides
                complete cellular recovery.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  "70% Complete Protein (More than meat)",
                  "10x more antioxidants than green tea",
                  "Rich in bio-available iron (12x spinach)",
                  "Contains all 8 essential amino acids",
                  "Pure source of Gamma-Linolenic Acid (GLA)",
                ].map((fact, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-white font-medium">{fact}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/science"
                className="inline-flex items-center gap-2 text-green-400 font-bold hover:text-white transition-colors"
              >
                Read the full research <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Image Side */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg"
                alt="Spirulina powder"
                className="w-full h-[500px] object-cover rounded-[2rem] shadow-2xl"
              />
              {/* Simple Label */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-green-900 font-bold text-lg leading-tight">
                  100% Organic <br />
                  <span className="text-gray-400 text-xs font-medium uppercase tracking-widest">
                    Lab Certified
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
                Our Products
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3">
                Featured Products
              </h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {featured.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="animate-pulse bg-gray-100 rounded-2xl h-80"
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Corporate Banner */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="w-12 h-12 text-green-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Corporate Wellness Programs
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Invest in your employees' health. Our bulk wellness programs for
            MNCs and corporate offices reduce sick days and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/corporate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-full text-lg transition-all"
            >
              Enquire Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "Bulk Pricing",
              "Custom Packages",
              "Monthly Subscriptions",
              "On-site Delivery",
              "Nutritionist Support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-24 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-green-600 font-bold text-sm uppercase tracking-[0.3em] block mb-4">
                Real Results
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Our Customers Say
              </h2>
              <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-green-100"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.image_url}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {t.name}
                      </div>
                      <div className="text-gray-500 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter / CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Leaf className="w-10 h-10 text-green-500 mx-auto mb-6" />

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start Your Wellness Journey
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Join thousands of health-conscious individuals who make Tatvamasi
            part of their daily ritual.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-10 py-5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full text-lg transition-all hover:shadow-lg hover:shadow-green-200"
          >
            Explore All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
