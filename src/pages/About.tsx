import { Leaf, Heart, Zap, Users, CheckCircle, FlaskConical, Truck, Sprout } from 'lucide-react';

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

const manufacturingSteps = [
  {
    icon: Sprout,
    step: '01',
    title: 'Ethical Farm Sourcing',
    desc: 'We directly partner with APEDA-certified organic farms. Every partner farm undergoes an annual audit for soil health, water usage, and zero-pesticide compliance before onboarding.',
  },
  {
    icon: FlaskConical,
    step: '02',
    title: 'Cold-Press Extraction',
    desc: 'Our proprietary low-temperature extraction (under 40°C) preserves heat-labile vitamins, living enzymes, and phytonutrients that conventional processing destroys in minutes.',
  },
  {
    icon: CheckCircle,
    step: '03',
    title: 'Independent Lab Testing',
    desc: 'Every batch is sent to an NABL-accredited third-party laboratory for full-spectrum nutritional assay, heavy metals screening, and microbial testing before bottling.',
  },
  {
    icon: Truck,
    step: '04',
    title: 'Cold-Chain Delivery',
    desc: 'Products are sealed under nitrogen, packed with pharmaceutical-grade ice packs, and dispatched within 24 hours in insulated boxes to maintain potency on arrival.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative py-32 bg-gradient-to-br from-green-950 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] block mb-6">About Tatvamasi</span>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6" style={{ letterSpacing: '-0.03em' }}>
            The Brand<br />Behind the Bottle
          </h1>
          <p className="text-green-100/80 text-xl leading-relaxed max-w-2xl mx-auto">
            Founded on one belief — that the purest food on earth should be the most accessible. Meet the people, principles, and processes that make Tatvamasi different.
          </p>
        </div>
      </section>

      {/* ── OUR STORY ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">Our Journey</span>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900" style={{ letterSpacing: '-0.02em' }}>Our Story</h2>
          </div>

          <div className="space-y-7">
            <p className="text-gray-700 text-lg leading-[1.9] text-center">
              Tatvamasi was born from a simple but powerful question:
              <span className="text-green-700 font-semibold"> "Why are the healthiest foods also the hardest to find?"</span>
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
              In 2022, that vision became reality. From a small facility in Mumbai, we began sourcing the finest organic ingredients from across India and processing them with cutting-edge cold-press technology. Our first customers weren't just satisfied — they experienced genuine health transformations that exceeded every expectation.
            </p>

            <p className="text-gray-600 text-base leading-[1.9] text-center">
              Today, Tatvamasi delivers
              <span className="text-green-700 font-semibold"> over 5,000 wellness products</span>
              monthly to health-conscious individuals, corporate wellness programs, and practitioners across India — each one crafted with the same uncompromising care that defined day one.
              <span className="text-green-700 font-semibold"> Quality over scale</span>.
              <span className="text-green-700 font-semibold"> Transparency over marketing</span>.
              <span className="text-green-700 font-semibold"> Impact over margins</span>.
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

      {/* ── MISSION & VISION ───────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">Purpose</span>
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

      {/* ── MANUFACTURING PHILOSOPHY ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — sticky content */}
            <div className="lg:sticky lg:top-28">
              <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">Manufacturing Philosophy</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
                Made with Obsessive Care
              </h2>
              <p className="text-gray-600 text-lg leading-[1.8] mb-8">
                We don't just manufacture products — we engineer health outcomes. Every step of our process is designed to deliver the maximum possible wellness benefit to you.
              </p>
              <div className="relative rounded-3xl overflow-hidden h-72">
                <img src="https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg" alt="Manufacturing" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-white font-semibold text-sm">GMP-certified production facility · Mumbai, India</span>
                </div>
              </div>
            </div>

            {/* Right — steps */}
            <div className="space-y-8">
              {manufacturingSteps.map((item, i) => (
                <div key={i} className="group flex gap-6 bg-gray-50 hover:bg-green-50 rounded-3xl p-7 border border-gray-100 hover:border-green-200 transition-all duration-500">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-green-100 group-hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors duration-500">
                      <item.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                  <div>
                    <span className="text-green-600 text-xs font-bold uppercase tracking-widest block mb-1">Step {item.step}</span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-[1.7]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">Core Values</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What We Stand For</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Four principles that guide every decision — from sourcing to shipping.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => (
              <div key={i} className="group bg-gradient-to-br from-green-50/80 to-emerald-50/80 rounded-3xl p-8 border border-green-100/50 hover:border-green-300 hover:shadow-xl transition-all duration-500 cursor-default">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <v.icon className="w-6 h-6 text-green-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
                  <span className="text-green-700">{v.title.split(' ')[0]}</span>
                  {v.title.split(' ').length > 1 && <span> {v.title.split(' ').slice(1).join(' ')}</span>}
                </h3>

                <p className="text-gray-600 text-sm leading-[1.7]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
