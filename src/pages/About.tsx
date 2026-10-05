import missionImage from '../assets/about/mission.png';
import visionImage from '../assets/about/vision.png';
import { useEffect, useState } from 'react';
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
  const [missionSlide, setMissionSlide] = useState(0);
  const [activeValue, setActiveValue] = useState(0);
useEffect(() => {

    const interval = setInterval(() => {
      setMissionSlide((prev) => (prev + 1) % 2);
    }, 10000);

    return () => clearInterval(interval);

  }, []);
useEffect(() => {
  const interval = setInterval(() => {
    setMissionSlide((prev) => (prev + 1) % 2);
  }, 10000);

  return () => clearInterval(interval);
}, []);
  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative py-32 bg-gradient-to-br from-green-950 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/about-tattvamasi.mp4" type="video/mp4" />
  </video>

  {/* Dark overlay for readable text */}
  <div className="absolute inset-0 bg-green-950/70" />
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

      {/* ── MISSION & VISION ───────────────────────────────── */}
<section className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-12">
      <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">
        Purpose
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
        Mission & Vision
      </h2>
    </div>
              {/* MISSION & VISION SLIDER */}

<div className="relative overflow-hidden rounded-3xl shadow-xl">

  {/* IMAGE */}
  <img
    src={missionSlide === 0 ? missionImage : visionImage}
    alt={missionSlide === 0 ? "Our Mission" : "Our Vision"}
    className="w-full h-[450px] md:h-[520px] object-cover"
  />

  {/* TEXT OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent" />

  <div className="absolute inset-0 flex items-center">

    <div className="w-full md:w-1/2 px-8 md:px-14">

      {missionSlide === 0 ? (
        <>
          <p className="text-green-700 font-bold text-sm uppercase tracking-[0.25em] mb-5">
            Our Mission
          </p>

          <h3 className="text-4xl md:text-5xl font-bold text-green-950 leading-tight mb-6">
            Natural Nutrition
            <br />
            <span className="text-green-600">
              for Everyone
            </span>
          </h3>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            To empower individuals with premium organic superfoods
            that support natural immunity, sustainable energy, and
            everyday wellness — making preventive nutrition accessible
            to every household.
          </p>
        </>
      ) : (
        <>
          <p className="text-green-700 font-bold text-sm uppercase tracking-[0.25em] mb-5">
            Our Vision
          </p>

          <h3 className="text-4xl md:text-5xl font-bold text-green-950 leading-tight mb-6">
            A Healthier
            <br />
            <span className="text-green-600">
              Future for Everyone
            </span>
          </h3>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            To make natural nutrition simple, accessible, and a part
            of everyday life while building a trusted wellness brand
            focused on quality and transparency.
          </p>
        </>
      )}

    </div>
  </div>
</div>

{/* DOTS */}

<div className="flex justify-center items-center gap-3 mt-6">

  <button
    onClick={() => setMissionSlide(0)}
    aria-label="Mission"
    className={`rounded-full transition-all duration-300 ${
      missionSlide === 0
        ? "w-10 h-3 bg-green-600"
        : "w-3 h-3 bg-gray-300 hover:bg-green-400"
    }`}
  />

  <button
    onClick={() => setMissionSlide(1)}
    aria-label="Vision"
    className={`rounded-full transition-all duration-300 ${
      missionSlide === 1
        ? "w-10 h-3 bg-green-600"
        : "w-3 h-3 bg-gray-300 hover:bg-green-400"
    }`}
  />

</div>
    

  </div>
</section>
{/* ── WATCH AND BUY ───────────────────────────────────────────────────── */}
<section className="py-20 bg-[#fdfcf8] overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-[#49321f]">
        Watch and Buy
      </h2>

      <p className="text-gray-500 mt-3 text-sm md:text-base">
        Discover our products through real videos
      </p>
    </div>

    {/* Video Cards */}
    <div className="relative">

      <div className="flex gap-7 overflow-x-auto scrollbar-hide pb-6">

        {/* Video 1 */}
        <div className="min-w-[280px] sm:min-w-[310px] md:min-w-[330px]
                        bg-white rounded-xl shadow-md overflow-hidden
                        border border-gray-100">

          <div className="relative h-[500px] bg-gray-200">

            <video
              className="w-full h-full object-cover"
              controls
              muted
              playsInline
              loop
            >
              <source src="/watch-buy/video1.mp4" type="video/mp4" />
            </video>

          </div>

          <div className="p-4">
            <h3 className="font-semibold text-gray-900">
              Moringa Powder
            </h3>

            <p className="text-green-700 font-bold text-lg mt-1">
              ₹499
            </p>
          </div>

        </div>


        {/* Video 2 */}
        <div className="min-w-[280px] sm:min-w-[310px] md:min-w-[330px]
                        bg-white rounded-xl shadow-md overflow-hidden
                        border border-gray-100">

          <div className="relative h-[500px] bg-gray-200">

            <video
              className="w-full h-full object-cover"
              controls
              muted
              playsInline
              loop
            >
              <source src="/watch-buy/video2.mp4" type="video/mp4" />
            </video>

          </div>

          <div className="p-4">
            <h3 className="font-semibold text-gray-900">
              Amla Powder
            </h3>

            <p className="text-green-700 font-bold text-lg mt-1">
              ₹399
            </p>
          </div>

        </div>


        {/* Video 3 */}
        <div className="min-w-[280px] sm:min-w-[310px] md:min-w-[330px]
                        bg-white rounded-xl shadow-md overflow-hidden
                        border border-gray-100">

          <div className="relative h-[500px] bg-gray-200">

            <video
              className="w-full h-full object-cover"
              controls
              muted
              playsInline
              loop
            >
              <source src="/watch-buy/video3.mp4" type="video/mp4" />
            </video>

          </div>

          <div className="p-4">
            <h3 className="font-semibold text-gray-900">
              Beetroot Powder
            </h3>

            <p className="text-green-700 font-bold text-lg mt-1">
              ₹449
            </p>
          </div>

        </div>


        {/* Video 4 */}
        <div className="min-w-[280px] sm:min-w-[310px] md:min-w-[330px]
                        bg-white rounded-xl shadow-md overflow-hidden
                        border border-gray-100">

          <div className="relative h-[500px] bg-gray-200">

            <video
              className="w-full h-full object-cover"
              controls
              muted
              playsInline
              loop
            >
              <source src="/watch-buy/video4.mp4" type="video/mp4" />
            </video>

          </div>

          <div className="p-4">
            <h3 className="font-semibold text-gray-900">
              Turmeric Powder
            </h3>

            <p className="text-green-700 font-bold text-lg mt-1">
              ₹349
            </p>
          </div>

        </div>


        {/* Video 5 */}
        <div className="min-w-[280px] sm:min-w-[310px] md:min-w-[330px]
                        bg-white rounded-xl shadow-md overflow-hidden
                        border border-gray-100">

          <div className="relative h-[500px] bg-gray-200">

            <video
              className="w-full h-full object-cover"
              controls
              muted
              playsInline
              loop
            >
              <source src="/watch-buy/video5.mp4" type="video/mp4" />
            </video>

          </div>

          <div className="p-4">
            <h3 className="font-semibold text-gray-900">
              Spirulina Powder
            </h3>

            <p className="text-green-700 font-bold text-lg mt-1">
              ₹549
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
      {/* ── CORE VALUES ────────────────────────────────────────────────────── */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-16">
      <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">
        Core Values
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        What We Stand For
      </h2>

      <p className="text-gray-500 max-w-2xl mx-auto">
        Four principles that guide every decision — from sourcing to shipping.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {coreValues.map((v, i) => (
        <div
          key={i}
          className={`
            relative group rounded-3xl p-8 cursor-default
            border transition-all duration-700
            ${
              activeValue === i
                ? "bg-white border-green-400 shadow-2xl -translate-y-3"
                : "bg-gradient-to-br from-green-50/80 to-emerald-50/80 border-green-100/50"
            }
          `}
        >

          {/* Icon */}
          <div
            className={`
              w-12 h-12 rounded-xl flex items-center justify-center mb-6
              transition-all duration-700
              ${
                activeValue === i
                  ? "bg-green-600 scale-110 shadow-lg"
                  : "bg-green-100"
              }
            `}
          >
            <v.icon
              className={`
                w-6 h-6 transition-all duration-700
                ${
                  activeValue === i
                    ? "text-white"
                    : "text-green-600"
                }
              `}
            />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
            <span className="text-green-700">
              {v.title.split(" ")[0]}
            </span>

            {v.title.split(" ").length > 1 && (
              <span>
                {" "}
                {v.title.split(" ").slice(1).join(" ")}
              </span>
            )}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-[1.7]">
            {v.desc}
          </p>

          {/* Animated line */}
          <div className="absolute bottom-0 left-8 right-8 h-1 overflow-hidden rounded-full">
            <div
              className={`
                h-full bg-green-600 rounded-full
                ${
                  activeValue === i
                    ? "animate-core-line"
                    : "w-0"
                }
              `}
            />
          </div>

        </div>
      ))}

    </div>
  </div>
</section>

      

      {/* Core Values Animation */}
      <style>{`
        @keyframes coreValueLine {
          0% {
            width: 0%;
          }

          100% {
            width: 100%;
          }
        }

        .animate-core-line {
          animation: coreValueLine 3s linear forwards;
        }
      `}</style>
    </div>
  );
}
