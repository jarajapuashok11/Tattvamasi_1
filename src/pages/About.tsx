import { Link } from 'react-router-dom';
import { Leaf, Heart, Zap, Users, ArrowRight } from 'lucide-react';

const coreValues = [
  {
    icon: Leaf,
    title: 'Organic Integrity',
    desc: 'Every ingredient certified organic, zero synthetic pesticides, zero compromises. We source from trusted certified farms across India, ensuring purity from soil to bottle.',
  },
  {
    icon: Heart,
    title: 'Scientific Rigor',
    desc: 'Cold-processed for maximum nutrient retention, third-party lab-tested for potency and safety. Every batch undergoes rigorous quality checks before shipment.',
  },
  {
    icon: Zap,
    title: 'Impact-Driven',
    desc: 'Every product formulated for measurable health outcomes. We track customer wellness transformations and continuously optimize our formulations based on real results.',
  },
  {
    icon: Users,
    title: 'Community First',
    desc: 'Supporting organic farmers, empowering customers, and building a wellness movement. We invest directly in farmer communities and sustainable agriculture practices.',
  },
];

const whyChoose = [
  {
    title: 'Premium Sourcing',
    desc: 'We partner exclusively with certified organic farms, ensuring every ingredient meets exacting quality standards before reaching your bottle.',
  },
  {
    title: 'Cold Preservation',
    desc: 'Our cold-processing methods preserve heat-sensitive nutrients and enzymes that conventional processing destroys, maximizing bioavailability.',
  },
  {
    title: 'Transparent Practices',
    desc: 'Complete traceability from farm to bottle. Every ingredient source, lab result, and process step is shared openly with our customers.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">

      {/* ── OUR STORY ─────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">
              Our Journey
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900" style={{ letterSpacing: '-0.02em' }}>
              Our Story
            </h1>
          </div>

          <div className="space-y-7">
            <p className="text-gray-700 text-lg leading-[1.9] text-center">
              Tatvamasi was born from a simple but powerful question:
              <span className="text-green-700 font-semibold">
                {' '}"Why are the healthiest foods also the hardest to find?"
              </span>
            </p>

            <p className="text-gray-600 text-base leading-[1.9] text-center">
              Our founders — health practitioners and organic farming advocates — spent years frustrated by a wellness industry full of
              <span className="text-amber-600 font-semibold"> artificial claims</span>,
              <span className="text-amber-600 font-semibold"> compromised ingredients</span>, and
              <span className="text-amber-600 font-semibold"> inaccessible pricing</span>.
              They envisioned something radically different: a brand where
              <span className="text-green-700 font-semibold"> organic superfoods </span>
              came with
              <span className="text-green-700 font-semibold"> full traceability</span>,
              were
              <span className="text-green-700 font-semibold"> cold-preserved</span>
              to retain every phytonutrient, and were
              <span className="text-green-700 font-semibold"> priced for everyday use</span>.
            </p>

            <p className="text-gray-600 text-base leading-[1.9] text-center">
              In 2022, that vision became reality. From a small facility in Mumbai, we began sourcing the finest organic ingredients from across India and processing them with cutting-edge cold-press technology. Our first customers weren't just satisfied — they experienced genuine health transformations that exceeded expectations.
            </p>

            <p className="text-gray-600 text-base leading-[1.9] text-center">
              Today, Tatvamasi delivers
              <span className="text-green-700 font-semibold"> over 5,000 wellness products</span>
              monthly to health-conscious individuals, corporate wellness programs, and wellness practitioners across India. Each one crafted with the same uncompromising care that defined day one. We've stayed true to our founding principles:
              <span className="text-green-700 font-semibold"> quality over scale</span>,
              <span className="text-green-700 font-semibold"> transparency over marketing</span>, and
              <span className="text-green-700 font-semibold"> impact over profit margins</span>.
            </p>

            <div className="flex flex-wrap gap-8 justify-center pt-8 mt-8 border-t border-gray-200">
              {[
                { value: '5,000+', label: 'Monthly Orders' },
                { value: '100%', label: 'Organic Certified' },
                { value: '50+', label: 'Corporate Partners' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-green-700">{stat.value}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-[1.8] text-base">
                To empower individuals with
                <span className="text-green-700 font-semibold"> premium organic superfoods</span>
                that support natural immunity, detoxification, and sustainable energy — making
                <span className="text-green-700 font-semibold"> preventive wellness genuinely accessible</span>
                to every household in India and beyond.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-[1.8] text-base">
                To become the world's most
                <span className="text-green-700 font-semibold"> trusted organic wellness brand</span>
                — one where quality is
                <span className="text-green-700 font-semibold"> non-negotiable</span>, transparency is
                <span className="text-green-700 font-semibold"> the standard</span>, and genuine health
                <span className="text-green-700 font-semibold"> transformation is the norm</span>.
              </p>
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
            <p className="text-gray-500 max-w-2xl mx-auto">
              Four principles that guide every decision — from sourcing to shipping.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-green-50/80 to-emerald-50/80 rounded-3xl p-8 border border-green-100/50 hover:border-green-300 hover:shadow-xl transition-all duration-500 cursor-default"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <v.icon className="w-6 h-6 text-green-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
                  <span className="text-green-700">{v.title.split(' ')[0]}</span>
                  {v.title.split(' ').length > 1 && (
                    <span> {v.title.split(' ').slice(1).join(' ')}</span>
                  )}
                </h3>

                <p className="text-gray-600 text-sm leading-[1.7]">
                  {v.desc}
                </p>
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
              Three pillars that set our approach apart from every other wellness brand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left side — 3 cards stacked */}
            <div className="flex flex-col gap-6">
              {whyChoose.map((item, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-green-300 hover:shadow-lg transition-all duration-500"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg text-green-700 font-bold text-sm mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    0{i + 1}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors" style={{ letterSpacing: '-0.01em' }}>
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-[1.7] mb-5">
                    {item.desc}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm hover:text-green-700 group/link"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>

            {/* Right side — image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg"
                alt="Why Choose Tatvamasi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h4 className="text-2xl font-bold mb-2">Wellness Excellence</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Trusted by thousands of health-conscious individuals and leading corporates across India.
                </p>
              </div>
            </div>
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
