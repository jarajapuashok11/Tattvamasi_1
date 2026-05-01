import { Link } from 'react-router-dom';
import { Leaf, Heart, Zap, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';

const coreValues = [
  {
    icon: Leaf,
    title: '100% Organic',
    desc: 'Certified organic ingredients, zero synthetic pesticides, zero compromises on purity.',
    image: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg',
  },
  {
    icon: Award,
    title: 'Purity First',
    desc: 'Cold-processed, lab-tested, no additives, no fillers — just pure nutrition in every batch.',
    image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg',
  },
  {
    icon: Zap,
    title: 'Results Driven',
    desc: 'Every product formulated for measurable impact on your health, immunity, and daily energy.',
    image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg',
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'Supporting farmers, empowering customers, and building a nationwide wellness movement.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
  },
];

const whyUs = [
  {
    title: 'Premium Sourcing',
    desc: 'We partner with certified organic farms across India, ensuring every ingredient meets our exacting quality standards before it reaches your bottle.',
    image: 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg',
  },
  {
    title: 'Scientific Formulation',
    desc: 'Backed by nutritional science and validated by independent third-party labs for potency, purity, and bioavailability.',
    image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg',
  },
  {
    title: 'Cold Preservation',
    desc: 'Our cold-processing methods preserve heat-sensitive nutrients, enzymes, and phytonutrients that conventional processing destroys.',
    image: 'https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg',
  },
  {
    title: 'Transparent Practices',
    desc: 'Complete traceability from farm to bottle. We share every ingredient source, lab result, and process step openly.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
  },
  {
    title: 'Customer First',
    desc: 'Dedicated wellness support with personalized guidance on nutrition, usage protocols, and health transformation goals.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  },
  {
    title: 'Sustainable Impact',
    desc: 'We invest in farmer communities, promote regenerative agriculture, and use fully eco-conscious packaging in every order.',
    image: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">

      {/* ── OUR STORY ─────────────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">

            {/* Left — logo + brand identity */}
            <div className="relative bg-green-900 flex flex-col justify-between p-12 lg:p-16 min-h-[520px]">
              <div className="absolute inset-0 opacity-10">
                <img
                  src="https://images.pexels.com/photos/3551711/pexels-photo-3551711.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Logo top-left */}
              <div className="relative z-10 flex items-center gap-4">
                <img
                  src="/icon_cropped.png"
                  alt="Tatvamasi logo"
                  className="w-20 h-20 rounded-full border-2 border-green-400/40 shadow-lg"
                />
                <div>
                  <p className="text-white font-extrabold text-2xl leading-none tracking-tight">
                    TatTvamAsi
                  </p>
                  <p className="text-green-400 text-xs uppercase tracking-[0.3em] font-semibold mt-0.5">
                    Organics
                  </p>
                </div>
              </div>

              {/* Tagline bottom */}
              <div className="relative z-10 mt-auto">
                <span className="text-green-400 text-xs font-bold uppercase tracking-[0.3em] block mb-4">
                  Our Story
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  Nature's Wisdom,<br />
                  <span className="text-green-400">Modern Science.</span>
                </h2>
                <p className="text-green-100/70 text-sm leading-relaxed max-w-xs">
                  Where ancient Ayurvedic heritage meets 21st-century nutritional science.
                </p>
              </div>

              {/* Decorative circle */}
              <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-green-700/20 translate-x-1/3 translate-y-1/3 pointer-events-none" />
            </div>

            {/* Right — story content */}
            <div className="bg-white flex flex-col justify-center px-12 lg:px-16 py-16">
              <span className="text-green-600 text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
                Est. 2022 · Mumbai, India
              </span>
              <p
                className="text-gray-800 leading-[1.9] mb-6"
                style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1.125rem', fontWeight: 400 }}
              >
                Tatvamasi was born from a simple, powerful question: <em className="text-green-700 not-italic font-semibold">"Why are the healthiest foods also the hardest to find?"</em>
              </p>
              <p className="text-gray-600 leading-[1.9] mb-6 text-base">
                Our founders — health practitioners and organic farming advocates — spent years frustrated by a wellness industry full of artificial claims and compromised ingredients. They set out to create something radically different: organic superfoods with full traceability, cold-preserved to retain every phytonutrient, and priced for everyday use.
              </p>
              <p className="text-gray-600 leading-[1.9] mb-10 text-base">
                Today, Tatvamasi delivers over 5,000 wellness shots and superfood powders every month to health-conscious individuals and corporate wellness programs across India — each one crafted with the same uncompromising care that defined day one.
              </p>

              <div className="flex flex-wrap gap-6">
                {[
                  { value: '5,000+', label: 'Monthly Orders' },
                  { value: '100%', label: 'Organic Certified' },
                  { value: '50+', label: 'Corporate Clients' },
                ].map(stat => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-green-700">{stat.value}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ───────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">
              Purpose
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Mission */}
            <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-gray-100 bg-white flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg"
                  alt="Our Mission"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-6">
                  <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    <Heart className="w-3.5 h-3.5" /> Mission
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: '"DM Sans", serif', letterSpacing: '-0.02em' }}
                >
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-[1.8] text-base flex-1">
                  To empower individuals with premium organic superfoods that support natural immunity, detoxification, and sustainable energy — making preventive wellness genuinely accessible to every household in India and beyond.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-gray-100 bg-white flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                  alt="Our Vision"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-6">
                  <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    <Leaf className="w-3.5 h-3.5" /> Vision
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: '"DM Sans", serif', letterSpacing: '-0.02em' }}
                >
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-[1.8] text-base flex-1">
                  To become the world's most trusted organic wellness brand — one where quality is non-negotiable, transparency is the industry standard, and genuine health transformation is not a luxury but a daily norm.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CORE VALUES ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">
              Core Values
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What We Stand For</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Four principles that guide every decision — from sourcing to shipping.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden h-80 cursor-default shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* Background image */}
                <img
                  src={v.image}
                  alt={v.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Default overlay — dark gradient from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 group-hover:via-black/50 transition-all duration-500" />

                {/* Icon top-right */}
                <div className="absolute top-5 right-5 w-10 h-10 bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-white" />
                </div>

                {/* Text bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:mb-3 transition-all duration-300">
                    {v.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE TATVAMASI ───────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">
              The Tatvamasi Difference
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose Tatvamasi</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Six pillars that set our approach apart from every other wellness brand on the market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-500 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* Number badge */}
                  <div className="absolute top-4 left-4 w-9 h-9 bg-green-600 text-white rounded-xl flex items-center justify-center text-xs font-black shadow-lg">
                    0{i + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <h3
                      className="text-lg font-bold text-gray-900 leading-snug"
                      style={{ letterSpacing: '-0.01em' }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-[1.8] flex-1 pl-8">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-8">
            <Leaf className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Experience the Difference</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Join thousands who have transformed their health and energy with Tatvamasi's premium organic superfoods.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-10 py-5 bg-green-600 text-white font-bold rounded-full text-lg hover:bg-green-700 transition-colors hover:shadow-lg hover:shadow-green-200"
          >
            Shop Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
