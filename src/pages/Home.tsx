import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moringaImage from "../assets/hero/01-moringa.jpg";
import amlaImage from "../assets/hero/02-amla.jpg";
import beetrootImage from "../assets/hero/03-beetroot.jpg";
import greenDrinkImage from "../assets/hero/04-green-drink.jpg";
import {
  ArrowRight, Star, ChevronRight, Leaf, Play, Shield, Award, CheckCircle,
} from "lucide-react";
import { supabase } from "../lib/supabase";
import { Product, Testimonial } from "../types";
import ProductCard from "../components/ProductCard";

/* ─── Static Data ─────────────────────────────────────────────────────────── */

const heroSlides = [
  {
    image: moringaImage,
    label: "Moringa",
    accent: "#65a30d",
  },
  {
    image: amlaImage,
    label: "Amla",
    accent: "#84cc16",
  },
  {
    image: beetrootImage,
    label: "Beetroot",
    accent: "#dc2626",
  },
  {
    image: greenDrinkImage,
    label: "Green Wellness",
    accent: "#16a34a",
  },
];

const stats = [
  { value: "5,000+", label: "Happy Customers" },
  { value: "100%", label: "Organic Certified" },
  { value: "8", label: "Premium Products" },
  { value: "50+", label: "Corporate Clients" },
];

const products = [
  { name: "Orange Juice", image: "https://images.unsplash.com/photo-1600271886742-f049cd5bba3f", category: "Citrus", badge: "Fresh" },
  { name: "Strawberry Smoothie", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4", category: "Berry", badge: "Popular" },
  { name: "Watermelon Juice", image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8", category: "Summer", badge: "Cool" },
  { name: "Mango Shake", image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888", category: "Tropical", badge: "Sweet" },
  { name: "Kiwi Juice", image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec", category: "Vitamin C", badge: null },
  { name: "Pineapple Juice", image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b", category: "Tropical", badge: "Refreshing" },
  { name: "Mixed Berry Juice", image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc", category: "Antioxidant", badge: null },
  { name: "Green Detox Juice", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423", category: "Healthy", badge: "Detox" },
];

/* ─── Component ────────────────────────────────────────────────────────────── */

export default function Home() {
  const [featured, setFeatured] = useState<Product[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    supabase.from("products").select("*").eq("featured", true).order("sort_order").then(({ data }) => {
      if (data) setFeatured(data);
    });
    supabase.from("testimonials").select("*").eq("featured", true).then(({ data }) => {
      if (data) setTestimonials(data);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setActiveSlide((p) => (p + 1) % heroSlides.length), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {heroSlides.map((slide, i) => (
  <div
    key={i}
    className={`absolute inset-0 transition-opacity duration-1000 ${
      i === activeSlide ? "opacity-100" : "opacity-0"
    }`}
  >
    <img
      src={slide.image}
      alt={slide.label}
      className="w-full h-full object-cover"
    />

    {/* Overall dark overlay */}
    <div className="absolute inset-0 bg-black/35" />

    {/* Stronger text-side overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
  </div>
))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-300 text-sm font-semibold mb-6">
              <Leaf className="w-3.5 h-3.5" /> Premium Organic Wellness
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6" style={{ letterSpacing: '-0.02em' }}>
              Nature's Power.<br />
              <span className="text-green-400">In Every Sip.</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-10 max-w-xl">
              60ml spirulina wellness shots and premium organic superfood powders — cold-pressed, lab-certified, and made for your daily ritual.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link to="/shop" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-full text-lg transition-all hover:shadow-lg hover:shadow-green-500/30">
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full text-lg hover:bg-white/20 transition-all">
                Our Story
              </Link>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-gray-400 text-sm">Available flavours:</span>
              {heroSlides.map((slide, i) => (
                <button key={i} onClick={() => setActiveSlide(i)} className={`text-sm font-medium transition-all duration-200 ${i === activeSlide ? "text-white border-b-2 border-green-400 pb-0.5" : "text-gray-400 hover:text-gray-200"}`}>
                  {slide.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        
      </section>

      {/* ── STATS BANNER ────────────────────────────────────────────────────── */}
<section className="bg-gradient-to-r from-[#14532D] via-[#166534] to-[#4D7C0F] py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

      {stats.map((stat) => (
        <div
          key={stat.label}
          className="text-center group"
        >
          {/* Number */}
          <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {stat.value}
          </div>

          {/* Label */}
          <div className="text-[#ECFCCB] text-sm md:text-base mt-2 font-medium">
            {stat.label}
          </div>

          {/* Small decorative line */}
          <div className="w-8 h-0.5 bg-[#BEF264] mx-auto mt-3 rounded-full opacity-80" />
        </div>
      ))}

    </div>
  </div>
</section>

      {/* ── THE COLLECTION ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-sm uppercase tracking-[0.3em] block mb-4">The Collection</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Pure juice, <span className="text-gray-400">nothing else.</span></h2>
            <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
            {products.map((product, index) => (
              <div key={index} className="group flex flex-col items-center relative">
                {product.badge && (
                  <div className="absolute top-2 right-10 z-30">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg group-hover:opacity-0 transition-opacity duration-200">
                      {product.badge}
                    </span>
                  </div>
                )}
                <div className="relative aspect-square w-full max-w-[280px] rounded-full overflow-hidden bg-gray-50 shadow-sm">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-green-900/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-8 text-center">
                    <h4 className="text-white text-xl font-bold mb-2">{product.name}</h4>
                    <p className="text-green-50 text-sm leading-relaxed mb-6 line-clamp-3">Cold-pressed and delivered fresh.</p>
                    <Link to="/shop" className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-green-900 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-green-50 transition-colors">
                      View Product <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="mt-8 text-center group-hover:opacity-0 transition-opacity duration-200">
                  <h3 className="text-xl font-medium text-gray-900">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/40 to-black" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] block mb-4">Watch</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>See It Come to Life</h2>
            <p className="text-gray-400 max-w-xl mx-auto">From farm to bottle — experience the journey behind every Tatvamasi wellness shot.</p>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
            <video
              className="w-full h-full object-cover"
              controls
              poster="https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg"
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
              <div className="w-20 h-20 bg-green-500/90 rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLAVOURS ────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-sm uppercase tracking-[0.3em] block mb-4">Spirulina Shots</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">3 Flavours. 1 Daily Ritual.</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg mb-6">Each 60ml shot is a concentrated wellness boost — crafted to taste as good as it works.</p>
            <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Orange", slug: "spirulina-orange-shot", desc: "Citrus power meets spirulina superfood for the ultimate immunity and energy boost.", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", color: "from-orange-400 to-amber-300", badge: "Most Popular" },
              { name: "Strawberry", slug: "spirulina-strawberry-shot", desc: "Sweet, tangy antioxidant burst with ripe strawberries and nutrient-dense spirulina.", image: "https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg", color: "from-red-400 to-rose-300", badge: "Fan Favourite" },
              { name: "Guava Mixed Fruit", slug: "spirulina-guava-shot", desc: "Tropical immunity powerhouse packed with guava, mixed fruits, and spirulina.", image: "https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg", color: "from-green-400 to-emerald-300", badge: "Highest Vitamin C" },
            ].map((flavour) => (
              <Link key={flavour.name} to={`/product/${flavour.slug}`} className="group relative overflow-hidden rounded-3xl h-96 block hover:shadow-2xl transition-all duration-500">
                <img src={flavour.image} alt={flavour.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${flavour.color}`}>{flavour.badge}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{flavour.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{flavour.desc}</p>
                  <span className="inline-flex items-center gap-1 text-green-400 text-sm font-medium group-hover:gap-2 transition-all">
                    Shop ₹120 <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Products</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3">Featured Products</h2>
            </div>
            <Link to="/shop" className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {featured.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => <div key={i} className="animate-pulse bg-gray-100 rounded-2xl h-80" />)}
            </div>
          )}
        </div>
      </section>

      {/* ── CUSTOMER REVIEWS ────────────────────────────────────────────────── */}
      {testimonials.length > 0 && (
        <section className="py-24 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-green-600 font-bold text-sm uppercase tracking-[0.3em] block mb-4">Customer Reviews</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>Real People. Real Results.</h2>
              <div className="flex items-center justify-center gap-2 mt-4">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                <span className="text-gray-500 text-sm ml-2">4.9 / 5 from 1,200+ reviews</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((t) => (
                <div key={t.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-green-100">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.content}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.image_url} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-gray-500 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CERTIFICATIONS ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">Certifications</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Certified for Your Confidence</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Every product is backed by rigorous organic certification and food safety standards.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "India Organic", body: "APEDA, Govt. of India", icon: Leaf },
              { name: "FSSAI Licensed", body: "Food Safety & Standards Authority", icon: Shield },
              { name: "GMP Certified", body: "Good Manufacturing Practice", icon: Award },
              { name: "ISO 22000", body: "Food Safety Management System", icon: CheckCircle },
            ].map((cert, i) => (
              <div key={i} className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-500">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-5 mx-auto group-hover:bg-green-600 transition-colors duration-500">
                  <cert.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{cert.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{cert.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
