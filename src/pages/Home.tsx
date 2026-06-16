import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Shield, Zap, Droplets, Leaf, Star, ChevronRight,
  Building2, CheckCircle, FlaskConical, Award, Heart, Sun, Wind,
  Thermometer, Package, ChevronDown,
} from "lucide-react";
import { supabase } from "../lib/supabase";
import { Product, Testimonial } from "../types";
import ProductCard from "../components/ProductCard";

/* ─── Static Data ─────────────────────────────────────────────────────────── */

const heroSlides = [
  { image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", label: "Orange", accent: "#f97316" },
  { image: "https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg", label: "Strawberry", accent: "#ef4444" },
  { image: "https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg", label: "Guava", accent: "#10b981" },
];

const stats = [
  { value: "5,000+", label: "Happy Customers" },
  { value: "100%", label: "Organic Certified" },
  { value: "8", label: "Premium Products" },
  { value: "50+", label: "Corporate Clients" },
];

const benefits = [
  { icon: Shield, title: "Immunity Boost", desc: "Packed with antioxidants, Vitamin C, and phytonutrients to strengthen your natural defenses." },
  { icon: Droplets, title: "Deep Detox", desc: "Chlorophyll-rich spirulina binds to toxins and flushes them out, cleansing your system daily." },
  { icon: Zap, title: "Natural Energy", desc: "No caffeine, no crash. Pure plant energy from complete protein and B-vitamins." },
  { icon: Leaf, title: "100% Organic", desc: "Certified organic ingredients, cold-processed to preserve every nutrient in its natural form." },
];

const nutritionFacts = [
  { nutrient: "Protein", value: "70%", note: "Complete protein, more than meat", color: "bg-emerald-100 text-emerald-700" },
  { nutrient: "Iron", value: "12×", note: "More bio-available iron than spinach", color: "bg-blue-100 text-blue-700" },
  { nutrient: "Antioxidants", value: "10×", note: "More than green tea", color: "bg-amber-100 text-amber-700" },
  { nutrient: "Amino Acids", value: "8/8", note: "All essential amino acids present", color: "bg-rose-100 text-rose-700" },
  { nutrient: "Chlorophyll", value: "High", note: "Powerful detoxification support", color: "bg-green-100 text-green-700" },
  { nutrient: "Vitamins", value: "B1 B2 B3 B12", note: "Full B-complex for energy metabolism", color: "bg-violet-100 text-violet-700" },
];

const ingredients = [
  { name: "Organic Spirulina", origin: "Rajasthan, India", cert: "India Organic", icon: "🌿" },
  { name: "Cold-Pressed Orange", origin: "Maharashtra, India", cert: "FSSAI Certified", icon: "🍊" },
  { name: "Fresh Strawberry", origin: "Himachal Pradesh, India", cert: "Pesticide-Free", icon: "🍓" },
  { name: "Organic Guava", origin: "Allahabad, India", cert: "India Organic", icon: "🍈" },
  { name: "Himalayan Rock Salt", origin: "Himalayan Foothills", cert: "Natural Mineral", icon: "🧂" },
  { name: "Black Pepper Extract", origin: "Kerala, India", cert: "FSSAI Certified", icon: "🌶" },
];

const noNasties = [
  "No Artificial Colours", "No Preservatives", "No Refined Sugar",
  "No Synthetic Vitamins", "No GMO Ingredients", "No Pesticide Residue",
  "No Heavy Metal Contamination", "No Artificial Flavours",
];

const certifications = [
  { name: "India Organic", body: "APEDA, Govt. of India", icon: "🏛" },
  { name: "FSSAI Licensed", body: "Food Safety & Standards Authority", icon: "📋" },
  { name: "GMP Certified", body: "Good Manufacturing Practice", icon: "🏭" },
  { name: "ISO 22000", body: "Food Safety Management System", icon: "✅" },
];

const storageInstructions = [
  { icon: Thermometer, title: "Store at 2–8°C", desc: "Keep refrigerated at all times after opening to maintain potency." },
  { icon: Sun, title: "Avoid Direct Sunlight", desc: "UV light degrades sensitive phytonutrients. Store away from windows." },
  { icon: Wind, title: "Seal After Use", desc: "Re-seal tightly to prevent oxidation and preserve freshness." },
  { icon: Package, title: "Shake Before Use", desc: "Natural separation may occur. Give it a good shake before every shot." },
];

const ritualSteps = [
  { step: "01", time: "Morning, Fasted", title: "Shake the Bottle", desc: "Natural compounds settle overnight. A vigorous shake activates the full blend." },
  { step: "02", time: "6–8 AM", title: "Take Your 60ml Shot", desc: "Drink it straight, undiluted for maximum bioavailability on an empty stomach." },
  { step: "03", time: "Wait 15 Minutes", title: "Let it Absorb", desc: "Allow your gut to fully absorb the spirulina before consuming other foods." },
  { step: "04", time: "Every Day", title: "Stay Consistent", desc: "Noticeable results begin in 2–3 weeks. The compound effect builds over time." },
];

const faqs = [
  { q: "When should I take my Spirulina Shot?", a: "First thing in the morning on an empty stomach for maximum absorption. Wait 15–20 minutes before breakfast." },
  { q: "Is it safe to take during pregnancy?", a: "Spirulina is generally considered safe, but please consult your healthcare provider before starting any new supplement during pregnancy." },
  { q: "Can children take it?", a: "Yes, for children above 5 years at half the adult dose (30ml). Always consult your pediatrician first." },
  { q: "How long until I see results?", a: "Most customers notice improved energy in 5–7 days, with more significant immunity and skin benefits visible after 3–4 weeks of daily use." },
  { q: "Why does my shot have a strong smell?", a: "That's the spirulina! The distinctive earthy aroma is a sign of high-quality, potent spirulina with intact phycocyanin proteins." },
  { q: "How is the product shipped?", a: "We ship with ice packs in insulated packaging to maintain the cold chain. Delivery across India within 24–72 hours." },
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === activeSlide ? "opacity-100" : "opacity-0"}`}>
            <img src={slide.image} alt={slide.label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-white/30" />
          <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ── STATS BANNER ────────────────────────────────────────────────────── */}
      <section className="bg-green-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-green-200 text-sm mt-1">{stat.label}</div>
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

      {/* ── DAILY WELLNESS RITUAL ───────────────────────────────────────────── */}
      <section className="py-24 bg-gray-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] block mb-4">How to Use</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>Your Daily Wellness Ritual</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Four simple steps. Profound cumulative impact on your health, energy, and immunity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ritualSteps.map((step, i) => (
              <div key={i} className="relative group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/40 rounded-3xl p-8 transition-all duration-500">
                <div className="text-green-400/30 font-bold text-7xl absolute top-4 right-6 leading-none select-none">{step.step}</div>
                <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-4">{step.time}</p>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-[1.7]">{step.desc}</p>
                {i < ritualSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                    <ChevronRight className="w-6 h-6 text-green-500/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS BENTO ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-sm uppercase tracking-[0.3em] block mb-4">The Tatvamasi Standard</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Built for Your <span className="text-green-600 italic">Daily Ritual</span></h2>
            <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
            <div className="md:col-span-2 md:row-span-2 relative rounded-[2.5rem] overflow-hidden group shadow-2xl">
              <img src="https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg" alt="Fresh greens" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 text-white z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3">{benefits[0].title}</h3>
                <p className="text-gray-200 text-lg max-w-md leading-relaxed">{benefits[0].desc}</p>
              </div>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden group shadow-xl">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/070/703/841/small/botanical-infusion-clear-glass-bottle-with-fresh-green-leaves-on-aqua-background-photo.jpeg" alt="Deep detox" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-cyan-900/60 transition-colors duration-500" />
              <div className="relative h-full p-10 flex flex-col justify-between text-white z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefits[1].title}</h3>
                  <p className="text-gray-100 text-sm leading-relaxed opacity-90">{benefits[1].desc}</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden group shadow-xl">
              <img src="https://png.pngtree.com/thumb_back/fh260/background/20251022/pngtree-vibrant-orange-juice-splash-in-motion-with-citrus-energy-glow-image_19959097.webp" alt="Natural energy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-amber-900/60 transition-colors duration-500" />
              <div className="relative h-full p-10 flex flex-col justify-between text-white z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefits[2].title}</h3>
                  <p className="text-gray-100 text-sm leading-relaxed opacity-90">{benefits[2].desc}</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 relative rounded-[2.5rem] overflow-hidden group shadow-2xl h-[320px]">
              <img src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg" alt="100% Organic" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-green-950/70" />
              <div className="relative z-10 h-full flex flex-col md:flex-row md:items-center justify-between p-8 md:p-12 gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-green-300 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
                    <CheckCircle className="w-4 h-4" /> Eco-Certified
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{benefits[3].title}</h3>
                  <p className="text-green-50 max-w-xl text-lg leading-relaxed opacity-90">{benefits[3].desc}</p>
                </div>
                <div className="hidden md:flex flex-col items-center gap-4">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center">
                    <Leaf className="w-10 h-10 text-green-400" />
                  </div>
                  <span className="text-white/50 text-[10px] uppercase tracking-widest font-bold">Nature First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SPIRULINA ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-green-950 rounded-[2.5rem] mx-4 overflow-hidden mb-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-green-400 font-bold text-xs uppercase tracking-widest mb-4 block">The Science</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Why Spirulina?</h2>
              <p className="text-green-100/80 text-lg mb-10 leading-relaxed">
                Gram-for-gram, it is the most nutrient-dense food on the planet. NASA uses it for astronaut nutrition because it provides complete cellular recovery.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "70% Complete Protein — more than meat",
                  "10× more antioxidants than green tea",
                  "12× more bio-available iron than spinach",
                  "Contains all 8 essential amino acids",
                  "Pure source of Gamma-Linolenic Acid (GLA)",
                  "Proven to lower LDL cholesterol by up to 10%",
                ].map((fact, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-white font-medium">{fact}</span>
                  </div>
                ))}
              </div>

              <Link to="/blog" className="inline-flex items-center gap-2 text-green-400 font-bold hover:text-white transition-colors">
                Read the full research <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <img src="https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg" alt="Spirulina powder" className="w-full h-[500px] object-cover rounded-[2rem] shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-green-900 font-bold text-lg leading-tight">
                  100% Organic<br />
                  <span className="text-gray-400 text-xs font-medium uppercase tracking-widest">Lab Certified</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NUTRITIONAL BENEFITS ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">Nutritional Profile</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>What's Inside Every Bottle</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A powerhouse of clinically-studied nutrients — verified by independent labs, not marketing departments.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nutritionFacts.map((n, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 group">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-4 ${n.color}`}>
                  {n.value} {n.nutrient}
                </div>
                <p className="text-gray-500 text-sm leading-[1.7]">{n.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INGREDIENT TRANSPARENCY ─────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">Ingredient Transparency</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>Every Ingredient. Traceable.</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We name every ingredient and its source. No hidden fillers. No proprietary blends that hide poor quality.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {ingredients.map((ing, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-green-300 hover:shadow-lg transition-all duration-500 flex items-start gap-4">
                <div className="text-3xl">{ing.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{ing.name}</h3>
                  <p className="text-green-600 text-sm font-medium mb-1">{ing.origin}</p>
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">{ing.cert}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm">Full ingredient list and sourcing documentation available on each product page.</p>
          </div>
        </div>
      </section>

      {/* ── NO NASTIES ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">Purity Promise</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ letterSpacing: '-0.02em' }}>No Nasties. Ever.</h2>
              <p className="text-gray-600 text-lg leading-[1.8] mb-10">
                We've built our products around what we <span className="text-green-700 font-semibold">don't</span> put in them. Because real wellness doesn't need shortcuts, fillers, or synthetic support.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {noNasties.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                      <span className="text-red-500 font-bold text-xs">✕</span>
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden h-[480px]">
              <img src="https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg" alt="Pure ingredients" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur rounded-2xl p-5">
                  <p className="text-green-700 font-bold text-sm mb-1">Third-Party Verified</p>
                  <p className="text-gray-600 text-xs">Every batch tested by an independent NABL-accredited laboratory before shipment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LAB TESTING & SAFETY ────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] block mb-4">Lab Testing & Safety</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>Science You Can Trust</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Every batch undergoes a rigorous 5-point quality protocol before it reaches your hands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { icon: FlaskConical, step: "01", title: "Raw Material Testing", desc: "Incoming ingredients screened for pesticides, heavy metals, and microbial contamination." },
              { icon: Zap, step: "02", title: "Cold-Press Processing", desc: "Low-heat extraction preserves heat-labile vitamins, enzymes, and phytonutrients." },
              { icon: Shield, step: "03", title: "In-Process QC", desc: "pH, Brix, viscosity, and colour are monitored at every stage of production." },
              { icon: Award, step: "04", title: "Finished Goods Testing", desc: "Independent NABL lab tests for potency, sterility, and nutritional accuracy." },
              { icon: CheckCircle, step: "05", title: "Certificate of Analysis", desc: "CoA available for every batch. Scan the QR code on your bottle to access it." },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 hover:border-green-500/50 rounded-3xl p-7 transition-all duration-500 group relative">
                <div className="text-green-400/20 font-bold text-6xl absolute top-4 right-5 leading-none select-none">{item.step}</div>
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">Certifications</span>
            <h2 className="text-3xl font-bold text-gray-900">Certified for Your Confidence</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className="text-center p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-500">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{cert.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{cert.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROMISE ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-green-900 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-12 h-12 text-green-300 mx-auto mb-8" />
          <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] block mb-6">Our Promise</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            We Promise You <span className="text-green-300">Absolute Purity</span>
          </h2>
          <p className="text-green-100/90 text-xl leading-[1.9] mb-10 max-w-3xl mx-auto">
            If you're not completely satisfied with the quality, potency, or taste of any Tatvamasi product, we will replace or fully refund your order — no questions asked. That's how confident we are.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left mt-12">
            {[
              { title: "Quality Guarantee", desc: "Same premium formulation in every single bottle, every single batch. No compromises." },
              { title: "Freshness Guarantee", desc: "Cold-chain delivery ensures your product arrives fresh with maximum potency intact." },
              { title: "Satisfaction Guarantee", desc: "Not happy? Get a full replacement or refund within 7 days. Zero hassle." },
            ].map((promise, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <CheckCircle className="w-6 h-6 text-green-400 mb-3" />
                <h3 className="font-bold text-white mb-2">{promise.title}</h3>
                <p className="text-green-100/70 text-sm leading-[1.7]">{promise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORAGE INSTRUCTIONS ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">Storage Guide</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">How to Store Your Shots</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Proper storage keeps your wellness shots at peak potency from day one to the last sip.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {storageInstructions.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-green-50 rounded-3xl border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-500">
                <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-[1.7]">{item.desc}</p>
              </div>
            ))}
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

      {/* ── CORPORATE BANNER ────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="w-12 h-12 text-green-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">Corporate Wellness Programs</h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Invest in your employees' health. Our bulk wellness programs reduce sick days and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/corporate" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-full text-lg transition-all">
              Enquire Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {["Bulk Pricing", "Custom Packages", "Monthly Subscriptions", "On-site Delivery", "Nutritionist Support"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">FAQ</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>Common Questions</h2>
            <p className="text-gray-500">Everything you need to know before you start your wellness journey.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-[1.8] text-sm">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER / CTA ────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Leaf className="w-10 h-10 text-green-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Start Your Wellness Journey</h2>
          <p className="text-gray-500 text-lg mb-10">
            Join thousands of health-conscious individuals who make Tatvamasi part of their daily ritual.
          </p>
          <Link to="/shop" className="inline-flex items-center gap-2 px-10 py-5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full text-lg transition-all hover:shadow-lg hover:shadow-green-200">
            Explore All Products <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
