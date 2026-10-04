import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moringaCollection from "../assets/collection/moringa.jpg";
import amlaCollection from "../assets/collection/amla.jpg";
import spirulinaCollection from "../assets/collection/spirulina.jpg";
import beetrootCollection from "../assets/collection/beetroot.jpg";
import turmericCollection from "../assets/collection/turmeric.jpg";
import ashwagandhaCollection from "../assets/collection/ashwagandha.jpg";
import orangeShotCollection from "../assets/collection/orange-shot.jpg";
import strawberryShotCollection from "../assets/collection/strawberry-shot.jpg";
import moringaImage from "../assets/hero/01-moringa.jpg";
import amlaImage from "../assets/hero/02-amla.jpg";
import beetrootImage from "../assets/hero/03-beetroot.jpg";
import greenDrinkImage from "../assets/hero/04-green-drink.jpg";
import strawberryShot from "../assets/collection/straw_1.jpg";
import orangeShot from "../assets/collection/orange_1.jpg";
import guavaShotCollection from "../assets/collection/guava.png";
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
  {
    name: "Moringa Powder",
    image: moringaCollection,
    tagline: "Nature’s Green Power.",
    description:
      "A nutrient-rich green superfood for your everyday routine.",
    badge: "Plant Power",
    sizes: [
  { label: "100g", price: 120 },
  { label: "250g", price: 250 },
  { label: "500g", price: 450 },
  { label: "1kg", price: 800 },
],
  },

  {
    name: "Amla Powder",
    image: amlaCollection,
    tagline: "The Indian Vitamin C Classic.",
    description:
      "Naturally rich in vitamin C and antioxidants, treasured for generations.",
    badge: "Traditional",
    sizes: [
  { label: "100g", price: 120 },
  { label: "250g", price: 250 },
  { label: "500g", price: 450 },
  { label: "1kg", price: 800 },
],
  },

  {
    name: "Spirulina Powder",
    image: spirulinaCollection,
    tagline: "Deep Green. Naturally Powerful.",
    description:
      "A nutrient-rich superfood packed with protein, minerals and nutrients.",
    badge: "Superfood",
    sizes: [
  { label: "100g", price: 120 },
  { label: "250g", price: 250 },
  { label: "500g", price: 450 },
  { label: "1kg", price: 800 },
],
  },

  {
    name: "Beetroot Powder",
    image: beetrootCollection,
    tagline: "A Bold Root, Beautifully Pure.",
    description:
      "Vibrant beetroot powder with naturally occurring plant nutrients.",
    badge: "Natural",
    sizes: [
  { label: "100g", price: 120 },
  { label: "250g", price: 250 },
  { label: "500g", price: 450 },
  { label: "1kg", price: 800 },
],
  },

  {
    name: "Turmeric Powder",
    image: turmericCollection,
    tagline: "Golden Wellness, Naturally.",
    description:
      "A warm, earthy root traditionally valued for its natural plant compounds.",
    badge: "Coming Soon",
    sizes: [
  { label: "100g", price: 120 },
  { label: "250g", price: 250 },
  { label: "500g", price: 450 },
  { label: "1kg", price: 800 },
],
  },

  {
    name: "Ashwagandha Powder",
    image: ashwagandhaCollection,
    tagline: "Rooted in Calm.",
    description:
      "A traditional botanical valued for everyday balance and wellness.",
    badge: "Coming Soon",
    sizes: [
  { label: "100g", price: 120 },
  { label: "250g", price: 250 },
  { label: "500g", price: 450 },
  { label: "1kg", price: 800 },
],
  },

  {
    name: "Orange Shot",
    image: orangeShotCollection,
    tagline: "Brighten Your Daily Ritual.",
    description:
      "A refreshing citrus shot with a naturally vibrant, zesty character.",
    badge: "Fresh",
    sizes: [
  { label: "100g", price: 120 },
  { label: "250g", price: 250 },
  { label: "500g", price: 450 },
  { label: "1kg", price: 800 },
],
  },

  {
    name: "Strawberry Shot",
    image: strawberryShotCollection,
    tagline: "Berry Fresh. Naturally Bright.",
    description:
      "A refreshing strawberry blend made for a delicious daily moment.",
    badge: "Popular",
    sizes: [
  { label: "100g", price: 120 },
  { label: "250g", price: 250 },
  { label: "500g", price: 450 },
  { label: "1kg", price: 800 },
],
  },
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
              <span className="text-[#22C55E]">In Every Sip.</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-10 max-w-xl">
              60ml spirulina wellness shots and premium organic superfood powders — cold-pressed, lab-certified, and made for your daily ritual.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link
  to="/shop"
  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold rounded-full text-lg transition-all hover:shadow-lg hover:shadow-green-500/30"
>
  Shop Now
  <ArrowRight className="w-5 h-5" />
</Link>
              <Link to="/about" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full text-lg hover:bg-white/20 transition-all">
                Our Story
              </Link>
            </div>

            <div className="flex items-center gap-6">
  <span className="text-gray-300 text-sm">
    Available flavours:
  </span>

  {heroSlides.map((slide, i) => (
    <button
      key={i}
      onClick={() => setActiveSlide(i)}
      className={`relative text-sm font-medium transition-colors duration-300 ${
        i === activeSlide
          ? "text-white"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {slide.label}

      {/* Animated underline */}
      <span
        className={`absolute -bottom-2 left-0 h-0.5 bg-[#22C55E] transition-all duration-500 ease-out ${
          i === activeSlide ? "w-full" : "w-0"
        }`}
      />
    </button>
  ))}
</div>
          </div>
        </div>

        
      </section>

      {/* ── STATS BANNER ────────────────────────────────────────────────────── */}
<section className="bg-[#15803D] py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

      {stats.map((stat) => (
        <div
          key={stat.label}
          className="text-center"
        >
          {/* Number */}
          <div className="text-3xl md:text-4xl font-bold text-white">
            {stat.value}
          </div>

          {/* Label */}
          <div className="text-[#DCFCE7] text-sm md:text-base mt-2 font-medium">
            {stat.label}
          </div>

          {/* Decorative line */}
          <div className="w-8 h-0.5 bg-[#BBF7D0] mx-auto mt-3 rounded-full" />
        </div>
      ))}

    </div>
  </div>
</section>
{/* ── COLLECTION ─────────────────────────────────────────────────────── */}
<section className="py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-16">
      <span className="text-green-600 font-bold text-sm uppercase tracking-[0.3em] block mb-4">
        The Collection
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Pure wellness,{" "}
        <span className="text-gray-400">naturally.</span>
      </h2>

      <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full" />
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-4 gap-x-4 gap-y-10 [@media(min-width:1024px)_and_(max-width:1365px)]:grid-cols-8 [@media(min-width:1366px)]:grid-cols-4">

      {products.map((product, index) => (
        <div
          key={index}
          className="group flex flex-col items-center relative"
        >

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-2 right-6 z-30">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
                {product.badge}
              </span>
            </div>
          )}

          {/* Circular Product Image */}
          <div className="relative aspect-square w-full max-w-[280px] rounded-full overflow-hidden bg-gray-100 shadow-lg group-hover:shadow-2xl transition-shadow duration-500">

            {/* Background Image */}
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Transparent Hover Overlay */}
            <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/60 transition-all duration-500" />

            {/* Hover Content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">

              {/* Product Name */}
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2 drop-shadow-lg">
                {product.name}
              </h3>

              {/* Tagline */}
              <p className="text-white text-sm font-semibold leading-relaxed mb-2 drop-shadow-md">
                {product.tagline}
              </p>

              {/* Description */}
              <p className="text-white/90 text-xs leading-relaxed max-w-[210px] mb-5 drop-shadow-md">
                {product.description}
              </p>

              {/* Button */}
              <Link
               to={`/product/${product.slug}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                View Product
                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>
          </div>

          {/* Product Information Below Circle */}
          <div className="mt-6 text-center transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">

  {/* Product Name */}
 <div className="mt-3 flex items-center justify-center gap-3">

  {/* Quantity Dropdown */}
  <select
    value={selectedSizes[index] ?? 0}
    onChange={(e) =>
      setSelectedSizes((prev) => ({
        ...prev,
        [index]: Number(e.target.value),
      }))
    }
    onClick={(e) => e.stopPropagation()}
    className="border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
  >
    {product.sizes.map((size, sizeIndex) => (
      <option key={sizeIndex} value={sizeIndex}>
        {size.label}
      </option>
    ))}
  </select>

  {/* Dynamic Price */}
  <span className="text-xl font-bold text-gray-900">
    ₹{product.sizes[selectedSizes[index] ?? 0].price}
  </span>

</div>

  {/* Price + Quantity */}
  <div className="mt-2 flex items-center justify-center gap-3">

    <span className="text-xl font-bold text-gray-900">
      {product.price}
    </span>

    <span className="text-sm font-medium text-gray-500">
      {product.quantity}
    </span>

  </div>

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
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
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

    {/* Three Shot Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

      {[
        {
          name: "Orange Shot",
          slug: "spirulina-orange-shot",
          desc: "Citrus freshness meets spirulina superfood for a bright and refreshing daily wellness boost.",
          image: orangeShot,
          color: "from-orange-500 to-amber-400",
          badge: "Most Popular",
        },
        {
          name: "Strawberry Shot",
          slug: "spirulina-strawberry-shot",
          desc: "Sweet and refreshing strawberry flavour blended with nutrient-rich spirulina for your daily ritual.",
          image: strawberryShot,
          color: "from-red-500 to-rose-400",
          badge: "Fan Favourite",
        },
        {
          name: "Guava Shot",
          slug: "spirulina-guava-shot",
          desc: "Tropical guava freshness combined with spirulina for a delicious and vibrant wellness shot.",
          image: guavaShotCollection,
          color: "from-green-500 to-emerald-400",
          badge: "New",
        },
      ].map((flavour) => (
        <Link
          key={flavour.name}
          to={`/product/${flavour.slug}`}
          className="group relative mx-auto w-full max-w-[360px]"
        >

          {/* CIRCULAR IMAGE */}
          <div className="relative aspect-square w-full rounded-full overflow-hidden bg-gray-100 shadow-lg group-hover:shadow-2xl transition-shadow duration-500">

            {/* Background Image */}
            <img
              src={flavour.image}
              alt={flavour.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Dark transparent hover overlay */}
            <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/55 transition-all duration-500" />

            {/* Badge */}
            <div className="absolute top-5 right-5 z-20">
              <span
                className={`inline-block px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r ${flavour.color} shadow-lg`}
              >
                {flavour.badge}
              </span>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
                {flavour.name}
              </h3>

              <p className="text-white text-sm md:text-base leading-relaxed max-w-[270px] mb-6 drop-shadow-md">
                {flavour.desc}
              </p>

              <span className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white text-gray-900 rounded-full text-xs font-bold uppercase tracking-wider shadow-xl group-hover:scale-105 transition-transform duration-300">
                View Product
                <ChevronRight className="w-4 h-4" />
              </span>

            </div>
          </div>

          {/* Product Name Under Circle */}
          <div className="mt-7 text-center transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">

            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              {flavour.name}
            </h3>

            <p className="mt-2 text-sm font-medium text-green-700">
              {flavour.name === "Orange Shot" &&
                "Citrus freshness. Naturally bright."}

              {flavour.name === "Strawberry Shot" &&
                "Berry freshness. Naturally vibrant."}

              {flavour.name === "Guava Shot" &&
                "Tropical freshness. Naturally delicious."}
            </p>

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
